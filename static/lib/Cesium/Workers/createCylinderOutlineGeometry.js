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
define(["./Transforms-3f580a0c","./Matrix2-5bde29de","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./CylinderGeometryLibrary-2dc0a717","./defaultValue-ac2201bb","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./IndexDatatype-4e1ec1a1","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a"],(function(t,e,i,o,n,r,s,a,u,f,d,c,b){"use strict";const l=new e.Cartesian2;function m(t){const e=(t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT)).length,o=t.topRadius,n=t.bottomRadius,s=r.defaultValue(t.slices,128),a=Math.max(r.defaultValue(t.numberOfVerticalLines,16),0);if(i.Check.typeOf.number("options.positions",e),i.Check.typeOf.number("options.topRadius",o),i.Check.typeOf.number("options.bottomRadius",n),i.Check.typeOf.number.greaterThanOrEquals("options.slices",s,3),r.defined(t.offsetAttribute)&&t.offsetAttribute===u.GeometryOffsetAttribute.TOP)throw new i.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=e,this._topRadius=o,this._bottomRadius=n,this._slices=s,this._numberOfVerticalLines=a,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}m.packedLength=6,m.pack=function(t,e,o){return i.Check.typeOf.object("value",t),i.Check.defined("array",e),o=r.defaultValue(o,0),e[o++]=t._length,e[o++]=t._topRadius,e[o++]=t._bottomRadius,e[o++]=t._slices,e[o++]=t._numberOfVerticalLines,e[o]=r.defaultValue(t._offsetAttribute,-1),e};const p={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return m.unpack=function(t,e,o){i.Check.defined("array",t),e=r.defaultValue(e,0);const n=t[e++],s=t[e++],a=t[e++],u=t[e++],f=t[e++],d=t[e];return r.defined(o)?(o._length=n,o._topRadius=s,o._bottomRadius=a,o._slices=u,o._numberOfVerticalLines=f,o._offsetAttribute=-1===d?void 0:d,o):(p.length=n,p.topRadius=s,p.bottomRadius=a,p.slices=u,p.numberOfVerticalLines=f,p.offsetAttribute=-1===d?void 0:d,new m(p))},m.createGeometry=function(i){let d=i._length;const c=i._topRadius,b=i._bottomRadius,m=i._slices,p=i._numberOfVerticalLines;if(d<=0||c<0||b<0||0===c&&0===b)return;const y=2*m,h=n.CylinderGeometryLibrary.computePositions(d,c,b,m,!1);let _,A=2*m;if(p>0){const t=Math.min(p,m);_=Math.round(m/t),A+=t}const O=f.IndexDatatype.createTypedArray(y,2*A);let C,R=0;for(C=0;C<m-1;C++)O[R++]=C,O[R++]=C+1,O[R++]=C+m,O[R++]=C+1+m;if(O[R++]=m-1,O[R++]=0,O[R++]=m+m-1,O[R++]=m,p>0)for(C=0;C<m;C+=_)O[R++]=C,O[R++]=C+m;const G=new a.GeometryAttributes;G.position=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h}),l.x=.5*d,l.y=Math.max(b,c);const V=new t.BoundingSphere(e.Cartesian3.ZERO,e.Cartesian2.magnitude(l));if(r.defined(i._offsetAttribute)){d=h.length;const t=i._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,e=new Uint8Array(d/3).fill(t);G.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return new s.Geometry({attributes:G,indices:O,primitiveType:s.PrimitiveType.LINES,boundingSphere:V,offsetAttribute:i._offsetAttribute})},function(t,e){return r.defined(e)&&(t=m.unpack(t,e)),m.createGeometry(t)}}));
//# sourceMappingURL=createCylinderOutlineGeometry.js.map
