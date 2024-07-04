export const siteData = JSON.parse("{\"base\":\"/KDEBlog/\",\"lang\":\"en-US\",\"title\":\"KDEBlog\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Blog\",\"description\":\"A simple blog\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"Blog\",\"description\":\"小小博客\"}}}")

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
