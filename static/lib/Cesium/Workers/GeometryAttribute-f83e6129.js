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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./WebGLConstants-e12cdc8a","./Transforms-3f580a0c"],(function(t,e,r,n,i,a){"use strict";var o=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});const s={POINTS:i.WebGLConstants.POINTS,LINES:i.WebGLConstants.LINES,LINE_LOOP:i.WebGLConstants.LINE_LOOP,LINE_STRIP:i.WebGLConstants.LINE_STRIP,TRIANGLES:i.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:i.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:i.WebGLConstants.TRIANGLE_FAN,isLines:function(t){return t===s.LINES||t===s.LINE_LOOP||t===s.LINE_STRIP},isTriangles:function(t){return t===s.TRIANGLES||t===s.TRIANGLE_STRIP||t===s.TRIANGLE_FAN},validate:function(t){return t===s.POINTS||t===s.LINES||t===s.LINE_LOOP||t===s.LINE_STRIP||t===s.TRIANGLES||t===s.TRIANGLE_STRIP||t===s.TRIANGLE_FAN}};var u=Object.freeze(s);function c(t){t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT),r.Check.typeOf.object("options.attributes",t.attributes),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=n.defaultValue(t.primitiveType,u.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=n.defaultValue(t.geometryType,o.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}c.computeNumberOfVertices=function(t){r.Check.typeOf.object("geometry",t);let e=-1;for(const i in t.attributes)if(t.attributes.hasOwnProperty(i)&&n.defined(t.attributes[i])&&n.defined(t.attributes[i].values)){const n=t.attributes[i],a=n.values.length/n.componentsPerAttribute;if(e!==a&&-1!==e)throw new r.DeveloperError("All attribute lists must have the same number of attributes.");e=a}return e};const I=new e.Cartographic,p=new e.Cartesian3,l=new e.Matrix4,N=[new e.Cartographic,new e.Cartographic,new e.Cartographic],b=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],f=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],m=new e.Cartesian3,T=new a.Quaternion,E=new e.Matrix4,d=new e.Matrix2;c._textureCoordinateRotationPoints=function(t,r,n,i){let o;const s=e.Rectangle.center(i,I),u=e.Cartographic.toCartesian(s,n,p),c=a.Transforms.eastNorthUpToFixedFrame(u,n,l),L=e.Matrix4.inverse(c,l),h=b,y=N;y[0].longitude=i.west,y[0].latitude=i.south,y[1].longitude=i.west,y[1].latitude=i.north,y[2].longitude=i.east,y[2].latitude=i.south;let A=m;for(o=0;o<3;o++)e.Cartographic.toCartesian(y[o],n,A),A=e.Matrix4.multiplyByPointAsVector(L,A,A),h[o].x=A.x,h[o].y=A.y;const C=a.Quaternion.fromAxisAngle(e.Cartesian3.UNIT_Z,-r,T),P=e.Matrix3.fromQuaternion(C,E),w=t.length;let x=Number.POSITIVE_INFINITY,S=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY,R=Number.NEGATIVE_INFINITY;for(o=0;o<w;o++)A=e.Matrix4.multiplyByPointAsVector(L,t[o],A),A=e.Matrix3.multiplyByVector(P,A,A),x=Math.min(x,A.x),S=Math.min(S,A.y),G=Math.max(G,A.x),R=Math.max(R,A.y);const O=e.Matrix2.fromRotation(r,d),_=f;_[0].x=x,_[0].y=S,_[1].x=x,_[1].y=R,_[2].x=G,_[2].y=S;const g=h[0],v=h[2].x-g.x,V=h[1].y-g.y;for(o=0;o<3;o++){const t=_[o];e.Matrix2.multiplyByVector(O,t,t),t.x=(t.x-g.x)/v,t.y=(t.y-g.y)/V}const M=_[0],F=_[1],D=_[2],W=new Array(6);return e.Cartesian2.pack(M,W),e.Cartesian2.pack(F,W,2),e.Cartesian2.pack(D,W,4),W},t.Geometry=c,t.GeometryAttribute=function(t){if(t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT),!n.defined(t.componentDatatype))throw new r.DeveloperError("options.componentDatatype is required.");if(!n.defined(t.componentsPerAttribute))throw new r.DeveloperError("options.componentsPerAttribute is required.");if(t.componentsPerAttribute<1||t.componentsPerAttribute>4)throw new r.DeveloperError("options.componentsPerAttribute must be between 1 and 4.");if(!n.defined(t.values))throw new r.DeveloperError("options.values is required.");this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=n.defaultValue(t.normalize,!1),this.values=t.values},t.GeometryType=o,t.PrimitiveType=u}));
//# sourceMappingURL=GeometryAttribute-f83e6129.js.map
