(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{424:function(t,e,o){},425:function(t,e,o){},469:function(t,e,o){"use strict";o(424)},470:function(t,e,o){"use strict";o(425)},479:function(t,e,o){"use strict";o.r(e);o(41),o(19),o(47),o(48);var a={name:"CodeGroup",data:function(){return{codeTabs:[],activeCodeTabIndex:-1}},watch:{activeCodeTabIndex:function(t){this.activateCodeTab(t)}},mounted:function(){this.loadTabs()},methods:{changeCodeTab:function(t){this.activeCodeTabIndex=t},loadTabs:function(){var t=this;this.codeTabs=(this.$slots.default||[]).filter((function(t){return Boolean(t.componentOptions)})).map((function(e,o){return""===e.componentOptions.propsData.active&&(t.activeCodeTabIndex=o),{title:e.componentOptions.propsData.title,elm:e.elm}})),-1===this.activeCodeTabIndex&&this.codeTabs.length>0&&(this.activeCodeTabIndex=0),this.activateCodeTab(0)},activateCodeTab:function(t){this.codeTabs.forEach((function(t){t.elm&&t.elm.classList.remove("theme-code-block__active")})),this.codeTabs[t].elm&&this.codeTabs[t].elm.classList.add("theme-code-block__active")}}},n=(o(469),o(470),o(58)),c=Object(n.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ClientOnly",[o("div",{staticClass:"theme-code-group"},[o("div",{staticClass:"theme-code-group__nav"},[o("ul",{staticClass:"theme-code-group__ul"},t._l(t.codeTabs,(function(e,a){return o("li",{key:e.title,staticClass:"theme-code-group__li"},[o("button",{staticClass:"theme-code-group__nav-tab",class:{"theme-code-group__nav-tab-active":a===t.activeCodeTabIndex},on:{click:function(e){return t.changeCodeTab(a)}}},[t._v("\n              "+t._s(e.title)+"\n            ")])])})),0)]),t._v(" "),t._t("default"),t._v(" "),t.codeTabs.length<1?o("pre",{staticClass:"pre-blank"},[t._v("// Make sure to add code blocks to your code group")]):t._e()],2)])}),[],!1,null,"88749c46",null);e.default=c.exports}}]);