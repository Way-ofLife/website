(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{414:function(e,t,r){"use strict";r.r(t);r(70),r(54),r(81),r(22),r(50);var n={name:"TopicPath",computed:{breadcrumbs:function(){var e=this.$route.path.split("/");return e.shift(),e.map((function(e,i,t){return{text:e,to:"/".concat(t.slice(0,i+1).join("/")),exact:!0,nuxt:!0}}))}}},c=r(15),o=r(12),l=r.n(o),d=r(2),m=(r(417),r(55)),f=r(4);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=Object(f.a)(m.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(d.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,v(v({},data),{},{attrs:v(v({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),y=r(0),j=Object(y.g)("v-breadcrumbs__divider","li"),x=r(11);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w=Object(f.a)(x.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(j,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(O,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:this.breadcrumbs,divider:"/"}})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBreadcrumbs:w})},417:function(e,t,r){var content=r(418);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("b1bed018",content,!0,{sourceMap:!1})},418:function(e,t,r){(t=r(7)(!1)).push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=t},535:function(e,t,r){"use strict";r.r(t);var n={components:{TopicPath:r(414).default},head:function(){return{titleTemplate:"%s | Partner | TEDxNagoyaU"}}},c=r(15),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("topic-path"),this._v(" "),t("nuxt-child")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TopicPath:r(414).default})}}]);