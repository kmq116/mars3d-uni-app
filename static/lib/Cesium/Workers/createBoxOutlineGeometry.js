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
define(["./Transforms-3f580a0c","./Matrix2-5bde29de","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./defaultValue-ac2201bb","./GeometryAttribute-f83e6129","./GeometryAttributes-d060f8b5","./GeometryOffsetAttribute-a17b96d9","./_commonjsHelpers-3aae1032-ac53d93e","./combine-0dce9b0f","./WebGLConstants-e12cdc8a"],(function(e,t,n,a,i,r,o,s,u,f,m){"use strict";const c=new t.Cartesian3;function d(e){const a=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).minimum,r=e.maximum;if(n.Check.typeOf.object("min",a),n.Check.typeOf.object("max",r),i.defined(e.offsetAttribute)&&e.offsetAttribute===s.GeometryOffsetAttribute.TOP)throw new n.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._min=t.Cartesian3.clone(a),this._max=t.Cartesian3.clone(r),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}d.fromDimensions=function(e){const a=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).dimensions;n.Check.typeOf.object("dimensions",a),n.Check.typeOf.number.greaterThanOrEquals("dimensions.x",a.x,0),n.Check.typeOf.number.greaterThanOrEquals("dimensions.y",a.y,0),n.Check.typeOf.number.greaterThanOrEquals("dimensions.z",a.z,0);const r=t.Cartesian3.multiplyByScalar(a,.5,new t.Cartesian3);return new d({minimum:t.Cartesian3.negate(r,new t.Cartesian3),maximum:r,offsetAttribute:e.offsetAttribute})},d.fromAxisAlignedBoundingBox=function(e){return n.Check.typeOf.object("boundindBox",e),new d({minimum:e.minimum,maximum:e.maximum})},d.packedLength=2*t.Cartesian3.packedLength+1,d.pack=function(e,a,r){return n.Check.typeOf.object("value",e),n.Check.defined("array",a),r=i.defaultValue(r,0),t.Cartesian3.pack(e._min,a,r),t.Cartesian3.pack(e._max,a,r+t.Cartesian3.packedLength),a[r+2*t.Cartesian3.packedLength]=i.defaultValue(e._offsetAttribute,-1),a};const p=new t.Cartesian3,y=new t.Cartesian3,b={minimum:p,maximum:y,offsetAttribute:void 0};return d.unpack=function(e,a,r){n.Check.defined("array",e),a=i.defaultValue(a,0);const o=t.Cartesian3.unpack(e,a,p),s=t.Cartesian3.unpack(e,a+t.Cartesian3.packedLength,y),u=e[a+2*t.Cartesian3.packedLength];return i.defined(r)?(r._min=t.Cartesian3.clone(o,r._min),r._max=t.Cartesian3.clone(s,r._max),r._offsetAttribute=-1===u?void 0:u,r):(b.offsetAttribute=-1===u?void 0:u,new d(b))},d.createGeometry=function(n){const u=n._min,f=n._max;if(t.Cartesian3.equals(u,f))return;const m=new o.GeometryAttributes,d=new Uint16Array(24),p=new Float64Array(24);p[0]=u.x,p[1]=u.y,p[2]=u.z,p[3]=f.x,p[4]=u.y,p[5]=u.z,p[6]=f.x,p[7]=f.y,p[8]=u.z,p[9]=u.x,p[10]=f.y,p[11]=u.z,p[12]=u.x,p[13]=u.y,p[14]=f.z,p[15]=f.x,p[16]=u.y,p[17]=f.z,p[18]=f.x,p[19]=f.y,p[20]=f.z,p[21]=u.x,p[22]=f.y,p[23]=f.z,m.position=new r.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p}),d[0]=4,d[1]=5,d[2]=5,d[3]=6,d[4]=6,d[5]=7,d[6]=7,d[7]=4,d[8]=0,d[9]=1,d[10]=1,d[11]=2,d[12]=2,d[13]=3,d[14]=3,d[15]=0,d[16]=0,d[17]=4,d[18]=1,d[19]=5,d[20]=2,d[21]=6,d[22]=3,d[23]=7;const y=t.Cartesian3.subtract(f,u,c),b=.5*t.Cartesian3.magnitude(y);if(i.defined(n._offsetAttribute)){const e=p.length,t=n._offsetAttribute===s.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(t);m.applyOffset=new r.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return new r.Geometry({attributes:m,indices:d,primitiveType:r.PrimitiveType.LINES,boundingSphere:new e.BoundingSphere(t.Cartesian3.ZERO,b),offsetAttribute:n._offsetAttribute})},function(e,t){return i.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}}));
//# sourceMappingURL=createBoxOutlineGeometry.js.map
