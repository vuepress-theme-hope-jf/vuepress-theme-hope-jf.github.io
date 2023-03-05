import{a3 as p,Z as c,_ as t,a4 as d,a1 as a,a2 as s,$ as e,a0 as i,a5 as l,D as r}from"./framework-61fc4e0a.js";const B={},u=a("p",null,"以下选项控制主题布局。",-1),h=a("h2",{id:"导航栏",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#导航栏","aria-hidden":"true"},"#"),s(" 导航栏")],-1),y={id:"navbar",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#",-1),v=l(`<ul><li>类型: <code>NavbarConfig | false</code></li><li>默认值: <code>false</code></li></ul><p>导航栏配置，具体配置方式见上方详情。</p><h3 id="navbaricon" tabindex="-1"><a class="header-anchor" href="#navbaricon" aria-hidden="true">#</a> navbarIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在导航栏显示图标。</p><h3 id="navbarlayout" tabindex="-1"><a class="header-anchor" href="#navbarlayout" aria-hidden="true">#</a> navbarLayout</h3><ul><li><p>类型: <code>HopeNavbarLayoutOptions</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">NavbarComponent</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;Brand&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;Links&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;Language&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;Search&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;Outlook&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;Repo&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">HopeNavbarLayoutOptions</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">start</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">NavbarComponent</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">center</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">NavbarComponent</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">end</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">NavbarComponent</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>{ start: [&quot;Brand&quot;], center: [&quot;Links&quot;], end: [&quot;Language&quot;, &quot;Repo&quot;, &quot;Outlook&quot;, &quot;Search&quot;] }</code></p></li></ul><p>自定义导航栏布局</p>`,8),m={id:"logo",tabindex:"-1"},F=a("a",{class:"header-anchor",href:"#logo","aria-hidden":"true"},"#",-1),A=l('<ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>导航栏图标，应为基于 <code>.vuepress/public</code> 文件夹的绝对路径。</p><h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark" aria-hidden="true">#</a> logoDark</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>夜间模式下导航栏图标，应为基于 <code>.vuepress/public</code> 文件夹的绝对路径。</p><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo" aria-hidden="true">#</a> repo</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>仓库配置，用于在导航栏中显示仓库链接。</p><h3 id="repodisplay" tabindex="-1"><a class="header-anchor" href="#repodisplay" aria-hidden="true">#</a> repoDisplay</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在导航栏显示仓库链接。</p><h3 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel" aria-hidden="true">#</a> repoLabel</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>用于导航栏仓库按钮的无障碍标签。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>主题可以正确识别 GitHub, Gitlab, Gitee, Bitbucket 的链接。</p></div><h3 id="navbarautohide" tabindex="-1"><a class="header-anchor" href="#navbarautohide" aria-hidden="true">#</a> navbarAutoHide</h3><ul><li>类型: <code>&quot;always&quot; | &quot;mobile&quot; | &quot;none&quot;</code></li><li>默认值: <code>&quot;mobile&quot;</code></li></ul><p>是否在向下滚动时自动隐藏导航栏。</p><h3 id="hidesitenameonmobile" tabindex="-1"><a class="header-anchor" href="#hidesitenameonmobile" aria-hidden="true">#</a> hideSiteNameOnMobile</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在移动视图下隐藏站点名称。</p><h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2>',22),C={id:"sidebar",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#",-1),f=l('<ul><li>类型: <code>SidebarConfig | &quot;structure&quot; | &quot;heading&quot; | false</code></li><li>默认值: <code>&quot;structure&quot;</code></li></ul><p>侧边栏配置。</p><h3 id="sidebaricon" tabindex="-1"><a class="header-anchor" href="#sidebaricon" aria-hidden="true">#</a> sidebarIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在侧边栏显示图标。</p>',5),g={id:"sidebarsorter",tabindex:"-1"},E=a("a",{class:"header-anchor",href:"#sidebarsorter","aria-hidden":"true"},"#",-1),x=l(`<ul><li><p>类型: <code>SidebarSorter</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarFileInfo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;file&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">filename</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">order</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">path</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">frontmatter</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ThemeNormalPageFrontmatter</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">pageData</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ThemePageData</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarDirInfo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;dir&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">dirname</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">SidebarInfo</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">order</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">groupInfo</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">icon</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">collapsible</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">link</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">frontmatter</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ThemeNormalPageFrontmatter</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">pageData</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ThemePageData</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarInfo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarFileInfo</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">SidebarDirInfo</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarSorterKeyword</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;readme&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;order&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;date&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;date-desc&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;filename&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#98C379;">&quot;title&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarSorterFunction</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">infoA</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">SidebarInfo</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">infoB</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">SidebarInfo</span></span>
<span class="line"><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SidebarSorter</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#E5C07B;">SidebarSorterFunction</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#E5C07B;">SidebarSorterFunction</span><span style="color:#ABB2BF;">[]</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#E5C07B;">SidebarSorterKeyword</span></span>
<span class="line"><span style="color:#ABB2BF;">  | </span><span style="color:#E5C07B;">SidebarSorterKeyword</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认值: <code>[&quot;readme&quot;, &quot;order&quot;, &quot;title&quot;, &quot;filename&quot;]</code></p></li></ul><p>结构侧边栏排序器。</p><p>你可以:</p><ul><li>填写自定义函数</li><li>提供一个排序器关键字</li><li>提供一组自定义函数或排序器关键字</li></ul><p>可用的关键字有:</p><ul><li><code>readme</code>: <code>README.md</code> 或 <code>readme.md</code> 在前</li><li><code>order</code>: 正序在前并按其值升序排列，负序在后并按其值降序排列</li><li><code>date</code>: 按日期升序排序</li><li><code>date-desc</code>: 按日期降序排序</li><li><code>title</code>: 按标题字母顺序排序</li><li><code>filename</code>: 按文件名字母顺序排序</li></ul><h3 id="headerdepth" tabindex="-1"><a class="header-anchor" href="#headerdepth" aria-hidden="true">#</a> headerDepth</h3><ul><li>类型: <code>number</code></li><li>默认值: <code>2</code></li></ul><p>侧边栏嵌套的标题深度。</p><h2 id="路径导航" tabindex="-1"><a class="header-anchor" href="#路径导航" aria-hidden="true">#</a> 路径导航</h2><h3 id="breadcrumb" tabindex="-1"><a class="header-anchor" href="#breadcrumb" aria-hidden="true">#</a> breadcrumb</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否全局启用路径导航。</p><h3 id="breadcrumbicon" tabindex="-1"><a class="header-anchor" href="#breadcrumbicon" aria-hidden="true">#</a> breadcrumbIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在路径导航显示图标。</p><h3 id="prevlink" tabindex="-1"><a class="header-anchor" href="#prevlink" aria-hidden="true">#</a> prevLink</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面底部显示上一篇链接。</p><h3 id="nextlink" tabindex="-1"><a class="header-anchor" href="#nextlink" aria-hidden="true">#</a> nextLink</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面底部显示下一篇链接。</p><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><h3 id="titleicon" tabindex="-1"><a class="header-anchor" href="#titleicon" aria-hidden="true">#</a> titleIcon</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在页面标题旁显示图标。</p><h3 id="pageinfo" tabindex="-1"><a class="header-anchor" href="#pageinfo" aria-hidden="true">#</a> pageInfo</h3><ul><li>类型: <code>ArticleInfo[] | false</code></li><li>默认值: <code>[&quot;Author&quot;, &quot;Original&quot;, &quot;Date&quot;, &quot;Category&quot;, &quot;Tag&quot;, &quot;ReadingTime&quot;]</code></li></ul><p>文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 <code>false</code> 使其被禁用。</p><p>可以填入的条目如下:</p><ul><li><code>&quot;Author&quot;</code>: 作者</li><li><code>&quot;Date&quot;</code>: 写作日期</li><li><code>&quot;Original&quot;</code>: 是否原创</li><li><code>&quot;Category&quot;</code>: 分类</li><li><code>&quot;Tag&quot;</code>: 标签</li><li><code>&quot;ReadingTime&quot;</code>: 预计阅读时间</li><li><code>&quot;Word&quot;</code>: 字数</li><li><code>&quot;PageView&quot;</code>: 页面浏览量</li></ul><h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h2><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示页面最后更新时间</p><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示页面贡献者</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否展示编辑此页链接</p><h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern" aria-hidden="true">#</a> editLinkPattern</h3><ul><li>类型: <code>string</code></li></ul><p>编辑链接的匹配。其中 <code>:repo</code> <code>:branch</code> <code>:path</code> 会被自动替换为 <code>docsRepo</code> <code>docsBranch</code> 和 <code>docsDir + filePath</code>。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>主题已经为 GitHub、Gitlab、Gitee 和 Bitbucket 提供了内置支持。</p></div><h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo" aria-hidden="true">#</a> docsRepo</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>repo</code></li></ul><p>文档仓库</p><h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch" aria-hidden="true">#</a> docsBranch</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;main&quot;</code></li></ul><p>文档所在分支</p><h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir" aria-hidden="true">#</a> docsDir</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;&quot;</code></li></ul><p>文档在仓库中的目录</p><h2 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h2><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>页脚的默认内容，可输入 HTMLString。</p><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Copyright © &lt;作者&gt;&quot;</code></li></ul><p>默认的版权信息，设置为 <code>false</code> 来默认禁用它。</p><h3 id="displayfooter" tabindex="-1"><a class="header-anchor" href="#displayfooter" aria-hidden="true">#</a> displayFooter</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否默认显示页脚</p><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li>类型: <code>string</code></li><li>默认值: 当前 <code>locale</code> 的键名</li></ul><p>当前语言的主页路径，用于导航栏图标和返回主页按钮的链接。</p><h3 id="rtl" tabindex="-1"><a class="header-anchor" href="#rtl" aria-hidden="true">#</a> rtl</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否使用 RTL 布局</p><h3 id="toc-heading" tabindex="-1"><a class="header-anchor" href="#toc-heading" aria-hidden="true">#</a> toc</h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否在桌面模式下右侧展示标题列表</p>`,74);function _(D,k){const o=r("RouterLink"),n=r("Badge");return c(),t("div",null,[u,d(" more "),h,a("p",null,[s("具体介绍详见 "),e(o,{to:"/zh/guide/layout/navbar.html"},{default:i(()=>[s("布局 → 导航栏")]),_:1}),s("。")]),a("h3",y,[b,s(" navbar "),e(n,{text:"建议配置",type:"tip"})]),v,a("h3",m,[F,s(" logo "),e(n,{text:"建议配置",type:"tip"})]),A,a("p",null,[s("关于配置指南，详见 "),e(o,{to:"/zh/guide/layout/sidebar.html"},{default:i(()=>[s("布局 → 侧边栏")]),_:1}),s("。")]),a("h3",C,[q,s(" sidebar "),e(n,{text:"建议配置",type:"tip"})]),f,a("h3",g,[E,s(" sidebarSorter "),e(n,{text:"仅限 Root"})]),x])}const L=p(B,[["render",_],["__file","layout.html.vue"]]);export{L as default};