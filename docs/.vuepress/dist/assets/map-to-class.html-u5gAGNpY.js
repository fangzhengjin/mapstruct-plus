import{_ as i,r as t,o as u,c as d,a as n,b as s,d as a,w as e,e as p}from"./app-R75PxRwX.js";const r={},k=p('<p>MapStructPlus provides more powerful function for <code>Map&lt;String, Object&gt;</code> to object</p><h2 id="usage" tabindex="-1">Usage</h2><p><strong>Just add the <code>@AutoMapMapper</code> annotation to the target class when you want to automatically generate the interface and implementation classes that <code>Map&lt;String, Object&gt;</code> to the target class.</strong></p><h2 id="the-supported-value-type" tabindex="-1">The supported value type</h2><ul><li><code>String</code></li><li><code>BigDecimal</code></li><li><code>BigInteger</code></li><li><code>Integer</code></li><li><code>Long</code></li><li><code>Double</code></li><li><code>Boolean</code></li><li><code>Date</code></li><li><code>LocalDateTime</code></li><li><code>LocalDate</code></li><li><code>LocalTime</code></li><li><code>URI</code></li><li><code>URL</code></li><li><code>Calendar</code></li><li><code>Currency</code></li><li><code>Custom classes(custom classes also require @AutoMapMapper annotation)</code></li></ul><h2 id="transformation-logic" tabindex="-1">Transformation logic</h2>',6),m={href:"https://hutool.cn/docs/#/core/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7%E7%B1%BB-Convert",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,[n("strong",null,[s("It also supports internally nested "),n("code",null,"Map<String, Object"),s(" attributes to internally nested custom type attributes.")])],-1),b=n("h2",{id:"example",tabindex:"-1"},"Example",-1),g=n("ul",null,[n("li",null,[s("Define two class："),n("code",null,"MapModelA"),s(" 和 "),n("code",null,"MapModelB")])],-1),M=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@AutoMapMapper"),s(`
`),n("span",{class:"token annotation punctuation"},"@Data"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MapModelA"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"String"),s(" str"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"int"),s(" i1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"Long"),s(" l2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"MapModelB"),s(" mapModelB"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@AutoMapMapper"),s(`
`),n("span",{class:"token annotation punctuation"},"@Data"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MapModelB"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"Date"),s(" date"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=p(`<ul><li>Test</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuickStartTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Converter</span> converter<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> mapModel1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapModel1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1jkf1ijkj3f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapModel1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;i1&quot;</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapModel1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;l2&quot;</span><span class="token punctuation">,</span> <span class="token number">11231</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> mapModel2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapModel2<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;2023-02-23 01:03:23&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        mapModel1<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;mapModelB&quot;</span><span class="token punctuation">,</span> mapModel2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">final</span> <span class="token class-name">MapModelA</span> mapModelA <span class="token operator">=</span> converter<span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>mapModel1<span class="token punctuation">,</span> <span class="token class-name">MapModelA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mapModelA<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// MapModelA(str=1jkf1ijkj3f, i1=111, l2=11231, mapModelB=MapModelB(date=2023-02-23 01:03:23))</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(y,B){const c=t("ExternalLinkIcon"),o=t("CodeGroupItem"),l=t("CodeGroup");return u(),d("div",null,[k,n("p",null,[n("strong",null,[s("For an attribute in the target class, it first determintes whether the key exists in the Map. If it does, it first determines the type, the conversion is attempted to the target type based on the type conversion tool provided by "),n("a",m,[s("Hutool"),a(c)])])]),v,b,g,a(l,null,{default:e(()=>[a(o,{title:"MapModelA"},{default:e(()=>[M]),_:1}),a(o,{title:"MapModelB"},{default:e(()=>[h]),_:1})]),_:1}),_])}const j=i(r,[["render",f],["__file","map-to-class.html.vue"]]);export{j as default};
