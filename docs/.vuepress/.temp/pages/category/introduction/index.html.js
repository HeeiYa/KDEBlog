import comp from "D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/category/introduction/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/introduction/\",\"title\":\"Category introduction\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category introduction\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"introduction\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
