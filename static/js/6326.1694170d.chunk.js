"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[6326],{21857:function(e,t,i){i.d(t,{CS:function(){return y},Cw:function(){return _},Yu:function(){return b},j5:function(){return x},lm:function(){return S}});var n=i(74165),r=i(15861),a=i(37762),s=i(42265),o=i(19545),u=i(44055),l=i(76200),c=i(84652),h=i(35995),f=i(78952),p=i(41414),d=i(376),m=i(9014),v=i(49818),g={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function _(e){var t=e.folders||[],i=t.slice(),n=new Map,r=new Map,s=new Map,o=new Map,u=new Map,l={esriGeometryPoint:r,esriGeometryPolyline:s,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=(0,c.d9)(e);t.featureSet.features=[];var i=e.featureSet.geometryType;n.set(i,t);var a=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?w(r,a,e.featureSet.features):"esriGeometryPolyline"===i?w(s,a,e.featureSet.features):"esriGeometryPolygon"===i&&w(o,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){u.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var r=function(e,t,i){var n=function(e,t){var i;return t.some((function(t){return t.id===e&&(i=t,!0)})),i}(e,i);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);r&&i.push(r)}))})),i.forEach((function(e){if(e.featureInfos){e.points=(0,c.d9)(n.get("esriGeometryPoint")),e.polylines=(0,c.d9)(n.get("esriGeometryPolyline")),e.polygons=(0,c.d9)(n.get("esriGeometryPolygon")),e.mapImages=[];var t,i=(0,a.Z)(e.featureInfos);try{for(i.s();!(t=i.n()).done;){var r=t.value;switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var s,o=l[r.type].get(r.id);o&&(null===(s=e[g[r.type]])||void 0===s||s.featureSet.features.push(o));break;case"GroundOverlay":var h=u.get(r.id);h&&e.mapImages.push(h)}}}catch(f){i.e(f)}finally{i.f()}e.fullExtent=S([e])}}));var h=S(i);return{folders:t,sublayers:i,extent:h}}function y(e,t,i,n){var r=o.id&&o.id.findCredential(e);e=(0,h.fl)(e,{token:r&&r.token});var a=s.Z.kmlServiceUrl;return(0,l.default)(a,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function x(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=[],a={},s=t.sublayers,o=t.folders.map((function(e){return e.id}));return s.forEach((function(t){var s=new e;if(i?s.read(t,i):s.read(t),n.length&&o.includes(s.id)&&(s.visible=n.includes(s.id)),a[t.id]=s,null!=t.parentFolderId&&-1!==t.parentFolderId){var u,l=a[t.parentFolderId];l.sublayers||(l.sublayers=[]),null===(u=l.sublayers)||void 0===u||u.unshift(s)}else r.unshift(s)})),r}function w(e,t,i){i.forEach((function(i){e.set(i.attributes[t],i)}))}function b(e){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)((0,n.Z)().mark((function e(t){var i,r,s,o,l,c,h,f,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=v.Z.fromJSON(t.featureSet).features,r=t.layerDefinition,s=(0,m.i)(r.drawingInfo.renderer),o=u.Z.fromJSON(t.popupInfo),l=[],c=(0,a.Z)(i),e.prev=2,c.s();case 4:if((h=c.n()).done){e.next=12;break}return f=h.value,e.next=8,s.getSymbolAsync(f);case 8:p=e.sent,f.symbol=p,f.popupTemplate=o,f.visible=!0,l.push(f);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function S(e){var t,i=(0,p.Ue)(p.Gv),n=(0,p.Ue)(p.Gv),r=(0,a.Z)(e);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features){var o,u=(0,a.Z)(s.polygons.featureSet.features);try{for(u.s();!(o=u.n()).done;){var l=o.value;(0,d.Yg)(i,l.geometry),(0,p.TC)(n,i)}}catch(b){u.e(b)}finally{u.f()}}if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features){var c,h=(0,a.Z)(s.polylines.featureSet.features);try{for(h.s();!(c=h.n()).done;){var m=c.value;(0,d.Yg)(i,m.geometry),(0,p.TC)(n,i)}}catch(b){h.e(b)}finally{h.f()}}if(s.points&&s.points.featureSet&&s.points.featureSet.features){var v,g=(0,a.Z)(s.points.featureSet.features);try{for(g.s();!(v=g.n()).done;){var _=v.value;(0,d.Yg)(i,_.geometry),(0,p.TC)(n,i)}}catch(b){g.e(b)}finally{g.f()}}if(s.mapImages){var y,x=(0,a.Z)(s.mapImages);try{for(x.s();!(y=x.n()).done;){var w=y.value;(0,d.Yg)(i,w.extent),(0,p.TC)(n,i)}}catch(b){x.e(b)}finally{x.f()}}}}catch(b){r.e(b)}finally{r.f()}return(0,p.fS)(n,p.Gv)?void 0:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:f.Z.WGS84}}},45956:function(e,t,i){i.d(t,{JZ:function(){return S},RL:function(){return Z},eY:function(){return V}});var n=i(29439),r=i(74165),a=i(15861),s=i(15671),o=i(43144),u=i(97326),l=i(11752),c=i(61120),h=i(60136),f=i(29388),p=i(92026),d=i(66978),m=i(22753),v=i(23588),g=i(15245),_=i(87422),y=i(10978),x=i(83826),w=i(8548),b=i(57808),k=i(52311);function S(e){return e&&"render"in e}function Z(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function C(e){return S(e)?e instanceof y.Z?(0,p.yw)(e.getRenderedRasterPixels(),(function(e){return e.renderedRasterPixels})):Z(e):e}var V=function(e){(0,h.Z)(i,e);var t=(0,f.Z)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,s.Z)(this,i),(e=t.call(this)).blendFunction="standard",e._sourceWidth=0,e._sourceHeight=0,e._textureInvalidated=!1,e._texture=null,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.immutable=r,e.source=n,e.requestRender=e.requestRender.bind((0,u.Z)(e)),e}return(0,o.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,l.Z)((0,c.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"setSourceAsync",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,i){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!=this._uploadStatus&&this._uploadStatus.controller.abort(),n=new AbortController,a=(0,d.hh)(),e.abrupt("return",((0,d.$F)(i,(function(){return n.abort()})),(0,d.$F)(n,(function(e){return a.reject(e)})),this._uploadStatus={controller:n,resolver:a},this.source=t,a.promise));case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}},{key:"updateTransitionProperties",value:function(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,l.Z)((0,c.Z)(i.prototype),"updateTransitionProperties",this).call(this,e,t)}},{key:"setTransform",value:function(e){var t=(0,m.g)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),r=(0,n.Z)(i,2),a=r[0],s=r[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,l=o*this.height,c=Math.PI*this.rotation/180;(0,m.h)(t,t,(0,g.f)(a,s)),(0,m.h)(t,t,(0,g.f)(u/2,l/2)),(0,m.r)(t,t,-c),(0,m.h)(t,t,(0,g.f)(-u/2,-l/2)),(0,m.l)(t,t,(0,g.f)(u,l)),(0,m.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i,n,a,s,o,u,l,c,h,f,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.context,n=t.painter,this._textureInvalidated){e.next=3;break}return e.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(i)),this.source){e.next=5;break}return e.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),a=C(this.source),e.prev=7,null==this._uploadStatus){e.next=16;break}return s=this._uploadStatus,o=s.controller,u=s.resolver,l={signal:o.signal},c=this.width,h=this.height,f=this._texture,p=n.textureUploadManager,e.next=12,p.enqueueTextureUpdate({data:a,texture:f,width:c,height:h},l);case 12:u.resolve(),this._uploadStatus=null,e.next=17;break;case 16:this._texture.setData(a);case 17:this.ready(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),(0,d.H9)(e.t0);case 23:case"end":return e.stop()}}),e,this,[[7,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{dvs:(0,v.c)()}}},{key:"_createTexture",value:function(e){var t=this.immutable&&e.type===x.zO.WEBGL2,i=new k.X;return i.internalFormat=t?w.lP.RGBA8:w.VI.RGBA,i.wrapMode=w.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new b.x(e,i)}}]),i}(_.s)},90110:function(e,t,i){i.d(t,{c:function(){return f}});var n=i(93433),r=i(15671),a=i(43144),s=i(11752),o=i(61120),u=i(60136),l=i(29388),c=i(62272),h=i(80613),f=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments))._hasCrossfade=!1,e}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}},{key:"beforeRender",value:function(e){(0,s.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this._manageFade()}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap",brushes:[c.U.bitmap],target:function(){return t.children},drawPhase:h.jx.MAP});return[].concat((0,n.Z)((0,s.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}},{key:"_manageFade",value:function(){this.children.reduce((function(e,t){return e+(t.inFadeTransition?1:0)}),0)>=2?(this.children.forEach((function(e){return e.blendFunction="additive"})),this._hasCrossfade=!0):(this.children.forEach((function(e){return e.blendFunction="standard"})),this._hasCrossfade=!1)}}]),i}(i(64510).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(15671),r=i(43144),a=function(){function e(t,i,r){(0,n.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return(0,r.Z)(e,[{key:"width",get:function(){return null!=this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return null!=this.pixelBlock?this.pixelBlock.height:0}},{key:"render",value:function(e){var t,i=this.pixelBlock;if(null!=i){var n=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(null!=n.pixelBlock){n.pixelBlock.maskIsAlpha&&(n.pixelBlock.premultiplyAlpha=!0);var r=n.pixelBlock.getAsRGBA(),a=e.createImageData(n.pixelBlock.width,n.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}]),e}()},6326:function(e,t,i){i.r(t),i.d(t,{default:function(){return Y}});var n=i(93433),r=i(1413),a=i(29439),s=i(37762),o=i(74165),u=i(15861),l=i(60136),c=i(29388),h=i(43144),f=i(15671),p=i(27366),d=i(19545),m=i(40281),v=i(92026),g=i(94172),_=i(35995),y=i(49861),x=(i(25243),i(63780),i(93169),i(69912)),w=i(53866),b=i(79803),k=i(78952),S=i(21857),Z=i(23084),C=i(78983),V=i(45956),I=i(90110),T=i(95986),P=i(75391),A=i(77318),R=i(67581),M=i(76200),E=i(585),B=i(80394),D=i(25866),G=i(40658),O=i(8548),U=i(53634),L=i(48673),F=i(42724),j=i(57808),N=i(52311),q=function(){function e(t){if((0,f.Z)(this,e),this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(e._instance)return e._instanceRefCount++,e._instance;e._instanceRefCount=1,e._instance=this,this._ownsRctx=!0;var i=document.createElement("canvas").getContext("webgl");i.getExtension("OES_texture_float"),this._rctx=new F.x(i,{})}var n=(0,G.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(n.shaders.vertexShader,n.shaders.fragmentShader,n.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new D.Z(this._rctx,[0,0,1,0,0,1,1,1])}return(0,h.Z)(e,[{key:"reprojectTexture",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=(0,b.project)(e.extent,t),r=new E.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),a=(0,B.VO)(r,t,e.extent),s=a.x,o=a.y,u=(s+o)/2,l=Math.round((n.xmax-n.xmin)/u),c=Math.round((n.ymax-n.ymin)/u);u=(n.width/l+n.height/c)/2;var h=new E.Z({x:u,y:u,spatialReference:n.spatialReference}),f=(0,B.Qp)({projectedExtent:n,srcBufferExtent:e.extent,pixelSize:h,hasWrapAround:!0,spacing:[16,16]}),p=(0,L.Br)(this._rctx,f),d=new N.X(l,c);d.wrapMode=O.e8.CLAMP_TO_EDGE;var m=new U.X(this._rctx,d);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,c),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(p,1),this._quad.bind();var v=e.texture.descriptor,g=v.width,_=void 0===g?0:g,y=v.height,x=void 0===y?0:y;if(this._program.setUniform2f("u_srcImageSize",_,x),this._program.setUniform2fv("u_transformSpacing",f.spacing),this._program.setUniform2fv("u_transformGridSize",f.size),this._program.setUniform2f("u_targetImageSize",l,c),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),p.dispose(),i){var w=m.width,k=m.height,S=new ImageData(null!==w&&void 0!==w?w:0,null!==k&&void 0!==k?k:0);m.readPixels(0,0,null!==w&&void 0!==w?w:0,null!==k&&void 0!==k?k:0,O.VI.RGBA,O.Br.UNSIGNED_BYTE,S.data);var Z=m.detachColorTexture(O.VY.COLOR_ATTACHMENT0);return m.dispose(),{texture:Z,extent:n,imageData:S}}var C=m.detachColorTexture(O.VY.COLOR_ATTACHMENT0);return m.dispose(),{texture:C,extent:n}}},{key:"reprojectBitmapData",value:function(e,t){var i=(0,V.JZ)(e.bitmapData)?(0,V.RL)(e.bitmapData):e.bitmapData,n=new N.X;n.wrapMode=O.e8.CLAMP_TO_EDGE,n.width=e.bitmapData.width,n.height=e.bitmapData.height;var r=new j.x(this._rctx,n,i),a=this.reprojectTexture({texture:r,extent:e.extent},t,!0);a.texture.dispose();var s=document.createElement("canvas"),o=a.imageData;return s.width=o.width,s.height=o.height,s.getContext("2d").putImageData(o,0,0),{bitmapData:s,extent:a.extent}}},{key:"loadAndReprojectBitmapData",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i,n){var r,a,s,u,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.default)(t,{responseType:"image"});case 2:if(r=e.sent.data,(a=document.createElement("canvas")).width=r.width,a.height=r.height,(s=a.getContext("2d")).drawImage(r,0,0),u=s.getImageData(0,0,a.width,a.height),!i.spatialReference.equals(n)){e.next=10;break}return e.abrupt("return",{bitmapData:u,extent:i});case 10:return l=this.reprojectBitmapData({bitmapData:u,extent:i},n),e.abrupt("return",{bitmapData:l.bitmapData,extent:l.extent});case 12:case"end":return e.stop()}}),e,this)})));return function(t,i,n){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this._ownsRctx?(e._instanceRefCount--,0===e._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),e._instance=null)):(this._quad.dispose(),this._program.dispose())}}]),e}();q._instanceRefCount=0;var z=(0,h.Z)((function e(){(0,f.Z)(this,e),this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]})),W=function(e){(0,l.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,f.Z)(this,i),(e=t.apply(this,arguments))._bitmapIndex=new Map,e._mapImageContainer=new I.c,e._kmlVisualData=new z,e._fetchController=null,e.allVisiblePoints=new C.J,e.allVisiblePolylines=new C.J,e.allVisiblePolygons=new C.J,e.allVisibleMapImages=new m.Z,e}return(0,h.Z)(i,[{key:"hitTest",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i){var n,r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.layer,e.abrupt("return",[null===(n=this._pointsView)||void 0===n?void 0:n.hitTest(t),null===(r=this._polylinesView)||void 0===r?void 0:r.hitTest(t),null===(a=this._polygonsView)||void 0===a?void 0:a.hitTest(t)].flat().filter(Boolean).map((function(e){return e.layer=s,e.sourceLayer=s,{type:"graphic",graphic:e,layer:s,mapPoint:t}})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}},{key:"attach",value:function(){var e=this;this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new A.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:function(){return e.requestUpdate()},container:new P.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new A.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:function(){return e.requestUpdate()},container:new P.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new A.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:function(){return e.requestUpdate()},container:new P.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(function(t){t.added.forEach((function(t){return e._addMapImage(t)})),t.removed.forEach((function(t){return e._removeMapImage(t)}))})),(0,g.YP)((function(){return e.layer.visibleSublayers}),(function(t){var i,n=(0,s.Z)(e._kmlVisualData.allSublayers);try{for(n.s();!(i=n.n()).done;){var r=(0,a.Z)(i.value,2);r[0];r[1].visibility=0}}catch(h){n.e(h)}finally{n.f()}var o,u=(0,s.Z)(t);try{for(u.s();!(o=u.n()).done;){var l=o.value,c=e._kmlVisualData.allSublayers.get(l.id);c&&(c.visibility=1)}}catch(h){u.e(h)}finally{u.f()}e._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new q}},{key:"detach",value:function(){this._fetchController=(0,v.IM)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,v.SC)(this._polygonsView),this._polylinesView=(0,v.SC)(this._polylinesView),this._pointsView=(0,v.SC)(this._pointsView),this._imageReprojector=(0,v.SC)(this._imageReprojector)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}},{key:"_addMapImage",value:function(e){var t,i,n=this;((null===(t=this.view.spatialReference)||void 0===t?void 0:t.isWGS84)||(null===(i=this.view.spatialReference)||void 0===i?void 0:i.isWebMercator))&&this._imageReprojector.loadAndReprojectBitmapData(e.href,w.Z.fromJSON(e.extent),this.view.spatialReference).then((function(t){var i=new V.eY(t.bitmapData);i.x=t.extent.xmin,i.y=t.extent.ymax,i.resolution=t.extent.width/t.bitmapData.width,i.rotation=e.rotation,n._mapImageContainer.addChild(i),n._bitmapIndex.set(e,i)}))}},{key:"_getViewDependentUrl",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i){var n,a,s,u,l,c,h,f,p,m,v,g,y,x,S,C,V,I;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.viewFormat,a=t.viewBoundScale,s=t.httpQuery,null==n){e.next=20;break}if(null!=i){e.next=4;break}throw new Error("Loading this network link requires a view state.");case 4:return e.next=6,(0,b.load)();case 6:if(null==a||1===a){e.next=11;break}(l=new w.Z(i.extent)).expand(a),u=l,e.next=12;break;case 11:u=i.extent;case 12:return u=(0,b.project)(u,k.Z.WGS84),c=(0,b.project)(u,k.Z.WebMercator),h=u.xmin,f=u.xmax,p=u.ymin,m=u.ymax,v=i.size[0]*i.pixelRatio,g=i.size[1]*i.pixelRatio,y=Math.max(c.width,c.height),x={"[bboxWest]":h.toString(),"[bboxEast]":f.toString(),"[bboxSouth]":p.toString(),"[bboxNorth]":m.toString(),"[lookatLon]":u.center.x.toString(),"[lookatLat]":u.center.y.toString(),"[lookatRange]":y.toString(),"[lookatTilt]":"0","[lookatHeading]":i.rotation.toString(),"[lookatTerrainLon]":u.center.x.toString(),"[lookatTerrainLat]":u.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":u.center.x.toString(),"[cameraLat]":u.center.y.toString(),"[cameraAlt]":y.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":v.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":d.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=function(e){for(var t in e){var i=void 0;for(i in x)e[t]=e[t].replace(i,x[i])}},C=(0,_.u0)(n),S(C),V={},null!=s&&(V=(0,_.u0)(s),S(V)),(I=(0,Z.en)(t.href)).query=(0,r.Z)((0,r.Z)((0,r.Z)({},I.query),C),V),e.abrupt("return","".concat(I.path,"?").concat((0,_.B7)(C)));case 20:return e.abrupt("return",t.href);case 21:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new z,e.next=3,this._loadVisualData(this.layer.url,i,t);case 3:this._kmlVisualData=i,this._refreshCollections();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_refreshCollections",value:function(){var e=this;this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item})))}},{key:"_isSublayerVisible",value:function(e){var t=this._kmlVisualData.allSublayers.get(e);return!(null===t||void 0===t||!t.visibility)&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}},{key:"_loadVisualData",value:function(e,t,i){var r=this;return this._fetchParsedKML(e,i).then(function(){var e=(0,u.Z)((0,o.Z)().mark((function e(a){var u,l,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=(0,s.Z)(a.sublayers),e.prev=1,c=(0,o.Z)().mark((function e(){var a,s,u,c,h,f,p,d,m,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=l.value,t.allSublayers.set(h.id,h),!h.points){e.next=8;break}return e.next=5,(0,S.Yu)(h.points);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=[];case 9:if(f=e.t0,!h.polylines){e.next=16;break}return e.next=13,(0,S.Yu)(h.polylines);case 13:e.t1=e.sent,e.next=17;break;case 16:e.t1=[];case 17:if(p=e.t1,!h.polygons){e.next=24;break}return e.next=21,(0,S.Yu)(h.polygons);case 21:e.t2=e.sent,e.next=25;break;case 24:e.t2=[];case 25:if(d=e.t2,m=h.mapImages||[],(a=t.allPoints).push.apply(a,(0,n.Z)(f.map((function(e){return{item:e,sublayerId:h.id}})))),(s=t.allPolylines).push.apply(s,(0,n.Z)(p.map((function(e){return{item:e,sublayerId:h.id}})))),(u=t.allPolygons).push.apply(u,(0,n.Z)(d.map((function(e){return{item:e,sublayerId:h.id}})))),(c=t.allMapImages).push.apply(c,(0,n.Z)(m.map((function(e){return{item:e,sublayerId:h.id}})))),!h.networkLink){e.next=33;break}return e.next=30,r._getViewDependentUrl(h.networkLink,r.view.state);case 30:return v=e.sent,e.next=33,r._loadVisualData(v,t,i);case 33:case"end":return e.stop()}}),e)})),u.s();case 4:if((l=u.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),u.e(e.t1);case 13:return e.prev=13,u.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}},{key:"_fetchParsedKML",value:function(e,t){return(0,S.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((function(e){return(0,S.Cw)(e.data)}))}},{key:"_removeMapImage",value:function(e){var t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}}]),i}((0,T.y)(R.Z));(0,p._)([(0,y.Cb)()],W.prototype,"_pointsView",void 0),(0,p._)([(0,y.Cb)()],W.prototype,"_polylinesView",void 0),(0,p._)([(0,y.Cb)()],W.prototype,"_polygonsView",void 0),(0,p._)([(0,y.Cb)()],W.prototype,"updating",void 0);var Y=W=(0,p._)([(0,x.j)("esri.views.2d.layers.KMLLayerView2D")],W)},48673:function(e,t,i){i.d(t,{Br:function(){return c},Fm:function(){return v},N9:function(){return _},RA:function(){return y},Tc:function(){return f},Ue:function(){return p},iC:function(){return h},s9:function(){return l},v:function(){return g},xW:function(){return m},zS:function(){return d}});var n=i(29439),r=i(6394),a=i(83826),s=i(8548),o=i(57808),u=i(52311);function l(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=!(r&&"u8"===t.pixelType),c=l?s.Br.FLOAT:s.Br.UNSIGNED_BYTE,h=null==t.pixels||0===t.pixels.length?null:l?t.getAsRGBAFloat():t.getAsRGBA(),f=null===(i=e.capabilities.textureFloat)||void 0===i?void 0:i.textureFloatLinear,p=new u.X;return p.width=t.width,p.height=t.height,p.internalFormat=e.type===a.zO.WEBGL2&&l?s.lP.RGBA32F:s.VI.RGBA,p.samplingMode=!f||"bilinear"!==n&&"cubic"!==n?s.cw.NEAREST:s.cw.LINEAR,p.dataType=c,p.wrapMode=s.e8.CLAMP_TO_EDGE,new o.x(e,p,h)}function c(e,t){var i=t.spacing,r=t.offsets,l=t.coefficients,c=(0,n.Z)(t.size,2),h=c[0],f=c[1],p=i[0]>1,d=new u.X;d.width=p?4*h:h,d.height=f,d.internalFormat=e.type===a.zO.WEBGL2?s.lP.RGBA32F:s.VI.RGBA,d.dataType=s.Br.FLOAT,d.samplingMode=s.cw.NEAREST,d.wrapMode=s.e8.CLAMP_TO_EDGE;var m=new Float32Array(p?h*f*16:2*r.length);if(p&&null!=l)for(var v=0,g=0;v<l.length;v++)m[g++]=l[v],v%3==2&&(m[g++]=1);else for(var _=0;_<f;_++)for(var y=0;y<h;y++){var x=4*(_*h+y),w=2*(y*f+_);m[x]=r[w],m[x+1]=r[w+1],m[x+3]=-1===r[w]?0:1}return new o.x(e,d,m)}function h(e,t){var i=new u.X;return i.internalFormat=s.VI.RGBA,i.width=t.length/4,i.height=1,i.samplingMode=s.cw.NEAREST,i.wrapMode=s.e8.CLAMP_TO_EDGE,new o.x(e,i,t)}function f(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return{u_flipY:a,u_applyTransform:!!e,u_opacity:n,u_transformSpacing:e?e.spacing:r.Z,u_transformGridSize:e?e.size:r.Z,u_targetImageSize:t,u_srcImageSize:i}}function p(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function d(e,t){return{u_scale:e,u_offset:t}}function m(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function v(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function g(e,t){var i=e.gl,n=t.glName,r=new Map;if(null==n)return r;for(var a,s=i.getProgramParameter(n,i.ACTIVE_UNIFORMS),o=0;o<s;o++)(a=i.getActiveUniform(n,o))&&r.set(a.name,{location:i.getUniformLocation(n,a.name),info:a});return r}function _(e,t,i){Object.keys(i).forEach((function(n){var r=t.get(n)||t.get(n+"[0]");r&&function(e,t,i,n){if(null===n||null==i)return!1;var r=n.info;switch(r.type){case s.Se.FLOAT:r.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i);break;case s.Se.FLOAT_VEC2:e.setUniform2fv(t,i);break;case s.Se.FLOAT_VEC3:e.setUniform3fv(t,i);break;case s.Se.FLOAT_VEC4:e.setUniform4fv(t,i);break;case s.Se.FLOAT_MAT3:e.setUniformMatrix3fv(t,i);break;case s.Se.FLOAT_MAT4:e.setUniformMatrix4fv(t,i);break;case s.Se.INT:r.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i);break;case s.Se.BOOL:e.setUniform1i(t,i?1:0);break;case s.Se.INT_VEC2:case s.Se.BOOL_VEC2:e.setUniform2iv(t,i);break;case s.Se.INT_VEC3:case s.Se.BOOL_VEC3:e.setUniform3iv(t,i);break;case s.Se.INT_VEC4:case s.Se.BOOL_VEC4:e.setUniform4iv(t,i);break;default:return!1}}(e,n,i[n],r)}))}function y(e,t,i,n){i.length===n.length&&(n.some((function(e){return null==e}))||i.some((function(e){return null==e}))||i.forEach((function(i,r){t.setUniform1i(i,r),e.bindTexture(n[r],r)})))}}}]);
//# sourceMappingURL=6326.1694170d.chunk.js.map