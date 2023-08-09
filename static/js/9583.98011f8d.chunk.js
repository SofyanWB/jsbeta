"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[9583],{19583:function(e,r,t){t.r(r),t.d(r,{default:function(){return H}});var a=t(74165),i=t(15861),n=t(1413),o=t(15671),s=t(43144),u=t(60136),l=t(29388),p=t(27366),c=t(76200),d=t(62044),y=t(10064),v=t(41691),h=t(93002),f=t(97642),m=t(66978),b=t(49861),g=t(25243),Z=(t(63780),t(93169),t(38511)),x=t(69912),k=t(31201),w=t(25265),S=t(53866),_=t(82582),I=t(30651),C=t(27961),O=t(6741),M=t(11936),R=t(6693),T=t(46671),E=t(6061),j=t(66306),L=t(71684),N=t(56811),P=t(18870),F=t(99063),J=t(45948),q=t(44041),U=t(83690),A=t(77990),V=t(58132),z=t(26704),D=t(16354),G=function(e){(0,u.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=r.call.apply(r,[this].concat(i))).dateFieldsTimeReference=null,e.datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.preferredTimeReference=null,e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,s.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,n.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(m.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,r){var t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}},{key:"writeSublayers",value:function(e,r,t,a){var i;if(this.loaded&&e){var o=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&null!==(i=this.capabilities.exportMap)&&void 0!==i&&i.supportsDynamicLayers){var u=(0,w.M9)(a.origin);if(u===w.s3.PORTAL_ITEM){var l=this.createSublayersForOrigin("service").sublayers;s=(0,V.QV)(o,l,w.s3.SERVICE)}else if(u>w.s3.PORTAL_ITEM){var p=this.createSublayersForOrigin("portal-item");s=(0,V.QV)(o,p.sublayers,(0,w.M9)(p.origin))}}var c=[],d=(0,n.Z)({writeSublayerStructure:s},a),y=s;o.forEach((function(e){var r=e.write({},d);c.push(r),y=y||"user"===e.originOf("visible")})),c.some((function(e){return Object.keys(e).length>1}))&&(r.layers=c),y&&(r.visibleLayers=o.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,r,t,a){var i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new q.R({layer:this,floors:null===a||void 0===a?void 0:a.floors,scale:(0,_.yZ)({extent:e,width:r})*i}),s=o.toJSON();o.destroy();var u=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());s.dpi*=i;var c={};if(null!==a&&void 0!==a&&a.timeExtent){var d=a.timeExtent.toJSON(),y=d.start,v=d.end;c.time=y&&v&&y===v?""+y:"".concat(null!==y&&void 0!==y?y:"null",",").concat(null!==v&&void 0!==v?v:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return(0,n.Z)((0,n.Z)((0,n.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:r+","+t},s),u),c)}},{key:"fetchImage",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t,i,n){var o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchImage("image",r,t,i,n);case 2:return o=e.sent,s=o.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e,this)})));return function(r,t,a,i){return e.apply(this,arguments)}}()},{key:"fetchImageBitmap",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t,i,n){var o,s,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchImage("blob",r,t,i,n);case 2:return o=e.sent,s=o.data,u=o.url,e.abrupt("return",(0,U.g)(s,u,null===n||void 0===n?void 0:n.signal));case 6:case"end":return e.stop()}}),e,this)})));return function(r,t,a,i){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,t,i,o,s,u,l,p,y=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.length>0&&void 0!==y[0]?y[0]:{},t=(0,n.Z)((0,n.Z)({},r),{},{query:(0,n.Z)((0,n.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,c.default)(this.url,t);case 4:return i=e.sent,o=i.data,s=o.extent,u=o.fullExtent,l=o.timeExtent,p=s||u,e.abrupt("return",{fullExtent:p&&S.Z.fromJSON(p),timeExtent:l&&d.Z.fromJSON({start:l[0],end:l[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return(0,h.G)(this,(function(r){r(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,z.D)(this,e)}},{key:"_fetchImage",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r,t,i,o,s){var u,l,p,d,v,h,f,b;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v={responseType:r,signal:null!==(u=null===s||void 0===s?void 0:s.signal)&&void 0!==u?u:null,query:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},this.parsedUrl.query),this.createExportImageParameters(t,i,o,s)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},h=this.parsedUrl.path+"/export",null==(null===(l=v.query)||void 0===l?void 0:l.dynamicLayers)||null!==(p=this.capabilities)&&void 0!==p&&null!==(d=p.exportMap)&&void 0!==d&&d.supportsDynamicLayers){e.next=3;break}throw new y.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:v.query});case 3:return e.prev=3,e.next=6,(0,c.default)(h,v);case 6:return f=e.sent,b=f.data,e.abrupt("return",{data:b,url:h});case 11:if(e.prev=11,e.t0=e.catch(3),!(0,m.D_)(e.t0)){e.next=15;break}throw e.t0;case 15:throw new y.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(h),{error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(r,t,a,i,n){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,c.default)(this.parsedUrl.path,{query:(0,n.Z)((0,n.Z)((0,n.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:r});case 4:t=e.sent,i=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),t}((0,R.h)((0,F.n)((0,N.M)((0,P.x)((0,O.O)((0,M.Y)((0,E.q)((0,j.I)((0,f.R)((0,L.Q)((0,C.V)((0,T.N)((0,v.p)(I.Z))))))))))))));(0,p._)([(0,b.Cb)({type:D.Z})],G.prototype,"dateFieldsTimeReference",void 0),(0,p._)([(0,b.Cb)({type:Boolean})],G.prototype,"datesInUnknownTimezone",void 0),(0,p._)([(0,b.Cb)()],G.prototype,"dpi",void 0),(0,p._)([(0,b.Cb)()],G.prototype,"gdbVersion",void 0),(0,p._)([(0,b.Cb)()],G.prototype,"imageFormat",void 0),(0,p._)([(0,Z.r)("imageFormat",["supportedImageFormatTypes"])],G.prototype,"readImageFormat",null),(0,p._)([(0,b.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],G.prototype,"imageMaxHeight",void 0),(0,p._)([(0,b.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],G.prototype,"imageMaxWidth",void 0),(0,p._)([(0,b.Cb)()],G.prototype,"imageTransparency",void 0),(0,p._)([(0,b.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],G.prototype,"isReference",void 0),(0,p._)([(0,b.Cb)({json:{read:!1,write:!1}})],G.prototype,"labelsVisible",void 0),(0,p._)([(0,b.Cb)({type:["ArcGISMapServiceLayer"]})],G.prototype,"operationalLayerType",void 0),(0,p._)([(0,b.Cb)({json:{read:!1,write:!1}})],G.prototype,"popupEnabled",void 0),(0,p._)([(0,b.Cb)({type:D.Z})],G.prototype,"preferredTimeReference",void 0),(0,p._)([(0,b.Cb)()],G.prototype,"sourceJSON",void 0),(0,p._)([(0,b.Cb)({json:{write:{ignoreOrigin:!0}}})],G.prototype,"sublayers",void 0),(0,p._)([(0,k.c)("sublayers",{layers:{type:[A.Z]},visibleLayers:{type:[g.z8]}})],G.prototype,"writeSublayers",null),(0,p._)([(0,b.Cb)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),(0,p._)([(0,b.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],G.prototype,"type",void 0),(0,p._)([(0,b.Cb)(J.HQ)],G.prototype,"url",void 0);var H=G=(0,p._)([(0,x.j)("esri.layers.MapImageLayer")],G)}}]);
//# sourceMappingURL=9583.98011f8d.chunk.js.map