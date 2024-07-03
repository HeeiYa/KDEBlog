export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/posts/2024OSPP%20KDE%E7%A4%BE%E5%8C%BA%E9%A1%B9%E7%9B%AE%EF%BC%9APorting%20KDE%20Games%20to%20Android%20platform.html", { loader: () => import(/* webpackChunkName: "posts_2024OSPP KDE社区项目：Porting KDE Games to Android platform.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/2024OSPP KDE社区项目：Porting KDE Games to Android platform.html.js"), meta: {"_blog":{"title":"2024OSPP KDE社区项目：Porting KDE Games to Android platform","author":"","date":"2024-07-03T00:00:00.000Z","category":["OSPP"],"tag":["OSPP","KDE"],"excerpt":"<p>关于我申请的OSPP的KDE项目</p>"},"title":"2024OSPP KDE社区项目：Porting KDE Games to Android platform"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "posts_archive1.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"_blog":{"title":"Archive Article1","author":"","date":"1998-01-01T00:00:00.000Z","category":["History"],"tag":["WWI"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article1"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "posts_archive2.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"_blog":{"title":"Archive Article2","author":"","date":"1998-01-02T00:00:00.000Z","category":["History"],"tag":["WWII"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article2"} }],
  ["/posts/%E5%85%B3%E4%BA%8E%E6%88%91.html", { loader: () => import(/* webpackChunkName: "posts_关于我.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/关于我.html.js"), meta: {"_blog":{"title":"自我介绍","author":"","date":"2021-01-01T00:00:00.000Z","category":["introduction"],"tag":[],"excerpt":"<p>自我介绍（暂空）</p>"},"title":"自我介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/history/", { loader: () => import(/* webpackChunkName: "category_history_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/history/index.html.js"), meta: {"title":"Category History"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/wwi/", { loader: () => import(/* webpackChunkName: "tag_wwi_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/wwi/index.html.js"), meta: {"title":"Tag WWI"} }],
  ["/tag/wwii/", { loader: () => import(/* webpackChunkName: "tag_wwii_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/wwii/index.html.js"), meta: {"title":"Tag WWII"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
  ["/category/ospp/", { loader: () => import(/* webpackChunkName: "category_ospp_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/ospp/index.html.js"), meta: {"title":"Category OSPP"} }],
  ["/tag/ospp/", { loader: () => import(/* webpackChunkName: "tag_ospp_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/ospp/index.html.js"), meta: {"title":"Tag OSPP"} }],
  ["/tag/kde/", { loader: () => import(/* webpackChunkName: "tag_kde_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/kde/index.html.js"), meta: {"title":"Tag KDE"} }],
  ["/category/introduction/", { loader: () => import(/* webpackChunkName: "category_introduction_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/introduction/index.html.js"), meta: {"title":"Category introduction"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
