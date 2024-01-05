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
define(["./defaultValue-ac2201bb","./Transforms-3f580a0c","./Matrix2-5bde29de","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./VertexFormat-4a6cdfad","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a"],(function(e,t,n,r,a,o,i,c,m,u,p){"use strict";function s(t){t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT);const n=e.defaultValue(t.vertexFormat,c.VertexFormat.DEFAULT);this._vertexFormat=n,this._workerName="createPlaneGeometry"}s.packedLength=c.VertexFormat.packedLength,s.pack=function(t,n,a){return r.Check.typeOf.object("value",t),r.Check.defined("array",n),a=e.defaultValue(a,0),c.VertexFormat.pack(t._vertexFormat,n,a),n};const y=new c.VertexFormat,f={vertexFormat:y};s.unpack=function(t,n,a){r.Check.defined("array",t),n=e.defaultValue(n,0);const o=c.VertexFormat.unpack(t,n,y);return e.defined(a)?(a._vertexFormat=c.VertexFormat.clone(o,a._vertexFormat),a):new s(f)};const d=new n.Cartesian3(-.5,-.5,0),l=new n.Cartesian3(.5,.5,0);return s.createGeometry=function(e){const r=e._vertexFormat,c=new i.GeometryAttributes;let m,u;if(r.position){if(u=new Float64Array(12),u[0]=d.x,u[1]=d.y,u[2]=0,u[3]=l.x,u[4]=d.y,u[5]=0,u[6]=l.x,u[7]=l.y,u[8]=0,u[9]=d.x,u[10]=l.y,u[11]=0,c.position=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),r.normal){const e=new Float32Array(12);e[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=1,e[9]=0,e[10]=0,e[11]=1,c.normal=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}if(r.st){const e=new Float32Array(8);e[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=1,e[5]=1,e[6]=0,e[7]=1,c.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:e})}if(r.tangent){const e=new Float32Array(12);e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=1,e[7]=0,e[8]=0,e[9]=1,e[10]=0,e[11]=0,c.tangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}if(r.bitangent){const e=new Float32Array(12);e[0]=0,e[1]=1,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=1,e[8]=0,e[9]=0,e[10]=1,e[11]=0,c.bitangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})}m=new Uint16Array(6),m[0]=0,m[1]=1,m[2]=2,m[3]=0,m[4]=2,m[5]=3}return new o.Geometry({attributes:c,indices:m,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=s.unpack(t,n)),s.createGeometry(t)}}));
//# sourceMappingURL=createPlaneGeometry.js.map
