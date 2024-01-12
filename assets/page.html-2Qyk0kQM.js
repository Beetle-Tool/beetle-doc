import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as d,c as p,a as o,b as e,F as g,h as _,f as s,u as f,e as i,n as k,g as v,d as b,i as w,j as x,k as a,t as y}from"./app-gg--S_zj.js";const C=e("p",null,[i("Content before "),e("code",null,"more"),i(" comment is regarded as page excerpt.")],-1),M=b(`<h2 id="page-title" tabindex="-1"><a class="header-anchor" href="#page-title" aria-hidden="true">#</a> Page Title</h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>You can also set title in Markdown&#39;s Frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Page Title</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information" aria-hidden="true">#</a> Page Information</h2><p>You can set page information in Markdown&#39;s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content" aria-hidden="true">#</a> Page Content</h2><p>You are free to write your Markdown here.</p><div class="hint-container tip"><p class="hint-container-title">Assets</p><ul><li>You can place images besides your Markdown files nd use <strong>relative links</strong>.</li><li>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: starting with <code>/</code>).</li></ul></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><p>Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:</p><p>2</p>`,13),P=e("p",null,"You can also create and import your own components.",-1),V=e("hr",null,null,-1),T=e("p",null,"The theme contains some useful components. Here are some examples:",-1),q=e("p",null,"A card:",-1),B={__name:"page.html",setup(F){const u=w({setup(){const n=x("Hello world!"),r=t=>{n.value=t.target.value};return()=>[a("p",[a("span","Input: "),a("input",{value:n.value,onInput:r})]),a("p",[a("span","Output: "),n.value])]}});return(n,r)=>{const t=l("Badge"),c=l("VPCard");return d(),p("div",null,[C,o(" more "),M,o(" markdownlint-disable MD033 "),e("ul",null,[(d(),p(g,null,_(3,m=>e("li",null,y(m),1)),64))]),o(" markdownlint-enable MD033 "),P,s(f(u)),V,T,e("ul",null,[e("li",null,[e("p",null,[i("A dark blue badge text badge at the end of line. "),s(t,{text:"Badge text",color:"#242378"})])]),e("li",null,[q,s(c,k(v({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}}},Y=h(B,[["__file","page.html.vue"]]);export{Y as default};
