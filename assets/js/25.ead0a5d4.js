(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{295:function(s,t,a){"use strict";a.r(t);var e=a(5),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-几何分布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-几何分布"}},[s._v("#")]),s._v(" 1 几何分布")]),s._v(" "),a("p",[s._v("在伯努利实验中，记每次试验中事件 A 发生的概率为 p，试验进行到事件 A 出现停止，此时所进行的试验次数为 X，其分布就是几何分布。")]),s._v(" "),a("p",[s._v("该分布的期望为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("/")]),a("mi",[s._v("p")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("1/p")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("/")]),a("span",{staticClass:"mord mathit"},[s._v("p")])])])]),s._v("，方差为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mfrac",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("−")]),a("mi",[s._v("p")])],1),a("mrow",[a("msup",[a("mi",[s._v("p")]),a("mn",[s._v("2")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\frac{1-p}{p^2}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.897216em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.378324em","vertical-align":"-0.481108em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord reset-textstyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.345em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.289em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-scriptstyle scriptscriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.44610799999999995em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathit"},[s._v("p")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_2-c-语言结构体大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-c-语言结构体大小"}},[s._v("#")]),s._v(" 2 C 语言结构体大小")]),s._v(" "),a("p",[s._v("结构体内偏移规则：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("每个成员的偏移量必须是当前成员所占内存大小的整数倍")]),s._v("，若不是则编译器会在成员之前加上填充字节。")]),s._v(" "),a("li",[s._v("当所有成员大小计算完毕后，编译器判断当前"),a("strong",[s._v("结构体大小是否是结构体中最宽的成员变量大小的整数倍")]),s._v("，若不是则会在最后一个成员后做字节填充。")])]),s._v(" "),a("p",[s._v("例如下面的结构体，")]),s._v(" "),a("div",{staticClass:"language-C ++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("foo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("\t\ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("\tb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("\t\tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v("\td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("该结构体的大小就是 32 个字节。")]),s._v(" "),a("h3",{attrs:{id:"_3-相对熵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-相对熵"}},[s._v("#")]),s._v(" 3 相对熵")]),s._v(" "),a("p",[s._v("熵反应一个系统有序化的程度，越有序熵越低。如果一个随机变量 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("X")]),a("mo",[s._v("=")]),a("mrow",[a("msub",[a("mi",[s._v("x")]),a("mn",[s._v("1")])],1),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("msub",[a("mi",[s._v("x")]),a("mn",[s._v("2")])],1),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mo",[s._v("⋯")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("n")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("X = {x_1, x_2, \\cdots, x_n}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("X")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"minner"},[s._v("⋯")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("n")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v("，对应的概率为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("mi",[s._v("X")]),a("mo",[s._v("=")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")]),a("mo",[s._v("(")]),a("mi",[s._v("i")]),a("mo",[s._v("=")]),a("mn",[s._v("1")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mn",[s._v("2")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mo",[s._v("⋯")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("p(X = x_i) (i = 1, 2, \\cdots, n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("X")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"minner"},[s._v("⋯")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("，则随机变量 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("X")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("X")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("X")])])])]),s._v(" 的熵定义为")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("H")]),a("mo",[s._v("(")]),a("mi",[s._v("X")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mo",[s._v("−")]),a("msubsup",[a("mo",[s._v("∑")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("=")]),a("mn",[s._v("1")])],1),a("mrow",[a("mi",[s._v("n")])],1)],1),a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")]),a("mi",[s._v("log")]),a("mrow",[a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("H(X) = -\\sum_{i=1}^{n}p(x_i)\\log{p(x_i)}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.6513970000000002em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.929066em","vertical-align":"-1.277669em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.08125em"}},[s._v("H")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("X")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"1.1776689999999999em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),a("span",{staticStyle:{top:"-0.000005000000000143778em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",[a("span",{staticClass:"op-symbol large-op mop"},[s._v("∑")])])]),a("span",{staticStyle:{top:"-1.2500050000000003em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("n")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mop"},[s._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[s._v("g")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])])]),s._v(" "),a("p",[s._v("相对熵也叫交叉熵，KL 散度等。设 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("mi",[s._v("x")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("p(x)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" 和 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("q")]),a("mo",[s._v("(")]),a("mi",[s._v("x")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("q(x)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("q")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" 是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("X")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("X")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[s._v("X")])])])]),s._v(" 取值的两个概率密度分布，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("p")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("p")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")])])])]),s._v(" 对 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("q")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("q")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("q")])])])]),s._v(" 的相对熵为")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("D")]),a("mo",[s._v("(")]),a("mi",[s._v("p")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("∣")]),a("mi",[s._v("q")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("msubsup",[a("mo",[s._v("∑")]),a("mrow",[a("mi",[s._v("i")])],1),a("mrow",[a("mi",[s._v("n")])],1)],1),a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")]),a("mi",[s._v("log")]),a("mrow",[a("mfrac",[a("mrow",[a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")])],1),a("mrow",[a("mi",[s._v("q")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("D(p||q) = \\sum_{i}^{n}p(x_i)\\log{\\frac{p(x_i)}{q(x_i)}}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.6513970000000002em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.929066em","vertical-align":"-1.277669em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("D")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathrm"},[s._v("∣")]),a("span",{staticClass:"mord mathrm"},[s._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("q")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"1.1776689999999999em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])])]),a("span",{staticStyle:{top:"-0.000005000000000143778em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",[a("span",{staticClass:"op-symbol large-op mop"},[s._v("∑")])])]),a("span",{staticStyle:{top:"-1.2500050000000003em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("n")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mop"},[s._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[s._v("g")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("q")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),a("span",{staticStyle:{top:"-0.2300000000000001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])])]),s._v(" "),a("p",[s._v("在一定程度上，熵可以度量两个分布的距离。KL 散度是两个概率分布 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("P")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("P")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("P")])])])]),s._v(" 和 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("Q")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("Q")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("Q")])])])]),s._v(" 差别的非对称性度量。KL 散度是用来度量使用基于 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("Q")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("Q")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("Q")])])])]),s._v(" 的编码来编码来自 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("P")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("P")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("P")])])])]),s._v(" 的样本平均所需的额外的位元数。典型情况下，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("P")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("P")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("P")])])])]),s._v(" 表示真实分布，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("Q")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("Q")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("Q")])])])]),s._v(" 表示数据的理论分布，或 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("P")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("P")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[s._v("P")])])])]),s._v(" 的近似分布。")]),s._v(" "),a("p",[s._v("相对熵具有非负性和不对称性。"),a("em",[s._v("前向 KL 散度是“0避免”的，后向 KL 散度是“0趋近”的。")])])])}),[],!1,null,null,null);t.default=i.exports}}]);