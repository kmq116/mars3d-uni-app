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
define(["exports","./Matrix2-5bde29de","./defaultValue-ac2201bb","./RuntimeError-d45af186","./Transforms-b0c5770c","./ComponentDatatype-164c57e1"],(function(t,n,a,e,o,r){"use strict";const s=Math.cos,i=Math.sin,c=Math.sqrt,h={computePosition:function(t,n,e,o,r,h,u){const g=n.radiiSquared,l=t.nwCorner,C=t.boundingRectangle;let d=l.latitude-t.granYCos*o+r*t.granXSin;const M=s(d),S=i(d),w=g.z*S;let m=l.longitude+o*t.granYSin+r*t.granXCos;const p=M*s(m),R=M*i(m),X=g.x*p,Y=g.y*R,O=c(X*p+Y*R+w*S);if(h.x=X/O,h.y=Y/O,h.z=w/O,e){const n=t.stNwCorner;a.defined(n)?(d=n.latitude-t.stGranYCos*o+r*t.stGranXSin,m=n.longitude+o*t.stGranYSin+r*t.stGranXCos,u.x=(m-t.stWest)*t.lonScalar,u.y=(d-t.stSouth)*t.latScalar):(u.x=(m-C.west)*t.lonScalar,u.y=(d-C.south)*t.latScalar)}}},u=new n.Matrix2;let g=new n.Cartesian3;const l=new n.Cartographic;let C=new n.Cartesian3;const d=new o.GeographicProjection;function M(t,a,e,o,r,s,i){const c=Math.cos(a),h=o*c,l=e*c,M=Math.sin(a),S=o*M,w=e*M;g=d.project(t,g),g=n.Cartesian3.subtract(g,C,g);const m=n.Matrix2.fromRotation(a,u);g=n.Matrix2.multiplyByVector(m,g,g),g=n.Cartesian3.add(g,C,g),s-=1,i-=1;const p=(t=d.unproject(g,t)).latitude,R=p+s*w,X=p-h*i,Y=p-h*i+s*w,O=Math.max(p,R,X,Y),f=Math.min(p,R,X,Y),_=t.longitude,x=_+s*l,G=_+i*S,P=_+i*S+s*l;return{north:O,south:f,east:Math.max(_,x,G,P),west:Math.min(_,x,G,P),granYCos:h,granYSin:S,granXCos:l,granXSin:w,nwCorner:t}}h.computeOptions=function(t,a,o,s,i,c,h){let u,g=t.east,S=t.west,w=t.north,m=t.south,p=!1,R=!1;w===r.CesiumMath.PI_OVER_TWO&&(p=!0),m===-r.CesiumMath.PI_OVER_TWO&&(R=!0);const X=w-m;u=S>g?r.CesiumMath.TWO_PI-S+g:g-S;const Y=Math.ceil(u/a)+1,O=Math.ceil(X/a)+1,f=u/(Y-1),_=X/(O-1),x=n.Rectangle.northwest(t,c),G=n.Rectangle.center(t,l);0===o&&0===s||(G.longitude<x.longitude&&(G.longitude+=r.CesiumMath.TWO_PI),C=d.project(G,C));const P=_,W=f,y=n.Rectangle.clone(t,i),I={granYCos:P,granYSin:0,granXCos:W,granXSin:0,nwCorner:x,boundingRectangle:y,width:Y,height:O,northCap:p,southCap:R};if(0!==o){const t=M(x,o,f,_,0,Y,O);if(w=t.north,m=t.south,g=t.east,S=t.west,w<-r.CesiumMath.PI_OVER_TWO||w>r.CesiumMath.PI_OVER_TWO||m<-r.CesiumMath.PI_OVER_TWO||m>r.CesiumMath.PI_OVER_TWO)throw new e.DeveloperError("Rotated rectangle is invalid.  It crosses over either the north or south pole.");I.granYCos=t.granYCos,I.granYSin=t.granYSin,I.granXCos=t.granXCos,I.granXSin=t.granXSin,y.north=w,y.south=m,y.east=g,y.west=S}if(0!==s){o-=s;const t=n.Rectangle.northwest(y,h),a=M(t,o,f,_,0,Y,O);I.stGranYCos=a.granYCos,I.stGranXCos=a.granXCos,I.stGranYSin=a.granYSin,I.stGranXSin=a.granXSin,I.stNwCorner=t,I.stWest=a.west,I.stSouth=a.south}return I},t.RectangleGeometryLibrary=h}));
//# sourceMappingURL=RectangleGeometryLibrary-b8fe5fc6.js.map
