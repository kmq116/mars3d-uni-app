define(["./defaultValue-69ee94f4","./PrimitivePipeline-e1f3eb3d","./createTaskProcessorWorker","./Transforms-bf323bcf","./Matrix2-1509208a","./RuntimeError-ac440aa5","./ComponentDatatype-a9820060","./WebGLConstants-f63312fc","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./GeometryAttribute-71155085","./GeometryAttributes-1b4134a9","./GeometryPipeline-b15e7fd0","./AttributeCompression-7a823eb1","./EncodedCartesian3-ee8e4156","./IndexDatatype-1cbc8622","./IntersectionTests-f15438d8","./Plane-e3daa19b","./WebMercatorProjection-2d827489"],(function(e,t,r,n,o,i,s,a,c,f,u,m,b,d,l,p,y,P,k){"use strict";const C={};function G(t){let r=C[t];return e.defined(r)||("object"==typeof exports?C[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,C[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,s=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=G(i);s[t]=e(n,r.offset)}else s[t]=n}return Promise.all(s).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));
