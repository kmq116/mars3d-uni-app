/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.95
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./OrientedBoundingBox-4a9bfa2e"],(function(n,e,t,i){"use strict";const r={},a=new e.Cartesian3,o=new e.Cartesian3,u=new e.Cartesian3,s=new e.Cartesian3,c=new i.OrientedBoundingBox;function d(n,t,i,r,o){const u=e.Cartesian3.subtract(n,t,a),s=e.Cartesian3.dot(i,u),c=e.Cartesian3.dot(r,u);return e.Cartesian2.fromElements(s,c,o)}r.validOutline=function(n){t.Check.defined("positions",n);const r=i.OrientedBoundingBox.fromPoints(n,c).halfAxes,a=e.Matrix3.getColumn(r,0,o),d=e.Matrix3.getColumn(r,1,u),C=e.Matrix3.getColumn(r,2,s),l=e.Cartesian3.magnitude(a),f=e.Cartesian3.magnitude(d),m=e.Cartesian3.magnitude(C);return!(0===l&&(0===f||0===m)||0===f&&0===m)},r.computeProjectTo2DArguments=function(n,r,a,d){t.Check.defined("positions",n),t.Check.defined("centerResult",r),t.Check.defined("planeAxis1Result",a),t.Check.defined("planeAxis2Result",d);const C=i.OrientedBoundingBox.fromPoints(n,c),l=C.halfAxes,f=e.Matrix3.getColumn(l,0,o),m=e.Matrix3.getColumn(l,1,u),g=e.Matrix3.getColumn(l,2,s),x=e.Cartesian3.magnitude(f),h=e.Cartesian3.magnitude(m),B=e.Cartesian3.magnitude(g),M=Math.min(x,h,B);if(0===x&&(0===h||0===B)||0===h&&0===B)return!1;let P,p;return M!==h&&M!==B||(P=f),M===x?P=m:M===B&&(p=m),M!==x&&M!==h||(p=g),e.Cartesian3.normalize(P,a),e.Cartesian3.normalize(p,d),e.Cartesian3.clone(C.center,r),!0},r.createProjectPointsTo2DFunction=function(n,e,t){return function(i){const r=new Array(i.length);for(let a=0;a<i.length;a++)r[a]=d(i[a],n,e,t);return r}},r.createProjectPointTo2DFunction=function(n,e,t){return function(i,r){return d(i,n,e,t,r)}},n.CoplanarPolygonGeometryLibrary=r}));
//# sourceMappingURL=CoplanarPolygonGeometryLibrary-ba5e3063.js.map
