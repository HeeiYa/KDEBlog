import comp from "D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/en/posts/关于我.html.vue"
const data = JSON.parse("{\"path\":\"/en/posts/%E5%85%B3%E4%BA%8E%E6%88%91.html\",\"title\":\"About me\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"introduction\"],\"sticky\":true,\"excerpt\":\"<p>自我介绍（暂空）</p>\",\"archive\":true},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"en/posts/关于我.md\"}")
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
