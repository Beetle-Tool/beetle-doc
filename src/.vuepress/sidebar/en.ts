import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/tutorial/": [
    {
      text: "Tutorial",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/en/template/": [
    {
      text: "Template",
      icon: "book",
      children: "structure",
    },
  ],
  "/en/guide/": [
    {
      text: "Get Start",
      icon: "book",
      children: "structure",
    },
  ],

  "/en/": [
    "",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
