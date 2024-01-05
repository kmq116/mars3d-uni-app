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
define(["./defaultValue-ac2201bb","./Matrix2-5bde29de","./Transforms-3f580a0c","./ComponentDatatype-164c57e1","./RuntimeError-d45af186","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-4e1ec1a1","./PolygonPipeline-71d5516a","./RectangleGeometryLibrary-26535834","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a","./EllipsoidRhumbLine-bfb4fa95"],(function(e,t,i,o,n,r,a,l,s,u,c,d,p,f,g){"use strict";const h=new i.BoundingSphere,y=new i.BoundingSphere,m=new t.Cartesian3,b=new t.Rectangle;function _(e,t){const i=e._ellipsoid,n=t.height,l=t.width,u=t.northCap,d=t.southCap;let p=n,f=2,g=0,h=4;u&&(f-=1,p-=1,g+=1,h-=2),d&&(f-=1,p-=1,g+=1,h-=2),g+=f*l+2*p-h;const y=new Float64Array(3*g);let b,_=0,E=0;const A=m;if(u)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,0,A),y[_++]=A.x,y[_++]=A.y,y[_++]=A.z;else for(b=0;b<l;b++)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),y[_++]=A.x,y[_++]=A.y,y[_++]=A.z;for(b=l-1,E=1;E<n;E++)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),y[_++]=A.x,y[_++]=A.y,y[_++]=A.z;if(E=n-1,!d)for(b=l-2;b>=0;b--)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),y[_++]=A.x,y[_++]=A.y,y[_++]=A.z;for(b=0,E=n-2;E>0;E--)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),y[_++]=A.x,y[_++]=A.y,y[_++]=A.z;const w=y.length/3*2,G=s.IndexDatatype.createTypedArray(y.length/3,w);let v=0;for(let e=0;e<y.length/3-1;e++)G[v++]=e,G[v++]=e+1;G[v++]=y.length/3-1,G[v++]=0;const R=new r.Geometry({attributes:new a.GeometryAttributes,primitiveType:r.PrimitiveType.LINES});return R.attributes.position=new r.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y}),R.indices=G,R}function E(i){const r=(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).rectangle,a=e.defaultValue(i.granularity,o.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),s=e.defaultValue(i.rotation,0);if(!e.defined(r))throw new n.DeveloperError("rectangle is required.");if(t.Rectangle.validate(r),r.north<r.south)throw new n.DeveloperError("options.rectangle.north must be greater than options.rectangle.south");const u=e.defaultValue(i.height,0),c=e.defaultValue(i.extrudedHeight,u);this._rectangle=t.Rectangle.clone(r),this._granularity=a,this._ellipsoid=l,this._surfaceHeight=Math.max(u,c),this._rotation=s,this._extrudedHeight=Math.min(u,c),this._offsetAttribute=i.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}E.packedLength=t.Rectangle.packedLength+t.Ellipsoid.packedLength+5,E.pack=function(i,o,r){if(!e.defined(i))throw new n.DeveloperError("value is required");if(!e.defined(o))throw new n.DeveloperError("array is required");return r=e.defaultValue(r,0),t.Rectangle.pack(i._rectangle,o,r),r+=t.Rectangle.packedLength,t.Ellipsoid.pack(i._ellipsoid,o,r),r+=t.Ellipsoid.packedLength,o[r++]=i._granularity,o[r++]=i._surfaceHeight,o[r++]=i._rotation,o[r++]=i._extrudedHeight,o[r]=e.defaultValue(i._offsetAttribute,-1),o};const A=new t.Rectangle,w=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),G={rectangle:A,ellipsoid:w,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};E.unpack=function(i,o,r){if(!e.defined(i))throw new n.DeveloperError("array is required");o=e.defaultValue(o,0);const a=t.Rectangle.unpack(i,o,A);o+=t.Rectangle.packedLength;const l=t.Ellipsoid.unpack(i,o,w);o+=t.Ellipsoid.packedLength;const s=i[o++],u=i[o++],c=i[o++],d=i[o++],p=i[o];return e.defined(r)?(r._rectangle=t.Rectangle.clone(a,r._rectangle),r._ellipsoid=t.Ellipsoid.clone(l,r._ellipsoid),r._surfaceHeight=u,r._rotation=c,r._extrudedHeight=d,r._offsetAttribute=-1===p?void 0:p,r):(G.granularity=s,G.height=u,G.rotation=c,G.extrudedHeight=d,G.offsetAttribute=-1===p?void 0:p,new E(G))};const v=new t.Cartographic;return E.createGeometry=function(t){const n=t._rectangle,a=t._ellipsoid,d=c.RectangleGeometryLibrary.computeOptions(n,t._granularity,t._rotation,0,b,v);let p,f;if(o.CesiumMath.equalsEpsilon(n.north,n.south,o.CesiumMath.EPSILON10)||o.CesiumMath.equalsEpsilon(n.east,n.west,o.CesiumMath.EPSILON10))return;const g=t._surfaceHeight,m=t._extrudedHeight;let E;if(!o.CesiumMath.equalsEpsilon(g,m,0,o.CesiumMath.EPSILON2)){if(p=function(e,t){const i=e._surfaceHeight,o=e._extrudedHeight,n=e._ellipsoid,r=o,a=i,l=_(e,t),c=t.height,d=t.width,p=u.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,a,n,!1);let f=p.length;const g=new Float64Array(2*f);g.set(p);const h=u.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,r,n);g.set(h,f),l.attributes.position.values=g;const y=t.northCap,m=t.southCap;let b=4;y&&(b-=1),m&&(b-=1);const E=2*(g.length/3+b),A=s.IndexDatatype.createTypedArray(g.length/3,E);f=g.length/6;let w,G=0;for(let e=0;e<f-1;e++)A[G++]=e,A[G++]=e+1,A[G++]=e+f,A[G++]=e+f+1;if(A[G++]=f-1,A[G++]=0,A[G++]=f+f-1,A[G++]=f,A[G++]=0,A[G++]=f,y)w=c-1;else{const e=d-1;A[G++]=e,A[G++]=e+f,w=d+c-2}if(A[G++]=w,A[G++]=w+f,!m){const e=d+w-1;A[G++]=e,A[G]=e+f}return l.indices=A,l}(t,d),e.defined(t._offsetAttribute)){const e=p.attributes.position.values.length/3;let i=new Uint8Array(e);t._offsetAttribute===l.GeometryOffsetAttribute.TOP?i=i.fill(1,0,e/2):(E=t._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1,i=i.fill(E)),p.attributes.applyOffset=new r.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}const c=i.BoundingSphere.fromRectangle3D(n,a,g,y),b=i.BoundingSphere.fromRectangle3D(n,a,m,h);f=i.BoundingSphere.union(c,b)}else{if(p=_(t,d),p.attributes.position.values=u.PolygonPipeline.scaleToGeodeticHeight(p.attributes.position.values,g,a,!1),e.defined(t._offsetAttribute)){const e=p.attributes.position.values.length;E=t._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1;const i=new Uint8Array(e/3).fill(E);p.attributes.applyOffset=new r.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}f=i.BoundingSphere.fromRectangle3D(n,a,g)}return new r.Geometry({attributes:p.attributes,indices:p.indices,primitiveType:r.PrimitiveType.LINES,boundingSphere:f,offsetAttribute:t._offsetAttribute})},function(i,o){return e.defined(o)&&(i=E.unpack(i,o)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),i._rectangle=t.Rectangle.clone(i._rectangle),E.createGeometry(i)}}));
//# sourceMappingURL=createRectangleOutlineGeometry.js.map
