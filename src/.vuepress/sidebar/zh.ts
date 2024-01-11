import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/tutorial/": [
    {
      text: "教程",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/template/": [
    {
      text: "模板仓库",
      icon: "book",
      children: "structure",
    },
  ],

  "/guide/": [
    {
      text: "快速入门",
      icon: "book",
      children: "structure",
    },
  ],

  "/": [
    "",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
