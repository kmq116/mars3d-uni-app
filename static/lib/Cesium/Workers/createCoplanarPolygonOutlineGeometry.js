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
define(["./arrayRemoveDuplicates-68f14b2f","./Transforms-3f580a0c","./Matrix2-5bde29de","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./CoplanarPolygonGeometryLibrary-666122cf","./defaultValue-ac2201bb","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryInstance-2bd4ec32","./GeometryPipeline-690feb65","./IndexDatatype-4e1ec1a1","./PolygonGeometryLibrary-348a165a","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a","./OrientedBoundingBox-cf39482d","./EllipsoidTangentPlane-fa2bc0dc","./AxisAlignedBoundingBox-b2f2975e","./IntersectionTests-0d91a773","./Plane-3ad20be7","./AttributeCompression-1cfcbb75","./EncodedCartesian3-83872b10","./ArcType-5c683766","./EllipsoidRhumbLine-bfb4fa95","./PolygonPipeline-71d5516a"],(function(e,t,n,o,r,i,a,c,s,y,l,p,u,d,f,m,b,g,h,P,G,C,k,L,H,T){"use strict";function E(e){const t=e.length,n=new Float64Array(3*t),o=p.IndexDatatype.createTypedArray(t,2*t);let i=0,a=0;for(let r=0;r<t;r++){const c=e[r];n[i++]=c.x,n[i++]=c.y,n[i++]=c.z,o[a++]=r,o[a++]=(r+1)%t}const y=new s.GeometryAttributes({position:new c.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new c.Geometry({attributes:y,indices:o,primitiveType:c.PrimitiveType.LINES})}function A(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;o.Check.defined("options.polygonHierarchy",t),this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(t,n.Cartesian3)+1}A.fromPositions=function(e){e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT),o.Check.defined("options.positions",e.positions);return new A({polygonHierarchy:{positions:e.positions}})},A.pack=function(e,t,r){return o.Check.typeOf.object("value",e),o.Check.defined("array",t),r=a.defaultValue(r,0),t[r=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r,n.Cartesian3)]=e.packedLength,t};const _={polygonHierarchy:{}};return A.unpack=function(e,t,r){o.Check.defined("array",e),t=a.defaultValue(t,0);const i=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,n.Cartesian3);t=i.startingIndex,delete i.startingIndex;const c=e[t];return a.defined(r)||(r=new A(_)),r._polygonHierarchy=i,r.packedLength=c,r},A.createGeometry=function(o){const r=o._polygonHierarchy;let a=r.positions;if(a=e.arrayRemoveDuplicates(a,n.Cartesian3.equalsEpsilon,!0),a.length<3)return;if(!i.CoplanarPolygonGeometryLibrary.validOutline(a))return;const s=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0===s.length)return;const p=[];for(let e=0;e<s.length;e++){const t=new y.GeometryInstance({geometry:E(s[e])});p.push(t)}const d=l.GeometryPipeline.combineInstances(p)[0],f=t.BoundingSphere.fromPoints(r.positions);return new c.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:f})},function(e,t){return a.defined(t)&&(e=A.unpack(e,t)),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),A.createGeometry(e)}}));
//# sourceMappingURL=createCoplanarPolygonOutlineGeometry.js.map
