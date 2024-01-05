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
define(["exports","./Transforms-3f580a0c","./Matrix2-5bde29de","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./defaultValue-ac2201bb","./EllipseGeometryLibrary-1ac95103","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryInstance-2bd4ec32","./GeometryOffsetAttribute-a17b96d9","./GeometryPipeline-690feb65","./IndexDatatype-4e1ec1a1","./VertexFormat-4a6cdfad"],(function(t,e,r,i,n,o,a,s,l,u,m,c,p,y){"use strict";const d=new r.Cartesian3,f=new r.Cartesian3,h=new r.Cartesian3,A=new r.Cartesian3,x=new r.Cartesian2,g=new r.Matrix3,b=new r.Matrix3,_=new e.Quaternion,C=new r.Cartesian3,w=new r.Cartesian3,M=new r.Cartesian3,E=new r.Cartographic,I=new r.Cartesian3,T=new r.Cartesian2,G=new r.Cartesian2;function v(t,i,u){const c=i.vertexFormat,p=i.center,y=i.semiMajorAxis,A=i.semiMinorAxis,v=i.ellipsoid,N=i.stRotation,P=u?t.length/3*2:t.length/3,V=i.shadowVolume,D=c.st?new Float32Array(2*P):void 0,F=c.normal?new Float32Array(3*P):void 0,O=c.tangent?new Float32Array(3*P):void 0,S=c.bitangent?new Float32Array(3*P):void 0,L=V?new Float32Array(3*P):void 0;let R=0,j=C,k=w,z=M;const B=new e.GeographicProjection(v),Y=B.project(v.cartesianToCartographic(p,E),I),H=v.scaleToGeodeticSurface(p,d);v.geodeticSurfaceNormal(H,H);let U=g,Q=b;if(0!==N){let t=e.Quaternion.fromAxisAngle(H,N,_);U=r.Matrix3.fromQuaternion(t,U),t=e.Quaternion.fromAxisAngle(H,-N,_),Q=r.Matrix3.fromQuaternion(t,Q)}else U=r.Matrix3.clone(r.Matrix3.IDENTITY,U),Q=r.Matrix3.clone(r.Matrix3.IDENTITY,Q);const W=r.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,T),q=r.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,G);let J=t.length;const Z=u?J:0,K=Z/3*2;for(let e=0;e<J;e+=3){const i=e+1,n=e+2,o=r.Cartesian3.fromArray(t,e,d);if(c.st){const t=r.Matrix3.multiplyByVector(U,o,f),e=B.project(v.cartesianToCartographic(t,E),h);r.Cartesian3.subtract(e,Y,e),x.x=(e.x+y)/(2*y),x.y=(e.y+A)/(2*A),W.x=Math.min(x.x,W.x),W.y=Math.min(x.y,W.y),q.x=Math.max(x.x,q.x),q.y=Math.max(x.y,q.y),u&&(D[R+K]=x.x,D[R+1+K]=x.y),D[R++]=x.x,D[R++]=x.y}(c.normal||c.tangent||c.bitangent||V)&&(j=v.geodeticSurfaceNormal(o,j),V&&(L[e+Z]=-j.x,L[i+Z]=-j.y,L[n+Z]=-j.z),(c.normal||c.tangent||c.bitangent)&&((c.tangent||c.bitangent)&&(k=r.Cartesian3.normalize(r.Cartesian3.cross(r.Cartesian3.UNIT_Z,j,k),k),r.Matrix3.multiplyByVector(Q,k,k)),c.normal&&(F[e]=j.x,F[i]=j.y,F[n]=j.z,u&&(F[e+Z]=-j.x,F[i+Z]=-j.y,F[n+Z]=-j.z)),c.tangent&&(O[e]=k.x,O[i]=k.y,O[n]=k.z,u&&(O[e+Z]=-k.x,O[i+Z]=-k.y,O[n+Z]=-k.z)),c.bitangent&&(z=r.Cartesian3.normalize(r.Cartesian3.cross(j,k,z),z),S[e]=z.x,S[i]=z.y,S[n]=z.z,u&&(S[e+Z]=z.x,S[i+Z]=z.y,S[n+Z]=z.z))))}if(c.st){J=D.length;for(let t=0;t<J;t+=2)D[t]=(D[t]-W.x)/(q.x-W.x),D[t+1]=(D[t+1]-W.y)/(q.y-W.y)}const X=new l.GeometryAttributes;if(c.position){const e=a.EllipseGeometryLibrary.raisePositionsToHeight(t,i,u);X.position=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e})}if(c.st&&(X.st=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),c.normal&&(X.normal=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})),c.tangent&&(X.tangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),c.bitangent&&(X.bitangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),V&&(X.extrudeDirection=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L})),u&&o.defined(i.offsetAttribute)){let t=new Uint8Array(P);if(i.offsetAttribute===m.GeometryOffsetAttribute.TOP)t=t.fill(1,0,P/2);else{const e=i.offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1;t=t.fill(e)}X.applyOffset=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return X}function N(t){const e=new Array(t*(t+1)*12-6);let r,i,n,o,a,s=0;for(r=0,n=1,o=0;o<3;o++)e[s++]=n++,e[s++]=r,e[s++]=n;for(o=2;o<t+1;++o){for(n=o*(o+1)-1,r=(o-1)*o-1,e[s++]=n++,e[s++]=r,e[s++]=n,i=2*o,a=0;a<i-1;++a)e[s++]=n,e[s++]=r++,e[s++]=r,e[s++]=n++,e[s++]=r,e[s++]=n;e[s++]=n++,e[s++]=r,e[s++]=n}for(i=2*t,++n,++r,o=0;o<i-1;++o)e[s++]=n,e[s++]=r++,e[s++]=r,e[s++]=n++,e[s++]=r,e[s++]=n;for(e[s++]=n,e[s++]=r++,e[s++]=r,e[s++]=n++,e[s++]=r++,e[s++]=r,++r,o=t-1;o>1;--o){for(e[s++]=r++,e[s++]=r,e[s++]=n,i=2*o,a=0;a<i-1;++a)e[s++]=n,e[s++]=r++,e[s++]=r,e[s++]=n++,e[s++]=r,e[s++]=n;e[s++]=r++,e[s++]=r++,e[s++]=n++}for(o=0;o<3;o++)e[s++]=r++,e[s++]=r,e[s++]=n;return e}let P=new r.Cartesian3;const V=new e.BoundingSphere,D=new e.BoundingSphere;function F(t){const i=t.center,y=t.ellipsoid,b=t.semiMajorAxis;let P=r.Cartesian3.multiplyByScalar(y.geodeticSurfaceNormal(i,d),t.height,d);V.center=r.Cartesian3.add(i,P,V.center),V.radius=b,P=r.Cartesian3.multiplyByScalar(y.geodeticSurfaceNormal(i,P),t.extrudedHeight,P),D.center=r.Cartesian3.add(i,P,D.center),D.radius=b;const F=a.EllipseGeometryLibrary.computeEllipsePositions(t,!0,!0),O=F.positions,S=F.numPts,L=F.outerPositions,R=e.BoundingSphere.union(V,D),j=v(O,t,!0);let k=N(S);const z=k.length;k.length=2*z;const B=O.length/3;for(let t=0;t<z;t+=3)k[t+z]=k[t+2]+B,k[t+1+z]=k[t+1]+B,k[t+2+z]=k[t]+B;const Y=p.IndexDatatype.createTypedArray(2*B/3,k),H=new s.Geometry({attributes:j,indices:Y,primitiveType:s.PrimitiveType.TRIANGLES}),U=function(t,i){const a=i.vertexFormat,u=i.center,c=i.semiMajorAxis,p=i.semiMinorAxis,y=i.ellipsoid,b=i.height,v=i.extrudedHeight,N=i.stRotation,P=t.length/3*2,V=new Float64Array(3*P),D=a.st?new Float32Array(2*P):void 0,F=a.normal?new Float32Array(3*P):void 0,O=a.tangent?new Float32Array(3*P):void 0,S=a.bitangent?new Float32Array(3*P):void 0,L=i.shadowVolume,R=L?new Float32Array(3*P):void 0;let j=0,k=C,z=w,B=M;const Y=new e.GeographicProjection(y),H=Y.project(y.cartesianToCartographic(u,E),I),U=y.scaleToGeodeticSurface(u,d);y.geodeticSurfaceNormal(U,U);const Q=e.Quaternion.fromAxisAngle(U,N,_),W=r.Matrix3.fromQuaternion(Q,g),q=r.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,T),J=r.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,G);let Z=t.length;const K=Z/3*2;for(let e=0;e<Z;e+=3){const i=e+1,n=e+2;let o,s=r.Cartesian3.fromArray(t,e,d);if(a.st){const t=r.Matrix3.multiplyByVector(W,s,f),e=Y.project(y.cartesianToCartographic(t,E),h);r.Cartesian3.subtract(e,H,e),x.x=(e.x+c)/(2*c),x.y=(e.y+p)/(2*p),q.x=Math.min(x.x,q.x),q.y=Math.min(x.y,q.y),J.x=Math.max(x.x,J.x),J.y=Math.max(x.y,J.y),D[j+K]=x.x,D[j+1+K]=x.y,D[j++]=x.x,D[j++]=x.y}s=y.scaleToGeodeticSurface(s,s),o=r.Cartesian3.clone(s,f),k=y.geodeticSurfaceNormal(s,k),L&&(R[e+Z]=-k.x,R[i+Z]=-k.y,R[n+Z]=-k.z);let l=r.Cartesian3.multiplyByScalar(k,b,A);if(s=r.Cartesian3.add(s,l,s),l=r.Cartesian3.multiplyByScalar(k,v,l),o=r.Cartesian3.add(o,l,o),a.position&&(V[e+Z]=o.x,V[i+Z]=o.y,V[n+Z]=o.z,V[e]=s.x,V[i]=s.y,V[n]=s.z),a.normal||a.tangent||a.bitangent){B=r.Cartesian3.clone(k,B);const l=r.Cartesian3.fromArray(t,(e+3)%Z,A);r.Cartesian3.subtract(l,s,l);const u=r.Cartesian3.subtract(o,s,h);k=r.Cartesian3.normalize(r.Cartesian3.cross(u,l,k),k),a.normal&&(F[e]=k.x,F[i]=k.y,F[n]=k.z,F[e+Z]=k.x,F[i+Z]=k.y,F[n+Z]=k.z),a.tangent&&(z=r.Cartesian3.normalize(r.Cartesian3.cross(B,k,z),z),O[e]=z.x,O[i]=z.y,O[n]=z.z,O[e+Z]=z.x,O[e+1+Z]=z.y,O[e+2+Z]=z.z),a.bitangent&&(S[e]=B.x,S[i]=B.y,S[n]=B.z,S[e+Z]=B.x,S[i+Z]=B.y,S[n+Z]=B.z)}}if(a.st){Z=D.length;for(let t=0;t<Z;t+=2)D[t]=(D[t]-q.x)/(J.x-q.x),D[t+1]=(D[t+1]-q.y)/(J.y-q.y)}const X=new l.GeometryAttributes;if(a.position&&(X.position=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:V})),a.st&&(X.st=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),a.normal&&(X.normal=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})),a.tangent&&(X.tangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),a.bitangent&&(X.bitangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),L&&(X.extrudeDirection=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),o.defined(i.offsetAttribute)){let t=new Uint8Array(P);if(i.offsetAttribute===m.GeometryOffsetAttribute.TOP)t=t.fill(1,0,P/2);else{const e=i.offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1;t=t.fill(e)}X.applyOffset=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return X}(L,t);k=function(t){const e=t.length/3,r=p.IndexDatatype.createTypedArray(e,6*e);let i=0;for(let t=0;t<e;t++){const n=t,o=t+e,a=(n+1)%e,s=a+e;r[i++]=n,r[i++]=o,r[i++]=a,r[i++]=a,r[i++]=o,r[i++]=s}return r}(L);const Q=p.IndexDatatype.createTypedArray(2*L.length/3,k),W=new s.Geometry({attributes:U,indices:Q,primitiveType:s.PrimitiveType.TRIANGLES}),q=c.GeometryPipeline.combineInstances([new u.GeometryInstance({geometry:H}),new u.GeometryInstance({geometry:W})]);return{boundingSphere:R,attributes:q[0].attributes,indices:q[0].indices}}function O(t,e,i,o,s,l,u){const m=a.EllipseGeometryLibrary.computeEllipsePositions({center:t,semiMajorAxis:e,semiMinorAxis:i,rotation:o,granularity:s},!1,!0).outerPositions,c=m.length/3,p=new Array(c);for(let t=0;t<c;++t)p[t]=r.Cartesian3.fromArray(m,3*t);const y=r.Rectangle.fromCartesianArray(p,l,u);return y.width>n.CesiumMath.PI&&(y.north=y.north>0?n.CesiumMath.PI_OVER_TWO-n.CesiumMath.EPSILON7:y.north,y.south=y.south<0?n.CesiumMath.EPSILON7-n.CesiumMath.PI_OVER_TWO:y.south,y.east=n.CesiumMath.PI,y.west=-n.CesiumMath.PI),y}function S(t){const e=(t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT)).center,a=o.defaultValue(t.ellipsoid,r.Ellipsoid.WGS84),s=t.semiMajorAxis,l=t.semiMinorAxis,u=o.defaultValue(t.granularity,n.CesiumMath.RADIANS_PER_DEGREE),m=o.defaultValue(t.vertexFormat,y.VertexFormat.DEFAULT);if(i.Check.defined("options.center",e),i.Check.typeOf.number("options.semiMajorAxis",s),i.Check.typeOf.number("options.semiMinorAxis",l),s<l)throw new i.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(u<=0)throw new i.DeveloperError("granularity must be greater than zero.");const c=o.defaultValue(t.height,0),p=o.defaultValue(t.extrudedHeight,c);this._center=r.Cartesian3.clone(e),this._semiMajorAxis=s,this._semiMinorAxis=l,this._ellipsoid=r.Ellipsoid.clone(a),this._rotation=o.defaultValue(t.rotation,0),this._stRotation=o.defaultValue(t.stRotation,0),this._height=Math.max(p,c),this._granularity=u,this._vertexFormat=y.VertexFormat.clone(m),this._extrudedHeight=Math.min(p,c),this._shadowVolume=o.defaultValue(t.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}S.packedLength=r.Cartesian3.packedLength+r.Ellipsoid.packedLength+y.VertexFormat.packedLength+9,S.pack=function(t,e,n){return i.Check.defined("value",t),i.Check.defined("array",e),n=o.defaultValue(n,0),r.Cartesian3.pack(t._center,e,n),n+=r.Cartesian3.packedLength,r.Ellipsoid.pack(t._ellipsoid,e,n),n+=r.Ellipsoid.packedLength,y.VertexFormat.pack(t._vertexFormat,e,n),n+=y.VertexFormat.packedLength,e[n++]=t._semiMajorAxis,e[n++]=t._semiMinorAxis,e[n++]=t._rotation,e[n++]=t._stRotation,e[n++]=t._height,e[n++]=t._granularity,e[n++]=t._extrudedHeight,e[n++]=t._shadowVolume?1:0,e[n]=o.defaultValue(t._offsetAttribute,-1),e};const L=new r.Cartesian3,R=new r.Ellipsoid,j=new y.VertexFormat,k={center:L,ellipsoid:R,vertexFormat:j,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};S.unpack=function(t,e,n){i.Check.defined("array",t),e=o.defaultValue(e,0);const a=r.Cartesian3.unpack(t,e,L);e+=r.Cartesian3.packedLength;const s=r.Ellipsoid.unpack(t,e,R);e+=r.Ellipsoid.packedLength;const l=y.VertexFormat.unpack(t,e,j);e+=y.VertexFormat.packedLength;const u=t[e++],m=t[e++],c=t[e++],p=t[e++],d=t[e++],f=t[e++],h=t[e++],A=1===t[e++],x=t[e];return o.defined(n)?(n._center=r.Cartesian3.clone(a,n._center),n._ellipsoid=r.Ellipsoid.clone(s,n._ellipsoid),n._vertexFormat=y.VertexFormat.clone(l,n._vertexFormat),n._semiMajorAxis=u,n._semiMinorAxis=m,n._rotation=c,n._stRotation=p,n._height=d,n._granularity=f,n._extrudedHeight=h,n._shadowVolume=A,n._offsetAttribute=-1===x?void 0:x,n):(k.height=d,k.extrudedHeight=h,k.granularity=f,k.stRotation=p,k.rotation=c,k.semiMajorAxis=u,k.semiMinorAxis=m,k.shadowVolume=A,k.offsetAttribute=-1===x?void 0:x,new S(k))},S.computeRectangle=function(t,e){const a=(t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT)).center,s=o.defaultValue(t.ellipsoid,r.Ellipsoid.WGS84),l=t.semiMajorAxis,u=t.semiMinorAxis,m=o.defaultValue(t.granularity,n.CesiumMath.RADIANS_PER_DEGREE),c=o.defaultValue(t.rotation,0);if(i.Check.defined("options.center",a),i.Check.typeOf.number("options.semiMajorAxis",l),i.Check.typeOf.number("options.semiMinorAxis",u),l<u)throw new i.DeveloperError("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(m<=0)throw new i.DeveloperError("granularity must be greater than zero.");return O(a,l,u,c,m,s,e)},S.createGeometry=function(t){if(t._semiMajorAxis<=0||t._semiMinorAxis<=0)return;const i=t._height,l=t._extrudedHeight,u=!n.CesiumMath.equalsEpsilon(i,l,0,n.CesiumMath.EPSILON2);t._center=t._ellipsoid.scaleToGeodeticSurface(t._center,t._center);const c={center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:t._ellipsoid,rotation:t._rotation,height:i,granularity:t._granularity,vertexFormat:t._vertexFormat,stRotation:t._stRotation};let y;if(u)c.extrudedHeight=l,c.shadowVolume=t._shadowVolume,c.offsetAttribute=t._offsetAttribute,y=F(c);else if(y=function(t){const i=t.center;P=r.Cartesian3.multiplyByScalar(t.ellipsoid.geodeticSurfaceNormal(i,P),t.height,P),P=r.Cartesian3.add(i,P,P);const n=new e.BoundingSphere(P,t.semiMajorAxis),o=a.EllipseGeometryLibrary.computeEllipsePositions(t,!0,!1),s=o.positions,l=o.numPts,u=v(s,t,!1);let m=N(l);return m=p.IndexDatatype.createTypedArray(s.length/3,m),{boundingSphere:n,attributes:u,indices:m}}(c),o.defined(t._offsetAttribute)){const e=y.attributes.position.values.length,r=t._offsetAttribute===m.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(r);y.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return new s.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:y.boundingSphere,offsetAttribute:t._offsetAttribute})},S.createShadowVolume=function(t,e,r){const i=t._granularity,n=t._ellipsoid,o=e(i,n),a=r(i,n);return new S({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:n,rotation:t._rotation,stRotation:t._stRotation,granularity:i,extrudedHeight:o,height:a,vertexFormat:y.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(S.prototype,{rectangle:{get:function(){return o.defined(this._rectangle)||(this._rectangle=O(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return o.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){const e=-t._stRotation;if(0===e)return[0,0,0,1,1,0];const i=a.EllipseGeometryLibrary.computeEllipsePositions({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,rotation:t._rotation,granularity:t._granularity},!1,!0).outerPositions,n=i.length/3,o=new Array(n);for(let t=0;t<n;++t)o[t]=r.Cartesian3.fromArray(i,3*t);const l=t._ellipsoid,u=t.rectangle;return s.Geometry._textureCoordinateRotationPoints(o,e,l,u)}(this)),this._textureCoordinateRotationPoints}}}),t.EllipseGeometry=S}));
//# sourceMappingURL=EllipseGeometry-6d1a02cf.js.map
