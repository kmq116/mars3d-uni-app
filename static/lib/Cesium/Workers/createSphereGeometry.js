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
define(["./defaultValue-ac2201bb","./Matrix2-5bde29de","./RuntimeError-d45af186","./EllipsoidGeometry-e035aadf","./VertexFormat-4a6cdfad","./ComponentDatatype-164c57e1","./WebGLConstants-e12cdc8a","./Transforms-3f580a0c","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-4e1ec1a1"],(function(e,t,i,r,a,o,n,s,c,d,l,m,u,p){"use strict";function f(i){const a=e.defaultValue(i.radius,1),o={radii:new t.Cartesian3(a,a,a),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,vertexFormat:i.vertexFormat};this._ellipsoidGeometry=new r.EllipsoidGeometry(o),this._workerName="createSphereGeometry"}f.packedLength=r.EllipsoidGeometry.packedLength,f.pack=function(e,t,a){return i.Check.typeOf.object("value",e),r.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,a)};const y=new r.EllipsoidGeometry,G={radius:void 0,radii:new t.Cartesian3,vertexFormat:new a.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return f.unpack=function(i,o,n){const s=r.EllipsoidGeometry.unpack(i,o,y);return G.vertexFormat=a.VertexFormat.clone(s._vertexFormat,G.vertexFormat),G.stackPartitions=s._stackPartitions,G.slicePartitions=s._slicePartitions,e.defined(n)?(t.Cartesian3.clone(s._radii,G.radii),n._ellipsoidGeometry=new r.EllipsoidGeometry(G),n):(G.radius=s._radii.x,new f(G))},f.createGeometry=function(e){return r.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i){return e.defined(i)&&(t=f.unpack(t,i)),f.createGeometry(t)}}));
//# sourceMappingURL=createSphereGeometry.js.map
