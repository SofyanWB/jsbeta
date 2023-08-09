"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[7808],{46888:function(e,t,r){var i;r.d(t,{B:function(){return i}}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(i||(i={}))},57808:function(e,t,r){r.d(t,{x:function(){return E}});var i=r(15671),a=r(43144),s=r(10064),n=(r(93169),r(16889)),o=r(37825),l=r(83826),c=r(8548),u=r(46888),_=r(52311),h=r(97326),d=r(60136),p=r(29388),m=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e,a){var s;switch((0,i.Z)(this,r),(s=t.call(this)).context=e,Object.assign((0,h.Z)(s),a),s.internalFormat){case c.lP.R16F:case c.lP.R16I:case c.lP.R16UI:case c.lP.R32F:case c.lP.R32I:case c.lP.R32UI:case c.lP.R8_SNORM:case c.lP.R8:case c.lP.R8I:case c.lP.R8UI:s.pixelFormat=c.VI.RED}return s}return(0,a.Z)(r,null,[{key:"validate",value:function(e,t){return new r(e,t)}}]),r}(_.X),E=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if((0,i.Z)(this,e),this.type=u.B.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in t)this._descriptor=t,a=r;else{var n=m.validate(t,r);if(!n)throw new s.Z("Texture descriptor invalid");this._descriptor=n}if(this._descriptor.context.instanceCounter.increment(c._g.Texture,this),this._descriptor.context.type!==l.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),A(this._descriptor.target)))throw new s.Z("3D and array textures are not supported in WebGL1");this._descriptor.target===c.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}return(0,a.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"gpuMemoryUsage",get:function(){return x.delete(this),(0,_.G)(this._descriptor)}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}},{key:"dispose",value:function(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(c._g.Texture,this))}},{key:"release",value:function(){this.dispose()}},{key:"resize",value:function(e,t){var r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new s.Z("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===c.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}},{key:"_setDataCubeMap",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=c.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=c.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}},{key:"setData",value:function(e){this._setData(e)}},{key:"_setData",value:function(t,r){var i,a=this;if(this._descriptor.context&&this._descriptor.context.gl){var n=this._descriptor.context.gl;(0,o.zu)(n),this._glName||(this._glName=n.createTexture()),void 0===t&&(t=null);var l=this._descriptor,u=null!==r&&void 0!==r?r:l.target,_=A(u);null===t&&(l.width=l.width||4,l.height=l.height||4,_&&(l.depth=null!==(i=l.depth)&&void 0!==i?i:1));var h=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),f(this._descriptor.context,l),this._configurePixelStorage(),(0,o.zu)(n);var d=this._deriveInternalFormat();if(I(t)){var p=t.width,m=t.height;t instanceof HTMLVideoElement&&(p=t.videoWidth,m=t.videoHeight),l.width&&l.height,_&&l.depth,l.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(u,d,l.hasMipmap,p,m,1),this._texImage(u,0,d,p,m,1,t),(0,o.zu)(n),l.hasMipmap&&this.generateMipmap(),l.width||(l.width=p),l.height||(l.height=m),_&&!l.depth&&(l.depth=1)}else{var E=l.width,x=l.height,v=l.depth;if(null==E||null==x)throw new s.Z("Width and height must be specified!");if(_&&null==v)throw new s.Z("Depth must be specified!");if(l.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(u,d,l.hasMipmap,E,x,v),g(t)){var M=t.levels,w=P(u,E,x,v),D=Math.min(w-1,M.length-1);null!=this._descriptor.context.gl2?n.texParameteri(l.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,D):l.hasMipmap=l.hasMipmap&&w===M.length;var b=d;if(!(b in c.q_))throw new s.Z("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((function(e,t,r,i){var s=M[Math.min(e,M.length-1)];a._compressedTexImage(u,e,b,t,r,i,s)}),D)}else this._texImage(u,0,d,E,x,v,t),(0,o.zu)(n),l.hasMipmap&&this.generateMipmap()}T(n,this._descriptor),R(n,this._descriptor),function(e,t){var r,i=e.capabilities.textureFilterAnisotropic;if(!i)return;e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!==(r=t.maxAnisotropy)&&void 0!==r?r:1)}(this._descriptor.context,this._descriptor),(0,o.zu)(n),this._descriptor.context.bindTexture(h,e.TEXTURE_UNIT_FOR_UPDATES)}}},{key:"updateData",value:function(t,r,i,a,n,o){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var c=this._descriptor.context.gl,u=this._descriptor.context.gl2,_=this._descriptor,h=this._deriveInternalFormat(),d=_.pixelFormat,p=_.dataType,m=_.target,E=_.isImmutable;if(E&&!this._wasImmutablyAllocated)throw new s.Z("Cannot update immutable texture before allocation!");var f=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);if((r<0||i<0||a>_.width||n>_.height||r+a>_.width||i+n>_.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),l){if(!u)return void console.error("Webgl2 must be enabled to use dataRowOffset!");c.pixelStorei(u.UNPACK_SKIP_ROWS,l)}if(I(o)?u?u.texSubImage2D(m,t,r,i,a,n,d,p,o):c.texSubImage2D(m,t,r,i,d,p,o):g(o)?c.compressedTexSubImage2D(m,t,r,i,a,n,h,o.levels[t]):c.texSubImage2D(m,t,r,i,a,n,d,p,o),l){if(!u)return void console.error("Webgl2 must be enabled to use dataRowOffset!");c.pixelStorei(u.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(f,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"updateData3D",value:function(t,r,i,a,n,o,l,c){c||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var u=this._descriptor.context.gl2;if(null==u)throw new s.Z("3D textures are not supported in WebGL1");var _=this._descriptor,h=this._deriveInternalFormat(),d=_.pixelFormat,p=_.dataType,m=_.isImmutable,E=_.target;if(m&&!this._wasImmutablyAllocated)throw new s.Z("Cannot update immutable texture before allocation!");A(E)||console.warn("Attempting to set 3D texture data on a non-3D texture");var f=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(r<0||i<0||a<0||n>_.width||o>_.height||l>_.depth||r+n>_.width||i+o>_.height||a+l>_.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),g(c))c=c.levels[t],u.compressedTexSubImage3D(E,t,r,i,a,n,o,l,h,c);else{var T=c;u.texSubImage3D(E,t,r,i,a,n,o,l,d,p,T)}this._descriptor.context.bindTexture(f,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"generateMipmap",value:function(){var t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new s.Z("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,f(this._descriptor.context,t)}t.samplingMode===c.cw.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=c.cw.LINEAR_MIPMAP_NEAREST):t.samplingMode===c.cw.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=c.cw.NEAREST_MIPMAP_NEAREST);var r=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}},{key:"setSamplingMode",value:function(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}},{key:"setWrapMode",value:function(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,f(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}},{key:"applyChanges",value:function(){var e=this._descriptor.context.gl,t=this._descriptor;this._samplingModeDirty&&(T(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(R(e,t),this._wrapModeDirty=!1)}},{key:"_deriveInternalFormat",value:function(){if(this._descriptor.context.type===l.zO.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===c.VI.DEPTH_STENCIL&&(this._descriptor.internalFormat=c.VI.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case c.Br.FLOAT:switch(this._descriptor.pixelFormat){case c.VI.RGBA:return this._descriptor.internalFormat=c.lP.RGBA32F;case c.VI.RGB:return this._descriptor.internalFormat=c.lP.RGB32F;default:throw new s.Z("Unable to derive format")}case c.Br.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case c.VI.RGBA:return this._descriptor.internalFormat=c.lP.RGBA8;case c.VI.RGB:return this._descriptor.internalFormat=c.lP.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===c.VI.DEPTH_STENCIL?c.VI.DEPTH24_STENCIL8:this._descriptor.pixelFormat}},{key:"_configurePixelStorage",value:function(){var e=this._descriptor.context.gl,t=this._descriptor,r=t.unpackAlignment,i=t.flipped,a=t.preMultiplyAlpha;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a?1:0)}},{key:"_texStorage",value:function(e,t,r,i,a,n){var o=this._descriptor.context.gl2;if(null==o)throw new s.Z("Immutable textures are not supported in WebGL1");if(!(t in c.lP))throw new s.Z("Immutable textures must have a sized internal format");if(this._descriptor.isImmutable){var l=r?P(e,i,a,n):1;if(A(e)){if(null==n)throw new s.Z("Missing depth dimension for 3D texture upload");o.texStorage3D(e,l,t,i,a,n)}else o.texStorage2D(e,l,t,i,a);this._wasImmutablyAllocated=!0}}},{key:"_texImage",value:function(e,t,r,i,a,n,o){var c=this._descriptor.context.gl,u=A(e),_=this._descriptor,h=_.isImmutable,d=_.pixelFormat,p=_.dataType,m=this._descriptor.context.type===l.zO.WEBGL2,E=m?c:null;if(m||!I(o))if(h){if(null!=o){var f=o;if(u){if(null==n)throw new s.Z("Missing depth dimension for 3D texture upload");E.texSubImage3D(e,t,0,0,0,i,a,n,d,p,f)}else c.texSubImage2D(e,t,0,0,i,a,d,p,f)}}else{var T=o;if(u){if(null==n)throw new s.Z("Missing depth dimension for 3D texture upload");E.texImage3D(e,t,r,i,a,n,0,d,p,T)}else c.texImage2D(e,t,r,i,a,0,d,p,T)}else c.texImage2D(e,0,r,d,p,o)}},{key:"_compressedTexImage",value:function(e,t,r,i,a,n,o){var c=this._descriptor.context.gl,u=null,_=A(e),h=this._descriptor.isImmutable;if(_){if(this._descriptor.context.type!==l.zO.WEBGL2)throw new s.Z("3D textures are not supported in WebGL1");u=c}if(h){if(null!=o)if(_){if(null==n)throw new s.Z("Missing depth dimension for 3D texture upload");u.compressedTexSubImage3D(e,t,0,0,0,i,a,n,r,o)}else c.compressedTexSubImage2D(e,t,0,0,i,a,r,o)}else if(_){if(null==n)throw new s.Z("Missing depth dimension for 3D texture upload");u.compressedTexImage3D(e,t,r,i,a,n,0,o)}else c.compressedTexImage2D(e,t,r,i,a,0,o)}},{key:"_forEachMipmapLevel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,r=this._descriptor,i=r.width,a=r.height,n=r.depth,o=r.hasMipmap,l=r.target,u=l===c.No.TEXTURE_3D;if(null==i||null==a||u&&null==n)throw new s.Z("Missing texture dimensions for mipmap calculation");for(var _=0;e(_,i,a,n),o&&(1!==i||1!==a||u&&1!==n)&&!(_>=t);++_)i=Math.max(1,i>>1),a=Math.max(1,a>>1),u&&(n=Math.max(1,n>>1))}}]),e}();function f(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");var r=e.type===l.zO.WEBGL2;r||!t.isImmutable&&!A(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||null!=t.width&&(0,n.wt)(t.width)&&null!=t.height&&(0,n.wt)(t.height)||("number"==typeof t.wrapMode?t.wrapMode!==c.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===c.e8.CLAMP_TO_EDGE&&t.wrapMode.t===c.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function T(e,t){var r=t.samplingMode,i=t.samplingMode;r===c.cw.LINEAR_MIPMAP_NEAREST||r===c.cw.LINEAR_MIPMAP_LINEAR?(r=c.cw.LINEAR,t.hasMipmap||(i=c.cw.LINEAR)):r!==c.cw.NEAREST_MIPMAP_NEAREST&&r!==c.cw.NEAREST_MIPMAP_LINEAR||(r=c.cw.NEAREST,t.hasMipmap||(i=c.cw.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function R(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function g(e){return null!=e&&"type"in e&&"compressed"===e.type}function I(e){return null!=e&&!g(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function A(e){return e===c.No.TEXTURE_3D||e===c.No.TEXTURE_2D_ARRAY}function P(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=Math.max(t,r);return e===c.No.TEXTURE_3D&&(a=Math.max(a,i)),Math.round(Math.log(a)/Math.LN2)+1}E.TEXTURE_UNIT_FOR_UPDATES=0;var x=new Map},52311:function(e,t,r){r.d(t,{G:function(){return l},X:function(){return o}});var i=r(43144),a=r(15671),s=r(8548),n=r(3384),o=(0,i.Z)((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;(0,a.Z)(this,e),this.width=t,this.height=r,this.target=s.No.TEXTURE_2D,this.pixelFormat=s.VI.RGBA,this.dataType=s.Br.UNSIGNED_BYTE,this.samplingMode=s.cw.LINEAR,this.wrapMode=s.e8.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}));function l(e){return e.width<=0||e.height<=0||null==e.internalFormat?0:e.width*e.height*(e.hasMipmap?4/3:1)*(0,n.RG)(e.internalFormat)}},3384:function(e,t,r){r.d(t,{HH:function(){return s},RG:function(){return l},UF:function(){return o},XP:function(){return n}});var i=r(37762),a=(r(93169),r(8548));function s(e){var t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function n(e,t,r,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);var l,c=(0,i.Z)(a);try{for(c.s();!(l=c.n()).done;){var u=l.value,_=t.get(u.name);void 0===_&&console.error("There is no location for vertex attribute '".concat(u.name,"' defined."));var h=s*u.stride;if(u.count<=4)n.vertexAttribPointer(_,u.count,u.type,u.normalized,u.stride,u.offset+h),n.enableVertexAttribArray(_),u.divisor>0&&o&&o.vertexAttribDivisor(_,u.divisor);else if(9===u.count)for(var d=0;d<3;d++)n.vertexAttribPointer(_+d,3,u.type,u.normalized,u.stride,u.offset+12*d+h),n.enableVertexAttribArray(_+d),u.divisor>0&&o&&o.vertexAttribDivisor(_+d,u.divisor);else if(16===u.count)for(var p=0;p<4;p++)n.vertexAttribPointer(_+p,4,u.type,u.normalized,u.stride,u.offset+16*p+h),n.enableVertexAttribArray(_+p),u.divisor>0&&o&&o.vertexAttribDivisor(_+p,u.divisor);else console.error("Unsupported vertex attribute element count: "+u.count)}}catch(m){c.e(m)}finally{c.f()}}function o(e,t,r,s){var n=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);var l,c=(0,i.Z)(s);try{for(c.s();!(l=c.n()).done;){var u=l.value,_=t.get(u.name);if(u.count<=4)n.disableVertexAttribArray(_),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(_,0);else if(9===u.count)for(var h=0;h<3;h++)n.disableVertexAttribArray(_+h),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(_+h,0);else if(16===u.count)for(var d=0;d<4;d++)n.disableVertexAttribArray(_+d),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(_+d,0);else console.error("Unsupported vertex attribute element count: "+u.count)}}catch(p){c.e(p)}finally{c.f()}e.unbindBuffer(a.w0.ARRAY_BUFFER)}function l(e){switch(e){case a.VI.ALPHA:case a.VI.LUMINANCE:case a.VI.RED:case a.VI.RED_INTEGER:case a.lP.R8:case a.lP.R8I:case a.lP.R8UI:case a.lP.R8_SNORM:case a.Tg.STENCIL_INDEX8:return 1;case a.VI.LUMINANCE_ALPHA:case a.VI.RG:case a.VI.RG_INTEGER:case a.lP.RGBA4:case a.lP.R16F:case a.lP.R16I:case a.lP.R16UI:case a.lP.RG8:case a.lP.RG8I:case a.lP.RG8UI:case a.lP.RG8_SNORM:case a.lP.RGB565:case a.lP.RGB5_A1:case a.Tg.DEPTH_COMPONENT16:return 2;case a.VI.DEPTH_COMPONENT:case a.VI.RGB:case a.VI.RGB_INTEGER:case a.lP.RGB8:case a.lP.RGB8I:case a.lP.RGB8UI:case a.lP.RGB8_SNORM:case a.lP.SRGB8:case a.Tg.DEPTH_COMPONENT24:return 3;case a.VI.DEPTH_STENCIL:case a.VI.DEPTH24_STENCIL8:case a.VI.RGBA:case a.VI.RGBA_INTEGER:case a.lP.RGBA8:case a.lP.R32F:case a.lP.R11F_G11F_B10F:case a.lP.RG16F:case a.lP.R32I:case a.lP.R32UI:case a.lP.RG16I:case a.lP.RG16UI:case a.lP.RGBA8I:case a.lP.RGBA8UI:case a.lP.RGBA8_SNORM:case a.lP.SRGB8_ALPHA8:case a.lP.RGB9_E5:case a.lP.RGB10_A2UI:case a.lP.RGB10_A2:case a.Tg.DEPTH_STENCIL:case a.Tg.DEPTH_COMPONENT32F:case a.Tg.DEPTH24_STENCIL8:return 4;case a.Tg.DEPTH32F_STENCIL8:return 5;case a.lP.RGB16F:case a.lP.RGB16I:case a.lP.RGB16UI:return 6;case a.lP.RG32F:case a.lP.RG32I:case a.lP.RG32UI:case a.lP.RGBA16F:case a.lP.RGBA16I:case a.lP.RGBA16UI:return 8;case a.lP.RGB32F:case a.lP.RGB32I:case a.lP.RGB32UI:return 12;case a.lP.RGBA32F:case a.lP.RGBA32I:case a.lP.RGBA32UI:return 16;case a.q_.COMPRESSED_RGB_S3TC_DXT1_EXT:case a.q_.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case a.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT:case a.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case a.q_.COMPRESSED_R11_EAC:case a.q_.COMPRESSED_SIGNED_R11_EAC:case a.q_.COMPRESSED_RGB8_ETC2:case a.q_.COMPRESSED_SRGB8_ETC2:case a.q_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case a.q_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case a.q_.COMPRESSED_RG11_EAC:case a.q_.COMPRESSED_SIGNED_RG11_EAC:case a.q_.COMPRESSED_RGBA8_ETC2_EAC:case a.q_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},37825:function(e,t,r){r.d(t,{CG:function(){return l},hZ:function(){return o},zu:function(){return c}});var i=r(10064),a=r(93169),s=r(32718).Z.getLogger("esri.views.webgl.checkWebGLError");var n=!!(0,a.Z)("enable-feature:webgl-debug");function o(){return n}function l(){return n}function c(e){if(o()){var t=e.getError();if(t){var r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),a=(new Error).stack;s.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:a}))}}}}}]);
//# sourceMappingURL=7808.ee32a2eb.chunk.js.map