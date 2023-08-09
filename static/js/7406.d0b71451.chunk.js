"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[7406],{80573:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(15671),r=n(43144),o=n(60136),s=n(29388),l=n(27366),u=n(7138),a=n(63780),p=n(11582),y=n(79056),c=n(46784),d=n(49861),f=(n(25243),n(93169),n(69912)),v=0,b=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).id="".concat(Date.now().toString(16),"-analysis-").concat(v++),r.title=null,r}return(0,r.Z)(n,[{key:"parent",get:function(){return this._get("parent")},set:function(e){var t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(a.pC)}}]),n}((0,c.eC)((0,p.J)((0,y.IG)(u.Z))));(0,l._)([(0,d.Cb)({type:String,constructOnly:!0,clonable:!1})],b.prototype,"id",void 0),(0,l._)([(0,d.Cb)({type:String})],b.prototype,"title",void 0),(0,l._)([(0,d.Cb)({constructOnly:!0})],b.prototype,"type",void 0),(0,l._)([(0,d.Cb)({clonable:!1,value:null})],b.prototype,"parent",null),(0,l._)([(0,d.Cb)({readOnly:!0})],b.prototype,"isEditable",null),(0,l._)([(0,d.Cb)({readOnly:!0})],b.prototype,"requiredPropertiesForEditing",void 0);var h=b=(0,l._)([(0,f.j)("esri.analysis.Analysis")],b)},47406:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(74165),r=n(15861),o=n(15671),s=n(43144),l=n(82963),u=n(60136),a=n(29388),p=n(27366),y=n(37762),c=n(80573),d=n(51995),f=n(11582),v=n(46784),b=n(17842),h=n(49861),m=n(25243),_=(n(63780),n(93169),n(69912)),Z=function(e){(0,u.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="simple",i.color=new d.Z("black"),i.lineSize=2,i.fontSize=10,i.textColor=new d.Z("black"),i.textBackgroundColor=new d.Z([255,255,255,.6]),i}return(0,s.Z)(n)}((0,v.eC)(f.j));(0,p._)([(0,h.Cb)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],Z.prototype,"type",void 0),(0,p._)([(0,h.Cb)({type:d.Z,nonNullable:!0,json:{type:[m.z8],write:{isRequired:!0}}})],Z.prototype,"color",void 0),(0,p._)([(0,h.Cb)({type:Number,cast:b.t_,nonNullable:!0,range:{min:(0,b.Wz)(1)},json:{write:{isRequired:!0}}})],Z.prototype,"lineSize",void 0),(0,p._)([(0,h.Cb)({type:Number,cast:b.t_,nonNullable:!0,json:{write:{isRequired:!0}}})],Z.prototype,"fontSize",void 0),(0,p._)([(0,h.Cb)({type:d.Z,nonNullable:!0,json:{type:[m.z8],write:{isRequired:!0}}})],Z.prototype,"textColor",void 0),(0,p._)([(0,h.Cb)({type:d.Z,nonNullable:!0,json:{type:[m.z8],write:{isRequired:!0}}})],Z.prototype,"textBackgroundColor",void 0);var C,g=Z=(0,p._)([(0,_.j)("esri.analysis.DimensionSimpleStyle")],Z);n(59486);!function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(C||(C={}));var w=[C.Horizontal,C.Vertical,C.Direct],k=n(17768),j=n(89125),P=n(585),x=function(e){(0,u.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="length",i.startPoint=null,i.endPoint=null,i.measureType=C.Direct,i.offset=0,i.orientation=0,i}return(0,s.Z)(n)}((0,v.eC)(f.j));(0,p._)([(0,h.Cb)({type:["length"],json:{write:{isRequired:!0}}})],x.prototype,"type",void 0),(0,p._)([(0,h.Cb)({type:P.Z,json:{write:!0}})],x.prototype,"startPoint",void 0),(0,p._)([(0,h.Cb)({type:P.Z,json:{write:!0}})],x.prototype,"endPoint",void 0),(0,p._)([(0,h.Cb)({type:w,nonNullable:!0,json:{write:{isRequired:!0}}})],x.prototype,"measureType",void 0),(0,p._)([(0,h.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],x.prototype,"offset",void 0),(0,p._)([(0,h.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,j.p)((function(e){return k.BV.normalize((0,m.q9)(e),0,!0)}))],x.prototype,"orientation",void 0);var R=x=(0,p._)([(0,_.j)("esri.analysis.LengthDimension")],x),O=n(40281),N=n(60354),q=n(94172),z=n(53866),E=n(79803),S=O.Z.ofType(R),D=function(e){(0,u.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="dimension",i.style=new g,i.extent=null,i}return(0,s.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles((0,q.YP)((function(){return e._computeExtent()}),(function(t){null!=t&&null!=t.pending||e._set("extent",null!=t?t.extent:null)}),q.tX))}},{key:"dimensions",get:function(){return this._get("dimensions")||new S},set:function(e){this._set("dimensions",(0,N.Z)(e,this.dimensions,S))}},{key:"spatialReference",get:function(){var e,t=(0,y.Z)(this.dimensions);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(null!=n.startPoint)return n.startPoint.spatialReference;if(null!=n.endPoint)return n.endPoint.spatialReference}}catch(i){t.e(i)}finally{t.f()}return null}},{key:"requiredPropertiesForEditing",get:function(){return this.dimensions.reduce((function(e,t){return e.push(t.startPoint,t.endPoint),e}),[])}},{key:"waitComputeExtent",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._computeExtent(),e.abrupt("return",null!=t?t.pending:Promise.resolve());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var e=this.spatialReference;if(null==e)return{pending:null,extent:null};var t,n=[],i=(0,y.Z)(this.dimensions);try{for(i.s();!(t=i.n()).done;){var r=t.value;null!=r.startPoint&&n.push(r.startPoint),null!=r.endPoint&&n.push(r.endPoint)}}catch(l){i.e(l)}finally{i.f()}var o=(0,E.projectOrLoadMany)(n,e);if(null!=o.pending)return{pending:o.pending,extent:null};var s=null;return null!=o.geometries&&(s=o.geometries.reduce((function(e,t){return null==e?null!=t?z.Z.fromPoint(t):null:null!=t?e.union(z.Z.fromPoint(t)):e}),null)),{pending:null,extent:s}}},{key:"clear",value:function(){this.dimensions.removeAll()}}]),n}(c.Z);(0,p._)([(0,h.Cb)({type:["dimension"]})],D.prototype,"type",void 0),(0,p._)([(0,h.Cb)({cast:N.R,type:S,nonNullable:!0})],D.prototype,"dimensions",null),(0,p._)([(0,h.Cb)({readOnly:!0})],D.prototype,"spatialReference",null),(0,p._)([(0,h.Cb)({types:{key:"type",base:null,typeMap:{simple:g}},nonNullable:!0})],D.prototype,"style",void 0),(0,p._)([(0,h.Cb)({value:null,readOnly:!0})],D.prototype,"extent",void 0),(0,p._)([(0,h.Cb)({readOnly:!0})],D.prototype,"requiredPropertiesForEditing",null);var A=D=(0,p._)([(0,_.j)("esri.analysis.DimensionAnalysis")],D),L=n(97642),T=n(31201),F=n(30651),H=function(e){(0,u.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;if((0,o.Z)(this,n),(i=t.call(this,e)).type="dimension",i.operationalLayerType="ArcGISDimensionLayer",i.source=new A,i.opacity=1,e){var r=e.source,s=e.style;r&&s&&(r.style=s)}return(0,l.Z)(i)}return(0,s.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles([(0,q.YP)((function(){return e.source}),(function(t,n){null!=n&&n.parent===e&&(n.parent=null),null!=t&&(t.parent=e)}),q.tX)])}},{key:"load",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this.source.waitComputeExtent()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"spatialReference",get:function(){return this.source.spatialReference}},{key:"style",get:function(){return this.source.style},set:function(e){this.source.style=e}},{key:"fullExtent",get:function(){return this.source.extent}},{key:"releaseAnalysis",value:function(e){this.source===e&&(this.source=new A)}},{key:"analysis",get:function(){return this.source},set:function(e){this.source=e}},{key:"dimensions",get:function(){return this.source.dimensions},set:function(e){this.source.dimensions=e}},{key:"writeDimensions",value:function(e,t,n,i){t.dimensions=e.filter((function(e){var t=e.startPoint,n=e.endPoint;return null!=t&&null!=n})).map((function(e){return e.toJSON(i)})).toJSON()}}]),n}((0,n(6061).q)((0,L.R)(F.Z)));(0,p._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,p._)([(0,h.Cb)({type:["ArcGISDimensionLayer"]})],H.prototype,"operationalLayerType",void 0),(0,p._)([(0,h.Cb)({nonNullable:!0})],H.prototype,"source",void 0),(0,p._)([(0,h.Cb)({readOnly:!0})],H.prototype,"spatialReference",null),(0,p._)([(0,h.Cb)({types:{key:"type",base:null,typeMap:{simple:g}},json:{write:{ignoreOrigin:!0}}})],H.prototype,"style",null),(0,p._)([(0,h.Cb)({readOnly:!0})],H.prototype,"fullExtent",null),(0,p._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],H.prototype,"opacity",void 0),(0,p._)([(0,h.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,p._)([(0,h.Cb)({type:O.Z.ofType(R),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],H.prototype,"dimensions",null),(0,p._)([(0,T.c)("web-scene","dimensions")],H.prototype,"writeDimensions",null);var M=H=(0,p._)([(0,_.j)("esri.layers.DimensionLayer")],H)}}]);
//# sourceMappingURL=7406.d0b71451.chunk.js.map