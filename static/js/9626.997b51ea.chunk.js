"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[9626],{89626:function(_,E,T){T.r(E),T.d(E,{loadGLTFMesh:function(){return v}});var R=T(1413),A=T(37762),n=T(74165),t=T(15861),e=T(51995),r=T(76200),N=T(77427),S=T(16889),o=T(22753),C=T(11873),I=T(71353),O=T(67077),u=T(64995),c=T(11587),L=T(79694),a=T(50565),M=T(27474),i=T(25158),f=T(32035),D=T(19093),P=T(48734);Object.freeze(Object.defineProperty({__proto__:null,copy:function(_,E,T){for(var R=_.typedBuffer,A=_.typedBufferStride,n=E.typedBuffer,t=E.typedBufferStride,e=T?T.count:E.count,r=(T&&T.dstIndex?T.dstIndex:0)*A,N=(T&&T.srcIndex?T.srcIndex:0)*t,S=0;S<e;++S){for(var o=0;o<9;++o)R[r+o]=n[N+o];r+=A,N+=t}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(_,E,T){for(var R=_.typedBuffer,A=_.typedBufferStride,n=E.typedBuffer,t=E.typedBufferStride,e=T?T.count:E.count,r=(T&&T.dstIndex?T.dstIndex:0)*A,N=(T&&T.srcIndex?T.srcIndex:0)*t,S=0;S<e;++S){for(var o=0;o<16;++o)R[r+o]=n[N+o];r+=A,N+=t}}},Symbol.toStringTag,{value:"Module"})),T(53801);var G=T(19131),U=T(92770),l=T(69618);function B(_,E){return new _(new ArrayBuffer(E*_.ElementCount*(0,P.n1)(_.ElementType)))}var s=T(57898),F=T(27053),H=T(57516),d=T(32315),p=T(57661),m=T(68845),x=T(8548);function v(_,E,T){return V.apply(this,arguments)}function V(){return V=(0,t.Z)((0,n.Z)().mark((function _(E,T,t){var e,r,N,S,o,C,I,O,u,c,L,a,i,f,D,P,G,U,l;return(0,n.Z)().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return r=(0,R.Z)((0,R.Z)({},t),{},{useTransform:null===(e=null===t||void 0===t?void 0:t.useTransform)||void 0===e||e}),N=new F.C(Y(r)),_.next=4,(0,H.Q)(N,T,r,!0);case 4:S=_.sent.model,o=S.lods.shift(),C=new Map,I=new Map,S.textures.forEach((function(_,E){return C.set(E,b(_))})),S.materials.forEach((function(_,E){return I.set(E,y(_,C))})),O=g(o),u=(0,A.Z)(O.parts);try{for(u.s();!(c=u.n()).done;)L=c.value,h(O,L,I)}catch(n){u.e(n)}finally{u.f()}return a=O.vertexAttributes,i=a.position,f=a.normal,D=a.tangent,P=a.color,G=a.texCoord0,U={position:i.typedBuffer,normal:null!=f?f.typedBuffer:null,tangent:null!=D?D.typedBuffer:null,uv:null!=G?G.typedBuffer:null,color:null!=P?P.typedBuffer:null},l=(0,s.georeferenceByTransform)(U,E,r),_.abrupt("return",{transform:l.transform,vertexSpace:l.vertexSpace,components:O.components,spatialReference:E.spatialReference,vertexAttributes:new M.Q({position:l.vertexAttributes.position,normal:l.vertexAttributes.normal,tangent:l.vertexAttributes.tangent,color:U.color,uv:U.uv})});case 14:case"end":return _.stop()}}),_)}))),V.apply(this,arguments)}function Y(_){var E=null===_||void 0===_?void 0:_.resolveFile;return E?{busy:!1,request:function(){var _=(0,t.Z)((0,n.Z)().mark((function _(T,R,A){var t,e;return(0,n.Z)().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return t=E(T),e="image"===R?"image":"binary"===R?"array-buffer":"json",_.next=3,(0,r.default)(t,{responseType:e,signal:null!=A?A.signal:null});case 3:return _.abrupt("return",_.sent.data);case 4:case"end":return _.stop()}}),_)})));return function(E,T,R){return _.apply(this,arguments)}}()}:null}function X(_,E){if(null==_)return"-";var T=_.typedBuffer;return"".concat((0,N.s1)(E,T.buffer,(function(){return E.size})),"/").concat(T.byteOffset,"/").concat(T.byteLength)}function g(_){var E,T=0,R={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,t=new Map,e=[],r=(0,A.Z)(_.parts);try{var S=function(){var _=E.value,A=_.attributes,r=A.position,S=A.normal,o=A.color,C=A.tangent,I=A.texCoord0,O="\n      ".concat(X(r,n),"/\n      ").concat(X(S,n),"/\n      ").concat(X(o,n),"/\n      ").concat(X(C,n),"/\n      ").concat(X(I,n),"/\n      ").concat(function(_){return null!=_?_.toString():"-"}(_.transform),"\n    "),u=!1,c=(0,N.s1)(t,O,(function(){return u=!0,{start:T,length:r.count}}));u&&(T+=r.count),S&&(R.normal=!0),o&&(R.color=!0),C&&(R.tangent=!0),I&&(R.texCoord0=!0),e.push({gltf:_,writeVertices:u,region:c})};for(r.s();!(E=r.n()).done;)S()}catch(o){r.e(o)}finally{r.f()}return{vertexAttributes:{position:B(i.fP,T),normal:R.normal?B(i.ct,T):null,tangent:R.tangent?B(i.ek,T):null,color:R.color?B(i.mc,T):null,texCoord0:R.texCoord0?B(i.Eu,T):null},parts:e,components:[]}}function b(_){return new L.Z({data:((0,p.$A)(_.data),_.data),wrap:W(_.parameters.wrap)})}function y(_,E){var T=new e.Z(function(_,E){return(0,O.f)(j(_[0]),j(_[1]),j(_[2]),E)}(_.color,_.opacity)),R=_.emissiveFactor?new e.Z(function(_){return(0,I.f)(j(_[0]),j(_[1]),j(_[2]))}(_.emissiveFactor)):null,A=function(_){var E;return _?new a.Z({scale:_.scale?[_.scale[0],_.scale[1]]:[1,1],rotation:(0,S.BV)(null!==(E=_.rotation)&&void 0!==E?E:0),offset:_.offset?[_.offset[0],_.offset[1]]:[0,0]}):null};return new c.Z({color:T,colorTexture:E.get(_.textureColor),normalTexture:E.get(_.textureNormal),emissiveColor:R,emissiveTexture:E.get(_.textureEmissive),occlusionTexture:E.get(_.textureOcclusion),alphaMode:w(_.alphaMode),alphaCutoff:_.alphaCutoff,doubleSided:_.doubleSided,metallic:_.metallicFactor,roughness:_.roughnessFactor,metallicRoughnessTexture:E.get(_.textureMetallicRoughness),colorTextureTransform:A(_.colorTextureTransform),normalTextureTransform:A(_.normalTextureTransform),occlusionTextureTransform:A(_.occlusionTextureTransform),emissiveTextureTransform:A(_.emissiveTextureTransform),metallicRoughnessTextureTransform:A(_.metallicRoughnessTextureTransform)})}function h(_,E,T){E.writeVertices&&function(_,E){var T=_.vertexAttributes,R=T.position,A=T.normal,n=T.tangent,t=T.color,e=T.texCoord0,r=E.region.start,N=E.gltf,I=N.attributes,O=N.transform,u=I.position.count;if((0,f.c)(R.slice(r,u),I.position,O),null!=I.normal&&null!=A){var c=(0,o.b)((0,C.c)(),O),L=A.slice(r,u);(0,f.b)(L,I.normal,c),(0,S.oc)(c)&&(0,f.d)(L,L)}else null!=A&&(0,U.f)(A,0,0,1,{dstIndex:r,count:u});if(null!=I.tangent&&null!=n){var a=(0,o.b)((0,C.c)(),O),M=n.slice(r,u);(0,D.a)(M,I.tangent,a),(0,S.oc)(a)&&(0,D.n)(M,M)}else null!=n&&(0,l.f)(n,0,0,1,1,{dstIndex:r,count:u});if(null!=I.texCoord0&&null!=e?(0,G.a)(e.slice(r,u),I.texCoord0):null!=e&&(0,G.f)(e,0,0,{dstIndex:r,count:u}),null!=I.color&&null!=t){var P=I.color,B=t.slice(r,u);if(4===P.elementCount)P instanceof i.ek?(0,D.b)(B,P,255):P instanceof i.mc?(0,l.a)(B,P):P instanceof i.v6&&(0,D.b)(B,P,1/256);else{(0,l.f)(B,255,255,255,255);var s=i.ne.fromTypedArray(B.typedBuffer,B.typedBufferStride);P instanceof i.ct?(0,f.e)(s,P,255):P instanceof i.ne?(0,U.a)(s,P):P instanceof i.mw&&(0,f.e)(s,P,1/256)}}else null!=t&&(0,l.f)(t.slice(r,u),255,255,255,255)}(_,E);var R=E.gltf,A=R.indices,n=R.attributes,t=R.primitiveType,e=R.material,r=(0,d.p)(A||n.position.count,t),N=E.region.start;if(N){for(var I=new Uint32Array(r),O=0;O<r.length;O++)I[O]+=N;r=I}_.components.push(new u.Z({faces:r,material:T.get(e),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function w(_){switch(_){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function W(_){return{horizontal:Z(_.s),vertical:Z(_.t)}}function Z(_){switch(_){case x.e8.CLAMP_TO_EDGE:return"clamp";case x.e8.MIRRORED_REPEAT:return"mirror";case x.e8.REPEAT:return"repeat"}}function j(_){return 255*Math.pow(_,1/m.K)}},8548:function(_,E,T){var R,A,n,t,e,r,N,S,o,C,I,O,u,c,L,a,M,i,f,D;T.d(E,{Br:function(){return a},Ho:function(){return f},LR:function(){return r},Ld:function(){return U},Lu:function(){return m},MX:function(){return A},No:function(){return u},Se:function(){return B},Tg:function(){return M},V7:function(){return d},VI:function(){return c},VY:function(){return G},Wf:function(){return N},Y5:function(){return H},_g:function(){return P},cw:function(){return I},db:function(){return t},e8:function(){return O},g:function(){return S},l1:function(){return i},lP:function(){return L},lk:function(){return R},q_:function(){return l},qi:function(){return D},w0:function(){return e},wb:function(){return o},xS:function(){return C},zi:function(){return n}}),function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(R||(R={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(n||(n={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(t||(t={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(e||(e={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(N||(N={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(S||(S={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(o||(o={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(C||(C={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(O||(O={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(u||(u={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(c||(c={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(L||(L={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(a||(a={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(M||(M={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(i||(i={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(f||(f={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(D||(D={}));var P,G,U=33984;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.COUNT=8]="COUNT"}(P||(P={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(G||(G={}));var l,B,s,F,H,d,p,m=33306;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(l||(l={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(s||(s={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(F||(F={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(H||(H={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(d||(d={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(p||(p={}))}}]);
//# sourceMappingURL=9626.997b51ea.chunk.js.map