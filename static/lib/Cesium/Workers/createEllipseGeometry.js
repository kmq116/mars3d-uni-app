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
define(["./Matrix2-5bde29de","./defaultValue-ac2201bb","./EllipseGeometry-6d1a02cf","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./WebGLConstants-e12cdc8a","./Transforms-3f580a0c","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./EllipseGeometryLibrary-1ac95103","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryInstance-2bd4ec32","./GeometryOffsetAttribute-a17b96d9","./GeometryPipeline-690feb65","./AttributeCompression-1cfcbb75","./EncodedCartesian3-83872b10","./IndexDatatype-4e1ec1a1","./IntersectionTests-0d91a773","./Plane-3ad20be7","./VertexFormat-4a6cdfad"],(function(e,t,r,a,n,o,i,c,s,d,l,b,m,f,p,u,y,G,E,C,_){"use strict";return function(a,n){return t.defined(n)&&(a=r.EllipseGeometry.unpack(a,n)),a._center=e.Cartesian3.clone(a._center),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),r.EllipseGeometry.createGeometry(a)}}));
//# sourceMappingURL=createEllipseGeometry.js.map
