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
define(["exports","./Transforms-3f580a0c","./Matrix2-5bde29de","./ComponentDatatype-164c57e1","./defaultValue-ac2201bb","./RuntimeError-d45af186","./EllipseGeometryLibrary-1ac95103","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-4e1ec1a1"],(function(e,t,i,r,n,o,a,s,l,u,d){"use strict";const f=new i.Cartesian3;let c=new i.Cartesian3;const p=new t.BoundingSphere,m=new t.BoundingSphere;function h(e){const t=(e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT)).center,a=n.defaultValue(e.ellipsoid,i.Ellipsoid.WGS84),s=e.semiMajorAxis,l=e.semiMinorAxis,u=n.defaultValue(e.granularity,r.CesiumMath.RADIANS_PER_DEGREE);if(!n.defined(t))throw new o.DeveloperError("center is required.");if(!n.defined(s))throw new o.DeveloperError("semiMajorAxis is required.");if(!n.defined(l))throw new o.DeveloperError("semiMinorAxis is required.");if(s<l)throw new o.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(u<=0)throw new o.DeveloperError("granularity must be greater than zero.");const d=n.defaultValue(e.height,0),f=n.defaultValue(e.extrudedHeight,d);this._center=i.Cartesian3.clone(t),this._semiMajorAxis=s,this._semiMinorAxis=l,this._ellipsoid=i.Ellipsoid.clone(a),this._rotation=n.defaultValue(e.rotation,0),this._height=Math.max(f,d),this._granularity=u,this._extrudedHeight=Math.min(f,d),this._numberOfVerticalLines=Math.max(n.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}h.packedLength=i.Cartesian3.packedLength+i.Ellipsoid.packedLength+8,h.pack=function(e,t,r){if(!n.defined(e))throw new o.DeveloperError("value is required");if(!n.defined(t))throw new o.DeveloperError("array is required");return r=n.defaultValue(r,0),i.Cartesian3.pack(e._center,t,r),r+=i.Cartesian3.packedLength,i.Ellipsoid.pack(e._ellipsoid,t,r),r+=i.Ellipsoid.packedLength,t[r++]=e._semiMajorAxis,t[r++]=e._semiMinorAxis,t[r++]=e._rotation,t[r++]=e._height,t[r++]=e._granularity,t[r++]=e._extrudedHeight,t[r++]=e._numberOfVerticalLines,t[r]=n.defaultValue(e._offsetAttribute,-1),t};const y=new i.Cartesian3,b=new i.Ellipsoid,A={center:y,ellipsoid:b,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};h.unpack=function(e,t,r){if(!n.defined(e))throw new o.DeveloperError("array is required");t=n.defaultValue(t,0);const a=i.Cartesian3.unpack(e,t,y);t+=i.Cartesian3.packedLength;const s=i.Ellipsoid.unpack(e,t,b);t+=i.Ellipsoid.packedLength;const l=e[t++],u=e[t++],d=e[t++],f=e[t++],c=e[t++],p=e[t++],m=e[t++],_=e[t];return n.defined(r)?(r._center=i.Cartesian3.clone(a,r._center),r._ellipsoid=i.Ellipsoid.clone(s,r._ellipsoid),r._semiMajorAxis=l,r._semiMinorAxis=u,r._rotation=d,r._height=f,r._granularity=c,r._extrudedHeight=p,r._numberOfVerticalLines=m,r._offsetAttribute=-1===_?void 0:_,r):(A.height=f,A.extrudedHeight=p,A.granularity=c,A.rotation=d,A.semiMajorAxis=l,A.semiMinorAxis=u,A.numberOfVerticalLines=m,A.offsetAttribute=-1===_?void 0:_,new h(A))},h.createGeometry=function(e){if(e._semiMajorAxis<=0||e._semiMinorAxis<=0)return;const o=e._height,h=e._extrudedHeight,y=!r.CesiumMath.equalsEpsilon(o,h,0,r.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);const b={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:o,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};let A;if(y)b.extrudedHeight=h,b.offsetAttribute=e._offsetAttribute,A=function(e){const o=e.center,c=e.ellipsoid,h=e.semiMajorAxis;let y=i.Cartesian3.multiplyByScalar(c.geodeticSurfaceNormal(o,f),e.height,f);p.center=i.Cartesian3.add(o,y,p.center),p.radius=h,y=i.Cartesian3.multiplyByScalar(c.geodeticSurfaceNormal(o,y),e.extrudedHeight,y),m.center=i.Cartesian3.add(o,y,m.center),m.radius=h;let b=a.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions;const A=new l.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a.EllipseGeometryLibrary.raisePositionsToHeight(b,e,!0)})});b=A.position.values;const _=t.BoundingSphere.union(p,m);let g=b.length/3;if(n.defined(e.offsetAttribute)){let t=new Uint8Array(g);if(e.offsetAttribute===u.GeometryOffsetAttribute.TOP)t=t.fill(1,0,g/2);else{const i=e.offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1;t=t.fill(i)}A.applyOffset=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}let E=n.defaultValue(e.numberOfVerticalLines,16);E=r.CesiumMath.clamp(E,0,g/2);const x=d.IndexDatatype.createTypedArray(g,2*g+2*E);g/=2;let M,w,v=0;for(M=0;M<g;++M)x[v++]=M,x[v++]=(M+1)%g,x[v++]=M+g,x[v++]=(M+1)%g+g;if(E>0){const e=Math.min(E,g);w=Math.round(g/e);const t=Math.min(w*E,g);for(M=0;M<t;M+=w)x[v++]=M,x[v++]=M+g}return{boundingSphere:_,attributes:A,indices:x}}(b);else if(A=function(e){const n=e.center;c=i.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(n,c),e.height,c),c=i.Cartesian3.add(n,c,c);const o=new t.BoundingSphere(c,e.semiMajorAxis),u=a.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,f=new l.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a.EllipseGeometryLibrary.raisePositionsToHeight(u,e,!1)})}),p=u.length/3,m=d.IndexDatatype.createTypedArray(p,2*p);let h=0;for(let e=0;e<p;++e)m[h++]=e,m[h++]=(e+1)%p;return{boundingSphere:o,attributes:f,indices:m}}(b),n.defined(e._offsetAttribute)){const t=A.attributes.position.values.length,i=e._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(t/3).fill(i);A.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new s.Geometry({attributes:A.attributes,indices:A.indices,primitiveType:s.PrimitiveType.LINES,boundingSphere:A.boundingSphere,offsetAttribute:e._offsetAttribute})},e.EllipseOutlineGeometry=h}));
//# sourceMappingURL=EllipseOutlineGeometry-5eab1103.js.map
