"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[6741],{98701:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var o=r(37762),n=r(74165),i=r(15861),s=r(15671),a=r(43144),p=r(97326),u=r(11752),l=r(61120),c=r(60136),d=r(29388),y=r(27366),v=(r(59486),r(44055)),f=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),h=r(97642),g=r(49861),m=(r(25243),r(63780),r(93169),r(69912)),C=r(27823),b=r(30651),S=r(29439),x=r(10064),_=r(54472),R=r(67213),k=r(49818),F=r(78952),Z=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).featureDefinition=null,e.type="ogc-feature",e}return(0,a.Z)(r,[{key:"load",value:function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}},{key:"getSource",value:function(){var e=this.featureDefinition,t=e.collection,r=e.layerDefinition,o=e.spatialReference,n=e.supportedCrs,i=this.layer,s=i.apiKey,a=i.customParameters;return{type:"ogc-source",collection:t,layerDefinition:r,maxRecordCount:i.effectiveMaxRecordCount,queryParameters:{apiKey:s,customParameters:a},spatialReference:o,supportedCrs:n}}},{key:"queryExtent",value:function(e){return null}},{key:"queryFeatureCount",value:function(e){return null}},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((function(e){return k.Z.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getSource();return this.load(t).then((function(){return(0,R.yN)(r,e,t)}))}},{key:"queryObjectIds",value:function(e){return null}},{key:"serviceSupportsSpatialReference",value:function(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}},{key:"_conformsToType",value:function(e,t){var r,o=new RegExp("^".concat(t,"$"),"i");return null!==(r=e.conformsTo.some((function(e){return o.test(e)})))&&void 0!==r&&r}},{key:"_getCapabilities",value:function(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1}}}},{key:"_getMaxRecordCount",value:function(e){var t,r,o,n,i,s,a=null===e||void 0===e||null===(t=e.components)||void 0===t?void 0:t.parameters;return null!==(r=null===a||void 0===a||null===(o=a.limit)||void 0===o||null===(n=o.schema)||void 0===n?void 0:n.maximum)&&void 0!==r?r:null===a||void 0===a||null===(i=a.limitFeatures)||void 0===i||null===(s=i.schema)||void 0===s?void 0:s.maximum}},{key:"_getStorageSpatialReference",value:function(e){var t,r=null!==(t=e.storageCrs)&&void 0!==t?t:R.$9,o=(0,R.d)(r);return null==o?F.Z.WGS84:new F.Z({wkid:o})}},{key:"_getSupportedSpatialReferences",value:function(e,t){var r,o,n="#/crs",i=null!==(r=e.crs)&&void 0!==r?r:[R.$9],s=i.includes(n)?i.filter((function(e){return e!==n})).concat(null!==(o=t.crs)&&void 0!==o?o:[]):i,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return s.filter((function(e){return!a.test(e)}))}},{key:"_loadOGCServices",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,s,a,p,u,l,c,d,y,v,f,h,g,m,b,_,k,F,Z,w,I,O,D,T,j,P,E,M,Q,q;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null!=r?r.signal:null,s=t.apiKey,a=t.collectionId,p=t.customParameters,u=t.fields,l=t.geometryType,c=t.hasZ,d=t.objectIdField,y=t.timeInfo,v=t.url,f={fields:null===u||void 0===u?void 0:u.map((function(e){return e.toJSON()})),geometryType:C.P.toJSON(l),hasZ:null!==c&&void 0!==c&&c,objectIdField:d,timeInfo:null===y||void 0===y?void 0:y.toJSON()},h={apiKey:s,customParameters:p,signal:i},e.next=14,(0,R.gp)(v,h);case 14:return g=e.sent,e.next=17,Promise.all([(0,R.G4)(g,h),(0,R.j)(g,h)]);case 17:if(m=e.sent,b=(0,S.Z)(m,2),_=b[0],k=b[1],this._conformsToType(_,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")){e.next=23;break}throw new x.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");case 23:if(F=k.collections.find((function(e){return e.id===a})),F){e.next=26;break}throw new x.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");case 26:if(!this._conformsToType(_,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")){e.next=32;break}return e.next=29,(0,R.eS)(g,h);case 29:e.t0=e.sent,e.next=33;break;case 32:e.t0=null;case 33:return Z=e.t0,e.next=36,(0,R.w9)(F,f,h);case 36:w=e.sent,I=this._getMaxRecordCount(Z),O=this._getCapabilities(w.hasZ,I),D=this._getStorageSpatialReference(F).toJSON(),T=this._getSupportedSpatialReferences(F,k),j=new RegExp("^".concat(R.Lu),"i"),P={},E=(0,o.Z)(T);try{for(E.s();!(M=E.n()).done;)Q=M.value,null!=(q=(0,R.d)(Q))&&(P[q]||(P[q]=Q.replace(j,"")))}catch(n){E.e(n)}finally{E.f()}this.featureDefinition={capabilities:O,collection:F,layerDefinition:w,spatialReference:D,supportedCrs:P};case 46:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(_.Z);(0,y._)([(0,g.Cb)()],Z.prototype,"featureDefinition",void 0),(0,y._)([(0,g.Cb)({constructOnly:!0})],Z.prototype,"layer",void 0),(0,y._)([(0,g.Cb)()],Z.prototype,"type",void 0),Z=(0,y._)([(0,m.j)("esri.layers.graphics.sources.OGCFeatureSource")],Z);var w=r(27961),I=r(6693),O=r(46671),D=r(7632),T=r(64390),j=r(6061),P=r(94207),E=r(66306),M=r(71684),Q=r(56811),q=r(99063),G=r(45948),A=r(87165),B=r(83040),N=r(25610),H=r(37270),L=r(77748),z=r(85116),J=r(21149),U=r(81085),V=r(53866),W=(0,N.v)(),K=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(e){var o;return(0,s.Z)(this,r),(o=t.call(this,e)).capabilities=null,o.collectionId=null,o.copyright=null,o.definitionExpression=null,o.description=null,o.displayField=null,o.elevationInfo=null,o.fields=null,o.fieldsIndex=null,o.fullExtent=null,o.geometryType=null,o.hasZ=void 0,o.labelingInfo=null,o.labelsVisible=!0,o.legendEnabled=!0,o.maxRecordCount=null,o.objectIdField=null,o.operationalLayerType="OGCFeatureLayer",o.popupEnabled=!0,o.popupTemplate=null,o.screenSizePerspectiveEnabled=!0,o.source=new Z({layer:(0,p.Z)(o)}),o.spatialReference=null,o.title=null,o.type="ogc-feature",o.typeIdField=null,o.types=null,o.url=null,o}return(0,a.Z)(r,[{key:"destroy",value:function(){var e;null===(e=this.source)||void 0===e||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((function(){return t._fetchService(e)}))),this.when()}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"effectiveMaxRecordCount",get:function(){var e,t,r;return null!==(e=null!==(t=this.maxRecordCount)&&void 0!==t?t:null===(r=this.capabilities)||void 0===r?void 0:r.query.maxRecordCount)&&void 0!==e?e:5e3}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(e){(0,H.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"on",value:function(e,t){return(0,u.Z)((0,l.Z)(r.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return(0,U.eZ)(this,e)}},{key:"createQuery",value:function(){return new J.Z}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,o,n=this,i=!1,s=null===t||void 0===t||null===(r=t.feature)||void 0===r?void 0:r.attributes,a=this.typeIdField&&(null===s||void 0===s?void 0:s[this.typeIdField]);return null!=a&&this.types&&(i=this.types.some((function(t){var r,i;return t.id==a&&("inherited"===(null===(i=o=null===(r=t.domains)||void 0===r?void 0:r[e])||void 0===i?void 0:i.type)&&(o=n._getLayerDomain(e)),!0)}))),i||o||(o=this._getLayerDomain(e)),o}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(J.Z.from(e)||r.createQuery(),t)})).then((function(e){var t;return null!==e&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.forEach((function(e){e.layer=e.sourceLayer=r})),e}))}},{key:"serviceSupportsSpatialReference",value:function(e){var t,r;return null!==(t=null===(r=this.source)||void 0===r?void 0:r.serviceSupportsSpatialReference(e))&&void 0!==t&&t}},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.source.load(t);case 2:this.read(this.source.featureDefinition,{origin:"service"}),(0,H.YN)(this.renderer,this.fieldsIndex),(0,H.UF)(this.timeInfo,this.fieldsIndex);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t,r=(0,o.Z)(this.fields);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.name===e&&n.domain)return n.domain}}catch(i){r.e(i)}finally{r.f()}return null}}]),r}((0,w.V)((0,O.N)((0,T.M)((0,D.b)((0,I.h)((0,P.c)((0,q.n)((0,Q.M)((0,j.q)((0,E.I)((0,M.Q)((0,h.R)(b.Z)))))))))))));(0,y._)([(0,g.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],K.prototype,"capabilities",void 0),(0,y._)([(0,g.Cb)({type:String,json:{write:!0}})],K.prototype,"collectionId",void 0),(0,y._)([(0,g.Cb)({type:String})],K.prototype,"copyright",void 0),(0,y._)([(0,g.Cb)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),(0,y._)([(0,g.Cb)({type:String})],K.prototype,"definitionExpression",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],K.prototype,"description",void 0),(0,y._)([(0,g.Cb)({type:String})],K.prototype,"displayField",void 0),(0,y._)([(0,g.Cb)({type:Number})],K.prototype,"effectiveMaxRecordCount",null),(0,y._)([(0,g.Cb)(G.PV)],K.prototype,"elevationInfo",void 0),(0,y._)([(0,g.Cb)({type:[B.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],K.prototype,"fields",void 0),(0,y._)([(0,g.Cb)(W.fieldsIndex)],K.prototype,"fieldsIndex",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:V.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],K.prototype,"fullExtent",void 0),(0,y._)([(0,g.Cb)({type:C.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.M.read}}}}})],K.prototype,"geometryType",void 0),(0,y._)([(0,g.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],K.prototype,"hasZ",void 0),(0,y._)([(0,g.Cb)({type:Boolean,readOnly:!0})],K.prototype,"isTable",null),(0,y._)([(0,g.Cb)({type:[L.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z.r},write:!0}}}})],K.prototype,"labelingInfo",void 0),(0,y._)([(0,g.Cb)(G.iR)],K.prototype,"labelsVisible",void 0),(0,y._)([(0,g.Cb)(G.rn)],K.prototype,"legendEnabled",void 0),(0,y._)([(0,g.Cb)({type:Number})],K.prototype,"maxRecordCount",void 0),(0,y._)([(0,g.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],K.prototype,"objectIdField",void 0),(0,y._)([(0,g.Cb)({type:["OGCFeatureLayer"]})],K.prototype,"operationalLayerType",void 0),(0,y._)([(0,g.Cb)(G.C_)],K.prototype,"popupEnabled",void 0),(0,y._)([(0,g.Cb)({type:v.Z,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),(0,y._)([(0,g.Cb)({types:f.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:f.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],K.prototype,"renderer",null),(0,y._)([(0,g.Cb)(G.YI)],K.prototype,"screenSizePerspectiveEnabled",void 0),(0,y._)([(0,g.Cb)({readOnly:!0})],K.prototype,"source",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:F.Z,json:{origins:{service:{read:!0}}}})],K.prototype,"spatialReference",void 0),(0,y._)([(0,g.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],K.prototype,"title",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],K.prototype,"type",void 0),(0,y._)([(0,g.Cb)({type:String,readOnly:!0})],K.prototype,"typeIdField",void 0),(0,y._)([(0,g.Cb)({type:[A.Z]})],K.prototype,"types",void 0),(0,y._)([(0,g.Cb)(G.HQ)],K.prototype,"url",void 0);var $=K=(0,y._)([(0,m.j)("esri.layers.OGCFeatureLayer")],K)},60480:function(e,t,r){r.d(t,{g:function(){return o}});var o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=6741.d2ecf3f2.chunk.js.map