define(["exports","./RuntimeError-ac440aa5","./defaultValue-69ee94f4","./ComponentDatatype-a9820060"],(function(e,n,t,i){"use strict";const d=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,i,f){if(!t.defined(e))return;i=t.defaultValue(i,!1);const u=t.defined(f),a=e.length;if(a<2)return e;let r,s,l,c=e[0],o=0,p=-1;for(r=1;r<a;++r)s=e[r],n(c,s,d)?(t.defined(l)||(l=e.slice(0,r),o=r-1,p=0),u&&f.push(r)):(t.defined(l)&&(l.push(s),o=r,u&&(p=f.length)),c=s);return i&&n(e[0],e[a-1],d)&&(u&&(t.defined(l)?f.splice(p,0,o):f.push(a-1)),t.defined(l)?l.length-=1:l=e.slice(0,-1)),t.defined(l)?l:e}}));
