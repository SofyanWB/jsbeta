"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[3388],{74368:function(e,r,t){t.d(r,{V:function(){return i}});var n=t(74165),a=t(15861),u=t(41226);function i(e,r){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,i,l,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.T)(r,t);case 2:if((i=e.sent).layers=i.layers.filter(o),l={serviceJSON:i},!((null!==(a=i.currentVersion)&&void 0!==a?a:0)<10.5)){e.next=7;break}return e.abrupt("return",l);case 7:return e.next=9,(0,u.T)(r+"/layers",t);case 9:return s=e.sent,e.abrupt("return",(l.layersJSON={layers:s.layers.filter(o),tables:s.tables},l));case 11:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function o(e){return!e.type||"Feature Layer"===e.type}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return D},getNumLayersAndTables:function(){return N},getSubtypeGroupLayerIds:function(){return P},load:function(){return h},preprocessFSItemData:function(){return j}});var n=t(93433),a=t(29439),u=t(74165),i=t(15861),l=t(10064),o=t(30651),s=t(25899),c=t(74368),p=t(7575),d=t(98995),f=t(32698),y=t(73117),v=t(21371),b=t(41226);function h(e,r){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=6;break}return e.next=4,n.load(t);case 4:return x(r),e.abrupt("return",Z(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var r=e.instance.portalItem;if(null===r||void 0===r||!r.type||!e.supportedTypes.includes(r.type))throw new l.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===r||void 0===r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}function Z(e,r){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,l,o,s,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,i=a.portalItem){e.next=3;break}return e.abrupt("return");case 3:if(l=i.url,o=i.title,s=(0,f.h)(i),"group"!==a.type){e.next=6;break}return e.abrupt("return",(a.read({title:o},s),w(a,r)));case 6:return l&&a.read({url:l},s),e.next=9,O(r,t);case 9:return c=e.sent,e.abrupt("return",(c&&a.read(c,s),a.resourceReferences={portalItem:i,paths:null!==(n=s.readResourcePaths)&&void 0!==n?n:[]},"subtype-group"!==a.type&&a.read({title:o},s),(0,v.y)(a,s)));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r){return g.apply(this,arguments)}function g(){return g=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,i,o,s,c,p,d,f,v,b,h,m,x;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.portalItem){e.next=3;break}return e.abrupt("return");case 3:s=o.type,c=t.layerModuleTypeMap,p=null!==(n=(0,y._$)(o,"Oriented Imagery Layer"))&&void 0!==n&&n,e.t0=s,e.next="Feature Service"===e.t0?7:"Stream Service"===e.t0?9:"Scene Service"===e.t0?11:"Feature Collection"===e.t0?13:15;break;case 7:return i=p?c.OrientedImageryLayer:c.FeatureLayer,e.abrupt("break",16);case 9:return i=c.StreamLayer,e.abrupt("break",16);case 11:return i=c.SceneLayer,e.abrupt("break",16);case 13:return i=c.FeatureLayer,e.abrupt("break",16);case 15:throw new l.Z("portal:unsupported-item-type-as-group","The item type '".concat(s,"' is not supported as a 'IGroupLayer'"));case 16:return e.next=18,Promise.all([i(),O(t)]);case 18:if(d=e.sent,f=(0,a.Z)(d,2),v=f[0],b=f[1],h=function(){return v},"Feature Service"!==s){e.next=46;break}if(!o.url){e.next=30;break}return e.next=27,j(b,o.url);case 27:e.t1=e.sent,e.next=31;break;case 30:e.t1={};case 31:if(!P(b=e.t1).length){e.next=38;break}return m=c.SubtypeGroupLayer,e.next=36,m();case 36:x=e.sent,h=function(e){return"SubtypeGroupLayer"===e.layerType?x:v};case 38:return e.t2=S,e.t3=r,e.t4=h,e.t5=b,e.next=44,E(o.url);case 44:return e.t6=e.sent,e.abrupt("return",(0,e.t2)(e.t3,e.t4,e.t5,e.t6));case 46:return e.abrupt("return",N(b)>0?S(r,h,b):I(r,h));case 47:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function I(e,r){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(i=r.portalItem)&&void 0!==i&&i.url){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,b.T)(i.url);case 5:(l=e.sent)&&S(r,t,{layers:null===(n=l.layers)||void 0===n?void 0:n.map(L),tables:null===(a=l.tables)||void 0===a?void 0:a.map(L)});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return{id:e.id,name:e.name}}function S(e,r,t,n){var a,u=t.layers||[],i=t.tables||[];if("Feature Collection"===(null===(a=e.portalItem)||void 0===a?void 0:a.type)&&(u.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&i.push(e)})),u=u.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),"coverage"in t){var c=function(e){var r=e.coverage;if(!r)return null;var t=new URL(r);if(r.toLowerCase().includes("item.html")){var n=t.searchParams.get("id"),a=t.origin;return o.Z.fromPortalItem({portalItem:new d.default({id:n,url:a})})}if((0,s.B5)(r))return o.Z.fromArcGISServerUrl({url:r});throw new l.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);c&&e.add(c)}u.reverse().forEach((function(a){var u=null===n||void 0===n?void 0:n(a);if(u||!n){var i=F(e,r(a),t,a,u);e.add(i)}})),i.reverse().forEach((function(a){var u=null===n||void 0===n?void 0:n(a);if(u||!n){var i=F(e,r(a),t,a,u);e.tables.add(i)}}))}function F(e,r,t,n,a){var u=e.portalItem,i=new r({portalItem:u.clone(),layerId:n.id});if("sourceJSON"in i&&(i.sourceJSON=a),"subtype-group"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===u.type){var l={origin:"portal-item",portal:u.portal||p.Z.getDefault()};i.read(n,l);var o=t.showLegend;null!=o&&i.read({showLegend:o},l)}return i}function O(e,r){return G.apply(this,arguments)}function G(){return(G=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i,l,o,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.supportsData){e.next=2;break}return e.abrupt("return");case 2:if(n=r.instance,a=n.portalItem){e.next=5;break}return e.abrupt("return");case 5:return i=null,e.prev=6,e.next=9,a.fetchData("json",t);case 9:i=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:if(!J(n)){e.next=18;break}return l=null,o=!0,i&&N(i)>0&&(null==n.layerId&&(s=P(i),n.layerId="subtype-group"===n.type?null===s||void 0===s?void 0:s[0]:D(i)),(l=M(i,n))&&(1===N(i)&&(o=!1),null!=i.showLegend&&(l.showLegend=i.showLegend))),e.abrupt("return",(o&&"sublayerTitleMode"in n&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),l));case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function j(e,r){return C.apply(this,arguments)}function C(){return(C=(0,i.Z)((0,u.Z)().mark((function e(r,t){var n,a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(n=r)||void 0===n?void 0:n.layers)&&null!=(null===(a=r)||void 0===a?void 0:a.tables)){e.next=5;break}return e.next=3,(0,b.T)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function M(e,r){var t,n,a=r.layerId,u=(null===(t=e.layers)||void 0===t?void 0:t.find((function(e){return e.id===a})))||(null===(n=e.tables)||void 0===n?void 0:n.find((function(e){return e.id===a})));return u&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(u,r)?u:null}function N(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function J(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}function P(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function E(e){return R.apply(this,arguments)}function R(){return(R=(0,i.Z)((0,u.Z)().mark((function e(r){var t,a,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.V)(r);case 2:if(t=e.sent,a=t.layersJSON){e.next=6;break}return e.abrupt("return",null);case 6:return i=[].concat((0,n.Z)(a.layers),(0,n.Z)(a.tables)),e.abrupt("return",(function(e){return i.find((function(r){return r.id===e.id}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},41226:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(74165),a=t(1413),u=t(15861),i=t(76200);function l(e,r){return o.apply(this,arguments)}function o(){return o=(0,u.Z)((0,n.Z)().mark((function e(r,t){var u,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.default)(r,{responseType:"json",query:(0,a.Z)((0,a.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return u=e.sent,l=u.data,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=3388.24bd8974.chunk.js.map