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
define(["./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./EllipseGeometry-6d1a02cf","./VertexFormat-4a6cdfad","./ComponentDatatype-164c57e1","./WebGLConstants-e12cdc8a","./Transforms-3f580a0c","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./EllipseGeometryLibrary-1ac95103","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryInstance-2bd4ec32","./GeometryOffsetAttribute-a17b96d9","./GeometryPipeline-690feb65","./AttributeCompression-1cfcbb75","./EncodedCartesian3-83872b10","./IndexDatatype-4e1ec1a1","./IntersectionTests-0d91a773","./Plane-3ad20be7"],(function(e,t,i,r,o,n,s,a,l,d,m,c,u,p,y,_,G,h,x,f,g){"use strict";function b(e){const o=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius;t.Check.typeOf.number("radius",o);const n={center:e.center,semiMajorAxis:o,semiMinorAxis:o,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(n),this._workerName="createCircleGeometry"}b.packedLength=r.EllipseGeometry.packedLength,b.pack=function(e,i,o){return t.Check.typeOf.object("value",e),r.EllipseGeometry.pack(e._ellipseGeometry,i,o)};const E=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),v={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new o.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return b.unpack=function(t,n,s){const a=r.EllipseGeometry.unpack(t,n,E);return v.center=e.Cartesian3.clone(a._center,v.center),v.ellipsoid=e.Ellipsoid.clone(a._ellipsoid,v.ellipsoid),v.height=a._height,v.extrudedHeight=a._extrudedHeight,v.granularity=a._granularity,v.vertexFormat=o.VertexFormat.clone(a._vertexFormat,v.vertexFormat),v.stRotation=a._stRotation,v.shadowVolume=a._shadowVolume,i.defined(s)?(v.semiMajorAxis=a._semiMajorAxis,v.semiMinorAxis=a._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(v),s):(v.radius=a._semiMajorAxis,new b(v))},b.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},b.createShadowVolume=function(e,t,i){const r=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,s=t(r,n),a=i(r,n);return new b({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:s,height:a,vertexFormat:o.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(b.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=b.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),b.createGeometry(t)}}));
//# sourceMappingURL=createCircleGeometry.js.map
