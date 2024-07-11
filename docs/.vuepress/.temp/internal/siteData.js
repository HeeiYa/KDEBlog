export const siteData = JSON.parse("{\"base\":\"/KDEBlog/\",\"lang\":\"en-US\",\"title\":\"KDEBlog\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Blog\",\"description\":\"A blog now mainly about my particpation in OSPP with KDE \"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"Blog\",\"description\":\"关于参与OSPP中KDE社区的开发\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
