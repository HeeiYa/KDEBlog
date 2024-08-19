---
date: 2024-08-17
category:
  - OSPP
tag:
  - OSPP
  - KDE
excerpt: <p>项目末期情况</p>
---

# 2024OSPP KDE项目末期总结

距离中期总结后又过了三周多，项目进度也进入了尾声。

目前原版Blinken的所有功能在QML版本中已经完全实现，剩下的工作只有调整UI以及进行测试并修复可能存在的bug了。

在这几周中，我的工作内容如下：

## Blinken逻辑的对接

Blinken的游戏逻辑使用了原本Blinken库里的BlinkenGame类，原本的Blinken代码设计的还不错，所有的游戏逻辑基本都在这一个类里面，逻辑部分和UI绘制部分分离的很好，所以我只需要利用好这个类，在QML中对这个类的信号进行对接就好。

而Blinken的音频播放部分使用了phonon的库，这是同样是一个开源库，但是它并不支持安卓版本，所以我使用了QtMultimedia库代替，这个库可以提供跨平台的音频播放功能。


## KF6应用的安卓构建

Blinken 的一些功能用到了KF6框架提供的库，如KF6I18n，KF6Config等，在交叉编译到安卓平台时需要使用aarch64linux版本的库，如果电脑上没有这些库，那么在编译的时候就会报以下错误：
```shell
ld.lld: error: /usr/lib64/libKF6XmlGui.so.6.4.0 is incompatible with aarch64linux
ld.lld: error: /usr/lib64/libKF6ConfigWidgets.so.6.4.0 is incompatible with aarch64linux
……
```

但是我的Fedora发行版上的包管理工具并没有提供这些版本的安装服务。逐个从源码编译手动安装又太过麻烦。在社区的建议下，我使用**Craft**来进行交叉编译。

参考Craft的教程：[Craft - KDE Community Wiki](https://community.kde.org/Craft)

需要注意的是：在安装时如果遇到安装失败，再次安装的时候首先要清空craft-kde-android下的所有内容，否则在再次运行脚本的时候可能会安装失败。

在安装的时候选择Arm64的目标架构，如果在安装时有之前安装失败的文件残余的话，可能会导致安装时无法选择ARM64架构.

如果遇到类似"Permission denied"的问题，需要关闭SELinux。
```bash
sudo apt-get install selinux-utils
sudo setenforce 0
```

同时注意，在社区官方提供的`invent-registry.kde.org/sysadmin/ci-images/android-qt67`虚拟机中，Java版本过低，无法使用我们原本使用的Gradle8.6，要么选择手动升级java虚拟机中的Java版本，要么使用较低版本的Gradle。

使用Craft构建应用需要为之编写名为Blueprint的脚本，脚本主要描述了应用所依赖的库，编写起来比较简单，参考社区文档即可快速上手：[Craft/Blueprints - KDE Community Wiki](https://community.kde.org/Craft/Blueprints)

## KF6框架库的使用

原本Blinken使用的一些库有些可以在安卓平台上使用，有些不可以。
参考：[API Documentation](https://api.kde.org/frameworks/index.html) 即可获知哪些库可以在安卓上使用，哪些库不支持安卓。在Blinken中，这些库是支持安卓的
- CoreAddons 
- GuiAddons 
- I18n 
- XmlGui 

我需要同时在QML版本的Blinken中使用他们。

KF6的框架提供了比较方便的i18n功能，在QML中的使用方法与在QWight中的方法基本相同，这样我可以直接复用原本Blinken中的多语言支持，节省了不少时间。

KConfig为Blinken提供了存储高分榜信息，以及存储设置信息的功能。高分榜部分需要将原来的HighScoreDialog文件中的HighScoreManager类拆分出来，并稍作修改，再绘制一个高分榜界面对接HighScoreManager的信号与槽即可。而Setting功能需要在QML中注册一个KConfig的单例就可以在QML中使用了。
```C++
qmlRegisterSingletonInstance<blinkenSettings>("org.kde.blinken", 1, 0, "BlinkenSettings", blinkenSettings::self());
```

KF6XmlGui为原本的Blinken绘制了AboutBlinken界面、AboutKDE界面以及HandBook界面，这个库虽然支持安卓平台，但是它是基于QWidget的，而我们的Blinken主体是使用QML，单独为这些页面再引入QWidget感觉并不是一个好主意。所幸对于安卓平台，`kirigami-addons`提供了这一功能，引入它，同时也引入了`kirigami` ，这也有帮助我之后对UI进行优化。

在引入新的依赖库之后，注意还需要修改.kde-ci.yml文件以支持CI/CD
[Infrastructure/Continuous Integration System - KDE Community Wiki](https://community.kde.org/Infrastructure/Continuous_Integration_System)

---

在构建的时候，有一个报错困扰了我很久：

```bash
Cannot find application binary in build dir /home/user/CraftRoot/build/kde/applications/blinken/work/build/src/android-build//libs/arm64-v8a/libappBlinkenQML_[arm64-v8a.so](http://arm64-v8a.so/). ninja: build stopped: subcommand failed.
```
后来我在社区中提问后，有人指出了问题的所在。

在我原本的CMakeList文件中，我使用了`qml_add_executable`来建立程序对象，但是这个方法可能修改了生成的.so文件的名字，导致其跟ECM提供的工具链中的方法冲突，造成后面无法生成apk。

解决方案是将`qml_add_executable`改为`add_executable`就好。

这篇博客提到了如何将KF6的应用迁移到Android上：[Porting KDE Android apps to Qt6/KF6](https://www.volkerkrause.eu/2023/11/11/kf6-porting-android-apps.html) 其中也隐约提到了这一点。ECM提供的工具链是会和Qt6提供的工具链冲突的。同时这篇文章也提供了几个使用KF6代码的示例，阅读这些示例的代码为我提供了很大的帮助。


## 接下来的计划

目前项目已经接近结束，只需在安卓平台上对Blinken的UI进行调整，在测试和修复bug后就可以尝试与原有的代码进行合并了。