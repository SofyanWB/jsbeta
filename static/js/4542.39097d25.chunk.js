"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[4542],{58971:function(e,t,r){r.d(t,{G6:function(){return M},Ie:function(){return k},J9:function(){return x},RF:function(){return v},U1:function(){return C},vY:function(){return s},ym:function(){return b}});var n=r(29439),a=r(77981);var i=function(e,t,r){return[t,r]},o=function(e,t,r){return[t,r,e[2]]},u=function(e,t,r){return[t,r,e[2],e[3]]};function s(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c(e,t){var r=e.scale,n=e.translate;return Math.round((t-n[0])/r[0])}function l(e,t){var r=e.scale,n=e.translate;return Math.round((n[1]-t)/r[1])}function h(e,t,r){for(var n,a,i,o,u=[],s=0;s<r.length;s++){var h=r[s];s>0?(i=c(e,h[0]),o=l(e,h[1]),i===n&&o===a||(u.push(t(h,i-n,o-a)),n=i,a=o)):(n=c(e,h[0]),a=l(e,h[1]),u.push(t(h,n,a)))}return u.length>0?u:null}function f(e,t){var r=e.scale,n=e.translate;return t*r[0]+n[0]}function g(e,t){var r=e.scale;return e.translate[1]-t*r[1]}function d(e,t,r){var a=new Array(r.length);if(!r.length)return a;var i=(0,n.Z)(e.scale,2),o=i[0],u=i[1],s=f(e,r[0][0]),c=g(e,r[0][1]);a[0]=t(r[0],s,c);for(var l=1;l<r.length;l++){var h=r[l];s+=h[0]*o,c-=h[1]*u,a[l]=t(h,s,c)}return a}function p(e,t,r){for(var n=new Array(r.length),a=0;a<r.length;a++)n[a]=d(e,t,r[a]);return n}function m(e,t,r,n,a){var s;return t.points=null!==(s=function(e,t,r,n){return h(e,r?n?u:o:n?o:i,t)}(e,r.points,n,a))&&void 0!==s?s:[],t}function v(e,t,r,n,a){return t.x=c(e,r.x),t.y=l(e,r.y),t!==r&&(n&&(t.z=r.z),a&&(t.m=r.m)),t}function y(e,t,r,n,a){var s=function(e,t,r,n){for(var a=[],s=r?n?u:o:n?o:i,c=0;c<t.length;c++){var l=h(e,s,t[c]);l&&l.length>=3&&a.push(l)}return a.length?a:null}(e,r.rings,n,a);return s?(t.rings=s,t):null}function w(e,t,r,n,a){var s=function(e,t,r,n){for(var a=[],s=r?n?u:o:n?o:i,c=0;c<t.length;c++){var l=h(e,s,t[c]);l&&l.length>=2&&a.push(l)}return a.length?a:null}(e,r.paths,n,a);return s?(t.paths=s,t):null}function b(e,t){return e&&t?(0,a.wp)(t)?v(e,{},t,!1,!1):(0,a.l9)(t)?w(e,{},t,!1,!1):(0,a.oU)(t)?y(e,{},t,!1,!1):(0,a.aW)(t)?m(e,{},t,!1,!1):(0,a.YX)(t)?(o=!1,u=!1,(n={}).xmin=c(r=e,(i=t).xmin),n.ymin=l(r,i.ymin),n.xmax=c(r,i.xmax),n.ymax=l(r,i.ymax),n!==i&&(o&&(n.zmin=i.zmin,n.zmax=i.zmax),u&&(n.mmin=i.mmin,n.mmax=i.mmax)),n):null:null;var r,n,i,o,u}function x(e,t,r,n,a){return null!=r&&(t.points=function(e,t,r,n){return d(e,r?n?u:o:n?o:i,t)}(e,r.points,n,a)),t}function C(e,t,r,n,a){return null==r||(t.x=f(e,r.x),t.y=g(e,r.y),t!==r&&(n&&(t.z=r.z),a&&(t.m=r.m))),t}function k(e,t,r,n,a){return null!=r&&(t.rings=function(e,t,r,n){return p(e,r?n?u:o:n?o:i,t)}(e,r.rings,n,a)),t}function M(e,t,r,n,a){return null!=r&&(t.paths=function(e,t,r,n){return p(e,r?n?u:o:n?o:i,t)}(e,r.paths,n,a)),t}},17653:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(1413),a=r(74165),i=r(15861),o=r(15671),u=r(43144),s=r(76200),c=r(10064),l=r(82272),h=r(66978),f=r(1370),g=r(37762),d=r(52522),p=r(38499);function m(e,t){return v.apply(this,arguments)}function v(){return v=(0,i.Z)((0,a.Z)().mark((function e(t,r){var n,i,o,u,s,c,l,f,m,v,y,w,b,x;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=(0,d.p)(t))instanceof Error)){e.next=3;break}throw n;case 3:return e.next=5,n.createImages();case 5:(0,h.k_)(r),i=n.frames,o=n.width,u=n.height,(s=document.createElement("canvas")).width=o,s.height=u,c=s.getContext("2d",{willReadFrequently:!0}),l=[],f=[],m=(0,g.Z)(i);try{for(m.s();!(v=m.n()).done;)y=v.value,f.push((0,p.HA)(y.delay||100)),w=y.imageElement,0===y.blendOp?c.globalCompositeOperation="copy":c.globalCompositeOperation="source-over",b=2===y.disposeOp?c.getImageData(y.left,y.top,y.width,y.height):void 0,c.drawImage(w,y.left,y.top),x=c.getImageData(0,0,o,u),l.push(x),0===y.disposeOp||(1===y.disposeOp?c.clearRect(y.left,y.top,y.width,y.height):2===y.disposeOp&&c.putImageData(b,y.left,y.top))}catch(a){m.e(a)}finally{m.f()}return e.abrupt("return",{frameDurations:f,getFrame:function(e){return l[e]},width:o,height:u});case 12:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}var y=[137,80,78,71,13,10,26,10];function w(e){var t=new Uint8Array(e);return!y.some((function(e,r){return e!==t[r]}))}function b(e){if(!w(e))return!1;var t,r=new DataView(e),n=new Uint8Array(e),a=8;do{var i=r.getUint32(a);if("acTL"===(t=String.fromCharCode.apply(String,Array.prototype.slice.call(n.subarray(a+4,a+8)))))return!0;a+=12+i}while("IEND"!==t&&a<n.length);return!1}var x=r(91958),C=r(47191);function k(e,t){return M.apply(this,arguments)}function M(){return M=(0,i.Z)((0,a.Z)().mark((function e(t,r){var n,i,o,u,s,c,l,h,f,d,m,v,y,w,b,k;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,C.p)(t),i=(0,C.d)(n,!0),o=n.lsd,u=o.width,s=o.height,(c=document.createElement("canvas")).width=u,c.height=s,l=c.getContext("2d",{willReadFrequently:!0}),h=[],f=[],d=(0,g.Z)(i);try{for(d.s();!(m=d.n()).done;)v=m.value,f.push((0,p.HA)(v.delay||100)),y=new ImageData(v.patch,v.dims.width,v.dims.height),w=(0,x.E0)(y),b=3===v.disposalType?l.getImageData(v.dims.left,v.dims.top,v.dims.width,v.dims.height):void 0,l.drawImage(w,v.dims.left,v.dims.top),k=l.getImageData(0,0,u,s),h.push(k),1===v.disposalType||(2===v.disposalType?l.clearRect(v.dims.left,v.dims.top,v.dims.width,v.dims.height):3===v.disposalType&&l.putImageData(b,v.dims.left,v.dims.top))}catch(r){d.e(r)}finally{d.f()}return e.abrupt("return",{frameDurations:f,getFrame:function(e){return h[e]},width:u,height:s});case 6:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}var R=[71,73,70];function P(e){if(!function(e){var t=new Uint8Array(e);return!R.some((function(e,r){return e!==t[r]}))}(e))return!1;for(var t=new DataView(e),r=t.getUint8(10),n=13+(128&r?3*Math.pow(2,1+(7&r)):0),a=0,i=!1;!i;){switch(t.getUint8(n++)){case 33:if(!o())return!1;break;case 44:u();break;case 59:i=!0;break;default:return!1}if(a>1)return!0}function o(){switch(t.getUint8(n++)){case 249:n++,n+=4,s();break;case 1:a++,n++,n+=12,s();break;case 254:s();break;case 255:n++,n+=8,n+=3,s();break;default:return!1}return!0}function u(){a++,n+=8;var e=t.getUint8(n++);n+=128&e?3*Math.pow(2,1+(7&e)):0,n++,s()}function s(){for(var e;e=t.getUint8(n++);)n+=e}return!1}var _=function(){function e(){(0,o.Z)(this,e),this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}return(0,u.Z)(e,[{key:"destroy",value:function(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}},{key:"getResource",value:function(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}},{key:"fetchResource",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r){var n,i,o=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this._resourceMap.get(t))){e.next=3;break}return e.abrupt("return",{width:n.width,height:n.height});case 3:return i=this._inFlightResourceMap.get(t),e.abrupt("return",i?i.then((function(e){return{width:e.width,height:e.height}})):(i=S(t,r),this._inFlightResourceMap.set(t,i),i.then((function(e){return o._inFlightResourceMap.delete(t),o._resourceMap.set(t,e),{width:e.width,height:e.height}}),(function(){return{width:0,height:0}}))));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteResource",value:function(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}},{key:"loadFont",value:function(e){return(0,l.mx)(e)}}]),e}();function z(e,t){return I.apply(this,arguments)}function I(){return I=(0,i.Z)((0,a.Z)().mark((function e(t,r){var i,o,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=window.URL.createObjectURL(t),e.prev=1,e.next=4,(0,s.default)(i,(0,n.Z)((0,n.Z)({},r),{},{responseType:"image"}));case 4:return o=e.sent,u=o.data,e.abrupt("return",u);case 9:if(e.prev=9,e.t0=e.catch(1),(0,h.D_)(e.t0)){e.next=13;break}throw new c.Z("mapview-invalid-resource","Could not fetch requested resource at ".concat(i));case 13:throw e.t0;case 14:return e.prev=14,window.URL.revokeObjectURL(i),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,9,14,17]])}))),I.apply(this,arguments)}function S(e,t){return Z.apply(this,arguments)}function Z(){return Z=(0,i.Z)((0,a.Z)().mark((function e(t,r){var n,i,o,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t,r);case 2:if(n=e.sent,i=n.arrayBuffer,o=n.mediaType,u="image/png"===o,"image/gif"!==o||!P(i)){e.next=8;break}return e.abrupt("return",k(i));case 8:if(!u||!b(i)){e.next=10;break}return e.abrupt("return",m(i,r));case 10:return e.abrupt("return",z(new Blob([i],{type:o}),r));case 11:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function F(e,t){return L.apply(this,arguments)}function L(){return L=(0,i.Z)((0,a.Z)().mark((function e(t,r){var i,o,u,l,g,d,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=";base64,",!t.includes(o)){e.next=6;break}u=t.indexOf(o),l=t.indexOf(o)+o.length,g=t.substring(l),i={arrayBuffer:(0,f.R)(g),mediaType:t.substring(0,u).replace("data:","")},e.next=18;break;case 6:return e.prev=6,e.next=9,(0,s.default)(t,(0,n.Z)({responseType:"array-buffer"},r));case 9:d=e.sent,p=d.data,i={arrayBuffer:p,mediaType:d.getHeader("Content-Type")},e.next=18;break;case 14:if(e.prev=14,e.t0=e.catch(6),(0,h.D_)(e.t0)){e.next=18;break}throw new c.Z("mapview-invalid-resource","Could not fetch requested resource at ".concat(t));case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e,null,[[6,14]])}))),L.apply(this,arguments)}},60975:function(e,t,r){r.r(t),r.d(t,{previewCIMSymbol:function(){return D}});var n,a,i=r(74165),o=r(15861),u=r(17842),s=r(78915),c=r(37762),l=r(15671),h=r(43144),f=r(51995),g=r(76200),d=r(92026),p=r(66978),m=r(98991),v=r(17653),y=r(66726),w=r(16285),b=r(22532),x=r(31027),C=r(49729),k=r(83748);(a=n||(n={})).Legend="legend",a.Preview="preview";var M=function(e){return e&&e.scaleFactor?e.scaleFactor:1},R=function(){function e(t,r){(0,l.Z)(this,e),this._spatialReference=t,this._avoidSDF=r,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new b.Z,this._cimResourceManager=new v.Z,this._rasterizer=new w.Z(this._cimResourceManager)}return(0,h.Z)(e,[{key:"resourceManager",get:function(){return this._cimResourceManager}},{key:"rasterizeCIMSymbolAsync",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n,a,o,u,c,l){var h,f,g,d,p,m,v,w,b,C,k,M,R,_,z,I,S,Z,F,L,D,A,T,B,O,U;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if((h=t.data)&&"CIMSymbolReference"===h.type&&h.symbol){e.next=5;break}return e.abrupt("return",null);case 5:return f=h.symbol,u||(u=(0,x.JW)(f)),e.next=9,s.E0.resolveSymbolOverrides(h,r,this._spatialReference,o,u,c,l);case 9:if(g=e.sent,this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),d=this._imageDataCanvas,p=this._cimResourceManager,m=[],s.B$.fetchResources(g,p,m),s.B$.fetchFonts(g,p,m),e.t0=m.length>0,!e.t0){e.next=18;break}return e.next=18,Promise.all(m);case 18:if(v=n.width,w=n.height,b=P(u,v,w,a),C=s.B$.getEnvelope(g,b,p)){e.next=21;break}return e.abrupt("return",null);case 21:k=1.3333333333333333*(window.devicePixelRatio||1),M=1,R=0,_=0,e.t1=f.type,e.next="CIMPointSymbol"===e.t1||"CIMTextSymbol"===e.t1?26:"CIMLineSymbol"===e.t1?31:"CIMPolygonSymbol"===e.t1?37:40;break;case 26:return z=1,C.width>v&&(z=v/C.width),I=1,C.height>w&&(I=w/C.height),"preview"===a&&(C.width<v&&(z=v/C.width),C.height<w&&(I=w/C.height)),M=Math.min(z,I),R=C.x+C.width/2,_=C.y+C.height/2,e.abrupt("break",40);case 31:return S=1,C.height>w&&(S=w/C.height),M=S,_=C.y+C.height/2,Z=C.x*M+v/2,F=(C.x+C.width)*M+v/2,Z<0&&(b.paths[0][0][0]-=Z),F>v&&(b.paths[0][2][0]-=F-v),e.abrupt("break",40);case 37:R=C.x+C.width/2,_=C.y+C.height/2,L=C.x*M+v/2,D=(C.x+C.width)*M+v/2,A=C.y*M+w/2,T=(C.y+C.height)*M+w/2,B=b.rings,L<0&&(B[0][0][0]-=L,B[0][3][0]-=L,B[0][4][0]-=L),A<0&&(B[0][0][1]+=A,B[0][1][1]+=A,B[0][4][1]+=A),D>v&&(B[0][1][0]-=D-v,B[0][2][0]-=D-v),T>w&&(B[0][2][1]+=T-w,B[0][3][1]+=T-w);case 40:return d.width=v*k,d.height=w*k,1,d.width+=2,d.height+=2,O=d.getContext("2d"),(U=y.zA.createIdentity()).translate(-R,-_),U.scale(M*k,-M*k),U.translate(v*k/2+1,w*k/2+1),O.clearRect(0,0,d.width,d.height),e.abrupt("return",(new y.cD(O,p,U,!0).drawSymbol(g,b),O.getImageData(0,0,d.width,d.height)));case 46:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,i,o,u,s){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol3D",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r,n,a,o){var u,c,l,h,f,g,d,v;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[],c=r?{geometryType:a,spatialReference:this._spatialReference,fields:r}:null,l=[],s.B$.fetchFonts(t.data.symbol,this._cimResourceManager,l),e.next=4,Promise.all(l);case 4:return h=new m._(this._cimResourceManager,c),e.next=7,h.analyzeSymbolReference(t.data,this._avoidSDF,u);case 7:for((0,p.k_)(o),g=0,d=u;g<d.length;g++)"CIMPictureMarker"!==(v=d[g]).cim.type&&"CIMPictureFill"!==v.cim.type&&"CIMPictureStroke"!==v.cim.type||(f||(f=[]),f.push(this._fetchPictureMarkerResource(v,o))),n&&"text"===v.type&&"string"==typeof v.text&&v.text.includes("[")&&(v.text=(0,x.Qs)(n,v.text,v.cim.textCase));if(e.t0=f,!e.t0){e.next=13;break}return e.next=13,Promise.all(f);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,n,a,i){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol3D",value:function(e,t,r,n,a,i){var o,u=[],s=(0,c.Z)(e);try{for(s.s();!(o=s.n()).done;){var l=o.value;n&&"function"==typeof n.scaleFactor&&(n.scaleFactor=n.scaleFactor(t,a,i));var h=this._getRasterizedResource(l,t,r,n,a,i);if(h){var f=0,g=h.anchorX||0,d=h.anchorY||0,p=!1,m=0,v=0;if("esriGeometryPoint"===r){var y,w=M(n);if(m=(0,x.hf)(l.offsetX,t,a,i)*w||0,v=(0,x.hf)(l.offsetY,t,a,i)*w||0,"marker"===l.type)f=(0,x.hf)(l.rotation,t,a,i)||0,p=null!==(y=l.rotateClockwise)&&void 0!==y&&y;else if("text"===l.type){if(f=(0,x.hf)(l.angle,t,a,i)||0,void 0!==l.horizontalAlignment)switch(l.horizontalAlignment){case"left":g=-.5;break;case"right":g=.5;break;default:g=0}if(void 0!==l.verticalAlignment)switch(l.verticalAlignment){case"top":d=.5;break;case"bottom":d=-.5;break;case"baseline":d=-.25;break;default:d=0}}}null!=h&&u.push({angle:f,rotateClockWise:p,anchorX:g,anchorY:d,offsetX:m,offsetY:v,rasterizedResource:h})}}}catch(b){s.e(b)}finally{s.f()}return this.getSymbolImage(u)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),r=(0,d.s3)(t.getContext("2d")),n=0,a=0,i=0,o=0,s=[],c=0;c<e.length;c++){var l=e[c],h=l.rasterizedResource;if(h){var f=h.size,g=l.offsetX,p=l.offsetY,m=l.anchorX,v=l.anchorY,y=l.rotateClockWise||!1,w=l.angle,b=(0,u.F2)(g)-f[0]*(.5+m),x=(0,u.F2)(p)-f[1]*(.5+v),C=b+f[0],M=x+f[1];if(w){y&&(w=-w);var R=Math.sin(w*Math.PI/180),P=Math.cos(w*Math.PI/180),_=b*P-x*R,z=b*R+x*P,I=b*P-M*R,S=b*R+M*P,Z=C*P-M*R,F=C*R+M*P,L=C*P-x*R,D=C*R+x*P;b=Math.min(_,I,Z,L),x=Math.min(z,S,F,D),C=Math.max(_,I,Z,L),M=Math.max(z,S,F,D)}n=b<n?b:n,a=x<a?x:a,i=C>i?C:i,o=M>o?M:o;var A=r.createImageData(h.size[0],h.size[1]);A.data.set(new Uint8ClampedArray(h.image.buffer));var T={offsetX:g,offsetY:p,rotateClockwise:y,angle:w,rasterizedImage:A,anchorX:m,anchorY:v};s.push(T)}}t.width=i-n,t.height=o-a;for(var B=-n,O=o,U=0;U<s.length;U++){var E=s[U],Y=this._imageDataToCanvas(E.rasterizedImage),H=E.rasterizedImage.width,W=E.rasterizedImage.height,X=B-H*(.5+E.anchorX),G=O-W*(.5-E.anchorY);if(E.angle){var j=(360-E.angle)*Math.PI/180;r.save(),r.translate((0,u.F2)(E.offsetX),-(0,u.F2)(E.offsetY)),r.translate(B,O),r.rotate(j),r.translate(-B,-O),r.drawImage(Y,X,G),r.restore()}else r.drawImage(Y,X+(0,u.F2)(E.offsetX),G-(0,u.F2)(E.offsetY))}var q=new k.e({x:B/t.width-.5,y:O/t.height-.5});return{imageData:0!==t.width&&0!==t.height?r.getImageData(0,0,t.width,t.height):r.createImageData(1,1),anchorPosition:q}}},{key:"_fetchPictureMarkerResource",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.materialHash,this._pictureMarkerCache.get(n)){e.next=6;break}return e.next=4,(0,g.default)(t.cim.url,{responseType:"image",signal:r&&r.signal});case 4:a=e.sent.data,this._pictureMarkerCache.set(n,a);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,r=(0,d.s3)(t.getContext("2d"));return t.width=e.width,t.height=e.height,r.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,r,n){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var a=this._imageDataCanvas,i=(0,d.s3)(a.getContext("2d"));if(a.width=t,a.height=r,i.drawImage(e,0,0,t,r),n){i.save();var o=new f.Z(n);i.fillStyle=o.toHex(),i.globalCompositeOperation="multiply",i.fillRect(0,0,t,r),i.globalCompositeOperation="destination-atop",i.drawImage(e,0,0,t,r),i.restore()}return new Uint32Array(i.getImageData(0,0,t,r).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,r,n,a,i){var o,u,s;if("text"===e.type)return this._rasterizeTextResource(e,t,n,a,i);var c=function(e,t,r,n){var a,i;"function"==typeof e.materialHash?(a=(0,e.materialHash)(t,r,n),i=(0,m.S)(e.cim,e.materialOverrides)):(a=e.materialHash,i=e.cim);return{analyzedCIM:i,hash:a}}(e,t,a,i);o=c.analyzedCIM,u=c.hash;var l=M(n);if("CIMPictureMarker"===e.cim.type){var h=(0,x.hf)(e.size,t,a,i)*l,f=(0,d.s3)(this._getPictureResource(e,h,(0,x.hf)(e.color,t,a,i)));return s={image:f.image,size:[f.width,f.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}(0,C.FW)(o,l,{preserveOutlineWidth:!1});var g=o;u+=r,n&&(u+=JSON.stringify(n));var p=this._resourceCache;return p.has(u)?p.get(u):(s=this._rasterizer.rasterizeJSONResource({cim:g,type:e.type,url:e.url,mosaicHash:u,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),p.set(u,s),s)}},{key:"_rasterizeTextResource",value:function(e,t,r,n,a){var i,o,u,s=M(r),c=(0,x.hf)(e.text,t,n,a);if(!c||0===c.length)return null;var l=e.cim,h=(0,x.hf)((null===l||void 0===l?void 0:l.fontFamilyName)||e.fontName,t,n,a),f=(0,x.hf)((null===l||void 0===l||null===(i=l.font)||void 0===i?void 0:i.style)||e.style,t,n,a),g=(0,x.hf)((null===l||void 0===l||null===(o=l.font)||void 0===o?void 0:o.weight)||e.weight,t,n,a),d=(0,x.hf)((null===l||void 0===l||null===(u=l.font)||void 0===u?void 0:u.decoration)||e.decoration,t,n,a),p=(0,x.hf)(e.size,t,n,a)*s,m=(0,x.hf)(e.horizontalAlignment,t,n,a),v=(0,x.hf)(e.verticalAlignment,t,n,a),y=(0,x.nn)((0,x.hf)(e.color,t,n,a)),w=(0,x.nn)((0,x.hf)(e.outlineColor,t,n,a)),b=(0,x.hf)(e.outlineSize,t,n,a),C=null!=e.backgroundColor?(0,x.nn)(e.backgroundColor):null,k=null!=e.borderLineColor?(0,x.nn)(e.borderLineColor):null,R=null!=e.borderLineWidth?e.borderLineWidth:null,P={color:y,size:p,horizontalAlignment:m,verticalAlignment:v,font:{family:h,style:f,weight:g,decoration:d},halo:{size:b||0,color:w,style:f},backgroundColor:C,borderLine:null!=k&&null!=R?{color:k,size:R}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(c,P)}},{key:"_getPictureResource",value:function(e,t,r){var n=this._pictureMarkerCache.get(e.materialHash);if(!n)return null;var a=n.height/n.width,i=t?a>1?(0,u.F2)(t):(0,u.F2)(t)/a:n.width,o=t?a>1?(0,u.F2)(t)*a:(0,u.F2)(t):n.height;return{image:this._imageTo32Array(n,i,o,r),width:i,height:o}}}]),e}();function P(e,t,r,n){var a=-t/2+1,i=t/2-1,o=r/2-1,u=-r/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[a,0],[0,0],[i,0]]]};default:return"legend"===n?{rings:[[[a,o],[i,0],[i,u],[a,u],[a,o]]]}:{rings:[[[a,o],[i,o],[i,u],[a,u],[a,o]]]}}}var _=r(37817),z=r(69157),I=new R(null,!0),S=(0,u.Wz)(_.b_.size),Z=(0,u.Wz)(_.b_.maxSize),F=(0,u.Wz)(_.b_.lineWidth);function L(e){var t=null===e||void 0===e?void 0:e.size;return"number"==typeof t?{width:t,height:t}:{width:null!=t&&"object"==typeof t&&"width"in t?t.width:null,height:null!=t&&"object"==typeof t&&"height"in t?t.height:null}}function D(e){return A.apply(this,arguments)}function A(){return A=(0,o.Z)((0,i.Z)().mark((function e(t){var r,a,o,c,l,h,f,g,d,p,m,v,y,w,b,C,k,M,R,P,_,D,A,T,B,O,U,E,Y=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=Y.length>1&&void 0!==Y[1]?Y[1]:{},h=l.node,f=l.opacity,g=l.symbolConfig,d=null!=g&&"object"==typeof g&&"isSquareFill"in g&&g.isSquareFill,p=l.cimOptions||l,m=p.geometryType||(0,x.JW)(null===(r=t)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.symbol),v=L(l),y=p.feature,w=p.fieldMap,null!=v.width&&null!=v.height){e.next=18;break}return e.next=5,s.E0.resolveSymbolOverrides(t.data,y,null,w,m);case 5:if(b=e.sent){e.next=8;break}return e.abrupt("return",null);case 8:if((t=t.clone()).data={type:"CIMSymbolReference",symbol:b},t.data.primitiveOverrides=void 0,C=[],s.B$.fetchResources(b,I.resourceManager,C),s.B$.fetchFonts(b,I.resourceManager,C),e.t0=C.length>0,!e.t0){e.next=16;break}return e.next=16,Promise.all(C);case 16:k=s.B$.getEnvelope(b,null,I.resourceManager),M=null===k||void 0===k?void 0:k.width,R=null===k||void 0===k?void 0:k.height,v.width="esriGeometryPolygon"===m?S:"esriGeometryPolyline"===m?F:null!=M&&isFinite(M)?Math.min(M,Z):S,v.height="esriGeometryPolygon"===m?S:null!=R&&isFinite(R)?Math.max(Math.min(R,Z),1):S;case 18:return e.next=20,I.rasterizeCIMSymbolAsync(t,y,v,d||"esriGeometryPolygon"!==m?n.Preview:n.Legend,w,m);case 20:if(P=e.sent){e.next=23;break}return e.abrupt("return",null);case 23:return _=P.width,D=P.height,(A=document.createElement("canvas")).width=_,A.height=D,A.getContext("2d").putImageData(P,0,0),T=(0,u.F2)(v.width),B=(0,u.F2)(v.height),(O=new Image(T,B)).src=A.toDataURL(),O.ariaLabel=null!==(o=l.ariaLabel)&&void 0!==o?o:null,O.alt=null!==(c=l.ariaLabel)&&void 0!==c?c:"",null!=f&&(O.style.opacity="".concat(f)),U=O,null!=l.effectView&&(E={shape:{type:"image",x:0,y:0,width:T,height:B,src:O.src},fill:null,stroke:null,offset:[0,0]},U=(0,z.wh)([[E]],[T,B],{effectView:l.effectView,ariaLabel:l.ariaLabel})),e.abrupt("return",(h&&U&&h.appendChild(U),U));case 31:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}},38999:function(e,t,r){var n,a;function i(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function o(e){switch(e){case"top":return a.Top;case"middle":return a.Center;case"baseline":return a.Baseline;case"bottom":return a.Bottom}}function u(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[n.Right,a.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[n.Center,a.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[n.Left,a.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[n.Right,a.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[n.Center,a.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[n.Left,a.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[n.Right,a.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[n.Center,a.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[n.Left,a.Top];default:return console.debug("Found invalid placement type ".concat(e)),[n.Center,a.Center]}}function s(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function c(e){switch(e){case a.Top:return 1;case a.Center:return 0;case a.Bottom:case a.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function l(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function h(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{Hd:function(){return l},M7:function(){return n},NS:function(){return h},TR:function(){return a},b7:function(){return o},g:function(){return s},kH:function(){return i},qv:function(){return u},tf:function(){return c}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(n||(n={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(a||(a={}))},73271:function(e,t,r){r.d(t,{Au:function(){return a},Jz:function(){return o},UJ:function(){return i}});var n=new Float32Array(1);new Uint32Array(n.buffer);function a(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function i(e,t){return 65535&e|t<<16}function o(e,t,r,n){return 255&e|(255&t)<<8|(255&r)<<16|n<<24}}}]);
//# sourceMappingURL=4542.39097d25.chunk.js.map