"use strict";(self.webpackChunkjakartasatubeta=self.webpackChunkjakartasatubeta||[]).push([[6553],{16553:function(e,r,t){t.r(r),t.d(r,{createLabelFunction:function(){return h},formatField:function(){return x}});var n=t(74165),a=t(37762),u=t(15861),i=t(10064),l=t(32718),s=t(76969),c=t(6291),o=t(37270),f=t(93253),p=t(819),b=l.Z.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:function(){return null}},v={getAttribute:function(e,r){return e.field(r)}};function h(e,r,t){return y.apply(this,arguments)}function y(){return y=(0,u.Z)((0,n.Z)().mark((function e(r,a,u){var l,s,c,o,h,y,g;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.symbol&&a){e.next=2;break}return e.abrupt("return",d);case 2:if(l=r.where,s=(0,f.hV)(r),!l){e.next=10;break}return e.next=7,t.e(8562).then(t.bind(t,48562));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(c=e.t0,"arcade"!==s.type){e.next=21;break}return e.next=15,(0,p.WW)(s.expression,u,a);case 15:if(null!=(h=e.sent)){e.next=18;break}return e.abrupt("return",d);case 18:o={type:"arcade",evaluate:function(e){try{var r=h.evaluate({$feature:"attributes"in e?h.repurposeFeature(e):e},h.services);if(null!=r)return r.toString()}catch(u){b.error(new i.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:u,feature:e,expression:s}))}return null},needsHydrationToEvaluate:function(){return null==(0,f.el)(s.expression)}},e.next=22;break;case 21:o={type:"simple",evaluate:function(e){return s.expression.replaceAll(/{[^}]*}/g,(function(r){var t=r.slice(1,-1),n=a.get(t);if(!n)return r;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":x(u,n)}))}};case 22:if(!l){e.next=32;break}e.prev=23,y=c.WhereClause.create(l,a),e.next=30;break;case 27:return e.prev=27,e.t1=e.catch(23),e.abrupt("return",(b.error(new i.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:e.t1})),d));case 30:g=o.evaluate,o.evaluate=function(e){var r="attributes"in e?void 0:v;try{if(y.testFeature(e,r))return g(e)}catch(t){b.error(new i.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:e,error:t}))}return null};case 32:return e.abrupt("return",o);case 33:case"end":return e.stop()}}),e,null,[[23,27]])}))),y.apply(this,arguments)}function x(e,r){if(null==e)return"";var t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){var n,u=e,i=(0,a.Z)(t.codedValues);try{for(i.s();!(n=i.n()).done;){var l=n.value;if(l.code===u)return l.name}}catch(v){i.e(v)}finally{i.f()}}else if("range"===t.type){var f=+e,p="range"in t?t.range[0]:t.minValue,b="range"in t?t.range[1]:t.maxValue;if(p<=f&&f<=b)return t.name}var d=e;return"date"===r.type||"esriFieldTypeDate"===r.type?d=(0,s.p6)(d,(0,s.Ze)("short-date")):(0,o.H7)(r)&&(d=(0,c.uf)(+d)),d||""}}}]);
//# sourceMappingURL=6553.8ecd9da7.chunk.js.map