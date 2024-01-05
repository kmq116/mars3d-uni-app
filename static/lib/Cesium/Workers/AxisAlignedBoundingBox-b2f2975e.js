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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./Transforms-3f580a0c"],(function(e,n,i,t,a){"use strict";function m(e,i,a){this.minimum=n.Cartesian3.clone(t.defaultValue(e,n.Cartesian3.ZERO)),this.maximum=n.Cartesian3.clone(t.defaultValue(i,n.Cartesian3.ZERO)),a=t.defined(a)?n.Cartesian3.clone(a):n.Cartesian3.midpoint(this.minimum,this.maximum,new n.Cartesian3),this.center=a}m.fromCorners=function(e,a,r){return i.Check.defined("minimum",e),i.Check.defined("maximum",a),t.defined(r)||(r=new m),r.minimum=n.Cartesian3.clone(e,r.minimum),r.maximum=n.Cartesian3.clone(a,r.maximum),r.center=n.Cartesian3.midpoint(e,a,r.center),r},m.fromPoints=function(e,i){if(t.defined(i)||(i=new m),!t.defined(e)||0===e.length)return i.minimum=n.Cartesian3.clone(n.Cartesian3.ZERO,i.minimum),i.maximum=n.Cartesian3.clone(n.Cartesian3.ZERO,i.maximum),i.center=n.Cartesian3.clone(n.Cartesian3.ZERO,i.center),i;let a=e[0].x,r=e[0].y,u=e[0].z,s=e[0].x,c=e[0].y,o=e[0].z;const l=e.length;for(let n=1;n<l;n++){const i=e[n],t=i.x,m=i.y,l=i.z;a=Math.min(t,a),s=Math.max(t,s),r=Math.min(m,r),c=Math.max(m,c),u=Math.min(l,u),o=Math.max(l,o)}const d=i.minimum;d.x=a,d.y=r,d.z=u;const f=i.maximum;return f.x=s,f.y=c,f.z=o,i.center=n.Cartesian3.midpoint(d,f,i.center),i},m.clone=function(e,i){if(t.defined(e))return t.defined(i)?(i.minimum=n.Cartesian3.clone(e.minimum,i.minimum),i.maximum=n.Cartesian3.clone(e.maximum,i.maximum),i.center=n.Cartesian3.clone(e.center,i.center),i):new m(e.minimum,e.maximum,e.center)},m.equals=function(e,i){return e===i||t.defined(e)&&t.defined(i)&&n.Cartesian3.equals(e.center,i.center)&&n.Cartesian3.equals(e.minimum,i.minimum)&&n.Cartesian3.equals(e.maximum,i.maximum)};let r=new n.Cartesian3;m.intersectPlane=function(e,t){i.Check.defined("box",e),i.Check.defined("plane",t),r=n.Cartesian3.subtract(e.maximum,e.minimum,r);const m=n.Cartesian3.multiplyByScalar(r,.5,r),u=t.normal,s=m.x*Math.abs(u.x)+m.y*Math.abs(u.y)+m.z*Math.abs(u.z),c=n.Cartesian3.dot(e.center,u)+t.distance;return c-s>0?a.Intersect.INSIDE:c+s<0?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},m.prototype.clone=function(e){return m.clone(this,e)},m.prototype.intersectPlane=function(e){return m.intersectPlane(this,e)},m.prototype.equals=function(e){return m.equals(this,e)},e.AxisAlignedBoundingBox=m}));
//# sourceMappingURL=AxisAlignedBoundingBox-b2f2975e.js.map
