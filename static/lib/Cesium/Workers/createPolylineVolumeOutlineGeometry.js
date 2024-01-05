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
define(["./defaultValue-ac2201bb","./Matrix2-5bde29de","./arrayRemoveDuplicates-68f14b2f","./BoundingRectangle-fd9a5062","./Transforms-3f580a0c","./ComponentDatatype-164c57e1","./PolylineVolumeGeometryLibrary-22c14de9","./RuntimeError-d45af186","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./IndexDatatype-4e1ec1a1","./PolygonPipeline-71d5516a","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a","./EllipsoidTangentPlane-fa2bc0dc","./AxisAlignedBoundingBox-b2f2975e","./IntersectionTests-0d91a773","./Plane-3ad20be7","./PolylinePipeline-01f0ccf8","./EllipsoidGeodesic-dedaf218","./EllipsoidRhumbLine-bfb4fa95"],(function(e,i,n,t,o,r,a,l,s,p,d,c,u,y,f,h,g,m,E,P,_,b){"use strict";function k(n){const t=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,o=n.shapePositions;if(!e.defined(t))throw new l.DeveloperError("options.polylinePositions is required.");if(!e.defined(o))throw new l.DeveloperError("options.shapePositions is required.");this._positions=t,this._shape=o,this._ellipsoid=i.Ellipsoid.clone(e.defaultValue(n.ellipsoid,i.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,a.CornerType.ROUNDED),this._granularity=e.defaultValue(n.granularity,r.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let s=1+t.length*i.Cartesian3.packedLength;s+=1+o.length*i.Cartesian2.packedLength,this.packedLength=s+i.Ellipsoid.packedLength+2}k.pack=function(n,t,o){if(!e.defined(n))throw new l.DeveloperError("value is required");if(!e.defined(t))throw new l.DeveloperError("array is required");let r;o=e.defaultValue(o,0);const a=n._positions;let s=a.length;for(t[o++]=s,r=0;r<s;++r,o+=i.Cartesian3.packedLength)i.Cartesian3.pack(a[r],t,o);const p=n._shape;for(s=p.length,t[o++]=s,r=0;r<s;++r,o+=i.Cartesian2.packedLength)i.Cartesian2.pack(p[r],t,o);return i.Ellipsoid.pack(n._ellipsoid,t,o),o+=i.Ellipsoid.packedLength,t[o++]=n._cornerType,t[o]=n._granularity,t};const D=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE),v={polylinePositions:void 0,shapePositions:void 0,ellipsoid:D,height:void 0,cornerType:void 0,granularity:void 0};k.unpack=function(n,t,o){if(!e.defined(n))throw new l.DeveloperError("array is required");let r;t=e.defaultValue(t,0);let a=n[t++];const s=new Array(a);for(r=0;r<a;++r,t+=i.Cartesian3.packedLength)s[r]=i.Cartesian3.unpack(n,t);a=n[t++];const p=new Array(a);for(r=0;r<a;++r,t+=i.Cartesian2.packedLength)p[r]=i.Cartesian2.unpack(n,t);const d=i.Ellipsoid.unpack(n,t,D);t+=i.Ellipsoid.packedLength;const c=n[t++],u=n[t];return e.defined(o)?(o._positions=s,o._shape=p,o._ellipsoid=i.Ellipsoid.clone(d,o._ellipsoid),o._cornerType=c,o._granularity=u,o):(v.polylinePositions=s,v.shapePositions=p,v.cornerType=c,v.granularity=u,new k(v))};const C=new t.BoundingRectangle;return k.createGeometry=function(e){const l=e._positions,u=n.arrayRemoveDuplicates(l,i.Cartesian3.equalsEpsilon);let y=e._shape;if(y=a.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(y),u.length<2||y.length<3)return;c.PolygonPipeline.computeWindingOrder2D(y)===c.WindingOrder.CLOCKWISE&&y.reverse();const f=t.BoundingRectangle.fromPoints(y,C);return function(e,i){const n=new p.GeometryAttributes;n.position=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});const t=i.length,a=n.position.values.length/3,l=e.length/3/t,c=d.IndexDatatype.createTypedArray(a,2*t*(l+1));let u,y,f=0;u=0;let h=u*t;for(y=0;y<t-1;y++)c[f++]=y+h,c[f++]=y+h+1;for(c[f++]=t-1+h,c[f++]=h,u=l-1,h=u*t,y=0;y<t-1;y++)c[f++]=y+h,c[f++]=y+h+1;for(c[f++]=t-1+h,c[f++]=h,u=0;u<l-1;u++){const e=t*u,i=e+t;for(y=0;y<t;y++)c[f++]=y+e,c[f++]=y+i}return new s.Geometry({attributes:n,indices:d.IndexDatatype.createTypedArray(a,c),boundingSphere:o.BoundingSphere.fromVertices(e),primitiveType:s.PrimitiveType.LINES})}(a.PolylineVolumeGeometryLibrary.computePositions(u,y,f,e,!1),y)},function(n,t){return e.defined(t)&&(n=k.unpack(n,t)),n._ellipsoid=i.Ellipsoid.clone(n._ellipsoid),k.createGeometry(n)}}));
//# sourceMappingURL=createPolylineVolumeOutlineGeometry.js.map
