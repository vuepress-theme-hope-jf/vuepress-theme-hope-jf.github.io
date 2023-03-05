import{a4 as o,_ as d,$ as t,a6 as s,a0 as i,a2 as e,a3 as n,a5 as l,F as r}from"./framework-2eced249.js";const c={},h=e("p",null,"Embed YouTube videos in Markdown files.",-1),u=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),p=e("p",null,"A YouTube video:",-1),b=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;YouTube id=&quot;0JJPfz5dg20&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><p>A YouTube video with custom settings:</p>`,2),f=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;YouTube id=&quot;0JJPfz5dg20&quot; disable-fullscreen /&gt;</span></span>
<span class="line"></span></code></pre></div><p>A YouTube play list:</p>`,2),y=l(`<div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;YouTube list-type=&quot;playlist&quot; list=&quot;PLJNLwTPak6dhCRzVelZIs2-DfBp01NX_1&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>YouTube video id</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>It is ONLY not required, when you are setting <code>listType</code> to <code>&quot;playlist&quot;</code> and provide a valid playlist id using <code>list</code>.</p></div><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>YouTube video title</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>Type: <code>string | number</code></li><li>Default: <code>100%</code></li></ul><p>YouTube component width.</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li>Type: <code>string | number</code></li><li>Required: No</li></ul><p>YouTube component height</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio" aria-hidden="true">#</a> ratio</h3><ul><li>Type: <code>number</code></li><li>Default: <code>16 / 9</code></li></ul><p>YouTube component ratio, ONLY valid when <code>height</code> not set.</p><h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay" aria-hidden="true">#</a> autoplay</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether autoplay the video.</p><h3 id="loop" tabindex="-1"><a class="header-anchor" href="#loop" aria-hidden="true">#</a> loop</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether loop the video.</p><h3 id="showcc" tabindex="-1"><a class="header-anchor" href="#showcc" aria-hidden="true">#</a> showCc</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether display captions.</p><h3 id="showannotations" tabindex="-1"><a class="header-anchor" href="#showannotations" aria-hidden="true">#</a> showAnnotations</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether show annotations of the video.</p><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><ul><li>Type: <code>number</code></li><li>Required: No</li></ul><p>Start time of the video (in seconds).</p><h3 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> end</h3><ul><li>Type: <code>number</code></li><li>Required: No</li></ul><p>End time of the video (in seconds).</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>This time is counted from the beginning of the video.</p></div><h3 id="defaultcclang" tabindex="-1"><a class="header-anchor" href="#defaultcclang" aria-hidden="true">#</a> defaultCcLang</h3><ul><li>Type: <code>string</code></li><li>Default: <code>page.lang</code></li></ul><p>Default caption language.</p><h3 id="uilang" tabindex="-1"><a class="header-anchor" href="#uilang" aria-hidden="true">#</a> uiLang</h3><ul><li>Type: <code>string</code></li><li>Default: <code>page.lang</code></li></ul><p>UI language.</p><h3 id="listtype" tabindex="-1"><a class="header-anchor" href="#listtype" aria-hidden="true">#</a> listType</h3><ul><li>Type: <code>&quot;playlist&quot; | &quot;search&quot; | &quot;&quot;</code></li><li>Default: <code>&quot;&quot;</code></li></ul><p>List type.</p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>List value.</p><h3 id="playlist" tabindex="-1"><a class="header-anchor" href="#playlist" aria-hidden="true">#</a> playlist</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Play list id.</p><h3 id="disablecontrols" tabindex="-1"><a class="header-anchor" href="#disablecontrols" aria-hidden="true">#</a> disableControls</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether disable controls of the video.</p><h3 id="disablefullscreen" tabindex="-1"><a class="header-anchor" href="#disablefullscreen" aria-hidden="true">#</a> disableFullscreen</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether disable fullscreen button of the video.</p><h3 id="disablekeyboard" tabindex="-1"><a class="header-anchor" href="#disablekeyboard" aria-hidden="true">#</a> disableKeyboard</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether disable keyboard control of the video.</p>`,61);function g(T,m){const a=r("YouTube");return d(),t("div",null,[h,s(" more "),u,p,i(a,{id:"0JJPfz5dg20"}),b,i(a,{id:"0JJPfz5dg20","disable-fullscreen":""}),f,i(a,{"list-type":"playlist",list:"PLJNLwTPak6dhCRzVelZIs2-DfBp01NX_1"}),y])}const x=o(c,[["render",g],["__file","youtube.html.vue"]]);export{x as default};