(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{318:function(t,e,n){"use strict";n.r(e);n(68),n(32),n(213),n(21),n(36),n(94);var r=n(14),o=n(27),c=n(23),l=n(18),f=n(11),m=n(13),d=n(116);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"getTextContent",value:function(element){var text="";if(element.text&&(text+=element.text.split("\n").join("<br/>").trim()),element.elements)for(var i=0;i<element.elements.length;i++)text+=this.getTextContent(element.elements[i]);return text.trim()}},{key:"getSic",value:function(element){for(var text=this.getTextContent(element),t=element.elements,i=0;i<t.length;i++){var e=t[i];"tei-sic"===e.name&&(text=this.getTextContent(e))}return text}},{key:"getCorr",value:function(element){for(var t=element.elements,text=this.getTextContent(element),i=0;i<t.length;i++){var e=t[i];"tei-corr"===e.name&&(text=this.getTextContent(e))}return text}},{key:"canvas",get:function(){return this.$store.getters.canvas},set:function(t){this.$store.commit("setCanvas",t)}},{key:"facs",get:function(){return this.$store.getters.getFacs},set:function(t){this.$store.commit("setFacs",t)}}]),n}(d.Vue);h([Object(d.Prop)({})],y.prototype,"element",void 0);var _=y=h([Object(d.Component)({components:{aaa:C},name:"aaa"})],y),x=(n(380),n(69)),w=n(97),j=n.n(w),O=n(346),k=n(459),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.element.name||"span",{tag:"component"},[("tei-date"==t.element.name||"tei-time"==t.element.name)&&t.element.attributes&&t.element.attributes.when?[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("span",t._g(t._b({domProps:{innerHTML:t._s(t.getTextContent(t.element))}},"span",o,!1),r))]}}],null,!1,3159182112)},[t._v(" "),n("span",[t._v(t._s(t.element.attributes.when))])])]:"text"==t.element.type?[t._v("\n    "+t._s(t.element.text)+"\n  ")]:"tei-choice"==t.element.name?[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("span",t._g(t._b({staticStyle:{color:"#ff5722"}},"span",o,!1),r),[t._v(t._s(t.getCorr(t.element)))])]}}])},[t._v(" "),n("span",[t._v(t._s(t.getSic(t.element)))])])]:t.element.attributes&&"right"==t.element.attributes.rend?[n("div",{class:"rend-"+t.element.attributes.rend},t._l(t.element.elements,(function(t,e){return n("aaa",{key:e,attrs:{element:t}})})),1)]:["tei-pb"==t.element.name&&t.element.attributes&&t.element.attributes.corresp?[n("v-icon",{staticClass:"ma-1",attrs:{color:"purple"},on:{click:function(e){t.canvas=t.facs[t.element.attributes.corresp.replace("#","")]}}},[t._v("mdi-image")]),t._v(" "),n("span",{staticClass:"ma-1",staticStyle:{color:"grey"}},[n("small",[t._v("[Page @"+t._s(t.element.attributes.corresp)+"]")])])]:t._e(),t._v(" "),t._l(t.element.elements,(function(t,e){return n("aaa",{key:e,attrs:{element:t}})}))]],2)}),[],!1,null,"74c25056",null),C=e.default=component.exports;j()(component,{Aaa:n(318).default}),j()(component,{VIcon:O.a,VTooltip:k.a})},325:function(t,e,n){"use strict";(function(t){n(59),n(47),n(21),n(40);var r=n(449),o=n(344),c=n.n(o),l=n(204),f=n.n(l),m=n(451),d=n(452),v=n(374),h=n(450),y=n(351);e.a={components:{Menu:d.a,Metadata:m.a,Title:v.default,aaa:h.a},data:function(){return{baseUrl:"https://nakamura196.github.io/sat_tei",siteName:"TEI Viewer",github:t.env.github||"",loading:!1,width:window.innerWidth,height:window.innerHeight,drawer:!1,drawer2:!1,manifest:null,element:{},vertical:!0,items:[]}},head:function(){return{titleTemplate:null,title:this.$t(this.siteName)}},computed:{examples:{get:function(){return console.log(this.baseUrl+"/data/sat.xml"),[{label:"釋禪波羅蜜次第法門",url:this.baseUrl+"/data/sat.xml"}]}},style:{get:function(){return this.$store.getters.getStyle},set:function(t){this.$store.commit("setStyle",t)}},xml:{get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},facs:{get:function(){return this.$store.getters.getFacs},set:function(t){this.$store.commit("setFacs",t)}},canvas:{get:function(){return this.$store.getters.getCanvas},set:function(t){this.$store.commit("setCanvas",t)}},id:{get:function(){return this.$store.getters.getId},set:function(t){this.$store.commit("setId",t)}}},watch:{id:function(t){console.log({val:t}),t&&(this.$router.push(this.localePath({name:"index",query:{u:this.$route.query.u,id:t}}),(function(){}),(function(){})),this.id=t,this.canvas=this.facs[t],this.scroll(t))}},mounted:function(){window.addEventListener("resize",this.handleResize);var t=this.$route.query;if(t.u){this.loading=!0;var e=t.u||this.baseUrl+"/data/sat.xml",n=new r.a,o=this;n.getHTML5(e,(function(data){o.init(data)}))}},methods:{init:function(data){console.log("downloaded."),this.xml=data;var t=y.xml2json(data.outerHTML,{compact:!1,spaces:4}),e=JSON.parse(t);this.element=e;for(var n=c()(data).find("tei-surface"),r={},i=0;i<n.length;i++){var source=n[i];r[c()(source).attr("xml:id")]=c()(source).attr("source")}var canvas=r[Object.keys(r)[0]];this.canvas=canvas,this.facs=r;var o=c()(data).find("tei-facsimile").attr("source");this.manifest=o;for(var l=[],f=c()(data).find("tei-pb"),m=0;m<f.length;m++){var d=f[m],label=c()(d).attr("corresp").replace("#","");l.push({label:label,id:label})}this.items=l,this.loading=!1,console.log("processed.")},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files,n=new FileReader;n.readAsText(e[0]);var o=this;n.onload=function(){(new r.a).makeHTML5(n.result,(function(data){o.init(data)}))}},handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight},scroll:function(t){var e=document.querySelector("#"+t).getBoundingClientRect(),n={container:"#container",offset:-1*document.querySelector("#container").getBoundingClientRect().width+e.width,x:!0};f.a.scrollTo("#"+t,500,n)}}}}).call(this,n(154))},345:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("8b5a80ca",content,!0,{sourceMap:!1})},359:function(t,e,n){var content=n(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("240684fa",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("c570a84e",content,!0,{sourceMap:!1})},367:function(t,e,n){var content=n(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("1b7833da",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n.r(e);n(213);var r=n(14),o=n(27),c=n(23),l=n(18),f=n(11),m=n(13),d=n(116);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"title",get:function(){var t=this.xml;return t&&t.querySelector("tei-title")?t.querySelector("tei-title").textContent:"TEI Viewer"}}]),n}(d.Vue),_=y=h([Object(d.Component)({})],y),x=n(69),component=Object(x.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n(345)},381:function(t,e,n){(e=n(57)(!1)).push([t.i,"tei-persName[data-v-74c25056]{background-color:#ffccbc}tei-placeName[data-v-74c25056]{background-color:#c8e6c9}tei-date[data-v-74c25056]{background-color:#bbdefb}tei-time[data-v-74c25056]{background-color:#fff9c4}tei-head[data-v-74c25056]{margin:20px;font-size:large!important;font-weight:700}tei-del[data-v-74c25056]{text-decoration:line-through}tei-add[data-v-74c25056]{color:#4caf50}tei-add[data-v-74c25056],tei-hi[data-v-74c25056]{text-decoration:underline}tei-hi[data-v-74c25056]{font-weight:700}tei-emph[data-v-74c25056]{text-decoration:underline}.rend-right[data-v-74c25056]{text-align:right}",""]),t.exports=e},390:function(t,e){},392:function(t,e){},401:function(t,e,n){"use strict";n(359)},402:function(t,e,n){(e=n(57)(!1)).push([t.i,"tei-encodingdesc,tei-publicationstmt,tei-publicationstmt>*,tei-sourcedesc{display:block!important}",""]),t.exports=e},421:function(t,e,n){"use strict";n(366)},422:function(t,e,n){(e=n(57)(!1)).push([t.i,"tei-persName[data-v-149afb12]{background-color:#ffccbc}tei-placeName[data-v-149afb12]{background-color:#c8e6c9}tei-date[data-v-149afb12]{background-color:#bbdefb}tei-time[data-v-149afb12]{background-color:#fff9c4}tei-head[data-v-149afb12]{margin:20px;font-size:large!important;font-weight:700}tei-del[data-v-149afb12]{text-decoration:line-through}tei-add[data-v-149afb12]{color:#4caf50}tei-add[data-v-149afb12],tei-hi[data-v-149afb12]{text-decoration:underline}tei-hi[data-v-149afb12]{font-weight:700}tei-emph[data-v-149afb12]{text-decoration:underline}tei-title[data-v-149afb12]{font-weight:700;font-size:large;color:#4caf50}tei-milestone[data-v-149afb12]{display:inline}tei-anchor[data-v-149afb12]{display:none}tei-app[data-v-149afb12]{display:inline-block}.rend-right[data-v-149afb12]{text-align:right}span[data-v-149afb12]{display:inline-block}",""]),t.exports=e},423:function(t,e,n){"use strict";n(367)},424:function(t,e,n){(e=n(57)(!1)).push([t.i,".scroll{overflow:auto}.vertical{-ms-writing-mode:tb-rl;writing-mode:vertical-rl}",""]),t.exports=e},450:function(t,e,n){"use strict";n(68),n(32),n(213),n(21),n(36),n(94);var r=n(14),o=n(27),c=n(23),l=n(18),f=n(11),m=n(13),d=n(116);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"getTextContent",value:function(element){var text="";if(element.text&&(text+=element.text.split("\n").join("<br/>").trim()),element.elements)for(var i=0;i<element.elements.length;i++)text+=this.getTextContent(element.elements[i]);return text.trim()}},{key:"getSic",value:function(element){for(var text=this.getTextContent(element),t=element.elements,i=0;i<t.length;i++){var e=t[i];"tei-sic"===e.name&&(text=this.getTextContent(e))}return text}},{key:"getCorr",value:function(element){for(var t=element.elements,text=this.getTextContent(element),i=0;i<t.length;i++){var e=t[i];"tei-corr"===e.name&&(text=this.getTextContent(e))}return text}},{key:"getMargin",value:function(element){return element.attributes&&element.attributes.quantity?element.attributes.quantity:0}},{key:"canvas",get:function(){return this.$store.getters.canvas},set:function(t){this.$store.commit("setCanvas",t)}},{key:"facs",get:function(){return this.$store.getters.getFacs},set:function(t){this.$store.commit("setFacs",t)}}]),n}(d.Vue);h([Object(d.Prop)({})],y.prototype,"element",void 0);var _=y=h([Object(d.Component)({components:{aaa:C},name:"aaa"})],y),x=(n(421),n(69)),w=n(97),j=n.n(w),O=n(346),k=n(459),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.element.name||"span",{tag:"component"},[("tei-date"==t.element.name||"tei-time"==t.element.name)&&t.element.attributes&&t.element.attributes.when?[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("span",t._g(t._b({domProps:{innerHTML:t._s(t.getTextContent(t.element))}},"span",o,!1),r))]}}],null,!1,3159182112)},[t._v(" "),n("span",[t._v(t._s(t.element.attributes.when))])])]:"tei-space"==t.element.name?[n("span",{style:"margin-top: "+t.getMargin(t.element)+"em"})]:"text"==t.element.type?[t._v("\n    "+t._s(t.element.text.split("。").join(""))+"\n  ")]:"tei-seg"==t.element.name&&"wari"==t.element.attributes.type?[n("span",{staticStyle:{color:"#ff5722","font-size":"small"}},[t._v("["),t._l(t.element.elements,(function(t,e){return n("aaa",{key:e,attrs:{element:t}})})),t._v("]")],2)]:"tei-milestone"==t.element.name&&"wlb"==t.element.attributes.unit?[t._v("\n    ／\n  ")]:"tei-choice"==t.element.name?[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("span",t._g(t._b({staticStyle:{color:"#ff5722"}},"span",o,!1),r),[t._v(t._s(t.getCorr(t.element)))])]}}])},[t._v(" "),n("span",[t._v(t._s(t.getSic(t.element)))])])]:t.element.attributes&&"right"==t.element.attributes.rend?[n("div",{class:"rend-"+t.element.attributes.rend},t._l(t.element.elements,(function(t,e){return n("aaa",{key:e,attrs:{element:t}})})),1)]:["tei-pb"==t.element.name&&t.element.attributes&&t.element.attributes.corresp?[n("v-icon",{staticClass:"ma-1",attrs:{id:t.element.attributes.corresp.replace("#",""),color:"purple"},on:{click:function(e){t.canvas=t.facs[t.element.attributes.corresp.replace("#","")]}}},[t._v("mdi-image")]),t._v(" "),n("span",{staticClass:"ma-1",staticStyle:{color:"grey"}},[n("small",[t._v("[Page @"+t._s(t.element.attributes.corresp)+"]")])])]:t._e(),t._v(" "),t._l(t.element.elements,(function(t,e){return n("aaa",{key:e,attrs:{element:t}})}))]],2)}),[],!1,null,"149afb12",null),C=e.a=component.exports;j()(component,{Aaa:n(318).default}),j()(component,{VIcon:O.a,VTooltip:k.a})},451:function(t,e,n){"use strict";n(59),n(213);var r=n(14),o=n(27),c=n(23),l=n(18),f=n(11),m=n(13),d=n(116),v=n(318);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=n(351),x=n(344),w=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"bbb",value:function(data){if(!data)return{};var t=_.xml2json(data.outerHTML,{compact:!1,spaces:4});return JSON.parse(t).elements[0]}},{key:"xml",get:function(){return this.$store.getters.getXml},set:function(t){this.$store.commit("setXml",t)}},{key:"metadata",get:function(){var t=this.xml;if(!t)return"";var header=t.querySelector("tei-teiheader");return header?(new XMLSerializer).serializeToString(header):""}},{key:"arr",get:function(){return x(x(this.xml).find("tei-teiheader")).children()}}]),n}(d.Vue),j=w=y([Object(d.Component)({components:{aaa:v.default}})],w),O=(n(401),n(69)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-5"},t._l(t.arr,(function(e,r){return n("aaa",{key:r,staticClass:"my-5",attrs:{element:t.bbb(e)}})})),1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Aaa:n(318).default})},452:function(t,e,n){"use strict";n(213);var r=n(14),o=n(27),c=n(23),l=n(18),f=n(11),m=n(13),d=n(116);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"id",get:function(){return this.$store.getters.getId},set:function(t){this.$store.commit("setId",t)}}]),n}(d.Vue);h([Object(d.Prop)()],y.prototype,"items",void 0);var _=y=h([Object(d.Component)({})],y),x=n(69),w=n(97),j=n.n(w),O=n(360),k=n(340),C=n(314),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-item",{staticClass:"mt-5"},[n("v-list-item-title",[n("h3",[t._v(t._s(t.$t("コンテンツ")))])])],1),t._v(" "),t._l(t.items,(function(e,r){return n("v-list-item",{key:r,on:{click:function(n){t.id=e.id}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.label))])],1)],1)}))],2)}),[],!1,null,null,null);e.a=component.exports;j()(component,{VList:O.a,VListItem:k.a,VListItemContent:C.a,VListItemTitle:C.b})},467:function(t,e,n){"use strict";n.r(e);var r=n(325).a,o=(n(423),n(69)),c=n(97),l=n.n(c),f=n(468),m=n(460),d=n(433),v=n(466),h=n(461),y=n(310),_=n(346),x=n(360),w=n(340),j=n(314),O=n(469),k=n(464),C=n(371),R=n(462),$=n(463),T=n(448),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-navigation-drawer",{attrs:{app:"",width:256},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("Menu",{attrs:{id:t.$route.query.id,items:t.items}})],1),t._v(" "),n("v-navigation-drawer",{attrs:{app:"",temporary:!0,right:"",width:512},model:{value:t.drawer2,callback:function(e){t.drawer2=e},expression:"drawer2"}},[n("Metadata")],1),t._v(" "),n("v-app-bar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-view-list")])],1),t._v(" "),n("v-toolbar-title",[n("Title")],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary",href:t.baseUrl+t.localePath({name:"index"})}},[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{depressed:"",btn:"",color:"primary"}},r),[n("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1),t._v(" "),n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.xml,expression:"xml"}],staticClass:"ml-2",on:{click:function(e){e.stopPropagation(),t.drawer2=!t.drawer2}}})],1)],1),t._v(" "),t.xml?t._e():n("div",[n("v-container",{staticClass:"pa-10"},[n("h2",[t._v("TEI Viewer")]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("TEI/XMLファイルを選択してください。")]),t._v(" "),n("input",{attrs:{type:"file"},on:{change:t.onFileChange}}),t._v(" "),t._l(t.examples,(function(e,r){return n("div",{key:r},[n("h3",{staticClass:"mt-10 mb-2"},[t._v("\n          "+t._s(t.$t("例"))+" "+t._s(r+1)+"："+t._s(e.label)+"\n        ")]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary",href:t.baseUrl+t.localePath({name:"index",query:{u:e.url}})}},[t._v(t._s(t.$t("可視化例を見る")))]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{href:e.url}},[t._v(t._s(t.$t("サンプルデータを見る")))])],1)}))],2)],1),t._v(" "),t.loading?[n("div",{staticClass:"pa-10 text-center"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:t._e(),t._v(" "),n("v-container",{directives:[{name:"show",rawName:"v-show",value:t.xml,expression:"xml"}],attrs:{fluid:""}},[n("v-row",{staticClass:"mt-2"},[n("v-col",{attrs:{cols:"12",sm:t.manifest?6:12}},[n("v-card",{staticClass:"scroll",class:t.vertical?"vertical":"",style:"height: "+.8*t.height+"px; width: "+(t.manifest?t.width/2:t.width)+"px;",attrs:{id:"container",flat:"",outlined:""}},[n("div",{staticClass:"pa-4 px-5"},[n("aaa",{attrs:{element:t.element}})],1)])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:t.manifest?6:12}},[t.manifest?n("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],style:"height: "+.8*t.height+"px;",attrs:{src:"https://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest="+t.manifest+"&canvas="+t.canvas+"&bottomPanel=false",width:"100%",allowfullscreen:"allowfullscreen",frameborder:"0"}}):t._e()])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Title:n(374).default,Aaa:n(318).default}),l()(component,{VAppBar:f.a,VAppBarNavIcon:m.a,VBtn:d.a,VCard:v.a,VCol:h.a,VContainer:y.a,VIcon:_.a,VList:x.a,VListItem:w.a,VListItemTitle:j.b,VMenu:O.a,VNavigationDrawer:k.a,VProgressCircular:C.a,VRow:R.a,VSpacer:$.a,VToolbarTitle:T.a})}}]);