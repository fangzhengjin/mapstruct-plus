import{_ as s,X as n,Y as a,a1 as l}from"./framework-2d755bf3.js";const o={},p=l(`<blockquote><p>当前特性从 1.2.2 开始支持</p></blockquote><p>当需要进行枚举转换时（例如枚举转换为编码值，或者又编码转换为枚举），可以在目标枚举添加 <code>@AutoEnumMapper</code> 注解， 增加该注解后，在任意类型中需要转换该枚举时都可以自动转换。</p><p>使用该注解需要注意：<strong>当前注解必须有一个可以保证唯一的字段</strong>，并在使用当前注解时，将该字段名，添加到注解提供的 <code>value</code> 属性中。</p><p>还有就是<strong>注解和使用注解的类，要在同一个模块中</strong>。</p><p>例如：</p><ul><li>商品状态枚举（<code>Goods</code>）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Getter</span></span>
<span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">AllArgsConstructor</span></span>
<span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">AutoEnumMapper</span><span style="color:#E06C75;">(</span><span style="color:#98C379;">&quot;state&quot;</span><span style="color:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">enum</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">GoodsStateEnum</span><span style="color:#E06C75;"> {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#D19A66;">ENABLED</span><span style="color:#E06C75;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#98C379;">&quot;启用&quot;</span><span style="color:#E06C75;">)</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#D19A66;">DISABLED</span><span style="color:#E06C75;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#98C379;">&quot;禁用&quot;</span><span style="color:#E06C75;">)</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Integer</span><span style="color:#E06C75;"> state</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">String</span><span style="color:#E06C75;"> desc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在当前枚举中添加注解 <code>@AutoEnumMapper</code>，且指定唯一字段为 <code>state</code>。</p><ul><li>商品类（<code>Goods</code>）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Data</span></span>
<span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">AutoMapper</span><span style="color:#E06C75;">(</span><span style="color:#D19A66;">target</span><span style="color:#E06C75;"> </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">GoodsVo</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">reverseConvertGenerate</span><span style="color:#E06C75;"> </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">false</span><span style="color:#E06C75;">)</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Goods</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">GoodsStateEnum</span><span style="color:#E06C75;"> state</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>商品VO对象（<code>GoodsVo</code>）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Data</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">GoodsVo</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Integer</span><span style="color:#E06C75;"> state</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">@</span><span style="color:#E5C07B;">Test</span></span>
<span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">void</span><span style="color:#E06C75;"> </span><span style="color:#61AFEF;">enumMapTest</span><span style="color:#E06C75;">() {</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">GoodsVo</span><span style="color:#E06C75;"> goodsVo </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">converter</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">convert</span><span style="color:#ABB2BF;">(goods, </span><span style="color:#E5C07B;">GoodsVo</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(goodsVo);</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">Assert</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">equals</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">goodsVo</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getState</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">goods</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getState</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">getState</span><span style="color:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">final</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Goods</span><span style="color:#E06C75;"> goods2 </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">converter</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">convert</span><span style="color:#ABB2BF;">(goodsVo, </span><span style="color:#E5C07B;">Goods</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">class</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(goods2);</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">Assert</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">equals</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">goods2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getState</span><span style="color:#ABB2BF;">(), </span><span style="color:#E5C07B;">GoodsStateEnum</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">ENABLED</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),e=[p];function c(r,t){return n(),a("div",null,e)}const B=s(o,[["render",c],["__file","enum-convert.html.vue"]]);export{B as default};
