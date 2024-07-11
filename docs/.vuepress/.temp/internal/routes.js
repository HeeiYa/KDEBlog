export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/posts/2024OSPP%20KDE%E7%A4%BE%E5%8C%BA%E9%A1%B9%E7%9B%AE%EF%BC%9APorting%20KDE%20Games%20to%20Android%20platform.html", { loader: () => import(/* webpackChunkName: "posts_2024OSPP KDE社区项目：Porting KDE Games to Android platform.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/2024OSPP KDE社区项目：Porting KDE Games to Android platform.html.js"), meta: {"_blog":{"title":"2024OSPP KDE社区项目：Porting KDE Games to Android platform","author":"","date":"2024-07-03T00:00:00.000Z","category":["OSPP"],"tag":[],"excerpt":"<p> about my OSPP KDE project </p>"},"title":"2024OSPP KDE社区项目：Porting KDE Games to Android platform"} }],
  ["/posts/%E5%85%B3%E4%BA%8E%E6%88%91.html", { loader: () => import(/* webpackChunkName: "posts_关于我.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/关于我.html.js"), meta: {"_blog":{"title":"About me","author":"","date":"2021-01-01T00:00:00.000Z","category":["introduction"],"tag":[],"excerpt":"<p>nothing for now</p>"},"title":"About me"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"Home"} }],
  ["/zh/posts/2024OSPP%20KDE%E7%A4%BE%E5%8C%BA%E9%A1%B9%E7%9B%AE%EF%BC%9APorting%20KDE%20Games%20to%20Android%20platform.html", { loader: () => import(/* webpackChunkName: "zh_posts_2024OSPP KDE社区项目：Porting KDE Games to Android platform.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/zh/posts/2024OSPP KDE社区项目：Porting KDE Games to Android platform.html.js"), meta: {"title":"2024OSPP KDE社区项目：Porting KDE Games to Android platform"} }],
  ["/zh/posts/%E5%85%B3%E4%BA%8E%E6%88%91.html", { loader: () => import(/* webpackChunkName: "zh_posts_关于我.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/zh/posts/关于我.html.js"), meta: {"title":"自我介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/ospp/", { loader: () => import(/* webpackChunkName: "category_ospp_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/ospp/index.html.js"), meta: {"title":"Category OSPP"} }],
  ["/category/introduction/", { loader: () => import(/* webpackChunkName: "category_introduction_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/introduction/index.html.js"), meta: {"title":"Category introduction"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
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
