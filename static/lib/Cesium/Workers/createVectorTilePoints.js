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
define(["./AttributeCompression-1cfcbb75","./Matrix2-5bde29de","./ComponentDatatype-164c57e1","./createTaskProcessorWorker","./RuntimeError-d45af186","./defaultValue-ac2201bb","./WebGLConstants-e12cdc8a"],(function(e,t,a,r,n,o,i){"use strict";const s=32767,c=new t.Cartographic,u=new t.Cartesian3,p=new t.Rectangle,l=new t.Ellipsoid,f={min:void 0,max:void 0};return r((function(r,n){const o=new Uint16Array(r.positions);!function(e){e=new Float64Array(e);let a=0;f.min=e[a++],f.max=e[a++],t.Rectangle.unpack(e,a,p),a+=t.Rectangle.packedLength,t.Ellipsoid.unpack(e,a,l)}(r.packedBuffer);const i=p,d=l,m=f.min,b=f.max,h=o.length/3,C=o.subarray(0,h),g=o.subarray(h,2*h),w=o.subarray(2*h,3*h);e.AttributeCompression.zigZagDeltaDecode(C,g,w);const k=new Float64Array(o.length);for(let e=0;e<h;++e){const r=C[e],n=g[e],o=w[e],p=a.CesiumMath.lerp(i.west,i.east,r/s),l=a.CesiumMath.lerp(i.south,i.north,n/s),f=a.CesiumMath.lerp(m,b,o/s),h=t.Cartographic.fromRadians(p,l,f,c),y=d.cartographicToCartesian(h,u);t.Cartesian3.pack(y,k,3*e)}return n.push(k.buffer),{positions:k.buffer}}))}));
//# sourceMappingURL=createVectorTilePoints.js.map
