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
define(["exports","./RuntimeError-d45af186","./defaultValue-ac2201bb","./ComponentDatatype-164c57e1"],(function(e,n,t,i){"use strict";const d=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,i,f,u){if(n.Check.defined("equalsEpsilon",i),!t.defined(e))return;f=t.defaultValue(f,!1);const s=t.defined(u),l=e.length;if(l<2)return e;let r,a,c,o=e[0],p=0,h=-1;for(r=1;r<l;++r)a=e[r],i(o,a,d)?(t.defined(c)||(c=e.slice(0,r),p=r-1,h=0),s&&u.push(r)):(t.defined(c)&&(c.push(a),p=r,s&&(h=u.length)),o=a);return f&&i(e[0],e[l-1],d)&&(s&&(t.defined(c)?u.splice(h,0,p):u.push(l-1)),t.defined(c)?c.length-=1:c=e.slice(0,-1)),t.defined(c)?c:e}}));
//# sourceMappingURL=arrayRemoveDuplicates-68f14b2f.js.map
