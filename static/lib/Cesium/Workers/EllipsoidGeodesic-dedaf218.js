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
define(["exports","./Matrix2-5bde29de","./RuntimeError-d45af186","./defaultValue-ac2201bb","./ComponentDatatype-164c57e1"],(function(t,a,e,i,n){"use strict";function s(t,a,e,i,n,s,h){const o=function(t,a){return t*a*(4+t*(4-3*a))/16}(t,e);return(1-o)*t*a*(i+o*n*(h+o*s*(2*h*h-1)))}const h=new a.Cartesian3,o=new a.Cartesian3;function r(t,i,r,d){const c=a.Cartesian3.normalize(d.cartographicToCartesian(i,o),h),u=a.Cartesian3.normalize(d.cartographicToCartesian(r,o),o);e.Check.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(a.Cartesian3.angleBetween(c,u))-Math.PI),.0125),function(t,a,e,i,h,o,r){const d=(a-e)/a,c=o-i,u=Math.atan((1-d)*Math.tan(h)),l=Math.atan((1-d)*Math.tan(r)),M=Math.cos(u),g=Math.sin(u),_=Math.cos(l),p=Math.sin(l),f=M*_,m=M*p,C=g*p,H=g*_;let v,O,b,q,S,U=c,k=n.CesiumMath.TWO_PI,w=Math.cos(U),A=Math.sin(U);do{w=Math.cos(U),A=Math.sin(U);const t=m-H*w;let a;b=Math.sqrt(_*_*A*A+t*t),O=C+f*w,v=Math.atan2(b,O),0===b?(a=0,q=1):(a=f*A/b,q=1-a*a),k=U,S=O-2*C/q,isFinite(S)||(S=0),U=c+s(d,a,q,v,b,O,S)}while(Math.abs(U-k)>n.CesiumMath.EPSILON12);const R=q*(a*a-e*e)/(e*e),y=R*(256+R*(R*(74-47*R)-128))/1024,E=S*S,P=e*(1+R*(4096+R*(R*(320-175*R)-768))/16384)*(v-y*b*(S+y*(O*(2*E-1)-y*S*(4*b*b-3)*(4*E-3)/6)/4)),x=Math.atan2(_*A,m-H*w),D=Math.atan2(M*A,m*w-H);t._distance=P,t._startHeading=x,t._endHeading=D,t._uSquared=R}(t,d.maximumRadius,d.minimumRadius,i.longitude,i.latitude,r.longitude,r.latitude),t._start=a.Cartographic.clone(i,t._start),t._end=a.Cartographic.clone(r,t._end),t._start.height=0,t._end.height=0,function(t){const a=t._uSquared,e=t._ellipsoid.maximumRadius,i=t._ellipsoid.minimumRadius,n=(e-i)/e,s=Math.cos(t._startHeading),h=Math.sin(t._startHeading),o=(1-n)*Math.tan(t._start.latitude),r=1/Math.sqrt(1+o*o),d=r*o,c=Math.atan2(o,s),u=r*h,l=u*u,M=1-l,g=Math.sqrt(M),_=a/4,p=_*_,f=p*_,m=p*p,C=1+_-3*p/4+5*f/4-175*m/64,H=1-_+15*p/8-35*f/8,v=1-3*_+35*p/4,O=1-5*_,b=C*c-H*Math.sin(2*c)*_/2-v*Math.sin(4*c)*p/16-O*Math.sin(6*c)*f/48-5*Math.sin(8*c)*m/512,q=t._constants;q.a=e,q.b=i,q.f=n,q.cosineHeading=s,q.sineHeading=h,q.tanU=o,q.cosineU=r,q.sineU=d,q.sigma=c,q.sineAlpha=u,q.sineSquaredAlpha=l,q.cosineSquaredAlpha=M,q.cosineAlpha=g,q.u2Over4=_,q.u4Over16=p,q.u6Over64=f,q.u8Over256=m,q.a0=C,q.a1=H,q.a2=v,q.a3=O,q.distanceRatio=b}(t)}function d(t,e,n){const s=i.defaultValue(n,a.Ellipsoid.WGS84);this._ellipsoid=s,this._start=new a.Cartographic,this._end=new a.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,i.defined(t)&&i.defined(e)&&r(this,t,e,s)}Object.defineProperties(d.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return e.Check.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return e.Check.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return e.Check.defined("distance",this._distance),this._endHeading}}}),d.prototype.setEndPoints=function(t,a){e.Check.defined("start",t),e.Check.defined("end",a),r(this,t,a,this._ellipsoid)},d.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},d.prototype.interpolateUsingSurfaceDistance=function(t,n){e.Check.defined("distance",this._distance);const h=this._constants,o=h.distanceRatio+t/h.b,r=Math.cos(2*o),d=Math.cos(4*o),c=Math.cos(6*o),u=Math.sin(2*o),l=Math.sin(4*o),M=Math.sin(6*o),g=Math.sin(8*o),_=o*o,p=o*_,f=h.u8Over256,m=h.u2Over4,C=h.u6Over64,H=h.u4Over16;let v=2*p*f*r/3+o*(1-m+7*H/4-15*C/4+579*f/64-(H-15*C/4+187*f/16)*r-(5*C/4-115*f/16)*d-29*f*c/16)+(m/2-H+71*C/32-85*f/16)*u+(5*H/16-5*C/4+383*f/96)*l-_*((C-11*f/2)*u+5*f*l/2)+(29*C/96-29*f/16)*M+539*f*g/1536;const O=Math.asin(Math.sin(v)*h.cosineAlpha),b=Math.atan(h.a/h.b*Math.tan(O));v-=h.sigma;const q=Math.cos(2*h.sigma+v),S=Math.sin(v),U=Math.cos(v),k=h.cosineU*U,w=h.sineU*S,A=Math.atan2(S*h.sineHeading,k-w*h.cosineHeading)-s(h.f,h.sineAlpha,h.cosineSquaredAlpha,v,S,U,q);return i.defined(n)?(n.longitude=this._start.longitude+A,n.latitude=b,n.height=0,n):new a.Cartographic(this._start.longitude+A,b,0)},t.EllipsoidGeodesic=d}));
//# sourceMappingURL=EllipsoidGeodesic-dedaf218.js.map
