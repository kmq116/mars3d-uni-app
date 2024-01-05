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
define(["exports","./Transforms-3f580a0c","./Matrix2-5bde29de","./ComponentDatatype-164c57e1","./CylinderGeometryLibrary-2dc0a717","./defaultValue-ac2201bb","./RuntimeError-d45af186","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-4e1ec1a1","./VertexFormat-4a6cdfad"],(function(t,e,r,o,n,a,i,s,u,d,f,m){"use strict";const l=new r.Cartesian2,p=new r.Cartesian3,c=new r.Cartesian3,y=new r.Cartesian3,b=new r.Cartesian3;function A(t){const e=(t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT)).length,r=t.topRadius,o=t.bottomRadius,n=a.defaultValue(t.vertexFormat,m.VertexFormat.DEFAULT),s=a.defaultValue(t.slices,128);if(!a.defined(e))throw new i.DeveloperError("options.length must be defined.");if(!a.defined(r))throw new i.DeveloperError("options.topRadius must be defined.");if(!a.defined(o))throw new i.DeveloperError("options.bottomRadius must be defined.");if(s<3)throw new i.DeveloperError("options.slices must be greater than or equal to 3.");if(a.defined(t.offsetAttribute)&&t.offsetAttribute===d.GeometryOffsetAttribute.TOP)throw new i.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=e,this._topRadius=r,this._bottomRadius=o,this._vertexFormat=m.VertexFormat.clone(n),this._slices=s,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}A.packedLength=m.VertexFormat.packedLength+5,A.pack=function(t,e,r){if(!a.defined(t))throw new i.DeveloperError("value is required");if(!a.defined(e))throw new i.DeveloperError("array is required");return r=a.defaultValue(r,0),m.VertexFormat.pack(t._vertexFormat,e,r),r+=m.VertexFormat.packedLength,e[r++]=t._length,e[r++]=t._topRadius,e[r++]=t._bottomRadius,e[r++]=t._slices,e[r]=a.defaultValue(t._offsetAttribute,-1),e};const h=new m.VertexFormat,w={vertexFormat:h,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};let g;A.unpack=function(t,e,r){if(!a.defined(t))throw new i.DeveloperError("array is required");e=a.defaultValue(e,0);const o=m.VertexFormat.unpack(t,e,h);e+=m.VertexFormat.packedLength;const n=t[e++],s=t[e++],u=t[e++],d=t[e++],f=t[e];return a.defined(r)?(r._vertexFormat=m.VertexFormat.clone(o,r._vertexFormat),r._length=n,r._topRadius=s,r._bottomRadius=u,r._slices=d,r._offsetAttribute=-1===f?void 0:f,r):(w.length=n,w.topRadius=s,w.bottomRadius=u,w.slices=d,w.offsetAttribute=-1===f?void 0:f,new A(w))},A.createGeometry=function(t){let i=t._length;const m=t._topRadius,A=t._bottomRadius,h=t._vertexFormat,w=t._slices;if(i<=0||m<0||A<0||0===m&&0===A)return;const g=w+w,v=w+g,x=g+g,_=n.CylinderGeometryLibrary.computePositions(i,m,A,w,!0),F=h.st?new Float32Array(2*x):void 0,C=h.normal?new Float32Array(3*x):void 0,D=h.tangent?new Float32Array(3*x):void 0,G=h.bitangent?new Float32Array(3*x):void 0;let R;const O=h.normal||h.tangent||h.bitangent;if(O){const t=h.tangent||h.bitangent;let e=0,n=0,a=0;const s=Math.atan2(A-m,i),u=p;u.z=Math.sin(s);const d=Math.cos(s);let f=y,l=c;for(R=0;R<w;R++){const i=R/w*o.CesiumMath.TWO_PI,s=d*Math.cos(i),m=d*Math.sin(i);O&&(u.x=s,u.y=m,t&&(f=r.Cartesian3.normalize(r.Cartesian3.cross(r.Cartesian3.UNIT_Z,u,f),f)),h.normal&&(C[e++]=u.x,C[e++]=u.y,C[e++]=u.z,C[e++]=u.x,C[e++]=u.y,C[e++]=u.z),h.tangent&&(D[n++]=f.x,D[n++]=f.y,D[n++]=f.z,D[n++]=f.x,D[n++]=f.y,D[n++]=f.z),h.bitangent&&(l=r.Cartesian3.normalize(r.Cartesian3.cross(u,f,l),l),G[a++]=l.x,G[a++]=l.y,G[a++]=l.z,G[a++]=l.x,G[a++]=l.y,G[a++]=l.z))}for(R=0;R<w;R++)h.normal&&(C[e++]=0,C[e++]=0,C[e++]=-1),h.tangent&&(D[n++]=1,D[n++]=0,D[n++]=0),h.bitangent&&(G[a++]=0,G[a++]=-1,G[a++]=0);for(R=0;R<w;R++)h.normal&&(C[e++]=0,C[e++]=0,C[e++]=1),h.tangent&&(D[n++]=1,D[n++]=0,D[n++]=0),h.bitangent&&(G[a++]=0,G[a++]=1,G[a++]=0)}const V=12*w-12,E=f.IndexDatatype.createTypedArray(x,V);let T=0,L=0;for(R=0;R<w-1;R++)E[T++]=L,E[T++]=L+2,E[T++]=L+3,E[T++]=L,E[T++]=L+3,E[T++]=L+1,L+=2;for(E[T++]=g-2,E[T++]=0,E[T++]=1,E[T++]=g-2,E[T++]=1,E[T++]=g-1,R=1;R<w-1;R++)E[T++]=g+R+1,E[T++]=g+R,E[T++]=g;for(R=1;R<w-1;R++)E[T++]=v,E[T++]=v+R,E[T++]=v+R+1;let P=0;if(h.st){const t=Math.max(m,A);for(R=0;R<x;R++){const e=r.Cartesian3.fromArray(_,3*R,b);F[P++]=(e.x+t)/(2*t),F[P++]=(e.y+t)/(2*t)}}const M=new u.GeometryAttributes;h.position&&(M.position=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:_})),h.normal&&(M.normal=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),h.tangent&&(M.tangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),h.bitangent&&(M.bitangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),h.st&&(M.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:F})),l.x=.5*i,l.y=Math.max(A,m);const k=new e.BoundingSphere(r.Cartesian3.ZERO,r.Cartesian2.magnitude(l));if(a.defined(t._offsetAttribute)){i=_.length;const e=t._offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,r=new Uint8Array(i/3).fill(e);M.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}return new s.Geometry({attributes:M,indices:E,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:k,offsetAttribute:t._offsetAttribute})},A.getUnitCylinder=function(){return a.defined(g)||(g=A.createGeometry(new A({topRadius:1,bottomRadius:1,length:1,vertexFormat:m.VertexFormat.POSITION_ONLY}))),g},t.CylinderGeometry=A}));
//# sourceMappingURL=CylinderGeometry-f8a559e0.js.map
