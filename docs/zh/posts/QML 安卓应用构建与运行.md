---
date: 2024-07-23
tag:
  - Android
  - QML
excerpt: <p>有关如何在安卓上运行QML应用</p>
---

# QML 安卓应用构建与运行

## 构建QML安卓应用

QtCreator会使用Gradle来进行项目构建，当你准备好了项目代码，在Qtcreator中选择好用于构建的安卓套件，点击构建，QtCreator会为你产生一些Gradle的配置文件，同时你可能会遇到的这样的报错

>Execution failed for task ':processDebugResources'.
> A failure occurred while executing com.android.build.gradle.internal.res.LinkApplicationAndroidResourcesTask$TaskAction
   > Android resource linking failed
     aapt2 E 07-23 15:59:44 51907 51907 LoadedArsc.cpp:94] RES_TABLE_TYPE_TYPE entry offsets overlap actual entry data.
     aapt2 E 07-23 15:59:44 51907 51907 ApkAssets.cpp:149] Failed to load resources table in APK '/home/zhy/Android/Sdk/platforms/android-35/android.jar'.

 这是因为目前使用的Gradle插件版本不支持android-35
 见[How to fix "Execution failed for task ':app:processDebugResources'. > Android resource linking failed"[Android/Flutter] - Stack Overflow](https://stackoverflow.com/questions/54152209/how-to-fix-execution-failed-for-task-appprocessdebugresources-android-re)

这时需要修改Gradle配置文件
进入项目的/build/Qt_6_7_2_Clang_arm64_v8a-Debug/android-build文件夹下

打开build.gradle文件
```
dependencies {
        classpath 'com.android.tools.build:gradle:7.4.1'
    }

```

com.android.tools.build:gradle:7.4.1是安卓Gradle插件（Android Gradle Plugin，AGP)
可以看到，默认的插件版本是7.4.1，这是22年的版本，已经比较老了。
最新的版本可以在这里查看：[Maven Repository: com.android.tools.build » gradle](https://mvnrepository.com/artifact/com.android.tools.build/gradle?repo=google)
将插件版本更新为较新版本，如，修改build.gradle：
```
    dependencies {
        classpath 'com.android.tools.build:gradle:8.4.1'
    }
```

除此之外，升级插件版本还要检查[gradle版本](https://gradle.org/releases/)是否支持这个插件的版本
其关系可以在这里查看：[Android Gradle plugin 8.5 release notes  |  Android Studio  |  Android Developers](https://developer.android.com/build/releases/gradle-plugin#updating-gradle)

> 参考[Could not find com.android.tools.build:gradle:7.3.3. error found in build.gradle file - Stack Overflow](https://stackoverflow.com/questions/70545646/could-not-find-com-android-tools-buildgradle7-3-3-error-found-in-build-gradle)

因此，我们至少要使用8.6版本的Gradle来支持这个插件。

进入./gradle/wrapper文件夹下，修改gradle-warpper.properties文件，这里定义了项目使用的gradle版本

将distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-bin.zip
修改为
distributionUrl=https\://services.gradle.org/distributions/gradle-8.6-bin.zip

> 对于国内的用户，推荐使用[腾讯云的Gradle镜像](https://mirrors.cloud.tencent.com/gradle/)
> 修改为distributionUrl=https://mirrors.cloud.tencent.com/gradle/gradle-8.6-all.zip

此时再点击构建，会自动下载对应版本的Gradle，然后再下载需要的Gradle插件。

如果成功的话，就可以在./build/outputs/apk/debug下找到构建好的apk了

对于国内的用户，gradle默认的下载仓库地址可能会导致下载失败或下载缓慢，可以在build.gradle文件中，增加阿里云的下载地址：

```
repositories {
        mavenCentral()
        maven { url 'https://maven.aliyun.com/repository/public/' }
        maven { url 'https://maven.aliyun.com/repository/central' }
        maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
        mavenLocal()
        google()
}

```

## 运行安装apk

在Linux环境下，可以使用adb命令安装APK到安卓设备，当然，你也可以选择使用Qtcreator一键运行。

在使用USB连接你的安卓设备后使用adb命令安装
```shell
adb install android-build-debug.apk
```
确保你的安卓设备打开了开发者模式，具体打开方式请根据自己设备型号搜索。

如果你想要在电脑上分享手机中apk的运行情况，可以使用scrcpy
[Genymobile/scrcpy: Display and control your Android device](https://github.com/Genymobile/scrcpy)


