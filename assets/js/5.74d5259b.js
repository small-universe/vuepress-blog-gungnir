(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{609:function(t,e,a){},610:function(t,e,a){},615:function(t,e,a){var s=a(2),n=a(325);s({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},616:function(t,e,a){"use strict";a(609)},617:function(t,e,a){"use strict";a(610)},624:function(t,e,a){"use strict";var s={props:{data:{type:Object,required:!0}}},n=(a(616),a(131)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pager"},[t.data.next?a("router-link",{staticClass:"next",attrs:{to:t.data.next.link}},[t._v("\n    "+t._s(t.data.next.text)),a("br"),t._v(" "),t.data.next.subtext?a("span",[t._v("\n      "+t._s(t.data.next.subtext)+"\n    ")]):t._e()]):t._e(),t._v(" "),t.data.prev?a("router-link",{staticClass:"previous",attrs:{to:t.data.prev.link}},[t._v("\n    "+t._s(t.data.prev.text)),a("br"),t._v(" "),t.data.prev.subtext?a("span",[t._v("\n      "+t._s(t.data.prev.subtext)+"\n    ")]):t._e()]):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},648:function(t,e,a){},649:function(t,e,a){},650:function(t,e,a){},677:function(t,e,a){"use strict";a(648)},678:function(t,e,a){"use strict";a(649)},679:function(t,e,a){t.exports=a.p+"assets/img/default-wallpaper.6d56b5af.jpeg"},680:function(t,e,a){"use strict";a(650)},691:function(t,e,a){"use strict";a.r(e);a(1),a(171),a(22),a(4),a(9),a(615),a(27);var s=a(170),n={filters:{formatDateValue:function(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));var e=Number(t.substr(11,2)),a=Number(t.substr(14,2)),n=Number(t.substr(17,2));return e>0||a>0||n>0?Object(s.c)(t):Object(s.c)(t,"yyyy-MM-dd")}},props:{item:{type:Object,required:!0}}},i=(a(677),a(131)),o={components:{PostListItem:Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-item-img"},[a("div",{staticClass:"post-item-img__img",on:{click:function(e){return t.$router.push(t.item.path)}}},[a("img",{attrs:{src:t.$withBase(t.item.frontmatter.header_img)}})]),t._v(" "),a("div",{staticClass:"else"},[t.item.frontmatter.date?a("p",{staticClass:"post-item-img__date"},[t._v("\n      "+t._s(t._f("formatDateValue")(t.item.frontmatter.date))+"\n    ")]):t._e(),t._v(" "),a("router-link",{staticClass:"post-item-img__title",attrs:{to:t.item.path}},[a("h2",[t._v("\n        "+t._s(t.item.frontmatter.title)+"\n      ")]),t._v(" "),t.item.frontmatter.subtitle?a("h3",[t._v("\n        "+t._s(t.item.frontmatter.subtitle)+"\n      ")]):t._e()]),t._v(" "),a("div",{staticClass:"post-item-img__content",domProps:{innerHTML:t._s(t.item.excerpt)}})],1)])}),[],!1,null,"01831cc0",null).exports,Pager:a(624).a},props:{data:{type:Array,default:function(){return[]}}},computed:{getPagerData:function(){var t={};return this.$pagination.hasPrev&&(t.next={},t.next.text=this.$themeLocales.homePrev,t.next.link=this.$pagination.prevLink),this.$pagination.hasNext&&(t.prev={},t.prev.text=this.$themeLocales.homeNext,t.prev.link=this.$pagination.nextLink),t}}},r=(a(678),Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"postlist-wrapper"},[this._l(this.data,(function(t){return e("PostListItem",{key:t.path,attrs:{item:t}})})),this._v(" "),e("Pager",{attrs:{data:this.getPagerData}})],2)}),[],!1,null,null,null).exports),c=a(661),l=a(679),h={components:{PostList:r,SNS:c.a},data:function(){return{currentPage:1,tags:[],bgImageID:0,bgImagePath:"",headerOpacity:1}},computed:{heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){var t=this;if(this.$themeConfig.homeHeaderImages.local?(this.bgImageID=Math.floor(Math.random()*this.$themeConfig.homeHeaderImages.local.length),this.setImagePathByID()):this.getUnsplash(),window.addEventListener("scroll",Object(s.d)(this.handleScroll,50)),this.$themeConfig.hitokoto){var e=this.$themeConfig.hitokoto.api||"https://v1.hitokoto.cn";fetch(e).then((function(t){return t.json()})).then((function(e){t.$refs.hitokoto.innerText=e.hitokoto})).catch("Get ".concat(e," error: "),console.error)}},beforeDestroy:function(){window.removeEventListener("scroll",Object(s.d)(this.handleScroll,50))},methods:{switchImage:function(t){if(this.$themeConfig.homeHeaderImages.local){var e=this.$themeConfig.homeHeaderImages.local.length;this.bgImageID=(this.bgImageID+t+e)%e,this.setImagePathByID()}else this.getUnsplash()},getUnsplash:function(){var t=this,e=this.$themeConfig.homeHeaderImages.api;fetch(e).then((function(e){t.bgImagePath=e.url})).catch((function(a){console.log("Get ".concat(e," error: "),a),t.bgImagePath=l}))},setImagePathByID:function(){this.bgImagePath=this.$withBase(this.$themeConfig.homeHeaderImages.local[this.bgImageID].path)},scrollToPost:function(){window.scrollTo({top:this.heroHeight,behavior:"smooth"})},handleScroll:function(){var t=window.pageYOffset,e=document.documentElement.clientHeight;this.headerOpacity=1-1.2*t/e}}},m=(a(680),{components:{Home:Object(i.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-blog"},[a("div",{staticClass:"hero",style:{"background-image":"url("+t.bgImagePath+")"}},[t.$themeConfig.homeHeaderImages.local&&t.$themeConfig.homeHeaderImages.local[t.bgImageID].mask?a("div",{staticClass:"header-mask",style:{background:t.$themeConfig.homeHeaderImages.local[t.bgImageID].mask}}):t._e(),t._v(" "),a("div",{staticClass:"header-content",style:{opacity:t.headerOpacity}},[a("img",{staticClass:"hero-avatar hide-on-mobile",attrs:{src:t.$withBase(t.$themeConfig.personalInfo.avatar),alt:"hero"}}),t._v(" "),t.$themeConfig.hitokoto?a("div",{staticClass:"hero-bubble"},[a("div",{staticClass:"hero-bubble__body"},[a("p",{ref:"hitokoto"},[t._v("正在加载一言...")])]),t._v(" "),a("div",{staticClass:"hero-bubble__tile"})]):t._e(),t._v(" "),a("div",{staticClass:"hero-info"},[a("div",{staticClass:"hero-info__text"},[a("h1",[t._v(t._s(t.$themeConfig.personalInfo.name||t.$title))]),t._v(" "),a("p",{staticClass:"description"},[t._v("\n            "+t._s(t.$themeConfig.personalInfo.description||t.$description)+"\n          ")])])]),t._v(" "),a("SNS",{staticClass:"hide-on-mobile",attrs:{large:""}}),t._v(" "),a("button",{staticClass:"img-prev hide-on-mobile",on:{click:function(e){return t.switchImage(-1)}}},[a("v-icon",{attrs:{name:"fa-chevron-left"}})],1),t._v(" "),a("button",{staticClass:"img-next hide-on-mobile",on:{click:function(e){return t.switchImage(1)}}},[a("v-icon",{attrs:{name:"fa-chevron-right"}})],1),t._v(" "),a("span",{staticClass:"arrow-down hide-on-mobile",on:{click:function(e){return t.scrollToPost()}}},[a("v-icon",{attrs:{name:"fa-chevron-down",animation:"float",scale:"1.7"}})],1)],1)]),t._v(" "),a("PostList",{staticClass:"home-blog-wrapper",attrs:{data:t.$pagination.pages}})],1)}),[],!1,null,null,null).exports,Common:a(611).a}}),u=(a(617),Object(i.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("Common",[e("Home")],1)}),[],!1,null,null,null));e.default=u.exports}}]);