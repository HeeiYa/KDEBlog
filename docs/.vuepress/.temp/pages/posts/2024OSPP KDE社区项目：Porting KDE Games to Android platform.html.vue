<template><div><h1 id="_2024ospp-kde社区项目-porting-kde-games-to-android-platform" tabindex="-1"><a class="header-anchor" href="#_2024ospp-kde社区项目-porting-kde-games-to-android-platform"><span>2024OSPP KDE社区项目：Porting KDE Games to Android platform</span></a></h1>
<p>During the 2024 Open Source Promotion Plan (OSPP) event, I had the honor of being selected for the KDE community project: Porting KDE Games to the Android platform. This is KDE community's first participation in OSPP, and it is their first and only project.</p>
<p>About OSPP (Open Source Promotion Plan):</p>
<blockquote>
<p>The Open Source Promotion Plan is a summer open source event initiated and long-term supported by the &quot;<strong>Open Source Software Supply Chain Lighting Plan</strong>&quot;. It aims to encourage students to actively participate in the development and maintenance of open source software, promote the vigorous development of outstanding open source software communities, and cultivate and discover more excellent developers. The event collaborates with major open source communities at home and abroad, providing project tasks for the development and maintenance of important open source software and is open to global college students for registration. <a href="https://summer-ospp.ac.cn/?lang=en" target="_blank" rel="noopener noreferrer">Open Source Software Supply Chain Lighting Plan - OSPP 2024</a></p>
</blockquote>
<p>About the KDE Community: <a href="https://userbase.kde.org/What_is_KDE/zh-cn" target="_blank" rel="noopener noreferrer">What is KDE - KDE UserBase Wiki</a></p>
<blockquote>
<p>KDE is a large <strong>community</strong> of programmers, translators, contributors, artists, authors, distributors, and users from around the world, dedicated to creating the best free software for desktops. Users and fans of KDE software are also spread globally, helping each other, spreading community news, or just enjoying this wonderful experience.</p>
</blockquote>
<p><a href="https://kde.org/zh-cn/" target="_blank" rel="noopener noreferrer">KDE community</a></p>
<h2 id="project-introduction" tabindex="-1"><a class="header-anchor" href="#project-introduction"><span>Project Introduction</span></a></h2>
<p>The description of the KDE project: <a href="https://summer-ospp.ac.cn/org/prodetail/24b5c0531?list=org&amp;navpage=org" target="_blank" rel="noopener noreferrer">Porting KDE Games to Android platform</a> is as follows:</p>
<blockquote>
<p>KDE Games and educational games are integral parts of the KDE Gear suite. Very few applications are currently operational on platforms other than Linux, such as Android. The supported applications can be viewed at <a href="https://apps.kde.org/platforms/android" target="_blank" rel="noopener noreferrer">https://apps.kde.org/platforms/android</a>. Consequently, we plan to port some of these games to Android, specifically supporting architectures like arm64-v8a, x86, and x86_64. The ultimate goal is to distribute their Android versions through apps.kde.org, F-Droid, Google Store, etc.</p>
<p>Candidates for porting include Kajongg, KMahjongg, KShisen, Kigo, Blinken, Klickety, Skladnik, Kbounce, Kollision, KSudoku, KTurtle, Picmi, and Klines. You can learn about their features and code at apps.kde.org or invent.kde.org.</p>
<p>Finally, you will port one or more of these games to Android and facilitate community efforts to distribute them through software stores.</p>
</blockquote>
<p>In simple terms, the project involves porting some KDE games to the Android platform, as these games are currently only available on the Linux platform. If you use Ubuntu, you can install and run a game with the following commands:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> Kollision</span>
<span class="line">kollision</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Available games include Kajongg, KMahjongg, KShisen, Kigo, Blinken, Klickety, Skladnik, Kbounce, Kollision, KSudoku, KTurtle, Picmi, and Klines. However, for the completion of the project, porting just one game is sufficient.</p>
<h2 id="my-application-experience" tabindex="-1"><a class="header-anchor" href="#my-application-experience"><span>My Application Experience</span></a></h2>
<p>When I first saw this project, it was quite late, with less than a week before the application deadline. Before that, I had already written an application for another project. However, after seeing this project, I felt it was more appealing to me. Unfortunately, at that time, I was preparing for an exam, so I had only two days left to write the application.</p>
<p>After pulling an all-nighter, I submitted my application and listed this project as my first choice. Finally, on June 26, I received an email confirming that my application had been accepted.</p>
<h2 id="reason-for-applying" tabindex="-1"><a class="header-anchor" href="#reason-for-applying"><span>Reason for Applying</span></a></h2>
<p>Since my primary programming language is C++, I chose this project from the list of C++ projects. Compared to other projects, I found this one more interesting.</p>
<p>Initially, I did not know that this was KDE community's first participation in OSPP, nor did I know it was their first and only project. I also wasn't familiar with the KDE community. After learning about the KDE community, I discovered that I really liked their philosophy. The mentor was also very enthusiastic and emphasized the importance of communication multiple times during the application process, providing me with a lot of help.</p>
<h2 id="project-development-plan" tabindex="-1"><a class="header-anchor" href="#project-development-plan"><span>Project Development Plan</span></a></h2>
<p>The project uses QML to port the applications to Android. In simple terms, the process is divided into the following steps:</p>
<ol>
<li>Configure the development environment.</li>
<li>Create a QtQuick project and start the migration:
<ol>
<li>Implement the UI.</li>
<li>Port the logic code.</li>
</ol>
</li>
<li>Package, deploy, and test.</li>
</ol>
<p>Currently, I have roughly completed the work of configuring the environment.</p>
<p>Since I only have a Windows machine at the moment, my solution is to run a Fedora Workstation 40 virtual machine using VirtualBox. In the virtual machine, I use podman and distrobox to set up the KDE development environment with the KDE kdesrc-build tool.</p>
</div></template>


