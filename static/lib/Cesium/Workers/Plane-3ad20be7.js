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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./ComponentDatatype-164c57e1"],(function(e,t,n,a,r){"use strict";function i(e,a){if(n.Check.typeOf.object("normal",e),!r.CesiumMath.equalsEpsilon(t.Cartesian3.magnitude(e),1,r.CesiumMath.EPSILON6))throw new n.DeveloperError("normal must be normalized.");n.Check.typeOf.number("distance",a),this.normal=t.Cartesian3.clone(e),this.distance=a}i.fromPointNormal=function(e,o,s){if(n.Check.typeOf.object("point",e),n.Check.typeOf.object("normal",o),!r.CesiumMath.equalsEpsilon(t.Cartesian3.magnitude(o),1,r.CesiumMath.EPSILON6))throw new n.DeveloperError("normal must be normalized.");const c=-t.Cartesian3.dot(o,e);return a.defined(s)?(t.Cartesian3.clone(o,s.normal),s.distance=c,s):new i(o,c)};const o=new t.Cartesian3;i.fromCartesian4=function(e,s){n.Check.typeOf.object("coefficients",e);const c=t.Cartesian3.fromCartesian4(e,o),l=e.w;if(!r.CesiumMath.equalsEpsilon(t.Cartesian3.magnitude(c),1,r.CesiumMath.EPSILON6))throw new n.DeveloperError("normal must be normalized.");return a.defined(s)?(t.Cartesian3.clone(c,s.normal),s.distance=l,s):new i(c,l)},i.getPointDistance=function(e,a){return n.Check.typeOf.object("plane",e),n.Check.typeOf.object("point",a),t.Cartesian3.dot(e.normal,a)+e.distance};const s=new t.Cartesian3;i.projectPointOntoPlane=function(e,r,o){n.Check.typeOf.object("plane",e),n.Check.typeOf.object("point",r),a.defined(o)||(o=new t.Cartesian3);const c=i.getPointDistance(e,r),l=t.Cartesian3.multiplyByScalar(e.normal,c,s);return t.Cartesian3.subtract(r,l,o)};const c=new t.Matrix4,l=new t.Cartesian4,C=new t.Cartesian3;i.transform=function(e,a,r){n.Check.typeOf.object("plane",e),n.Check.typeOf.object("transform",a);const o=e.normal,s=e.distance,f=t.Matrix4.inverseTranspose(a,c);let m=t.Cartesian4.fromElements(o.x,o.y,o.z,s,l);m=t.Matrix4.multiplyByVector(f,m,m);const u=t.Cartesian3.fromCartesian4(m,C);return m=t.Cartesian4.divideByScalar(m,t.Cartesian3.magnitude(u),m),i.fromCartesian4(m,r)},i.clone=function(e,r){return n.Check.typeOf.object("plane",e),a.defined(r)?(t.Cartesian3.clone(e.normal,r.normal),r.distance=e.distance,r):new i(e.normal,e.distance)},i.equals=function(e,a){return n.Check.typeOf.object("left",e),n.Check.typeOf.object("right",a),e.distance===a.distance&&t.Cartesian3.equals(e.normal,a.normal)},i.ORIGIN_XY_PLANE=Object.freeze(new i(t.Cartesian3.UNIT_Z,0)),i.ORIGIN_YZ_PLANE=Object.freeze(new i(t.Cartesian3.UNIT_X,0)),i.ORIGIN_ZX_PLANE=Object.freeze(new i(t.Cartesian3.UNIT_Y,0)),e.Plane=i}));
//# sourceMappingURL=Plane-3ad20be7.js.map
