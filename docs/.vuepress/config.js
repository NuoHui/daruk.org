module.exports = {
  title: "Daruk",
  description: "Daruk, a typescript web framework.",
  base: "/",
  themeConfig: {
    logo: "/logo.png",
    logoLink: "https://github.com/darukjs/daruk",
    repo: "darukjs/daruk",
    editLinks: false,
    sidebarDepth: 2,
    docsDir: "docs",
    nav: [
      { text: "首页", link: "/" },
      { text: "教程", link: "/tutorial/install.html" },
      { text: "API", link: "https://doc.darukjs.com", target: "_blank" },
    ],
    sidebar: [
      "/",
      {
        title: "教程",
        collapsable: false,
        children: [
          "tutorial/install",
          "tutorial/starup",
          "tutorial/decorator",
          "tutorial/lifecycle",
          "tutorial/deploy",
        ],
      },
      {
        title: " 周边插件",
        collapsable: false,
        children: ["ecological/performance"],
      },
    ],
  },
  head: [["link", { rel: "shortcut icon", href: "/logo.png" }]],
  plugins: ["@vuepress/active-header-links"],
  ga: "UA-110549153-3",
};
