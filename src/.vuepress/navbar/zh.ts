import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/guide/",
  {
    text: "教程",
    icon: "book",
    link: "/tutorial/",
  },
  {
    text: "模板仓库",
    icon: "lightbulb",
    prefix: "/template/",
    children: [
      {
        text: "Bear",
        icon: "lightbulb",
        prefix: "Bear/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
