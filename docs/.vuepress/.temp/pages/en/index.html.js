import comp from "D:/MINE/MyBlog/KDEBlog/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://avatars.githubusercontent.com/u/90752469?s=400&u=69796f3c09ffaa19d5dc128699599458dadb5d14&v=4\",\"heroText\":\"A simple blog about KDE\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/article/\",\"type\":\"primary\"},{\"text\":\"Github\",\"link\":\"https://github.com/HeeiYa\",\"type\":\"secondary\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"en/README.md\"}")
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
