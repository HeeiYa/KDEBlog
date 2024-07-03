export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"OSPP":{"path":"/category/ospp/","indexes":[0]},"History":{"path":"/category/history/","indexes":[1,2]},"introduction":{"path":"/category/introduction/","indexes":[3]}}}},"tag":{"/":{"path":"/tag/","map":{"OSPP":{"path":"/tag/ospp/","indexes":[0]},"KDE":{"path":"/tag/kde/","indexes":[0]},"WWI":{"path":"/tag/wwi/","indexes":[2]},"WWII":{"path":"/tag/wwii/","indexes":[1]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

