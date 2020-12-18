(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{414:function(t,e,r){"use strict";r.r(e);r(70),r(54),r(81),r(22),r(50);var n={name:"TopicPath",computed:{breadcrumbs:function(){var t=this.$route.path.split("/");return t.shift(),t.map((function(t,i,e){return{text:t,to:"/".concat(e.slice(0,i+1).join("/")),exact:!0,nuxt:!0}}))}}},c=r(15),o=r(12),l=r.n(o),d=r(2),m=(r(417),r(55)),f=r(4);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=Object(f.a)(m.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(d.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,v(v({},data),{},{attrs:v(v({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),y=r(0),O=Object(y.g)("v-breadcrumbs__divider","li"),_=r(11);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w=Object(f.a)(_.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(O,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(x,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:this.breadcrumbs,divider:"/"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBreadcrumbs:w})},417:function(t,e,r){var content=r(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("b1bed018",content,!0,{sourceMap:!1})},418:function(t,e,r){(e=r(7)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=e},427:function(t,e,r){var content=r(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("6876d6b1",content,!0,{sourceMap:!1})},467:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleBody",props:{article:{type:Object,required:!0}}},c=r(15),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("nuxt-content",{attrs:{document:this.article}})],1)}),[],!1,null,null,null);e.default=component.exports},473:function(t,e,r){"use strict";r(427)},474:function(t,e,r){(e=r(7)(!1)).push([t.i,".article-title{font-size:1.4rem}.creation_date{font-size:.7rem}.headline,.nuxt-content h1{border-bottom:1px solid #ddd;margin-top:49px;margin-bottom:24px}.nuxt-content h1{font-size:1.25rem;font-weight:400}.nuxt-content h2{font-size:1.15rem;font-weight:400}.nuxt-content h3{font-size:1.05rem;font-weight:500}.nuxt-content h4{font-size:.95;font-weight:600}.nuxt-content p{line-height:2rem}.nuxt-content p img{max-width:100%;height:auto;display:block;margin:auto;text-align:center}",""]),t.exports=e},525:function(t,e,r){"use strict";r.r(e);r(17),r(61),r(88);var n=r(21),c=r(414),o=r(467),l=r(415),d={components:{ArticleBody:o.default,TopicPath:c.default,ArticleList:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.category,n.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles",n.category).limit(6).fetch();case 6:return c=(c=e.sent).filter((function(article){return article.slug!==n.slug})),e.abrupt("return",{article:article,categorizedArticles:c,params:n});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," | ").concat(this.params.category),meta:this.article.meta_tag.concat([{hid:"og:url",property:"og:url",content:"https://tedxnagoyau.com"+this.$route.path}])}}},m=(r(473),r(15)),f=r(12),h=r.n(f),v=r(399),x=r(189),y=r(401),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[r("topic-path")],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[r("h1",{staticClass:"article-title"},[r("span",[t._v(t._s(t.article.title))])]),t._v(" "),r("span",{staticClass:"text--disabled creation_date"},[t._v("作成日時: "+t._s(t.article.date))])])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"6"}},[r("article-body",{attrs:{article:t.article}})],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"10",md:"10",lg:"7",xl:"7"}},t._l(t.article.tags,(function(e){return r("span",{key:e},[r("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/articles/tags/"+e}},[r("v-icon",[t._v("mdi-tag")]),t._v("\n          "+t._s(e)+"\n        ")],1)],1)})),0)],1),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[r("v-col",{attrs:{xs:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[r("h1",{staticClass:"pl-1",staticStyle:{"font-size":"1.2rem"}},[t._v("\n        関連記事\n      ")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",dense:""}},[r("v-col",{attrs:{xs:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[r("article-list",{attrs:{articles:t.categorizedArticles}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{TopicPath:r(414).default,ArticleBody:r(467).default,ArticleList:r(415).default}),h()(component,{VCol:v.a,VIcon:x.a,VRow:y.a})}}]);