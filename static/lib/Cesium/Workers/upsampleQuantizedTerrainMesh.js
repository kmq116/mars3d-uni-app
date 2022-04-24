define(["./AttributeCompression-7a823eb1","./Transforms-bf323bcf","./Matrix2-1509208a","./defaultValue-69ee94f4","./TerrainEncoding-341cc7d2","./IndexDatatype-1cbc8622","./RuntimeError-ac440aa5","./ComponentDatatype-a9820060","./OrientedBoundingBox-fa9056b2","./createTaskProcessorWorker","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./EllipsoidTangentPlane-330be9cc","./AxisAlignedBoundingBox-ef345290","./IntersectionTests-f15438d8","./Plane-e3daa19b"],(function(e,t,n,i,s,r,h,o,u,p,d,l,a,f,c,g,m){"use strict";const x={clipTriangleAtAxisAlignedThreshold:function(e,t,n,s,r,h){let o,u,p;i.defined(h)?h.length=0:h=[],t?(o=n<e,u=s<e,p=r<e):(o=n>e,u=s>e,p=r>e);const d=o+u+p;let l,a,f,c,g,m;return 1===d?o?(l=(e-n)/(s-n),a=(e-n)/(r-n),h.push(1),h.push(2),1!==a&&(h.push(-1),h.push(0),h.push(2),h.push(a)),1!==l&&(h.push(-1),h.push(0),h.push(1),h.push(l))):u?(f=(e-s)/(r-s),c=(e-s)/(n-s),h.push(2),h.push(0),1!==c&&(h.push(-1),h.push(1),h.push(0),h.push(c)),1!==f&&(h.push(-1),h.push(1),h.push(2),h.push(f))):p&&(g=(e-r)/(n-r),m=(e-r)/(s-r),h.push(0),h.push(1),1!==m&&(h.push(-1),h.push(2),h.push(1),h.push(m)),1!==g&&(h.push(-1),h.push(2),h.push(0),h.push(g))):2===d?o||n===e?u||s===e?p||r===e||(a=(e-n)/(r-n),f=(e-s)/(r-s),h.push(2),h.push(-1),h.push(0),h.push(2),h.push(a),h.push(-1),h.push(1),h.push(2),h.push(f)):(m=(e-r)/(s-r),l=(e-n)/(s-n),h.push(1),h.push(-1),h.push(2),h.push(1),h.push(m),h.push(-1),h.push(0),h.push(1),h.push(l)):(c=(e-s)/(n-s),g=(e-r)/(n-r),h.push(0),h.push(-1),h.push(1),h.push(0),h.push(c),h.push(-1),h.push(2),h.push(0),h.push(g)):3!==d&&(h.push(0),h.push(1),h.push(2)),h},computeBarycentricCoordinates:function(e,t,s,r,h,o,u,p,d){const l=s-u,a=u-h,f=o-p,c=r-p,g=1/(f*l+a*c),m=t-p,x=e-u,w=(f*x+a*m)*g,C=(-c*x+l*m)*g,B=1-w-C;return i.defined(d)?(d.x=w,d.y=C,d.z=B,d):new n.Cartesian3(w,C,B)},computeLineSegmentLineSegmentIntersection:function(e,t,s,r,h,o,u,p,d){const l=(p-o)*(s-e)-(u-h)*(r-t);if(0===l)return;const a=((u-h)*(t-o)-(p-o)*(e-h))/l,f=((s-e)*(t-o)-(r-t)*(e-h))/l;return a>=0&&a<=1&&f>=0&&f<=1?(i.defined(d)||(d=new n.Cartesian2),d.x=e+a*(s-e),d.y=t+a*(r-t),d):void 0}},w=32767,C=16383,B=[],y=[],I=[],A=new n.Cartographic;let b=new n.Cartesian3;const v=[],T=[],z=[],V=[],M=[],N=new n.Cartesian3,E=new t.BoundingSphere,H=new u.OrientedBoundingBox,R=new n.Cartesian2,O=new n.Cartesian3;function S(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}S.prototype.clone=function(e){return i.defined(e)||(e=new S),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},S.prototype.initializeIndexed=function(e,t,n,i,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=n,this.normalBuffer=i,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},S.prototype.initializeFromClipResult=function(e,t,n){let i=t+1;return-1!==e[t]?n[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=n[e[i]],++i,this.second=n[e[i]],++i,this.ratio=e[i],++i),i},S.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},S.prototype.isIndexed=function(){return i.defined(this.index)},S.prototype.getH=function(){return i.defined(this.index)?this.heightBuffer[this.index]:o.CesiumMath.lerp(this.first.getH(),this.second.getH(),this.ratio)},S.prototype.getU=function(){return i.defined(this.index)?this.uBuffer[this.index]:o.CesiumMath.lerp(this.first.getU(),this.second.getU(),this.ratio)},S.prototype.getV=function(){return i.defined(this.index)?this.vBuffer[this.index]:o.CesiumMath.lerp(this.first.getV(),this.second.getV(),this.ratio)};let U=new n.Cartesian2,F=-1;const P=[new n.Cartesian3,new n.Cartesian3],D=[new n.Cartesian3,new n.Cartesian3];function W(t,i){++F;let s=P[F],r=D[F];return s=e.AttributeCompression.octDecode(t.first.getNormalX(),t.first.getNormalY(),s),r=e.AttributeCompression.octDecode(t.second.getNormalX(),t.second.getNormalY(),r),b=n.Cartesian3.lerp(s,r,t.ratio,b),n.Cartesian3.normalize(b,b),e.AttributeCompression.octEncode(b,i),--F,i}S.prototype.getNormalX=function(){return i.defined(this.index)?this.normalBuffer[2*this.index]:(U=W(this,U),U.x)},S.prototype.getNormalY=function(){return i.defined(this.index)?this.normalBuffer[2*this.index+1]:(U=W(this,U),U.y)};const X=[];function k(e,t,n,s,r,h,o,u,p){if(0===o.length)return;let d=0,l=0;for(;l<o.length;)l=X[d++].initializeFromClipResult(o,l,u);for(let r=0;r<d;++r){const o=X[r];if(o.isIndexed())o.newIndex=h[o.index],o.uBuffer=e,o.vBuffer=t,o.heightBuffer=n,p&&(o.normalBuffer=s);else{const r=o.getKey();if(i.defined(h[r]))o.newIndex=h[r];else{const i=e.length;e.push(o.getU()),t.push(o.getV()),n.push(o.getH()),p&&(s.push(o.getNormalX()),s.push(o.getNormalY())),o.newIndex=i,h[r]=i}}}3===d?(r.push(X[0].newIndex),r.push(X[1].newIndex),r.push(X[2].newIndex)):4===d&&(r.push(X[0].newIndex),r.push(X[1].newIndex),r.push(X[2].newIndex),r.push(X[0].newIndex),r.push(X[2].newIndex),r.push(X[3].newIndex))}return X.push(new S),X.push(new S),X.push(new S),X.push(new S),p((function(e,i){const h=e.isEastChild,p=e.isNorthChild,d=h?C:0,l=h?w:C,a=p?C:0,f=p?w:C,c=v,g=T,m=z,U=M;c.length=0,g.length=0,m.length=0,U.length=0;const F=V;F.length=0;const P={},D=e.vertices;let W=e.indices;W=W.subarray(0,e.indexCountWithoutSkirts);const X=s.TerrainEncoding.clone(e.encoding),K=X.hasVertexNormals;let L=0;const Y=e.vertexCountWithoutSkirts,_=e.minimumHeight,j=e.maximumHeight,G=new Array(Y),J=new Array(Y),Z=new Array(Y),q=K?new Array(2*Y):void 0;let Q,$,ee,te,ne;for($=0,ee=0;$<Y;++$,ee+=2){const e=X.decodeTextureCoordinates(D,$,R);if(Q=X.decodeHeight(D,$),te=o.CesiumMath.clamp(e.x*w|0,0,w),ne=o.CesiumMath.clamp(e.y*w|0,0,w),Z[$]=o.CesiumMath.clamp((Q-_)/(j-_)*w|0,0,w),te<20&&(te=0),ne<20&&(ne=0),w-te<20&&(te=w),w-ne<20&&(ne=w),G[$]=te,J[$]=ne,K){const e=X.getOctEncodedNormal(D,$,O);q[ee]=e.x,q[ee+1]=e.y}(h&&te>=C||!h&&te<=C)&&(p&&ne>=C||!p&&ne<=C)&&(P[$]=L,c.push(te),g.push(ne),m.push(Z[$]),K&&(U.push(q[ee]),U.push(q[ee+1])),++L)}const ie=[];ie.push(new S),ie.push(new S),ie.push(new S);const se=[];let re,he;for(se.push(new S),se.push(new S),se.push(new S),$=0;$<W.length;$+=3){const e=W[$],t=W[$+1],n=W[$+2],i=G[e],s=G[t],r=G[n];ie[0].initializeIndexed(G,J,Z,q,e),ie[1].initializeIndexed(G,J,Z,q,t),ie[2].initializeIndexed(G,J,Z,q,n);const o=x.clipTriangleAtAxisAlignedThreshold(C,h,i,s,r,B);re=0,re>=o.length||(re=se[0].initializeFromClipResult(o,re,ie),re>=o.length||(re=se[1].initializeFromClipResult(o,re,ie),re>=o.length||(re=se[2].initializeFromClipResult(o,re,ie),he=x.clipTriangleAtAxisAlignedThreshold(C,p,se[0].getV(),se[1].getV(),se[2].getV(),y),k(c,g,m,U,F,P,he,se,K),re<o.length&&(se[2].clone(se[1]),se[2].initializeFromClipResult(o,re,ie),he=x.clipTriangleAtAxisAlignedThreshold(C,p,se[0].getV(),se[1].getV(),se[2].getV(),y),k(c,g,m,U,F,P,he,se,K)))))}const oe=h?-32767:0,ue=p?-32767:0,pe=[],de=[],le=[],ae=[];let fe=Number.MAX_VALUE,ce=-fe;const ge=I;ge.length=0;const me=n.Ellipsoid.clone(e.ellipsoid),xe=n.Rectangle.clone(e.childRectangle),we=xe.north,Ce=xe.south;let Be=xe.east;const ye=xe.west;for(Be<ye&&(Be+=o.CesiumMath.TWO_PI),$=0;$<c.length;++$)te=Math.round(c[$]),te<=d?(pe.push($),te=0):te>=l?(le.push($),te=w):te=2*te+oe,c[$]=te,ne=Math.round(g[$]),ne<=a?(de.push($),ne=0):ne>=f?(ae.push($),ne=w):ne=2*ne+ue,g[$]=ne,Q=o.CesiumMath.lerp(_,j,m[$]/w),Q<fe&&(fe=Q),Q>ce&&(ce=Q),m[$]=Q,A.longitude=o.CesiumMath.lerp(ye,Be,te/w),A.latitude=o.CesiumMath.lerp(Ce,we,ne/w),A.height=Q,me.cartographicToCartesian(A,b),ge.push(b.x),ge.push(b.y),ge.push(b.z);const Ie=t.BoundingSphere.fromVertices(ge,n.Cartesian3.ZERO,3,E),Ae=u.OrientedBoundingBox.fromRectangle(xe,fe,ce,me,H),be=new s.EllipsoidalOccluder(me).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(Ie.center,ge,3,Ie.center,fe,N),ve=ce-fe,Te=new Uint16Array(c.length+g.length+m.length);for($=0;$<c.length;++$)Te[$]=c[$];let ze=c.length;for($=0;$<g.length;++$)Te[ze+$]=g[$];for(ze+=g.length,$=0;$<m.length;++$)Te[ze+$]=w*(m[$]-fe)/ve;const Ve=r.IndexDatatype.createTypedArray(c.length,F);let Me;if(K){const e=new Uint8Array(U);i.push(Te.buffer,Ve.buffer,e.buffer),Me=e.buffer}else i.push(Te.buffer,Ve.buffer);return{vertices:Te.buffer,encodedNormals:Me,indices:Ve.buffer,minimumHeight:fe,maximumHeight:ce,westIndices:pe,southIndices:de,eastIndices:le,northIndices:ae,boundingSphere:Ie,orientedBoundingBox:Ae,horizonOcclusionPoint:be}}))}));
