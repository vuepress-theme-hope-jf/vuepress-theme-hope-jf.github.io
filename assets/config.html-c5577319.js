import{a3 as r,Z as g,_ as u,$ as n,a0 as a,a1 as e,a2 as l,a5 as s,D as o}from"./framework-61fc4e0a.js";const h={},m=e("div",{class:"language-diff line-numbers-mode","data-ext":"diff"},[e("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"  // .vuepress/config.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},'- import theme from "vuepress-theme-hope";')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},'+ import { defineUserConfig } from "vuepress";')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},'+ import { hopeTheme } from "vuepress-theme-hope";')]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"- export default theme.config({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+ export default defineUserConfig({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"    // your site config here")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"    // ...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"-   themeConfig:{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+   theme: hopeTheme({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"      // your theme config here")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"      // ...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"-   },")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+   }),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"  });")]),l(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-diff line-numbers-mode","data-ext":"diff"},[e("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"// .vuepress/config.js")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},'- const { config } = require("vuepress-theme-hope");')]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},'+ import { hopeTheme } from "vuepress-theme-hope";')]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"- module.exports = theme.config({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+ export default {")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"    // your site config here")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"    // ...")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"-   themeConfig:{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+   theme: hopeTheme({")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"      // your theme config here")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#ABB2BF"}},"      // ...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"-   },")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+   }),")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E06C75"}},"- });")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#98C379"}},"+ };")]),l(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=s(`<h2 id="использование-темы" tabindex="-1"><a class="header-anchor" href="#использование-темы" aria-hidden="true">#</a> Использование темы</h2><ul><li>переименован <code>themeConfig</code> в <code>hopeTheme</code></li><li>переименован <code>navbarConfig</code> в <code>navbar</code></li><li>переименован <code>sidebarConfig</code> в <code>sidebar</code></li><li>добавлены помощники <code>arraySidebar</code> и <code>objectSidebar</code></li><li>удален <code>config</code></li></ul><h2 id="параметры-темы" tabindex="-1"><a class="header-anchor" href="#параметры-темы" aria-hidden="true">#</a> Параметры темы</h2><ul><li><p>изменен тип <code>author</code> с <code>string | undefined</code> на <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">AuthorInfo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author name</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author website</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">url</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Author email</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">email</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Это изменение позволяет вам добавлять нескольких авторов и устанавливать для них сайты.</p></li></ul><h3 id="панель-навигации" tabindex="-1"><a class="header-anchor" href="#панель-навигации" aria-hidden="true">#</a> Панель навигации</h3><ul><li><p>унифицирован <code>nav</code>, <code>navbar</code> в <code>navbar</code></p></li><li><p>переименован <code>darkLogo</code> в <code>logoDark</code></p></li><li><p>переименован <code>navAutoHide</code>в <code>navbarAutoHide</code></p></li><li><p>добавлена опция <code>navbarIcon</code> для управления отображением иконки на панели навигации</p></li><li><p>добавлена опция <code>navbarLayout</code> для управления макетом панели навигации</p></li></ul><h3 id="боковая-панель" tabindex="-1"><a class="header-anchor" href="#боковая-панель" aria-hidden="true">#</a> Боковая панель</h3><ul><li><p>переименован <code>sidebarDepth</code> в <code>headerDepth</code></p></li><li><p>удален <code>displayAllHeaders</code></p></li><li><p>support generating sidebar automatically from file structure</p></li></ul><h3 id="конфигурация-боковои-панели-навигации-унифицирована" tabindex="-1"><a class="header-anchor" href="#конфигурация-боковои-панели-навигации-унифицирована" aria-hidden="true">#</a> Конфигурация боковой панели навигации унифицирована</h3><ul><li><p>изменено <code>items</code> в конфигурации панели навигации на <code>children</code></p></li><li><p>изменено <code>title</code> на <code>text</code> и <code>path</code> в <code>link</code> в конфигурации боковой панели.</p></li><li><p>Навигационная панель V2 поддерживает установку пути к файлу Markdown непосредственно, как боковую панель, для автоматического создания текста, иконок и ссылок</p></li><li><p>добавлен <code>activeMatch</code> для управления активацией маршрута</p></li></ul><p>Таким образом, оба они объединены как <code>text</code>, <code>icon</code>, <code>prefix</code>, <code>link</code>, <code>children</code>, <code>activeMatch</code>.</p><h3 id="поиск" tabindex="-1"><a class="header-anchor" href="#поиск" aria-hidden="true">#</a> Поиск</h3><p>Так как тема больше не имеет встроенного поиска:</p><ul><li><p>удален <code>search</code>, <code>searchPlaceholder</code>, <code>searchMaxSuggestions</code></p></li><li><p>удален <code>algolia</code>, <code>algoliaType</code></p></li></ul><h3 id="ссылка-на-страницу" tabindex="-1"><a class="header-anchor" href="#ссылка-на-страницу" aria-hidden="true">#</a> Ссылка на страницу</h3><ul><li><p>переименован <code>prevLinks</code> в <code>prevLink</code></p></li><li><p>переименован <code>nextLinks</code> в <code>nextLink</code></p></li><li><p>переименован <code>editLinks</code> в <code>editLink</code></p></li><li><p>переименован <code>updateTime</code> в <code>lastUpdated</code></p></li></ul><h3 id="outlook" tabindex="-1"><a class="header-anchor" href="#outlook" aria-hidden="true">#</a> Outlook</h3><ul><li><p>добавлена опция <code>iconAssets</code></p></li><li><p>значение по умолчанию <code>iconPrefix</code> теперь выводится из <code>iconAssets</code></p></li><li><p>обновлены значения параметра <code>darkmode</code></p><ul><li>добавлен <code>&quot;enable&quot;</code></li><li>переименован <code>&quot;switch&quot;</code> в <code>&quot;toggle&quot;</code></li><li>переименован <code>&quot;auto-switch&quot;</code> в <code>&quot;switch&quot;</code></li></ul></li><li><p><code>themeColor</code> и <code>fullscreen</code> отключены по умолчанию</p></li></ul><h3 id="конфигурация-блога" tabindex="-1"><a class="header-anchor" href="#конфигурация-блога" aria-hidden="true">#</a> Конфигурация блога</h3><ul><li><p>поддержка отдельного конфига на каждом языке</p></li><li><p>добавлен <code>blog.description</code>, чтобы установить описание блоггера или девиз</p></li><li><p>переименован <code>blog.links</code> в <code>blog.medias</code></p></li><li><p>изменить значение по умолчанию <code>blog.roundAvatar</code> с <code>true</code> на <code>false</code></p></li><li><p>переименован <code>blog.perPage</code> в <code>blog.articlePerPage</code></p></li><li><p>перемещен <code>blog.autoExcerpt</code> в <code>plugins.blog.excerptLength</code></p></li></ul><h3 id="конфигурация-шифрования" tabindex="-1"><a class="header-anchor" href="#конфигурация-шифрования" aria-hidden="true">#</a> Конфигурация шифрования</h3><ul><li><p>изменен <code>encrypt.status: &quot;global&quot; | &quot;local&quot;</code> (по умолчанию <code>&quot;local&quot;</code>) на <code>encrypt.global: boolean</code> (по умолчанию <code>false</code>)</p></li><li><p>переименован <code>encrypt.global</code> в <code>encrypt.admin</code></p></li></ul><h3 id="пользовательскии-макет" tabindex="-1"><a class="header-anchor" href="#пользовательскии-макет" aria-hidden="true">#</a> Пользовательский макет</h3><ul><li>удален <code>custom</code></li></ul><h3 id="макет-страницы" tabindex="-1"><a class="header-anchor" href="#макет-страницы" aria-hidden="true">#</a> Макет страницы</h3><ul><li>переименован <code>anchorDisplay</code> в <code>toc</code></li></ul><h3 id="скорость-чтения" tabindex="-1"><a class="header-anchor" href="#скорость-чтения" aria-hidden="true">#</a> Скорость чтения</h3><ul><li>перемещен <code>wordPerMinute</code> в <code>plugins.readingTime.wordPerMinute</code></li></ul><h2 id="изменения-плагина" tabindex="-1"><a class="header-anchor" href="#изменения-плагина" aria-hidden="true">#</a> Изменения плагина</h2><h3 id="дополнение" tabindex="-1"><a class="header-anchor" href="#дополнение" aria-hidden="true">#</a> Дополнение</h3><ul><li>добавлен <code>plugins.blog</code> для управления ссылками на блоги</li><li>добавлен <code>plugins.nprogress</code> для управления nprogress</li><li>добавлен <code>plugins.prismjs</code> для управления Prism.js</li></ul><h3 id="изменения" tabindex="-1"><a class="header-anchor" href="#изменения" aria-hidden="true">#</a> Изменения</h3><p>Переместите все параметры, связанные с плагинами, в раздел <code>plugins</code>.</p>`,33),v=e("li",null,[e("p",null,[l("переименован "),e("code",null,"activeHash"),l(" в "),e("code",null,"plugins.activeHeaderLinks")]),e("p",null,[l("Тема теперь использует официальный плагин "),e("code",null,"@vuepress/plugin-active-header-links"),l(". "),e("img",{src:"https://img.shields.io/badge/-warning-yellow",alt:"warning",loading:"lazy"})])],-1),B=e("p",null,[l("перемещен "),e("code",null,"comment"),l(" в "),e("code",null,"plugins.comment")],-1),f=e("li",null,[e("p",null,[l("Добавлена поддержка "),e("code",null,"artalk"),l(", "),e("code",null,"twikoo"),l(" и "),e("code",null,"giscus"),l(),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"New",loading:"lazy"})])],-1),w=e("p",null,[l("Vssue в настоящее время отсутствует "),e("img",{src:"https://img.shields.io/badge/-warning-yellow",alt:"warning",loading:"lazy"})],-1),F={href:"https://github.com/meteorlxy",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[l("Служба Valine удалена "),e("img",{src:"https://img.shields.io/badge/-removed-red",alt:"removed",loading:"lazy"})],-1),_={href:"https://waline.js.org",target:"_blank",rel:"noopener noreferrer"},E=s('<li><p>перемещен <code>copyCode</code> в <code>plugins.copyCode</code></p></li><li><p>перемещен <code>copyright</code> в <code>plugins.copyright</code></p><p>Плагин сейчас отключен по умолчанию. <img src="https://img.shields.io/badge/-warning-yellow" alt="warning" loading="lazy"></p></li><li><p>перемещен <code>feed</code> в <code>plugins.feed</code></p><ul><li><p>Поддерживает удаление пользовательских компонентов и элементов с помощью параметров <code>plugins.feed.removedElements</code> <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW" loading="lazy"></p></li><li><p>Visualized atom and rss feeds, configurable with <code>plugins.feed.atomXslFilename</code> <code>plugins.feed.atomXslTemplate</code> <code>plugins.feed.rssXslFilename</code> and <code>plugins.feed.rssXslTemplate</code> <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW" loading="lazy"></p></li><li><p>Настройте генерацию ленты с помощью опцию <code>plugins.feed.getter</code> <img src="https://img.shields.io/badge/-new-brightgreen" alt="NEW" loading="lazy"></p></li><li><p>Поддержка нескольких категорий <img src="https://img.shields.io/badge/-new-brightgreen" alt="New" loading="lazy"></p></li><li><p>Переместите все параметры вывода из параметра <code>plugins.feed.output</code> в корневой каталог параметров плагина и переименуйте их.</p><ul><li><p><code>feed.output.atom.enable</code> переименован <code>plugins.feed.atom</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.json.enable</code> переименован <code>plugins.feed.json</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.rss.enable</code> переименован <code>plugins.feed.rss</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.atom.path</code> переименован <code>plugins.feed.atomOutputFilename</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.json.path</code> переименован <code>plugins.feed.jsonOutputFilename</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>feed.output.rss.path</code> переименован <code>plugins.feed.rssOutputFilename</code></p></li><li><p><code>plugins.feed.atom</code>, <code>plugins.feed.json</code> и <code>plugins.feed.rss</code> по умолчанию имеют значение <code>false</code> <img src="https://img.shields.io/badge/-warning-yellow" alt="warning" loading="lazy"></p><p>Тема больше не выводит файлы ленты в трех форматах по умолчанию. При необходимости установите параметры для необходимых выходных форматов.</p></li></ul></li></ul></li><li><p>перемещен <code>git</code> в <code>plugins.git</code></p><p>Тема теперь использует официальный плагин <code>@vuepress/plugin-git</code>. <img src="https://img.shields.io/badge/-warning-yellow" alt="warning" loading="lazy"></p></li>',4),x=e("p",null,[l("перемещен "),e("code",null,"mdEnhance"),l(" в "),e("code",null,"plugins.mdEnhance")],-1),k=s('<li><p>проверка ссылок в разметке <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Плагин теперь проверяет ваши уцененные ссылки и предупреждает вас при обнаружении неработающих ссылок.</p><p>Вы можете контролировать это поведение с помощью опции <code>plugins.mdEnhance.linkCheck</code></p></li><li><p>поддержка метки изображения <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Используйте суффикс <code>#light</code> и <code>#dark</code>, чтобы пометить изображения, чтобы отображать их в светлом или темном режиме с помощью опции <code>plugins.mdEnhance.imgMark</code></p></li>',2),C=e("p",null,[l("Поддержка chart.js "),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"New",loading:"lazy"})],-1),z={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"plugins.mdEnhance.chart",-1),q=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: chart Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: chart Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=e("p",null,[l("Поддержка ECharts "),e("img",{src:"https://img.shields.io/badge/-New-brightgreen",alt:"New",loading:"lazy"})],-1),j={href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"plugins.mdEnhance.echarts",-1),S=s(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// chart.js config</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),D=s(`<li><p>контент включает поддержку <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>использует <code>@include()</code>, чтобы включить другое содержимое файла в уценку с помощью параметров <code>plugins.mdEnhance.include</code>.</p><p>Использует <code>@include(filename)</code>, чтобы включить файл.</p><p>Чтобы частично импортировать файл, вы можете указать диапазон включаемых строк:</p><ul><li><code>@include(filename{start-end})</code></li><li><code>@include(filename{start-})</code></li><li><code>@include(filename{-end})</code></li></ul><p>Also you can include file region:</p><ul><li><code>@include(filename#region)</code></li></ul></li><li><p>поддержка вкладок <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Использует контейнер <code>tabs</code> для создания вкладок через опцию <code>plugins.mdEnhance.tabs</code>.</p></li><li><p>добавлен <code>plugins.mdEnhance.gfm</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Управление с поддержкой gfm</p></li><li><p>добавлен <code>plugins.mdEnhance.vPre</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Следующий синтаксис больше не встроен в VuePress2, поэтому мы добавляем эту опцию.</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">::: v-pre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span></code></pre></div></li><li><p>переименован <code>mdEnhance.codegroup</code> в <code>plugins.mdEnhance.codetabs</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p>переименован <code>mdEnhance.lazyload</code> в <code>plugins.mdEnhance.imgLazyload</code> изменение значение по умолчанию с <code>true</code> на <code>false</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p>удалено <code>plugins.mdEnhance.lineNumbers</code> <img src="https://img.shields.io/badge/-removed-red" alt="removed" loading="lazy"></p><p>VuePress2 поддерживает настройку номеров строк для отдельных блоков кода</p></li><li><p>удалено <code>plugins.mdEnhance.imageFix</code> <img src="https://img.shields.io/badge/-removed-red" alt="removed" loading="lazy"></p><p>Проблемы, связанные с изображением, были исправлены в версии 2</p></li>`,8),V=s('<li><p>перемещен <code>photoSwipe</code> в <code>plugins.photoSwipe</code></p></li><li><p>перемещен <code>pwa</code> в <code>plugins.pwa</code></p><ul><li><p><code>plugins.pwa.update</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: управление логикой обновления SW</p><ul><li><p><code>&quot;disabled&quot;</code>: Ничего не делать, даже когда доступен новый service worker. После успешной установки новой службы и начала ожидания она будет контролировать страницу и предоставлять новый контент при следующем посещении.</p></li><li><p><code>&quot;available&quot;</code>: Отображать всплывающее окно обновления только тогда, когда доступен новый service worker</p></li><li><p><code>&quot;hint&quot;</code>: Отображать подсказку, позволяющую пользователю выбрать немедленное обновление</p></li><li><p><code>&quot;force&quot;</code>: Немедленно отменить регистрацию текущего сервисного работника, а затем обновить его, чтобы получить новый контент</p></li></ul></li><li><p><code>plugins.pwa.appendBase</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: автоматически вставляет <code>base</code> в опцию <code>manifest</code></p></li><li><p><code>plugins.pwa.hintComponent</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: Компонент подсказки для обнаружения нового контента</p></li><li><p>Подсказка shouldPrefetch <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: Теперь плагин будет проверять опцию <code>shouldPrefetch</code> в конфигурационном файле и предупреждать вас, чтобы вы отключили ее.</p></li><li><p>Значение по умолчанию <code>plugins.pwa.cacheHTML</code> изменено с <code>true</code> на <code>false</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p><p>Это может эффективно сократить время обновления SW</p></li><li><p><code>pwa.popupComponent</code> переименован в <code>plugins.pwa.updateComponent</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p><p>Это связано с тем, что мы добавили новое всплывающее окно подсказки, поэтому нам нужно избежать путаницы в именах</p></li></ul></li><li><p>перемещен <code>readingTime</code> в <code>plugins.readingTime</code></p></li><li><p>перемещен <code>seo</code> в <code>plugins.seo</code></p><ul><li><p>Поддержка JSON-LD <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Плагин теперь может генерировать для вас теги сценария JSON-LD и предоставляет опцию <code>plugin.seo.jsonLd</code>, позволяющую настраивать свойства JSON-LD.</p></li><li><p>Генерация описания <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Плагин может автоматически генерировать описание для вас с помощью параметров <code>plugin.seo.autoDescription</code></p></li><li><p>Каноническая ссылка <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p><p>Вы можете установить каноническую ссылку с помощью опции <code>plugin.seo.canonicalLink</code>. Это полезно, когда ваша документация</p></li><li><p><code>seo.customMeta</code> переименован в <code>plugin.seo.customHead</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p><p>Теперь вы можете редактировать все теги заголовка, а не только мета в версии 1. развернуты в нескольких местах.</p></li></ul></li><li><p>перемещен <code>sitemap</code> в <code>plugins.sitemap</code></p><ul><li><p>Visualized sitemap, configurable with <code>plugins.sitemap.sitemapXSLFilename</code> and <code>plugins.sitemap.sitemapXSLTemplate</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy"></p></li><li><p><code>plugin.sitemap.priority</code> <img src="https://img.shields.io/badge/-New-brightgreen" alt="New" loading="lazy">: установка значения по умолчанию для приоритета</p></li><li><p><code>sitemap.urls</code> переименован в <code>plugin.sitemap.extraUrls</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>sitemap.exclude</code> переименован в <code>plugin.sitemap.excludeUrls</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>sitemap.outFile</code> переименован в <code>plugin.sitemap.sitemapFilename</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li><li><p><code>sitemap.modifyTimeGetter</code> переименован в <code>plugin.sitemap.modifyTimeGetter</code> <img src="https://img.shields.io/badge/-changed-yellow" alt="changed" loading="lazy"></p></li></ul></li>',5),P=s('<h3 id="удаление" tabindex="-1"><a class="header-anchor" href="#удаление" aria-hidden="true">#</a> Удаление</h3><ul><li><p>удалено <code>chunkRename</code></p><p>Тема больше не предоставляет эту функцию.</p></li><li><p>удалено <code>cleanUrl</code></p><p>Тема больше не предоставляет эту функцию.</p></li><li><p>удалено <code>git</code></p><p>Тема теперь использует официальный плагин <code>@vuepress/plugin-git</code>.</p></li><li><p>удалено <code>smoothScroll</code></p><p>Тема теперь обеспечивает плавную прокрутку с помощью CSS и больше не обеспечивает совместимость со старыми браузерами.</p></li></ul>',2);function M(H,O){const d=o("CodeTabs"),i=o("ExternalLinkIcon");return g(),u("div",null,[n(d,{id:"0",data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:a(({title:c,value:p,isActive:t})=>[m]),tab1:a(({title:c,value:p,isActive:t})=>[b]),_:1}),y,e("ul",null,[v,e("li",null,[B,e("ul",null,[f,e("li",null,[w,e("p",null,[l("Vssue написан на Vue2, и автор "),e("a",F,[l("meteorlxy"),n(i)]),l(" еще не сделал его совместимым с Vue3")])]),e("li",null,[A,e("p",null,[l("Valine не требует обслуживания и может привести к утечке вашей конфиденциальности. Вместо этого вы должны использовать "),e("a",_,[l("Waline"),n(i)]),l(".")])])])]),E,e("li",null,[x,e("ul",null,[k,e("li",null,[C,e("p",null,[l("Добавлена поддержка "),e("a",z,[l("chart.js"),n(i)]),l(" через опцию "),N]),q]),e("li",null,[T,e("p",null,[l("Добавлена поддержка "),e("a",j,[l("ECharts"),n(i)]),l(" через опцию "),L]),S]),D])]),V]),P])}const U=r(h,[["render",M],["__file","config.html.vue"]]);export{U as default};