import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/guide/",
  {
    text: "Tutorial",
    icon: "book",
    link: "/en/tutorial/",
  },
  {
    text: "Template Repositories",
    icon: "lightbulb",
    prefix: "/en/template/",
    children: [
      {
        text: "Bear",
        icon: "lightbulb",
        prefix: "Bear/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
