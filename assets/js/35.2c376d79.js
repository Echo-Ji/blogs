(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{303:function(t,s,a){"use strict";a.r(s);var i=a(5),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("生成模型是区别于判别模型而言的一种监督学习模型，它是一种概率模型，比如决策树、朴素贝叶斯、HMM、GMM、条件随机场等。\n而非概率模型有感知机、支持向量机、kNN、AdaBoost、K-means、神经网络等。")]),t._v(" "),a("h2",{attrs:{id:"em-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#em-算法"}},[t._v("#")]),t._v(" EM 算法")]),t._v(" "),a("p",[t._v("EM 算法是一种迭代算法，用于含有隐变量的概率模型的极大似然估计。")]),t._v(" "),a("p",[t._v("其核心是 Q 函数的确定，")]),t._v(" "),a("blockquote",[a("p",[t._v("Q函数就是完全数据的对数似然函数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("log")]),a("mi",[t._v("P")]),a("mo",[t._v("(")]),a("mi",[t._v("Y")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("Z")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("θ")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\log P(Y, Z | \\theta)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 在给定观测数据 Y 和当前参数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("θ")]),a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("i")]),a("mo",[t._v(")")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\theta^{(i)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8879999999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8879999999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" 的情况下关于未观测数据 Z 的条件概率分布 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("P")]),a("mo",[t._v("(")]),a("mi",[t._v("Z")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("Y")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msup",[a("mi",[t._v("θ")]),a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("i")]),a("mo",[t._v(")")])],1)],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P(Z|Y, \\theta^{(i)})")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8879999999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.138em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 的期望。写作 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("Q")]),a("mo",[t._v("(")]),a("mi",[t._v("θ")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("msup",[a("mi",[t._v("θ")]),a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("i")]),a("mo",[t._v(")")])],1)],1),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("msub",[a("mi",[t._v("E")]),a("mrow",[a("mi",[t._v("Z")])],1)],1),a("mo",[t._v("[")]),a("mi",[t._v("log")]),a("mi",[t._v("P")]),a("mo",[t._v("(")]),a("mi",[t._v("Y")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("Z")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("θ")]),a("mo",[t._v(")")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("Y")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msup",[a("mi",[t._v("θ")]),a("mrow",[a("mo",[t._v("(")]),a("mi",[t._v("i")]),a("mo",[t._v(")")])],1)],1),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q(\\theta. \\theta^{(i)}) = E_{Z}[\\log P(Y, Z | \\theta) | Y, \\theta^{(i)}]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8879999999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.138em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("Q")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.05764em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("Z")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("Y")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("。")])]),t._v(" "),a("p",[t._v("当确定了 Q 函数之后，通过 E 步和 M 步分别求 Q 和 极大化 Q 即可迭代求解参数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("θ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\theta")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("θ")])])])]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"hmm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmm"}},[t._v("#")]),t._v(" HMM")]),t._v(" "),a("p",[t._v("隐马尔科夫模型（HMM）是关于时序的概率模型，描述一个由马尔科夫链随机生成不可观测的"),a("strong",[t._v("状态序列")]),t._v("，再由各个状态随机生成一个观测从而产生"),a("strong",[t._v("观测序列")]),t._v("的过程。\n其三要素为")]),t._v(" "),a("ul",[a("li",[t._v("初始状态向量 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("π")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\pi")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")])])])])]),t._v(" "),a("li",[t._v("状态转移概率矩阵 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("A")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("A")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("A")])])])])]),t._v(" "),a("li",[t._v("观测概率矩阵 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("B")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("B")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")])])])])])]),t._v(" "),a("p",[t._v("在给定三要素的情况下，HMM 模型表示为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("λ")]),a("mo",[t._v("=")]),a("mo",[t._v("(")]),a("mi",[t._v("A")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("B")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("π")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lambda = (A, B, \\pi)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("λ")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("A")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("π")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，它是一个生成模型，表示状态序列和观测序列的联合分布。\nHMM 涉及到三个问题")]),t._v(" "),a("ul",[a("li",[t._v("概率计算问题：给定 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("λ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lambda")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("λ")])])])]),t._v(" 和观测序列 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",[t._v("=")]),a("mo",[t._v("(")]),a("msub",[a("mi",[t._v("o")]),a("mn",[t._v("1")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("o")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mo",[t._v("⋯")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("o")]),a("mi",[t._v("T")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O = (o_1, o_2, \\cdots, o_T)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"minner"},[t._v("⋯")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，计算 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("P")]),a("mo",[t._v("(")]),a("mi",[t._v("O")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("λ")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P(O | \\lambda)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit"},[t._v("λ")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，前向-后向算法可以高效进行概率计算。")]),t._v(" "),a("li",[t._v("学习问题：已知观测序列 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])])])]),t._v("，估计模型 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("λ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lambda")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("λ")])])])]),t._v(" 的参数，使得在该模型下观测序列概率 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("P")]),a("mo",[t._v("(")]),a("mi",[t._v("O")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("λ")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P(O | \\lambda)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit"},[t._v("λ")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 最大，此时需要 EM 算法的支持。")]),t._v(" "),a("li",[t._v("预测问题：已知模型 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("λ")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lambda")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("λ")])])])]),t._v(" 和观测序列 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])])])]),t._v("，求使得 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("P")]),a("mo",[t._v("(")]),a("mi",[t._v("I")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",[t._v("O")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P(I | O)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07847em"}},[t._v("I")]),a("span",{staticClass:"mord mathrm"},[t._v("∣")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 最大的状态序列，维特比算法应用动态规划算法求解路径结构中的最优路径。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);