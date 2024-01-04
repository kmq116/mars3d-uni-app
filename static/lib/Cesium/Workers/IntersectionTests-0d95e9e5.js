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
define(["exports","./Matrix2-5bde29de","./defaultValue-ac2201bb","./RuntimeError-d45af186","./Transforms-b0c5770c","./ComponentDatatype-164c57e1"],(function(e,r,t,n,i,a){"use strict";const o={};function s(e,r,t){const n=e+r;return a.CesiumMath.sign(e)!==a.CesiumMath.sign(r)&&Math.abs(n/Math.max(Math.abs(e),Math.abs(r)))<t?0:n}o.computeDiscriminant=function(e,r,t){if("number"!=typeof e)throw new n.DeveloperError("a is a required number.");if("number"!=typeof r)throw new n.DeveloperError("b is a required number.");if("number"!=typeof t)throw new n.DeveloperError("c is a required number.");return r*r-4*e*t},o.computeRealRoots=function(e,r,t){if("number"!=typeof e)throw new n.DeveloperError("a is a required number.");if("number"!=typeof r)throw new n.DeveloperError("b is a required number.");if("number"!=typeof t)throw new n.DeveloperError("c is a required number.");let i;if(0===e)return 0===r?[]:[-t/r];if(0===r){if(0===t)return[0,0];const r=Math.abs(t),n=Math.abs(e);if(r<n&&r/n<a.CesiumMath.EPSILON14)return[0,0];if(r>n&&n/r<a.CesiumMath.EPSILON14)return[];if(i=-t/e,i<0)return[];const o=Math.sqrt(i);return[-o,o]}if(0===t)return i=-r/e,i<0?[i,0]:[0,i];const o=s(r*r,-(4*e*t),a.CesiumMath.EPSILON14);if(o<0)return[];const u=-.5*s(r,a.CesiumMath.sign(r)*Math.sqrt(o),a.CesiumMath.EPSILON14);return r>0?[u/e,t/u]:[t/u,u/e]};const u={};function c(e,r,t,n){const i=e,a=r/3,o=t/3,s=n,u=i*o,c=a*s,d=a*a,l=o*o,f=i*o-d,h=i*s-a*o,m=a*s-l,p=4*f*m-h*h;let C,w;if(p<0){let e,r,t;d*c>=u*l?(e=i,r=f,t=-2*a*f+i*h):(e=s,r=m,t=-s*h+2*o*m);const n=-(t<0?-1:1)*Math.abs(e)*Math.sqrt(-p);w=-t+n;const M=w/2,b=M<0?-Math.pow(-M,1/3):Math.pow(M,1/3),g=w===n?-b:-r/b;return C=r<=0?b+g:-t/(b*b+g*g+r),d*c>=u*l?[(C-a)/i]:[-s/(C+o)]}const M=f,b=-2*a*f+i*h,g=m,q=-s*h+2*o*m,E=Math.sqrt(p),y=Math.sqrt(3)/2;let v=Math.abs(Math.atan2(i*E,-b)/3);C=2*Math.sqrt(-M);let D=Math.cos(v);w=C*D;let R=C*(-D/2-y*Math.sin(v));const S=w+R>2*a?w-a:R-a,O=i,x=S/O;v=Math.abs(Math.atan2(s*E,-q)/3),C=2*Math.sqrt(-g),D=Math.cos(v),w=C*D,R=C*(-D/2-y*Math.sin(v));const P=-s,N=w+R<2*o?w+o:R+o,L=P/N,I=-S*N-O*P,z=(o*I-a*(S*P))/(-a*I+o*(O*N));return x<=z?x<=L?z<=L?[x,z,L]:[x,L,z]:[L,x,z]:x<=L?[z,x,L]:z<=L?[z,L,x]:[L,z,x]}u.computeDiscriminant=function(e,r,t,i){if("number"!=typeof e)throw new n.DeveloperError("a is a required number.");if("number"!=typeof r)throw new n.DeveloperError("b is a required number.");if("number"!=typeof t)throw new n.DeveloperError("c is a required number.");if("number"!=typeof i)throw new n.DeveloperError("d is a required number.");const a=r*r,o=t*t;return 18*e*r*t*i+a*o-27*(e*e)*(i*i)-4*(e*o*t+a*r*i)},u.computeRealRoots=function(e,r,t,i){if("number"!=typeof e)throw new n.DeveloperError("a is a required number.");if("number"!=typeof r)throw new n.DeveloperError("b is a required number.");if("number"!=typeof t)throw new n.DeveloperError("c is a required number.");if("number"!=typeof i)throw new n.DeveloperError("d is a required number.");let a,s;if(0===e)return o.computeRealRoots(r,t,i);if(0===r){if(0===t){if(0===i)return[0,0,0];s=-i/e;const r=s<0?-Math.pow(-s,1/3):Math.pow(s,1/3);return[r,r,r]}return 0===i?(a=o.computeRealRoots(e,0,t),0===a.Length?[0]:[a[0],0,a[1]]):c(e,0,t,i)}return 0===t?0===i?(s=-r/e,s<0?[s,0,0]:[0,0,s]):c(e,r,0,i):0===i?(a=o.computeRealRoots(e,r,t),0===a.length?[0]:a[1]<=0?[a[0],a[1],0]:a[0]>=0?[0,a[0],a[1]]:[a[0],0,a[1]]):c(e,r,t,i)};const d={};function l(e,r,t,n){const i=e*e,s=r-3*i/8,c=t-r*e/2+i*e/8,d=n-t*e/4+r*i/16-3*i*i/256,l=u.computeRealRoots(1,2*s,s*s-4*d,-c*c);if(l.length>0){const r=-e/4,t=l[l.length-1];if(Math.abs(t)<a.CesiumMath.EPSILON14){const e=o.computeRealRoots(1,s,d);if(2===e.length){const t=e[0],n=e[1];let i;if(t>=0&&n>=0){const e=Math.sqrt(t),i=Math.sqrt(n);return[r-i,r-e,r+e,r+i]}if(t>=0&&n<0)return i=Math.sqrt(t),[r-i,r+i];if(t<0&&n>=0)return i=Math.sqrt(n),[r-i,r+i]}return[]}if(t>0){const e=Math.sqrt(t),n=(s+t-c/e)/2,i=(s+t+c/e)/2,a=o.computeRealRoots(1,e,n),u=o.computeRealRoots(1,-e,i);return 0!==a.length?(a[0]+=r,a[1]+=r,0!==u.length?(u[0]+=r,u[1]+=r,a[1]<=u[0]?[a[0],a[1],u[0],u[1]]:u[1]<=a[0]?[u[0],u[1],a[0],a[1]]:a[0]>=u[0]&&a[1]<=u[1]?[u[0],a[0],a[1],u[1]]:u[0]>=a[0]&&u[1]<=a[1]?[a[0],u[0],u[1],a[1]]:a[0]>u[0]&&a[0]<u[1]?[u[0],a[0],u[1],a[1]]:[a[0],u[0],a[1],u[1]]):a):0!==u.length?(u[0]+=r,u[1]+=r,u):[]}}return[]}function f(e,r,t,n){const i=e*e,s=-2*r,c=t*e+r*r-4*n,d=i*n-t*r*e+t*t,l=u.computeRealRoots(1,s,c,d);if(l.length>0){const s=l[0],u=r-s,c=u*u,d=e/2,f=u/2,h=c-4*n,m=c+4*Math.abs(n),p=i-4*s,C=i+4*Math.abs(s);let w,M,b,g,q,E;if(s<0||h*C<p*m){const r=Math.sqrt(p);w=r/2,M=0===r?0:(e*f-t)/r}else{const r=Math.sqrt(h);w=0===r?0:(e*f-t)/r,M=r/2}0===d&&0===w?(b=0,g=0):a.CesiumMath.sign(d)===a.CesiumMath.sign(w)?(b=d+w,g=s/b):(g=d-w,b=s/g),0===f&&0===M?(q=0,E=0):a.CesiumMath.sign(f)===a.CesiumMath.sign(M)?(q=f+M,E=n/q):(E=f-M,q=n/E);const y=o.computeRealRoots(1,b,q),v=o.computeRealRoots(1,g,E);if(0!==y.length)return 0!==v.length?y[1]<=v[0]?[y[0],y[1],v[0],v[1]]:v[1]<=y[0]?[v[0],v[1],y[0],y[1]]:y[0]>=v[0]&&y[1]<=v[1]?[v[0],y[0],y[1],v[1]]:v[0]>=y[0]&&v[1]<=y[1]?[y[0],v[0],v[1],y[1]]:y[0]>v[0]&&y[0]<v[1]?[v[0],y[0],v[1],y[1]]:[y[0],v[0],y[1],v[1]]:y;if(0!==v.length)return v}return[]}function h(e,n){n=r.Cartesian3.clone(t.defaultValue(n,r.Cartesian3.ZERO)),r.Cartesian3.equals(n,r.Cartesian3.ZERO)||r.Cartesian3.normalize(n,n),this.origin=r.Cartesian3.clone(t.defaultValue(e,r.Cartesian3.ZERO)),this.direction=n}d.computeDiscriminant=function(e,r,t,i,a){if("number"!=typeof e)throw new n.DeveloperError("a is a required number.");if("number"!=typeof r)throw new n.DeveloperError("b is a required number.");if("number"!=typeof t)throw new n.DeveloperError("c is a required number.");if("number"!=typeof i)throw new n.DeveloperError("d is a required number.");if("number"!=typeof a)throw new n.DeveloperError("e is a required number.");const o=e*e,s=r*r,u=s*r,c=t*t,d=c*t,l=i*i,f=l*i,h=a*a;return s*c*l-4*u*f-4*e*d*l+18*e*r*t*f-27*o*l*l+256*(o*e)*(h*a)+a*(18*u*t*i-4*s*d+16*e*c*c-80*e*r*c*i-6*e*s*l+144*o*t*l)+h*(144*e*s*t-27*s*s-128*o*c-192*o*r*i)},d.computeRealRoots=function(e,r,t,i,o){if("number"!=typeof e)throw new n.DeveloperError("a is a required number.");if("number"!=typeof r)throw new n.DeveloperError("b is a required number.");if("number"!=typeof t)throw new n.DeveloperError("c is a required number.");if("number"!=typeof i)throw new n.DeveloperError("d is a required number.");if("number"!=typeof o)throw new n.DeveloperError("e is a required number.");if(Math.abs(e)<a.CesiumMath.EPSILON15)return u.computeRealRoots(r,t,i,o);const s=r/e,c=t/e,d=i/e,h=o/e;let m=s<0?1:0;switch(m+=c<0?m+1:m,m+=d<0?m+1:m,m+=h<0?m+1:m,m){case 0:case 3:case 4:case 6:case 7:case 9:case 10:case 12:case 13:case 14:case 15:return l(s,c,d,h);case 1:case 2:case 5:case 8:case 11:return f(s,c,d,h);default:return}},h.clone=function(e,n){if(t.defined(e))return t.defined(n)?(n.origin=r.Cartesian3.clone(e.origin),n.direction=r.Cartesian3.clone(e.direction),n):new h(e.origin,e.direction)},h.getPoint=function(e,i,a){return n.Check.typeOf.object("ray",e),n.Check.typeOf.number("t",i),t.defined(a)||(a=new r.Cartesian3),a=r.Cartesian3.multiplyByScalar(e.direction,i,a),r.Cartesian3.add(e.origin,a,a)};const m={rayPlane:function(e,i,o){if(!t.defined(e))throw new n.DeveloperError("ray is required.");if(!t.defined(i))throw new n.DeveloperError("plane is required.");t.defined(o)||(o=new r.Cartesian3);const s=e.origin,u=e.direction,c=i.normal,d=r.Cartesian3.dot(c,u);if(Math.abs(d)<a.CesiumMath.EPSILON15)return;const l=(-i.distance-r.Cartesian3.dot(c,s))/d;return l<0?void 0:(o=r.Cartesian3.multiplyByScalar(u,l,o),r.Cartesian3.add(s,o,o))}},p=new r.Cartesian3,C=new r.Cartesian3,w=new r.Cartesian3,M=new r.Cartesian3,b=new r.Cartesian3;m.rayTriangleParametric=function(e,i,o,s,u){if(!t.defined(e))throw new n.DeveloperError("ray is required.");if(!t.defined(i))throw new n.DeveloperError("p0 is required.");if(!t.defined(o))throw new n.DeveloperError("p1 is required.");if(!t.defined(s))throw new n.DeveloperError("p2 is required.");u=t.defaultValue(u,!1);const c=e.origin,d=e.direction,l=r.Cartesian3.subtract(o,i,p),f=r.Cartesian3.subtract(s,i,C),h=r.Cartesian3.cross(d,f,w),m=r.Cartesian3.dot(l,h);let g,q,E,y,v;if(u){if(m<a.CesiumMath.EPSILON6)return;if(g=r.Cartesian3.subtract(c,i,M),E=r.Cartesian3.dot(g,h),E<0||E>m)return;if(q=r.Cartesian3.cross(g,l,b),y=r.Cartesian3.dot(d,q),y<0||E+y>m)return;v=r.Cartesian3.dot(f,q)/m}else{if(Math.abs(m)<a.CesiumMath.EPSILON6)return;const e=1/m;if(g=r.Cartesian3.subtract(c,i,M),E=r.Cartesian3.dot(g,h)*e,E<0||E>1)return;if(q=r.Cartesian3.cross(g,l,b),y=r.Cartesian3.dot(d,q)*e,y<0||E+y>1)return;v=r.Cartesian3.dot(f,q)*e}return v},m.rayTriangle=function(e,n,i,a,o,s){const u=m.rayTriangleParametric(e,n,i,a,o);if(t.defined(u)&&!(u<0))return t.defined(s)||(s=new r.Cartesian3),r.Cartesian3.multiplyByScalar(e.direction,u,s),r.Cartesian3.add(e.origin,s,s)};const g=new h;m.lineSegmentTriangle=function(e,i,a,o,s,u,c){if(!t.defined(e))throw new n.DeveloperError("v0 is required.");if(!t.defined(i))throw new n.DeveloperError("v1 is required.");if(!t.defined(a))throw new n.DeveloperError("p0 is required.");if(!t.defined(o))throw new n.DeveloperError("p1 is required.");if(!t.defined(s))throw new n.DeveloperError("p2 is required.");const d=g;r.Cartesian3.clone(e,d.origin),r.Cartesian3.subtract(i,e,d.direction),r.Cartesian3.normalize(d.direction,d.direction);const l=m.rayTriangleParametric(d,a,o,s,u);if(!(!t.defined(l)||l<0||l>r.Cartesian3.distance(e,i)))return t.defined(c)||(c=new r.Cartesian3),r.Cartesian3.multiplyByScalar(d.direction,l,c),r.Cartesian3.add(d.origin,c,c)};const q={root0:0,root1:0};function E(e,n,a){t.defined(a)||(a=new i.Interval);const o=e.origin,s=e.direction,u=n.center,c=n.radius*n.radius,d=r.Cartesian3.subtract(o,u,w),l=function(e,r,t,n){const i=r*r-4*e*t;if(i<0)return;if(i>0){const t=1/(2*e),a=Math.sqrt(i),o=(-r+a)*t,s=(-r-a)*t;return o<s?(n.root0=o,n.root1=s):(n.root0=s,n.root1=o),n}const a=-r/(2*e);return 0!==a?(n.root0=n.root1=a,n):void 0}(r.Cartesian3.dot(s,s),2*r.Cartesian3.dot(s,d),r.Cartesian3.magnitudeSquared(d)-c,q);if(t.defined(l))return a.start=l.root0,a.stop=l.root1,a}m.raySphere=function(e,r,i){if(!t.defined(e))throw new n.DeveloperError("ray is required.");if(!t.defined(r))throw new n.DeveloperError("sphere is required.");if(i=E(e,r,i),t.defined(i)&&!(i.stop<0))return i.start=Math.max(i.start,0),i};const y=new h;m.lineSegmentSphere=function(e,i,a,o){if(!t.defined(e))throw new n.DeveloperError("p0 is required.");if(!t.defined(i))throw new n.DeveloperError("p1 is required.");if(!t.defined(a))throw new n.DeveloperError("sphere is required.");const s=y;r.Cartesian3.clone(e,s.origin);const u=r.Cartesian3.subtract(i,e,s.direction),c=r.Cartesian3.magnitude(u);if(r.Cartesian3.normalize(u,u),o=E(s,a,o),!(!t.defined(o)||o.stop<0||o.start>c))return o.start=Math.max(o.start,0),o.stop=Math.min(o.stop,c),o};const v=new r.Cartesian3,D=new r.Cartesian3;function R(e,r,t){const n=e+r;return a.CesiumMath.sign(e)!==a.CesiumMath.sign(r)&&Math.abs(n/Math.max(Math.abs(e),Math.abs(r)))<t?0:n}m.rayEllipsoid=function(e,a){if(!t.defined(e))throw new n.DeveloperError("ray is required.");if(!t.defined(a))throw new n.DeveloperError("ellipsoid is required.");const o=a.oneOverRadii,s=r.Cartesian3.multiplyComponents(o,e.origin,v),u=r.Cartesian3.multiplyComponents(o,e.direction,D),c=r.Cartesian3.magnitudeSquared(s),d=r.Cartesian3.dot(s,u);let l,f,h,m,p;if(c>1){if(d>=0)return;const e=d*d;if(l=c-1,f=r.Cartesian3.magnitudeSquared(u),h=f*l,e<h)return;if(e>h){m=d*d-h,p=-d+Math.sqrt(m);const e=p/f,r=l/p;return e<r?new i.Interval(e,r):{start:r,stop:e}}const t=Math.sqrt(l/f);return new i.Interval(t,t)}return c<1?(l=c-1,f=r.Cartesian3.magnitudeSquared(u),h=f*l,m=d*d-h,p=-d+Math.sqrt(m),new i.Interval(0,p/f)):d<0?(f=r.Cartesian3.magnitudeSquared(u),new i.Interval(0,-d/f)):void 0};const S=new r.Cartesian3,O=new r.Cartesian3,x=new r.Cartesian3,P=new r.Cartesian3,N=new r.Cartesian3,L=new r.Matrix3,I=new r.Matrix3,z=new r.Matrix3,T=new r.Matrix3,U=new r.Matrix3,W=new r.Matrix3,B=new r.Matrix3,V=new r.Cartesian3,Z=new r.Cartesian3,A=new r.Cartographic;m.grazingAltitudeLocation=function(e,i){if(!t.defined(e))throw new n.DeveloperError("ray is required.");if(!t.defined(i))throw new n.DeveloperError("ellipsoid is required.");const s=e.origin,u=e.direction;if(!r.Cartesian3.equals(s,r.Cartesian3.ZERO)){const e=i.geodeticSurfaceNormal(s,S);if(r.Cartesian3.dot(u,e)>=0)return s}const c=t.defined(this.rayEllipsoid(e,i)),l=i.transformPositionToScaledSpace(u,S),f=r.Cartesian3.normalize(l,l),h=r.Cartesian3.mostOrthogonalAxis(l,P),m=r.Cartesian3.normalize(r.Cartesian3.cross(h,f,O),O),p=r.Cartesian3.normalize(r.Cartesian3.cross(f,m,x),x),C=L;C[0]=f.x,C[1]=f.y,C[2]=f.z,C[3]=m.x,C[4]=m.y,C[5]=m.z,C[6]=p.x,C[7]=p.y,C[8]=p.z;const w=r.Matrix3.transpose(C,I),M=r.Matrix3.fromScale(i.radii,z),b=r.Matrix3.fromScale(i.oneOverRadii,T),g=U;g[0]=0,g[1]=-u.z,g[2]=u.y,g[3]=u.z,g[4]=0,g[5]=-u.x,g[6]=-u.y,g[7]=u.x,g[8]=0;const q=r.Matrix3.multiply(r.Matrix3.multiply(w,b,W),g,W),E=r.Matrix3.multiply(r.Matrix3.multiply(q,M,B),C,B),y=r.Matrix3.multiplyByVector(q,s,N),v=function(e,t,n,i,s){const u=i*i,c=s*s,l=(e[r.Matrix3.COLUMN1ROW1]-e[r.Matrix3.COLUMN2ROW2])*c,f=s*(i*R(e[r.Matrix3.COLUMN1ROW0],e[r.Matrix3.COLUMN0ROW1],a.CesiumMath.EPSILON15)+t.y),h=e[r.Matrix3.COLUMN0ROW0]*u+e[r.Matrix3.COLUMN2ROW2]*c+i*t.x+n,m=c*R(e[r.Matrix3.COLUMN2ROW1],e[r.Matrix3.COLUMN1ROW2],a.CesiumMath.EPSILON15),p=s*(i*R(e[r.Matrix3.COLUMN2ROW0],e[r.Matrix3.COLUMN0ROW2])+t.z);let C;const w=[];if(0===p&&0===m){if(C=o.computeRealRoots(l,f,h),0===C.length)return w;const e=C[0],t=Math.sqrt(Math.max(1-e*e,0));if(w.push(new r.Cartesian3(i,s*e,s*-t)),w.push(new r.Cartesian3(i,s*e,s*t)),2===C.length){const e=C[1],t=Math.sqrt(Math.max(1-e*e,0));w.push(new r.Cartesian3(i,s*e,s*-t)),w.push(new r.Cartesian3(i,s*e,s*t))}return w}const M=p*p,b=m*m,g=p*m,q=l*l+b,E=2*(f*l+g),y=2*h*l+f*f-b+M,v=2*(h*f-g),D=h*h-M;if(0===q&&0===E&&0===y&&0===v)return w;C=d.computeRealRoots(q,E,y,v,D);const S=C.length;if(0===S)return w;for(let e=0;e<S;++e){const t=C[e],n=t*t,o=Math.max(1-n,0),u=Math.sqrt(o);let c;c=a.CesiumMath.sign(l)===a.CesiumMath.sign(h)?R(l*n+h,f*t,a.CesiumMath.EPSILON12):a.CesiumMath.sign(h)===a.CesiumMath.sign(f*t)?R(l*n,f*t+h,a.CesiumMath.EPSILON12):R(l*n+f*t,h,a.CesiumMath.EPSILON12);const d=c*R(m*t,p,a.CesiumMath.EPSILON15);d<0?w.push(new r.Cartesian3(i,s*t,s*u)):d>0?w.push(new r.Cartesian3(i,s*t,s*-u)):0!==u?(w.push(new r.Cartesian3(i,s*t,s*-u)),w.push(new r.Cartesian3(i,s*t,s*u)),++e):w.push(new r.Cartesian3(i,s*t,s*u))}return w}(E,r.Cartesian3.negate(y,S),0,0,1);let D,k;const j=v.length;if(j>0){let e=r.Cartesian3.clone(r.Cartesian3.ZERO,Z),t=Number.NEGATIVE_INFINITY;for(let n=0;n<j;++n){D=r.Matrix3.multiplyByVector(M,r.Matrix3.multiplyByVector(C,v[n],V),V);const i=r.Cartesian3.normalize(r.Cartesian3.subtract(D,s,P),P),a=r.Cartesian3.dot(i,u);a>t&&(t=a,e=r.Cartesian3.clone(D,e))}const n=i.cartesianToCartographic(e,A);return t=a.CesiumMath.clamp(t,0,1),k=r.Cartesian3.magnitude(r.Cartesian3.subtract(e,s,P))*Math.sqrt(1-t*t),k=c?-k:k,n.height=k,i.cartographicToCartesian(n,new r.Cartesian3)}};const k=new r.Cartesian3;m.lineSegmentPlane=function(e,i,o,s){if(!t.defined(e))throw new n.DeveloperError("endPoint0 is required.");if(!t.defined(i))throw new n.DeveloperError("endPoint1 is required.");if(!t.defined(o))throw new n.DeveloperError("plane is required.");t.defined(s)||(s=new r.Cartesian3);const u=r.Cartesian3.subtract(i,e,k),c=o.normal,d=r.Cartesian3.dot(c,u);if(Math.abs(d)<a.CesiumMath.EPSILON6)return;const l=r.Cartesian3.dot(c,e),f=-(o.distance+l)/d;return f<0||f>1?void 0:(r.Cartesian3.multiplyByScalar(u,f,s),r.Cartesian3.add(e,s,s),s)},m.trianglePlaneIntersection=function(e,i,a,o){if(!(t.defined(e)&&t.defined(i)&&t.defined(a)&&t.defined(o)))throw new n.DeveloperError("p0, p1, p2, and plane are required.");const s=o.normal,u=o.distance,c=r.Cartesian3.dot(s,e)+u<0,d=r.Cartesian3.dot(s,i)+u<0,l=r.Cartesian3.dot(s,a)+u<0;let f,h,p=0;if(p+=c?1:0,p+=d?1:0,p+=l?1:0,1!==p&&2!==p||(f=new r.Cartesian3,h=new r.Cartesian3),1===p){if(c)return m.lineSegmentPlane(e,i,o,f),m.lineSegmentPlane(e,a,o,h),{positions:[e,i,a,f,h],indices:[0,3,4,1,2,4,1,4,3]};if(d)return m.lineSegmentPlane(i,a,o,f),m.lineSegmentPlane(i,e,o,h),{positions:[e,i,a,f,h],indices:[1,3,4,2,0,4,2,4,3]};if(l)return m.lineSegmentPlane(a,e,o,f),m.lineSegmentPlane(a,i,o,h),{positions:[e,i,a,f,h],indices:[2,3,4,0,1,4,0,4,3]}}else if(2===p){if(!c)return m.lineSegmentPlane(i,e,o,f),m.lineSegmentPlane(a,e,o,h),{positions:[e,i,a,f,h],indices:[1,2,4,1,4,3,0,3,4]};if(!d)return m.lineSegmentPlane(a,i,o,f),m.lineSegmentPlane(e,i,o,h),{positions:[e,i,a,f,h],indices:[2,0,4,2,4,3,1,3,4]};if(!l)return m.lineSegmentPlane(e,a,o,f),m.lineSegmentPlane(i,a,o,h),{positions:[e,i,a,f,h],indices:[0,1,4,0,4,3,2,3,4]}}},e.IntersectionTests=m,e.Ray=h}));
//# sourceMappingURL=IntersectionTests-0d95e9e5.js.map
