"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[4650],{94650:function(e,r,t){t.r(r),t.d(r,{fromUrl:function(){return y}});var n=t(74165),a=t(1413),u=t(15861),s=t(10064),l=t(35995),o=t(25899),i=t(74368),c=t(37933),p=t(19610),d=t(41226),f={FeatureLayer:!0,SceneLayer:!0};function y(e){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,n.Z)().mark((function e(r){var u,s,l,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null===(u=r.properties)||void 0===u?void 0:u.customParameters,e.next=3,m(r.url,s);case 3:if(l=e.sent,o=(0,a.Z)((0,a.Z)({},r.properties),{},{url:r.url}),l.sublayerIds){e.next=7;break}return e.abrupt("return",(null!=l.layerOrTableId&&(o.layerId=l.layerOrTableId,o.sourceJSON=l.sourceJSON),new l.Constructor(o)));case 7:return e.next=10,Promise.resolve().then(t.bind(t,18048));case 10:return e.t0=e.sent.default,e.t1={title:l.parsedUrl.title},i=new e.t0(e.t1),e.abrupt("return",(h(i,l,o),i));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,r){return e?e.find((function(e){return e.id===r})):null}function h(e,r,t){function n(e,n){var u=(0,a.Z)((0,a.Z)({},t),{},{layerId:e,sublayerTitleMode:"service-name"});return null!=n&&(u.sourceJSON=n),new r.Constructor(u)}r.sublayerIds.forEach((function(t){var a=n(t,b(r.sublayerInfos,t));e.add(a)})),r.tableIds.forEach((function(t){var a=n(t,b(r.tableInfos,t));e.tables.add(a)}))}function m(e,r){return x.apply(this,arguments)}function x(){return x=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,l,i,p,y,v,b,h,m,x,w,S,Z,O,L,C,N,g,F,J;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(0,o.Qc)(r),e.t0=null==a,!e.t0){e.next=6;break}return e.next=5,I(r,t);case 5:a=e.sent;case 6:if(null!=a){e.next=8;break}throw new s.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:l=(u=a).serverType,i=u.sublayer,y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t1=l,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?26:"SceneServer"===e.t1?33:38;break;case 13:if(null==i){e.next=17;break}p="FeatureLayer",e.next=25;break;case 17:return e.next=19,P(r,t);case 19:if(!e.sent){e.next=23;break}e.t2="TileLayer",e.next=24;break;case 23:e.t2="MapImageLayer";case 24:p=e.t2;case 25:return e.abrupt("break",39);case 26:return e.next=28,(0,d.T)(r,{customParameters:t});case 28:return b=e.sent,h=b.tileInfo,m=b.cacheType,p=h?"LERC"!==(null===h||void 0===h||null===(v=h.format)||void 0===v?void 0:v.toUpperCase())||m&&"elevation"!==m.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer",e.abrupt("break",39);case 33:return e.next=35,(0,d.T)(a.url.path,{customParameters:t});case 35:return x=e.sent,p="SceneLayer",x&&(w=null===x||void 0===x?void 0:x.layers,"Voxel"===(null===x||void 0===x?void 0:x.layerType)?p="VoxelLayer":null!==w&&void 0!==w&&w.length&&null!=(Z=null===(S=w[0])||void 0===S?void 0:S.layerType)&&null!=c.fb[Z]&&(p=c.fb[Z])),e.abrupt("break",39);case 38:p=y[l];case 39:if(L={parsedUrl:a,Constructor:null,layerOrTableId:(O="FeatureServer"===l)?i:void 0,sublayerIds:null,tableIds:null},!f[p]||null!=i){e.next=46;break}return e.next=43,k(r,l,t);case 43:J=e.sent,O&&(L.sublayerInfos=J.layerInfos,L.tableInfos=J.tableInfos),1!==J.layerIds.length+J.tableIds.length?(L.sublayerIds=J.layerIds,L.tableIds=J.tableIds):O&&(L.layerOrTableId=null!==(C=J.layerIds[0])&&void 0!==C?C:J.tableIds[0],L.sourceJSON=null!==(N=null===(g=J.layerInfos)||void 0===g?void 0:g[0])&&void 0!==N?N:null===(F=J.tableInfos)||void 0===F?void 0:F[0]);case 46:return e.next=48,T(p);case 48:return L.Constructor=e.sent,e.abrupt("return",L);case 50:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function I(e,r){return w.apply(this,arguments)}function w(){return w=(0,u.Z)((0,n.Z)().mark((function e(r,t){var a,u,s,i,c,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.T)(r,{customParameters:t});case 2:if(s=e.sent,i=null,c=null,"Feature Layer"===(p=s.type)||"Table"===p?(i="FeatureServer",c=null!==(a=s.id)&&void 0!==a?a:null):"indexedVector"===p?i="VectorTileServer":s.hasOwnProperty("mapName")?i="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?i="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?i="FeatureServer":s.hasOwnProperty("streamUrls")?i="StreamServer":S(s)?(i="SceneServer",c=s.id):s.hasOwnProperty("layers")&&S(null===(u=s.layers)||void 0===u?void 0:u[0])&&(i="SceneServer"),i){e.next=7;break}return e.abrupt("return",null);case 7:return f=null!=c?(0,o.DR)(r):null,e.abrupt("return",{title:null!=f&&s.name||(0,l.vt)(r),serverType:i,sublayer:c,url:{path:null!=f?f.serviceUrl:(0,l.mN)(r).path}});case 9:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function S(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function k(e,r,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,n.Z)().mark((function e(r,t,a){var u,s,l,o,c,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,"FeatureServer"!==t){e.next=8;break}return e.next=4,(0,i.V)(r,{customParameters:a});case 4:c=e.sent,o=!!c.layersJSON,l=c.layersJSON||c.serviceJSON,e.next=11;break;case 8:return e.next=10,(0,d.T)(r,{customParameters:a});case 10:l=e.sent;case 11:return p=null===(u=l)||void 0===u?void 0:u.layers,f=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layerIds:(null===p||void 0===p?void 0:p.map((function(e){return e.id})).reverse())||[],tableIds:(null===f||void 0===f?void 0:f.map((function(e){return e.id})).reverse())||[],layerInfos:o?p:[],tableInfos:o?f:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.T)(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},74368:function(e,r,t){t.d(r,{V:function(){return s}});var n=t(74165),a=t(15861),u=t(41226);function s(e,r){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,l,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.T)(r,t);case 2:if((s=e.sent).layers=s.layers.filter(o),l={serviceJSON:s},!((null!==(a=s.currentVersion)&&void 0!==a?a:0)<10.5)){e.next=7;break}return e.abrupt("return",l);case 7:return e.next=9,(0,u.T)(r+"/layers",t);case 9:return i=e.sent,e.abrupt("return",(l.layersJSON={layers:i.layers.filter(o),tables:i.tables},l));case 11:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function o(e){return!e.type||"Feature Layer"===e.type}},41226:function(e,r,t){t.d(r,{T:function(){return l}});var n=t(74165),a=t(1413),u=t(15861),s=t(76200);function l(e,r){return o.apply(this,arguments)}function o(){return o=(0,u.Z)((0,n.Z)().mark((function e(r,t){var u,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.default)(r,{responseType:"json",query:(0,a.Z)((0,a.Z)({f:"json"},null===t||void 0===t?void 0:t.customParameters),{},{token:null===t||void 0===t?void 0:t.apiKey})});case 2:return u=e.sent,l=u.data,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=4650.50bb7de8.chunk.js.map