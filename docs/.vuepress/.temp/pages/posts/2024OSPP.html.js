import comp from "D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/posts/2024OSPP.html.vue"
const data = JSON.parse("{\"path\":\"/posts/2024OSPP.html\",\"title\":\"Article 1\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2024-07-03T00:00:00.000Z\",\"category\":[\"OSPP\"],\"tags\":[\"OSPP\",\"KDE\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"posts/2024OSPP.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
