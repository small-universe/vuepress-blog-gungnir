(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{601:function(t,e,a){},602:function(t,e,a){},603:function(t,e,a){"use strict";a(601)},608:function(t,e,a){"use strict";a(602)},609:function(t,e,a){"use strict";var s={props:{pageInfo:{type:Object,default:function(){return{}}}},computed:{headerImage:function(){return this.pageInfo.bgImage?{backgroundImage:"url(".concat(this.$withBase(this.pageInfo.bgImage.path),")")}:{}}}},n=(a(608),a(125)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header",class:{"style-img":t.pageInfo.bgImage},style:t.headerImage},[t.pageInfo.bgImage&&t.pageInfo.bgImage.mask?a("div",{staticClass:"header-mask",style:{background:t.pageInfo.bgImage.mask}}):t._e(),t._v(" "),a("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.pageInfo.title||t.$page.frontmatter.title)+"\n  ")]),t._v(" "),t.pageInfo.subtitle?a("h3",{staticClass:"subtitle"},[t._v("\n    "+t._s(t.pageInfo.subtitle)+"\n  ")]):t._e()])}),[],!1,null,"56febcde",null);e.a=i.exports},650:function(t,e,a){},681:function(t,e,a){"use strict";a(650)},693:function(t,e,a){"use strict";a.r(e);var s=a(606),n=a(609),i={name:"Read",components:{Common:s.a,PageHeader:n.a},data:function(){return{bookList:[]}},computed:{getPageInfo:function(){return this.$themeConfig.pages&&this.$themeConfig.pages.reading?this.$themeConfig.pages.reading:{}}},created:function(){this.bookList=this.initBookList()},methods:{initBookList:function(){var t=this.$page.frontmatter.categories,e=[];for(var a in t){var s=t[a],n=s.category,i=s.books;for(var o in i){var r=i[o];r.category=n,e.push(r)}}return e},clickLink:function(t){window.open(t)}}},o=(a(681),a(603),a(125)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Common",{staticClass:"read"},[a("PageHeader",{attrs:{"page-info":t.getPageInfo}}),t._v(" "),a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:10}},t._l(t.bookList,(function(e){return a("el-col",{key:e.key,staticClass:"book-card"},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:12}},[a("el-image",{staticStyle:{width:"100px",height:"126px"},attrs:{src:e.cover,"preview-src-list":[e.cover]}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("h5",[t._v(t._s(e.author))])])],1),t._v(" "),a("el-divider",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"card-foot"},[a("el-row",{attrs:{gutter:2}},[a("el-col",{staticClass:"col-button",attrs:{span:8}},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-reading",size:"small"}},[t._v("PDF")])],1),t._v(" "),a("el-col",{staticClass:"col-button",attrs:{span:8}},[a("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-share",size:"small"}},[t._v("笔记")])],1),t._v(" "),a("el-col",{staticClass:"col-button",attrs:{span:8}},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-magic-stick",size:"small",disabled:null==e.link},on:{click:function(a){return t.clickLink(e.link)}}},[t._v("链接")])],1)],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,"24b51c53",null);e.default=r.exports}}]);