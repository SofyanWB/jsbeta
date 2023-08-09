"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[2078],{62078:function(e,r,t){t.r(r),t.d(r,{addOrUpdateResource:function(){return p},contentToBlob:function(){return b},fetchResources:function(){return i},getSiblingOfSameType:function(){return y},getSiblingOfSameTypeI:function(){return g},removeAllResources:function(){return v},removeResource:function(){return f},splitPrefixFileNameAndExtension:function(){return Z}});var n=t(74165),a=t(29439),u=t(15861),s=t(76200),o=t(10064),c=t(35995);function i(e){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a,u,s,o,i,l,p,d,f,h,v,m=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>1&&void 0!==m[1]?m[1]:{},a=m.length>2?m[2]:void 0,e.next=4,r.load(a);case 4:return u=(0,c.v_)(r.itemUrl,"resources"),s=t.start,o=void 0===s?1:s,i=t.num,l=void 0===i?10:i,p=t.sortOrder,d=void 0===p?"asc":p,f=t.sortField,h={query:{start:o,num:l,sortOrder:d,sortField:void 0===f?"created":f,token:r.apiKey},signal:null===a||void 0===a?void 0:a.signal},e.next=16,r.portal.request(u,h);case 16:return v=e.sent,e.abrupt("return",{total:v.total,nextStart:v.nextStart,resources:v.resources.map((function(e){var t=e.created,n=e.size,a=e.resource;return{created:new Date(t),size:n,resource:r.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,r,t,n){return d.apply(this,arguments)}function d(){return d=(0,u.Z)((0,n.Z)().mark((function e(r,t,u,s){var i,l,p,d,f,h,v,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new o.Z("portal-item-resource-".concat(t,":invalid-path"),"Resource does not have a valid path");case 2:return i=r.portalItem,e.next=5,i.load(s);case 5:return l=(0,c.v_)(i.userItemUrl,"add"===t?"addResources":"updateResources"),p=x(r.path),d=(0,a.Z)(p,2),f=d[0],h=d[1],e.next=12,b(u);case 12:return v=e.sent,m=new FormData,f&&"."!==f&&m.append("resourcesPrefix",f),null!=s&&s.compress&&m.append("compress","true"),m.append("fileName",h),m.append("file",v,h),m.append("f","json"),null!=s&&s.access&&m.append("access",s.access),e.next=22,i.portal.request(l,{method:"post",body:m,signal:null===s||void 0===s?void 0:s.signal});case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e,r,t){return h.apply(this,arguments)}function h(){return h=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,r.load(a);case 4:return u=(0,c.v_)(r.userItemUrl,"removeResources"),e.next=7,r.portal.request(u,{method:"post",query:{resource:t.path},signal:null===a||void 0===a?void 0:a.signal});case 7:t.portalItem=null;case 8:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function v(e,r){return m.apply(this,arguments)}function m(){return(m=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load(t);case 2:return a=(0,c.v_)(r.userItemUrl,"removeResources"),e.abrupt("return",r.portal.request(a,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var r=e.lastIndexOf("/");return-1===r?[".",e]:[e.slice(0,r),e.slice(r+1)]}function Z(e){var r=function(e){var r=(0,c.Ml)(e);return null==r?[e,""]:[e.slice(0,e.length-r.length-1),".".concat(r)]}(e),t=(0,a.Z)(r,2),n=t[0],u=t[1],s=x(n),o=(0,a.Z)(s,2);return[o[0],o[1],u]}function b(e){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r instanceof Blob)){e.next=2;break}return e.abrupt("return",r);case 2:return e.next=4,(0,s.default)(r.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,r){if(!e.hasPath())return null;var t=Z(e.path),n=(0,a.Z)(t,3),u=n[0],s=n[2];return e.portalItem.resourceFromPath((0,c.v_)(u,r+s))}function g(e,r){if(!e.hasPath())return null;var t=Z(e.path),n=(0,a.Z)(t,3),u=n[0],s=n[2];return e.portalItem.resourceFromPath((0,c.v_)(u,r+s))}}}]);
//# sourceMappingURL=2078.67a86b0c.chunk.js.map