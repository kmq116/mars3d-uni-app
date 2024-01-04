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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./Transforms-b0c5770c"],(function(t,e,n,i,h){"use strict";function c(t,e,n,h){this.x=i.defaultValue(t,0),this.y=i.defaultValue(e,0),this.width=i.defaultValue(n,0),this.height=i.defaultValue(h,0)}c.packedLength=4,c.pack=function(t,e,h){return n.Check.typeOf.object("value",t),n.Check.defined("array",e),h=i.defaultValue(h,0),e[h++]=t.x,e[h++]=t.y,e[h++]=t.width,e[h]=t.height,e},c.unpack=function(t,e,h){return n.Check.defined("array",t),e=i.defaultValue(e,0),i.defined(h)||(h=new c),h.x=t[e++],h.y=t[e++],h.width=t[e++],h.height=t[e],h},c.fromPoints=function(t,e){if(i.defined(e)||(e=new c),!i.defined(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;const n=t.length;let h=t[0].x,r=t[0].y,d=t[0].x,a=t[0].y;for(let e=1;e<n;e++){const n=t[e],i=n.x,c=n.y;h=Math.min(i,h),d=Math.max(i,d),r=Math.min(c,r),a=Math.max(c,a)}return e.x=h,e.y=r,e.width=d-h,e.height=a-r,e};const r=new h.GeographicProjection,d=new e.Cartographic,a=new e.Cartographic;c.fromRectangle=function(t,n,h){if(i.defined(h)||(h=new c),!i.defined(t))return h.x=0,h.y=0,h.width=0,h.height=0,h;const o=(n=i.defaultValue(n,r)).project(e.Rectangle.southwest(t,d)),u=n.project(e.Rectangle.northeast(t,a));return e.Cartesian2.subtract(u,o,u),h.x=o.x,h.y=o.y,h.width=u.x,h.height=u.y,h},c.clone=function(t,e){if(i.defined(t))return i.defined(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new c(t.x,t.y,t.width,t.height)},c.union=function(t,e,h){n.Check.typeOf.object("left",t),n.Check.typeOf.object("right",e),i.defined(h)||(h=new c);const r=Math.min(t.x,e.x),d=Math.min(t.y,e.y),a=Math.max(t.x+t.width,e.x+e.width),o=Math.max(t.y+t.height,e.y+e.height);return h.x=r,h.y=d,h.width=a-r,h.height=o-d,h},c.expand=function(t,e,i){n.Check.typeOf.object("rectangle",t),n.Check.typeOf.object("point",e),i=c.clone(t,i);const h=e.x-i.x,r=e.y-i.y;return h>i.width?i.width=h:h<0&&(i.width-=h,i.x=e.x),r>i.height?i.height=r:r<0&&(i.height-=r,i.y=e.y),i},c.intersect=function(t,e){n.Check.typeOf.object("left",t),n.Check.typeOf.object("right",e);const i=t.x,c=t.y,r=e.x,d=e.y;return i>r+e.width||i+t.width<r||c+t.height<d||c>d+e.height?h.Intersect.OUTSIDE:h.Intersect.INTERSECTING},c.equals=function(t,e){return t===e||i.defined(t)&&i.defined(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},c.prototype.clone=function(t){return c.clone(this,t)},c.prototype.intersect=function(t){return c.intersect(this,t)},c.prototype.equals=function(t){return c.equals(this,t)},t.BoundingRectangle=c}));
//# sourceMappingURL=BoundingRectangle-d58e4d6f.js.map
