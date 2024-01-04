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
define(["exports","./Matrix2-5bde29de","./defaultValue-ac2201bb","./RuntimeError-d45af186","./ComponentDatatype-164c57e1"],(function(e,t,i,o,r){"use strict";function a(e){this._ellipsoid=i.defaultValue(e,t.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(a.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),a.mercatorAngleToGeodeticLatitude=function(e){return r.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},a.geodeticLatitudeToMercatorAngle=function(e){e>a.MaximumLatitude?e=a.MaximumLatitude:e<-a.MaximumLatitude&&(e=-a.MaximumLatitude);const t=Math.sin(e);return.5*Math.log((1+t)/(1-t))},a.MaximumLatitude=a.mercatorAngleToGeodeticLatitude(Math.PI),a.prototype.project=function(e,o){const r=this._semimajorAxis,n=e.longitude*r,u=a.geodeticLatitudeToMercatorAngle(e.latitude)*r,d=e.height;return i.defined(o)?(o.x=n,o.y=u,o.z=d,o):new t.Cartesian3(n,u,d)},a.prototype.unproject=function(e,r){if(!i.defined(e))throw new o.DeveloperError("cartesian is required");const n=this._oneOverSemimajorAxis,u=e.x*n,d=a.mercatorAngleToGeodeticLatitude(e.y*n),s=e.z;return i.defined(r)?(r.longitude=u,r.latitude=d,r.height=s,r):new t.Cartographic(u,d,s)},e.WebMercatorProjection=a}));
//# sourceMappingURL=WebMercatorProjection-5f048511.js.map
