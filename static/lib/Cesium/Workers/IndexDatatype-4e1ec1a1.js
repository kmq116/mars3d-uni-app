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
define(["exports","./defaultValue-ac2201bb","./RuntimeError-d45af186","./ComponentDatatype-164c57e1","./WebGLConstants-e12cdc8a"],(function(e,r,t,n,a){"use strict";const i={UNSIGNED_BYTE:a.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:a.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:a.WebGLConstants.UNSIGNED_INT,getSizeInBytes:function(e){switch(e){case i.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case i.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case i.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}throw new t.DeveloperError("indexDatatype is required and must be a valid IndexDatatype constant.")},fromSizeInBytes:function(e){switch(e){case 2:return i.UNSIGNED_SHORT;case 4:return i.UNSIGNED_INT;case 1:return i.UNSIGNED_BYTE;default:throw new t.DeveloperError("Size in bytes cannot be mapped to an IndexDatatype")}},validate:function(e){return r.defined(e)&&(e===i.UNSIGNED_BYTE||e===i.UNSIGNED_SHORT||e===i.UNSIGNED_INT)},createTypedArray:function(e,a){if(!r.defined(e))throw new t.DeveloperError("numberOfVertices is required.");return e>=n.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(a):new Uint16Array(a)},createTypedArrayFromArrayBuffer:function(e,a,i,E){if(!r.defined(e))throw new t.DeveloperError("numberOfVertices is required.");if(!r.defined(a))throw new t.DeveloperError("sourceArray is required.");if(!r.defined(i))throw new t.DeveloperError("byteOffset is required.");return e>=n.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(a,i,E):new Uint16Array(a,i,E)},fromTypedArray:function(e){if(e instanceof Uint8Array)return i.UNSIGNED_BYTE;if(e instanceof Uint16Array)return i.UNSIGNED_SHORT;if(e instanceof Uint32Array)return i.UNSIGNED_INT;throw new t.DeveloperError("array must be a Uint8Array, Uint16Array, or Uint32Array.")}};var E=Object.freeze(i);e.IndexDatatype=E}));
//# sourceMappingURL=IndexDatatype-4e1ec1a1.js.map
