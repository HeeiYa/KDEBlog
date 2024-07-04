import comp from "D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/en/posts/未命名.html.vue"
const data = JSON.parse("{\"path\":\"/en/posts/%E6%9C%AA%E5%91%BD%E5%90%8D.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"en/posts/未命名.md\",\"excerpt\":\"\"}")
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
