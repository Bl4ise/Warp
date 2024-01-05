import{_ as t,D as n,c as l,m as s,a as i,I as p,U as a,o as h}from"./chunks/framework.BouBWMxc.js";const B=JSON.parse('{"title":"Server","description":"","frontmatter":{},"headers":[],"relativePath":"api/1.0/server.md","filePath":"api/1.0/server.md"}'),k={name:"api/1.0/server.md"},d=a(`<h1 id="server" tabindex="-1">Server <a class="header-anchor" href="#server" aria-label="Permalink to &quot;Server&quot;">​</a></h1><p>For Server-sided</p><h2 id="server-1" tabindex="-1"><code>.Server</code> <a class="header-anchor" href="#server-1" aria-label="Permalink to &quot;\`.Server\`&quot;">​</a></h2><p>Create new Warp event.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-57xOi" id="tab-NGm3bwT" checked="checked"><label for="tab-NGm3bwT">Variable</label><input type="radio" name="group-57xOi" id="tab-xJTaSRi"><label for="tab-xJTaSRi">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	Identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	rateLimit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		maxEntrance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Remote </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Warp.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Remote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="connect" tabindex="-1"><code>:Connect</code> <a class="header-anchor" href="#connect" aria-label="Permalink to &quot;\`:Connect\`&quot;">​</a></h2><p>Connect event to receive incoming from client way.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8yT3f" id="tab-2m4jbXs" checked="checked"><label for="tab-2m4jbXs">Variable</label><input type="radio" name="group-8yT3f" id="tab-jjbAh0p"><label for="tab-jjbAh0p">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Player,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">any) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): string</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, ...)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="once" tabindex="-1"><code>:Once</code> <a class="header-anchor" href="#once" aria-label="Permalink to &quot;\`:Once\`&quot;">​</a></h2><p>This function likely <code>:Connect</code> but it disconnect the event once it fired.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0FKPj" id="tab-zbCqE2v" checked="checked"><label for="tab-zbCqE2v">Variable</label><input type="radio" name="group-0FKPj" id="tab-HOwRQsL"><label for="tab-HOwRQsL">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Player,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">any) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, ...)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="disconnect" tabindex="-1"><code>:Disconnect</code> <a class="header-anchor" href="#disconnect" aria-label="Permalink to &quot;\`:Disconnect\`&quot;">​</a></h2><p>Disconnect the event connection.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Xa8q7" id="tab-TtFdp-Z" checked="checked"><label for="tab-TtFdp-Z">Variable</label><input type="radio" name="group-Xa8q7" id="tab-4XTxKsz"><label for="tab-4XTxKsz">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> connection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, ...) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- store the key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Disconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(connection)</span></span></code></pre></div></div></div><h2 id="disconnectall" tabindex="-1"><code>:DisconnectAll</code> <a class="header-anchor" href="#disconnectall" aria-label="Permalink to &quot;\`:DisconnectAll\`&quot;">​</a></h2><p>Disconnect All the event connection.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DisconnectAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="fire" tabindex="-1"><code>:Fire</code> <a class="header-anchor" href="#fire" aria-label="Permalink to &quot;\`:Fire\`&quot;">​</a></h2><p>Fire the event to a client.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-q2G3p" id="tab-QUgoIAc" checked="checked"><label for="tab-QUgoIAc">Variable</label><input type="radio" name="group-q2G3p" id="tab-SU77jnw"><label for="tab-SU77jnw">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	reliable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Player,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Fire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, player, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div>`,20),r={id:"fires",tabindex:"-1"},o=s("code",null,":Fires",-1),c=s("a",{class:"header-anchor",href:"#fires","aria-label":'Permalink to "`:Fires` <Badge type="tip" text="Server Only" />"'},"​",-1),E=a(`<p>Fire the event to all clients.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-54vBg" id="tab-uI0eydK" checked="checked"><label for="tab-uI0eydK">Variable</label><input type="radio" name="group-54vBg" id="tab-JmoxgRU"><label for="tab-JmoxgRU">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	reliable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Fires</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="invoke" tabindex="-1"><code>:Invoke</code> <a class="header-anchor" href="#invoke" aria-label="Permalink to &quot;\`:Invoke\`&quot;">​</a></h2><p>Semiliar to <code>:InvokeClient</code>, its for Invoke to a client.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EVFwh" id="tab-80WyNJk" checked="checked"><label for="tab-80WyNJk">Variable</label><input type="radio" name="group-EVFwh" id="tab-SafarTi"><label for="tab-SafarTi">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Player,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">any)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Invoke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, player, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function is yielded, once it timeout it will return nil.</p></div><h2 id="wait" tabindex="-1"><code>:Wait</code> <a class="header-anchor" href="#wait" aria-label="Permalink to &quot;\`:Wait\`&quot;">​</a></h2><p>Wait the event being triggered.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Wait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function is yielded, Invoke might also ping this one and also causing error.</p></div><h2 id="destroy" tabindex="-1"><code>:Destroy</code> <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;\`:Destroy\`&quot;">​</a></h2><p>Disconnect all connection of event and remove the event from Warp.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div>`,13);function g(y,u,v,b,F,C){const e=n("Badge");return h(),l("div",null,[d,s("h2",r,[o,i(),p(e,{type:"tip",text:"Server Only"}),i(),c]),E])}const f=t(k,[["render",g]]);export{B as __pageData,f as default};