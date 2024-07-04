export const themeData = JSON.parse("{\"logo\":\"https://avatars.githubusercontent.com/u/90752469?s=400&u=69796f3c09ffaa19d5dc128699599458dadb5d14&v=4\",\"colorMode\":\"dark\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"navbar\":[\"/\",{\"text\":\"Article\",\"link\":\"/article/\"},{\"text\":\"TimeLine\",\"link\":\"/timeline/\"}]},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"navbar\":[\"/\",{\"text\":\"文章\",\"link\":\"/article/\"},{\"text\":\"时间线\",\"link\":\"/timeline/\"}]}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
