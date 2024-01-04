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
define(["exports","./AxisAlignedBoundingBox-73d84705","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./IntersectionTests-0d95e9e5","./Plane-3ad20be7","./Transforms-b0c5770c"],(function(e,t,n,i,r,o,s,a){"use strict";const c=new n.Cartesian4;function d(e,t){if(i.Check.defined("origin",e),e=(t=r.defaultValue(t,n.Ellipsoid.WGS84)).scaleToGeodeticSurface(e),!r.defined(e))throw new i.DeveloperError("origin must not be at the center of the ellipsoid.");const o=a.Transforms.eastNorthUpToFixedFrame(e,t);this._ellipsoid=t,this._origin=e,this._xAxis=n.Cartesian3.fromCartesian4(n.Matrix4.getColumn(o,0,c)),this._yAxis=n.Cartesian3.fromCartesian4(n.Matrix4.getColumn(o,1,c));const d=n.Cartesian3.fromCartesian4(n.Matrix4.getColumn(o,2,c));this._plane=s.Plane.fromPointNormal(e,d)}Object.defineProperties(d.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});const l=new t.AxisAlignedBoundingBox;d.fromPoints=function(e,n){i.Check.defined("cartesians",e);return new d(t.AxisAlignedBoundingBox.fromPoints(e,l).center,n)};const f=new o.Ray,p=new n.Cartesian3;d.prototype.projectPointOntoPlane=function(e,t){i.Check.defined("cartesian",e);const s=f;s.origin=e,n.Cartesian3.normalize(e,s.direction);let a=o.IntersectionTests.rayPlane(s,this._plane,p);if(r.defined(a)||(n.Cartesian3.negate(s.direction,s.direction),a=o.IntersectionTests.rayPlane(s,this._plane,p)),r.defined(a)){const e=n.Cartesian3.subtract(a,this._origin,a),i=n.Cartesian3.dot(this._xAxis,e),o=n.Cartesian3.dot(this._yAxis,e);return r.defined(t)?(t.x=i,t.y=o,t):new n.Cartesian2(i,o)}},d.prototype.projectPointsOntoPlane=function(e,t){i.Check.defined("cartesians",e),r.defined(t)||(t=[]);let n=0;const o=e.length;for(let i=0;i<o;i++){const o=this.projectPointOntoPlane(e[i],t[n]);r.defined(o)&&(t[n]=o,n++)}return t.length=n,t},d.prototype.projectPointToNearestOnPlane=function(e,t){i.Check.defined("cartesian",e),r.defined(t)||(t=new n.Cartesian2);const s=f;s.origin=e,n.Cartesian3.clone(this._plane.normal,s.direction);let a=o.IntersectionTests.rayPlane(s,this._plane,p);r.defined(a)||(n.Cartesian3.negate(s.direction,s.direction),a=o.IntersectionTests.rayPlane(s,this._plane,p));const c=n.Cartesian3.subtract(a,this._origin,a),d=n.Cartesian3.dot(this._xAxis,c),l=n.Cartesian3.dot(this._yAxis,c);return t.x=d,t.y=l,t},d.prototype.projectPointsToNearestOnPlane=function(e,t){i.Check.defined("cartesians",e),r.defined(t)||(t=[]);const n=e.length;t.length=n;for(let i=0;i<n;i++)t[i]=this.projectPointToNearestOnPlane(e[i],t[i]);return t};const h=new n.Cartesian3;d.prototype.projectPointOntoEllipsoid=function(e,t){i.Check.defined("cartesian",e),r.defined(t)||(t=new n.Cartesian3);const o=this._ellipsoid,s=this._origin,a=this._xAxis,c=this._yAxis,d=h;return n.Cartesian3.multiplyByScalar(a,e.x,d),t=n.Cartesian3.add(s,d,t),n.Cartesian3.multiplyByScalar(c,e.y,d),n.Cartesian3.add(t,d,t),o.scaleToGeocentricSurface(t,t),t},d.prototype.projectPointsOntoEllipsoid=function(e,t){i.Check.defined("cartesians",e);const n=e.length;r.defined(t)?t.length=n:t=new Array(n);for(let i=0;i<n;++i)t[i]=this.projectPointOntoEllipsoid(e[i],t[i]);return t},e.EllipsoidTangentPlane=d}));
//# sourceMappingURL=EllipsoidTangentPlane-6e38bac2.js.map
