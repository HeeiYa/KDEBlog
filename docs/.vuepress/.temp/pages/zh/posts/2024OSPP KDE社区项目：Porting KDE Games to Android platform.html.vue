<template><div><h1 id="_2024ospp-kde社区项目-porting-kde-games-to-android-platform" tabindex="-1"><a class="header-anchor" href="#_2024ospp-kde社区项目-porting-kde-games-to-android-platform"><span>2024OSPP KDE社区项目：Porting KDE Games to Android platform</span></a></h1>
<p>在2024年开源之夏（OSPP）活动中，我很荣幸被KDE社区的项目：Porting KDE Games to Android platform 选中。这是KDE社区首次参加OSPP，也是他们第一个，而且是唯一一个项目。</p>
<p>关于OSPP（开源之夏）：</p>
<blockquote>
<p>开源之夏是由“<strong>开源软件供应链点亮计划</strong>”发起并长期支持的一项暑期开源活动，旨在鼓励在校学生积极参与开源软件的开发维护，促进优秀开源软件社区的蓬勃发展，培养和发掘更多优秀的开发者。 活动联合国内外各大开源社区，针对重要开源软件的开发与维护提供项目任务，并面向全球高校学生开放报名。
<a href="https://summer-ospp.ac.cn/?lang=en" target="_blank" rel="noopener noreferrer">开源软件供应链点亮计划-开源之夏2024</a></p>
</blockquote>
<p>关于KDE社区：
<a href="https://userbase.kde.org/What_is_KDE/zh-cn" target="_blank" rel="noopener noreferrer">什么是 KDE - KDE UserBase Wiki</a></p>
<blockquote>
<p>KDE 是由全球程序员、译者、贡献者、艺术家、作者、发行商和用户组成的庞大<strong>社区</strong>，致力于为桌面造出最好的自由软件。KDE 软件的用户和粉丝也遍布全球，他们互帮互助，传播社区消息新闻，或仅仅是享受这种美妙的体验。</p>
</blockquote>
<p>KDE官网
<a href="https://kde-china.org/" target="_blank" rel="noopener noreferrer">KDE 中国 | KDE 中国社区</a>
<a href="https://kde.org/zh-cn/" target="_blank" rel="noopener noreferrer">首页 - KDE 社区</a></p>
<h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span>项目介绍</span></a></h2>
<p>KDE项目：<a href="https://summer-ospp.ac.cn/org/prodetail/24b5c0531?list=org&amp;navpage=org" target="_blank" rel="noopener noreferrer">Porting KDE Games to Android platform</a>的描述如下</p>
<blockquote>
<p>KDE Games and educational games are integral parts of the KDE Gear suite. Very few application are currently operational on platforms other than Linux, such as Android. The supported applications can be viewed at https://apps.kde.org/platforms/android. Consequently, we plan to port some of these games to Android, specifically supporting architectures like arm64-v8a, x86, and x86_64. The ultimate goal is to distribute their Android versions through apps.kde.org, F-Droid, Google Store, etc.</p>
<p>Candidates for porting include Kajongg, KMahjongg, KShisen, Kigo, Blinken, Klickety, Skladnik, Kbounce, Kollision, KSudoku, KTurtle, Picmi, and Klines. You can learn about their features and code at apps.kde.org or invent.kde.org.</p>
<p>Finally, you will port one or more of these games to Android and facilitate community efforts to distribute them through software stores.</p>
</blockquote>
<p>简单来说，就是移植一些KDE游戏到安卓平台，这些游戏目前只能在Linux平台获取，如果你使用Ubuntu系统，可以通过以下方式安装并运行一款游戏</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> Kollision</span>
<span class="line">kollision</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>可供选择的游戏包括
Kajongg, KMahjongg, KShisen, Kigo, Blinken, Klickety, Skladnik, Kbounce, Kollision, KSudoku等。但是项目结项只需要完成一个游戏的移植就可以了。</p>
<hr>
<h2 id="关于我申请的经历" tabindex="-1"><a class="header-anchor" href="#关于我申请的经历"><span>关于我申请的经历</span></a></h2>
<p>当初我看到这个项目的时候已经比较晚了，距离项目申请截止不到一周，在那之前我写了一份其他项目的申请书。但是看到这个项目之后，觉得确实这个项目对我更有吸引力一点，但是不巧的是，那个时候我正在准备一场考试，所以实际上我写申请书的时候，只剩下了两天时间。</p>
<p>在熬了一个通宵后，我提交了申请书，并把这个项目放到了第一志愿。
最终，在6月26号收到了申请通过的邮件。</p>
<h2 id="关于申请原因" tabindex="-1"><a class="header-anchor" href="#关于申请原因"><span>关于申请原因</span></a></h2>
<p>因为目前编程的主力是C++，所以我当初选择项目的时候是从C++的项目里面挑选的。
相比于其他项目，我觉得这个项目更有趣一些。</p>
<p>当时并不知道这是KDE社区第一次参与OSPP，这也是第一个以及唯一一个项目，对KDE社区也并没有了解。
后来了解了KDE社区后发现我还是很喜欢他们的理念的，导师也非常热心，在申请过程中多次强调沟通的重要性，并给了我很多帮助。</p>
<h2 id="项目开发计划" tabindex="-1"><a class="header-anchor" href="#项目开发计划"><span>项目开发计划</span></a></h2>
<p>项目使用QML来移植安卓程序，简单来说，分为以下几步</p>
<ol>
<li>配置开发环境</li>
<li>创建QtQuick工程并开始迁移
<ol>
<li>实现UI</li>
<li>移植逻辑代码</li>
</ol>
</li>
<li>打包部署并测试。</li>
</ol>
<p>目前来说，已经大致完成了配置环境的工作。
因为我的目前只有一台windows的机器，所以我的解决方案是VirtualBox里运行一台Fedora workstation40的虚拟机，并在虚拟机里使用podman+distrobox的方式，通过KDE的kdesrc-build工具来搭建KDE开发环境。</p>
</div></template>


