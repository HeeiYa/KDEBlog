import comp from "D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/tag/kde/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/kde/\",\"title\":\"Tag KDE\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag KDE\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"KDE\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
