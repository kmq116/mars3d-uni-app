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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./Transforms-3f580a0c"],(function(t,e,n,i,h){"use strict";function r(t,e,n,h){this.x=i.defaultValue(t,0),this.y=i.defaultValue(e,0),this.width=i.defaultValue(n,0),this.height=i.defaultValue(h,0)}r.packedLength=4,r.pack=function(t,e,h){return n.Check.typeOf.object("value",t),n.Check.defined("array",e),h=i.defaultValue(h,0),e[h++]=t.x,e[h++]=t.y,e[h++]=t.width,e[h]=t.height,e},r.unpack=function(t,e,h){return n.Check.defined("array",t),e=i.defaultValue(e,0),i.defined(h)||(h=new r),h.x=t[e++],h.y=t[e++],h.width=t[e++],h.height=t[e],h},r.fromPoints=function(t,e){if(i.defined(e)||(e=new r),!i.defined(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;const n=t.length;let h=t[0].x,c=t[0].y,a=t[0].x,d=t[0].y;for(let e=1;e<n;e++){const n=t[e],i=n.x,r=n.y;h=Math.min(i,h),a=Math.max(i,a),c=Math.min(r,c),d=Math.max(r,d)}return e.x=h,e.y=c,e.width=a-h,e.height=d-c,e};const c=new h.GeographicProjection,a=new e.Cartographic,d=new e.Cartographic;r.fromRectangle=function(t,n,h){if(i.defined(h)||(h=new r),!i.defined(t))return h.x=0,h.y=0,h.width=0,h.height=0,h;const o=(n=i.defaultValue(n,c)).project(e.Rectangle.southwest(t,a)),u=n.project(e.Rectangle.northeast(t,d));return e.Cartesian2.subtract(u,o,u),h.x=o.x,h.y=o.y,h.width=u.x,h.height=u.y,h},r.clone=function(t,e){if(i.defined(t))return i.defined(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new r(t.x,t.y,t.width,t.height)},r.union=function(t,e,h){n.Check.typeOf.object("left",t),n.Check.typeOf.object("right",e),i.defined(h)||(h=new r);const c=Math.min(t.x,e.x),a=Math.min(t.y,e.y),d=Math.max(t.x+t.width,e.x+e.width),o=Math.max(t.y+t.height,e.y+e.height);return h.x=c,h.y=a,h.width=d-c,h.height=o-a,h},r.expand=function(t,e,i){n.Check.typeOf.object("rectangle",t),n.Check.typeOf.object("point",e),i=r.clone(t,i);const h=e.x-i.x,c=e.y-i.y;return h>i.width?i.width=h:h<0&&(i.width-=h,i.x=e.x),c>i.height?i.height=c:c<0&&(i.height-=c,i.y=e.y),i},r.intersect=function(t,e){n.Check.typeOf.object("left",t),n.Check.typeOf.object("right",e);const i=t.x,r=t.y,c=e.x,a=e.y;return i>c+e.width||i+t.width<c||r+t.height<a||r>a+e.height?h.Intersect.OUTSIDE:h.Intersect.INTERSECTING},r.equals=function(t,e){return t===e||i.defined(t)&&i.defined(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},r.prototype.clone=function(t){return r.clone(this,t)},r.prototype.intersect=function(t){return r.intersect(this,t)},r.prototype.equals=function(t){return r.equals(this,t)},t.BoundingRectangle=r}));
//# sourceMappingURL=BoundingRectangle-fd9a5062.js.map
