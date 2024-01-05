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
define(["./defaultValue-ac2201bb","./Transforms-3f580a0c","./Matrix2-5bde29de","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./FrustumGeometry-f6c3049a","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a","./Plane-3ad20be7","./VertexFormat-4a6cdfad"],(function(e,t,r,n,a,i,o,u,c,s,p,m,f){"use strict";const d=0,h=1;function k(a){n.Check.typeOf.object("options",a),n.Check.typeOf.object("options.frustum",a.frustum),n.Check.typeOf.object("options.origin",a.origin),n.Check.typeOf.object("options.orientation",a.orientation);const o=a.frustum,u=a.orientation,c=a.origin,s=e.defaultValue(a._drawNearPlane,!0);let p,m;o instanceof i.PerspectiveFrustum?(p=d,m=i.PerspectiveFrustum.packedLength):o instanceof i.OrthographicFrustum&&(p=h,m=i.OrthographicFrustum.packedLength),this._frustumType=p,this._frustum=o.clone(),this._origin=r.Cartesian3.clone(c),this._orientation=t.Quaternion.clone(u),this._drawNearPlane=s,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+m+r.Cartesian3.packedLength+t.Quaternion.packedLength}k.pack=function(a,o,u){n.Check.typeOf.object("value",a),n.Check.defined("array",o),u=e.defaultValue(u,0);const c=a._frustumType,s=a._frustum;return o[u++]=c,c===d?(i.PerspectiveFrustum.pack(s,o,u),u+=i.PerspectiveFrustum.packedLength):(i.OrthographicFrustum.pack(s,o,u),u+=i.OrthographicFrustum.packedLength),r.Cartesian3.pack(a._origin,o,u),u+=r.Cartesian3.packedLength,t.Quaternion.pack(a._orientation,o,u),o[u+=t.Quaternion.packedLength]=a._drawNearPlane?1:0,o};const g=new i.PerspectiveFrustum,l=new i.OrthographicFrustum,y=new t.Quaternion,_=new r.Cartesian3;return k.unpack=function(a,o,u){n.Check.defined("array",a),o=e.defaultValue(o,0);const c=a[o++];let s;c===d?(s=i.PerspectiveFrustum.unpack(a,o,g),o+=i.PerspectiveFrustum.packedLength):(s=i.OrthographicFrustum.unpack(a,o,l),o+=i.OrthographicFrustum.packedLength);const p=r.Cartesian3.unpack(a,o,_);o+=r.Cartesian3.packedLength;const m=t.Quaternion.unpack(a,o,y),f=1===a[o+=t.Quaternion.packedLength];if(!e.defined(u))return new k({frustum:s,origin:p,orientation:m,_drawNearPlane:f});const h=c===u._frustumType?u._frustum:void 0;return u._frustum=s.clone(h),u._frustumType=c,u._origin=r.Cartesian3.clone(p,u._origin),u._orientation=t.Quaternion.clone(m,u._orientation),u._drawNearPlane=f,u},k.createGeometry=function(e){const r=e._frustumType,n=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);i.FrustumGeometry._computeNearFarPlanes(c,s,r,n,m);const f=new u.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let d,h;const k=p?2:1,g=new Uint16Array(8*(k+1));let l=p?0:1;for(;l<2;++l)d=p?8*l:0,h=4*l,g[d]=h,g[d+1]=h+1,g[d+2]=h+1,g[d+3]=h+2,g[d+4]=h+2,g[d+5]=h+3,g[d+6]=h+3,g[d+7]=h;for(l=0;l<2;++l)d=8*(k+l),h=4*l,g[d]=h,g[d+1]=h+4,g[d+2]=h+1,g[d+3]=h+5,g[d+4]=h+2,g[d+5]=h+6,g[d+6]=h+3,g[d+7]=h+7;return new o.Geometry({attributes:f,indices:g,primitiveType:o.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=k.unpack(t,r)),k.createGeometry(t)}}));
//# sourceMappingURL=createFrustumOutlineGeometry.js.map
