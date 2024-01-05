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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb"],(function(e,n,t,i){"use strict";function o(){this.high=n.Cartesian3.clone(n.Cartesian3.ZERO),this.low=n.Cartesian3.clone(n.Cartesian3.ZERO)}o.encode=function(e,n){let o;return t.Check.typeOf.number("value",e),i.defined(n)||(n={high:0,low:0}),e>=0?(o=65536*Math.floor(e/65536),n.high=o,n.low=e-o):(o=65536*Math.floor(-e/65536),n.high=-o,n.low=e+o),n};const r={high:0,low:0};o.fromCartesian=function(e,n){t.Check.typeOf.object("cartesian",e),i.defined(n)||(n=new o);const a=n.high,h=n.low;return o.encode(e.x,r),a.x=r.high,h.x=r.low,o.encode(e.y,r),a.y=r.high,h.y=r.low,o.encode(e.z,r),a.z=r.high,h.z=r.low,n};const a=new o;o.writeElements=function(e,n,i){t.Check.defined("cartesianArray",n),t.Check.typeOf.number("index",i),t.Check.typeOf.number.greaterThanOrEquals("index",i,0),o.fromCartesian(e,a);const r=a.high,h=a.low;n[i]=r.x,n[i+1]=r.y,n[i+2]=r.z,n[i+3]=h.x,n[i+4]=h.y,n[i+5]=h.z},e.EncodedCartesian3=o}));
//# sourceMappingURL=EncodedCartesian3-83872b10.js.map
