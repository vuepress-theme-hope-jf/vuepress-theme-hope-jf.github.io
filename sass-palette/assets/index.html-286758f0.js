import{N as r}from"./NetlifyBadge-63d0833b.js";import{c as i,Y as p,Z as B,_ as t,$ as e,u as y,a0 as s,a1 as l,F as d,a2 as u}from"./framework-b67f4785.js";import"./app-b1a28301.js";const F=s("h2",{id:"使用插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用插件","aria-hidden":"true"},"#"),l(" 使用插件")],-1),A=s("h3",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),l(" 安装")],-1),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"pnpm "),s("span",{style:{color:"#98C379"}},"add"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-D"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vuepress-plugin-sass-palette")]),l(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"yarn "),s("span",{style:{color:"#98C379"}},"add"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-D"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vuepress-plugin-sass-palette")]),l(`
`),s("span",{class:"line"})])])],-1),v=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"npm "),s("span",{style:{color:"#98C379"}},"i"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-D"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vuepress-plugin-sass-palette")]),l(`
`),s("span",{class:"line"})])])],-1),h=s("h3",{id:"使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),l(" 使用")],-1),C=s("p",null,[l("你必须在插件初始化期间调用 "),s("code",null,"useSassPalettePlugin"),l(" 函数来使用此插件。。")],-1),D=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你的插件或主题入口")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"useSassPalettePlugin"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-sass-palette"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"type"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"PluginFunction"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"@vuepress/core"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"export"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#E5C07B"}},"yourPlugin"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"=")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  ("),s("span",{style:{color:"#E06C75","font-style":"italic"}},"options"),s("span",{style:{color:"#ABB2BF"}},"): "),s("span",{style:{color:"#E5C07B"}},"PluginFunction"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#C678DD"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  ("),s("span",{style:{color:"#E06C75","font-style":"italic"}},"app"),s("span",{style:{color:"#ABB2BF"}},") "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#61AFEF"}},"useSassPalettePlugin"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"app"),s("span",{style:{color:"#ABB2BF"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 插件选项")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"      "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你的插件 API")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  };")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你的插件或主题入口")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," { "),s("span",{style:{color:"#E06C75"}},"useSassPalettePlugin"),s("span",{style:{color:"#ABB2BF"}}," } "),s("span",{style:{color:"#C678DD"}},"from"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"vuepress-plugin-sass-palette"'),s("span",{style:{color:"#ABB2BF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"const"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#61AFEF"}},"yourPlugin"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," ("),s("span",{style:{color:"#E06C75","font-style":"italic"}},"options"),s("span",{style:{color:"#ABB2BF"}},") "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," ("),s("span",{style:{color:"#E06C75","font-style":"italic"}},"app"),s("span",{style:{color:"#ABB2BF"}},") "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#61AFEF"}},"useSassPalettePlugin"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#E06C75"}},"app"),s("span",{style:{color:"#ABB2BF"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 插件选项")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#C678DD"}},"return"),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#7F848E","font-style":"italic"}},"// 你的插件 API")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"};")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=i({__name:"index.html",setup(f){return(x,E)=>{const c=d("CodeTabs");return p(),B("div",null,[F,A,t(c,{id:"6",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:e(({title:n,value:a,isActive:o})=>[m]),tab1:e(({title:n,value:a,isActive:o})=>[b]),tab2:e(({title:n,value:a,isActive:o})=>[v]),_:1}),h,C,t(c,{id:"23",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:e(({title:n,value:a,isActive:o})=>[D]),tab1:e(({title:n,value:a,isActive:o})=>[_]),_:1}),t(y(r),{alt:"通过 Netlify 部署"})])}}}),N=u(g,[["__file","index.html.vue"]]);export{N as default};