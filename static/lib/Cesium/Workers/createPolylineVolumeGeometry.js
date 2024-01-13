/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.113.1
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

import{a as M}from"./chunk-C46Q7V7L.js";import{a as W}from"./chunk-2ZCHRD2L.js";import"./chunk-2JGUYLOT.js";import"./chunk-BFMLMJC2.js";import{a as x,b as j}from"./chunk-4OLIPKLY.js";import{a as I}from"./chunk-KMRLBTZQ.js";import"./chunk-MFMMZTKY.js";import"./chunk-C4UZLCJX.js";import{a as g}from"./chunk-DBYFGW64.js";import"./chunk-F72A5W3E.js";import"./chunk-FPWTFTAE.js";import{a as $,b as V}from"./chunk-SVNRSQ5K.js";import{a as Z}from"./chunk-GOC6AUIL.js";import"./chunk-PFCU6TDC.js";import"./chunk-XYPGOT2R.js";import"./chunk-T5QDGA5N.js";import{a as X}from"./chunk-5XXCTQD6.js";import{a as Q}from"./chunk-QFHIY3HQ.js";import{b as Y,c as z,d as U}from"./chunk-PDSZC75H.js";import{d as K}from"./chunk-MS5CQQNI.js";import"./chunk-E2MC6AQZ.js";import"./chunk-DRLZ2WJO.js";import{a as B}from"./chunk-ZSIZOBEV.js";import{a as T,c as C,d as f}from"./chunk-4UBSGGT4.js";import{a as J}from"./chunk-ZIN5T4FP.js";import"./chunk-ODRDFLQS.js";import"./chunk-OKLFMR7X.js";import{a as k}from"./chunk-YGDYKRK6.js";import{a as D}from"./chunk-VMJTWRHW.js";import{e as _}from"./chunk-LHFQN3JX.js";function oe(t,e,n,o){let l=new Q;o.position&&(l.position=new U({componentDatatype:B.DOUBLE,componentsPerAttribute:3,values:t}));let i=e.length,u=t.length/3,L=(u-i*2)/(i*2),E=V.triangulate(e),G=(L-1)*i*6+E.length*2,r=X.createTypedArray(u,G),m,s,d,b,A,q,F=i*2,p=0;for(m=0;m<L-1;m++){for(s=0;s<i-1;s++)d=s*2+m*i*2,q=d+F,b=d+1,A=b+F,r[p++]=b,r[p++]=d,r[p++]=A,r[p++]=A,r[p++]=d,r[p++]=q;d=i*2-2+m*i*2,b=d+1,A=b+F,q=d+F,r[p++]=b,r[p++]=d,r[p++]=A,r[p++]=A,r[p++]=d,r[p++]=q}if(o.st||o.tangent||o.bitangent){let c=new Float32Array(u*2),S=1/(L-1),w=1/n.height,O=n.height/2,y,a,h=0;for(m=0;m<L;m++){for(y=m*S,a=w*(e[0].y+O),c[h++]=y,c[h++]=a,s=1;s<i;s++)a=w*(e[s].y+O),c[h++]=y,c[h++]=a,c[h++]=y,c[h++]=a;a=w*(e[0].y+O),c[h++]=y,c[h++]=a}for(s=0;s<i;s++)y=0,a=w*(e[s].y+O),c[h++]=y,c[h++]=a;for(s=0;s<i;s++)y=(L-1)*S,a=w*(e[s].y+O),c[h++]=y,c[h++]=a;l.st=new U({componentDatatype:B.FLOAT,componentsPerAttribute:2,values:new Float32Array(c)})}let N=u-i*2;for(m=0;m<E.length;m+=3){let c=E[m]+N,S=E[m+1]+N,w=E[m+2]+N;r[p++]=c,r[p++]=S,r[p++]=w,r[p++]=w+i,r[p++]=S+i,r[p++]=c+i}let P=new z({attributes:l,indices:r,boundingSphere:K.fromVertices(t),primitiveType:Y.TRIANGLES});if(o.normal&&(P=W.computeNormal(P)),o.tangent||o.bitangent){try{P=W.computeTangentAndBitangent(P)}catch{I("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}o.tangent||(P.attributes.tangent=void 0),o.bitangent||(P.attributes.bitangent=void 0),o.st||(P.attributes.st=void 0)}return P}function R(t){t=k(t,k.EMPTY_OBJECT);let e=t.polylinePositions,n=t.shapePositions;if(!_(e))throw new D("options.polylinePositions is required.");if(!_(n))throw new D("options.shapePositions is required.");this._positions=e,this._shape=n,this._ellipsoid=f.clone(k(t.ellipsoid,f.WGS84)),this._cornerType=k(t.cornerType,x.ROUNDED),this._vertexFormat=g.clone(k(t.vertexFormat,g.DEFAULT)),this._granularity=k(t.granularity,J.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";let o=1+e.length*T.packedLength;o+=1+n.length*C.packedLength,this.packedLength=o+f.packedLength+g.packedLength+2}R.pack=function(t,e,n){if(!_(t))throw new D("value is required");if(!_(e))throw new D("array is required");n=k(n,0);let o,l=t._positions,i=l.length;for(e[n++]=i,o=0;o<i;++o,n+=T.packedLength)T.pack(l[o],e,n);let u=t._shape;for(i=u.length,e[n++]=i,o=0;o<i;++o,n+=C.packedLength)C.pack(u[o],e,n);return f.pack(t._ellipsoid,e,n),n+=f.packedLength,g.pack(t._vertexFormat,e,n),n+=g.packedLength,e[n++]=t._cornerType,e[n]=t._granularity,e};var ee=f.clone(f.UNIT_SPHERE),te=new g,v={polylinePositions:void 0,shapePositions:void 0,ellipsoid:ee,vertexFormat:te,cornerType:void 0,granularity:void 0};R.unpack=function(t,e,n){if(!_(t))throw new D("array is required");e=k(e,0);let o,l=t[e++],i=new Array(l);for(o=0;o<l;++o,e+=T.packedLength)i[o]=T.unpack(t,e);l=t[e++];let u=new Array(l);for(o=0;o<l;++o,e+=C.packedLength)u[o]=C.unpack(t,e);let L=f.unpack(t,e,ee);e+=f.packedLength;let E=g.unpack(t,e,te);e+=g.packedLength;let G=t[e++],r=t[e];return _(n)?(n._positions=i,n._shape=u,n._ellipsoid=f.clone(L,n._ellipsoid),n._vertexFormat=g.clone(E,n._vertexFormat),n._cornerType=G,n._granularity=r,n):(v.polylinePositions=i,v.shapePositions=u,v.cornerType=G,v.granularity=r,new R(v))};var ne=new M;R.createGeometry=function(t){let e=t._positions,n=Z(e,T.equalsEpsilon),o=t._shape;if(o=j.removeDuplicatesFromShape(o),n.length<2||o.length<3)return;V.computeWindingOrder2D(o)===$.CLOCKWISE&&o.reverse();let l=M.fromPoints(o,ne),i=j.computePositions(n,o,l,t,!0);return oe(i,o,l,t._vertexFormat)};var H=R;function ie(t,e){return _(e)&&(t=H.unpack(t,e)),t._ellipsoid=f.clone(t._ellipsoid),H.createGeometry(t)}var Re=ie;export{Re as default};
