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
define(["exports","./RuntimeError-d45af186","./defaultValue-ac2201bb","./Transforms-b0c5770c","./ComponentDatatype-164c57e1"],(function(e,r,t,o,f){"use strict";function s(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),6*t<1?e+6*(r-e)*t:2*t<1?r:3*t<2?e+(r-e)*(2/3-t)*6:e}function n(e,r,o,f){this.red=t.defaultValue(e,1),this.green=t.defaultValue(r,1),this.blue=t.defaultValue(o,1),this.alpha=t.defaultValue(f,1)}let l,C,a;n.fromCartesian4=function(e,o){return r.Check.typeOf.object("cartesian",e),t.defined(o)?(o.red=e.x,o.green=e.y,o.blue=e.z,o.alpha=e.w,o):new n(e.x,e.y,e.z,e.w)},n.fromBytes=function(e,r,o,f,s){return e=n.byteToFloat(t.defaultValue(e,255)),r=n.byteToFloat(t.defaultValue(r,255)),o=n.byteToFloat(t.defaultValue(o,255)),f=n.byteToFloat(t.defaultValue(f,255)),t.defined(s)?(s.red=e,s.green=r,s.blue=o,s.alpha=f,s):new n(e,r,o,f)},n.fromAlpha=function(e,o,f){return r.Check.typeOf.object("color",e),r.Check.typeOf.number("alpha",o),t.defined(f)?(f.red=e.red,f.green=e.green,f.blue=e.blue,f.alpha=o,f):new n(e.red,e.green,e.blue,o)},o.FeatureDetection.supportsTypedArrays()&&(l=new ArrayBuffer(4),C=new Uint32Array(l),a=new Uint8Array(l)),n.fromRgba=function(e,r){return C[0]=e,n.fromBytes(a[0],a[1],a[2],a[3],r)},n.fromHsl=function(e,r,o,f,l){e=t.defaultValue(e,0)%1,r=t.defaultValue(r,0),o=t.defaultValue(o,0),f=t.defaultValue(f,1);let C=o,a=o,i=o;if(0!==r){let t;t=o<.5?o*(1+r):o+r-o*r;const f=2*o-t;C=s(f,t,e+1/3),a=s(f,t,e),i=s(f,t,e-1/3)}return t.defined(l)?(l.red=C,l.green=a,l.blue=i,l.alpha=f,l):new n(C,a,i,f)},n.fromRandom=function(e,o){let s=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).red;if(!t.defined(s)){const o=t.defaultValue(e.minimumRed,0),n=t.defaultValue(e.maximumRed,1);r.Check.typeOf.number.lessThanOrEquals("minimumRed",o,n),s=o+f.CesiumMath.nextRandomNumber()*(n-o)}let l=e.green;if(!t.defined(l)){const o=t.defaultValue(e.minimumGreen,0),s=t.defaultValue(e.maximumGreen,1);r.Check.typeOf.number.lessThanOrEquals("minimumGreen",o,s),l=o+f.CesiumMath.nextRandomNumber()*(s-o)}let C=e.blue;if(!t.defined(C)){const o=t.defaultValue(e.minimumBlue,0),s=t.defaultValue(e.maximumBlue,1);r.Check.typeOf.number.lessThanOrEquals("minimumBlue",o,s),C=o+f.CesiumMath.nextRandomNumber()*(s-o)}let a=e.alpha;if(!t.defined(a)){const o=t.defaultValue(e.minimumAlpha,0),s=t.defaultValue(e.maximumAlpha,1);r.Check.typeOf.number.lessThanOrEquals("minumumAlpha",o,s),a=o+f.CesiumMath.nextRandomNumber()*(s-o)}return t.defined(o)?(o.red=s,o.green=l,o.blue=C,o.alpha=a,o):new n(s,l,C,a)};const i=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,c=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,u=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,O=/^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;n.fromCssColorString=function(e,o){r.Check.typeOf.string("color",e),t.defined(o)||(o=new n);const f=n[(e=e.replace(/\s/g,"")).toUpperCase()];if(t.defined(f))return n.clone(f,o),o;let s=i.exec(e);return null!==s?(o.red=parseInt(s[1],16)/15,o.green=parseInt(s[2],16)/15,o.blue=parseInt(s[3],16)/15,o.alpha=parseInt(t.defaultValue(s[4],"f"),16)/15,o):(s=c.exec(e),null!==s?(o.red=parseInt(s[1],16)/255,o.green=parseInt(s[2],16)/255,o.blue=parseInt(s[3],16)/255,o.alpha=parseInt(t.defaultValue(s[4],"ff"),16)/255,o):(s=u.exec(e),null!==s?(o.red=parseFloat(s[1])/("%"===s[1].substr(-1)?100:255),o.green=parseFloat(s[2])/("%"===s[2].substr(-1)?100:255),o.blue=parseFloat(s[3])/("%"===s[3].substr(-1)?100:255),o.alpha=parseFloat(t.defaultValue(s[4],"1.0")),o):(s=O.exec(e),null!==s?n.fromHsl(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,parseFloat(t.defaultValue(s[4],"1.0")),o):o=void 0)))},n.packedLength=4,n.pack=function(e,o,f){return r.Check.typeOf.object("value",e),r.Check.defined("array",o),f=t.defaultValue(f,0),o[f++]=e.red,o[f++]=e.green,o[f++]=e.blue,o[f]=e.alpha,o},n.unpack=function(e,o,f){return r.Check.defined("array",e),o=t.defaultValue(o,0),t.defined(f)||(f=new n),f.red=e[o++],f.green=e[o++],f.blue=e[o++],f.alpha=e[o],f},n.byteToFloat=function(e){return e/255},n.floatToByte=function(e){return 1===e?255:256*e|0},n.clone=function(e,r){if(t.defined(e))return t.defined(r)?(r.red=e.red,r.green=e.green,r.blue=e.blue,r.alpha=e.alpha,r):new n(e.red,e.green,e.blue,e.alpha)},n.equals=function(e,r){return e===r||t.defined(e)&&t.defined(r)&&e.red===r.red&&e.green===r.green&&e.blue===r.blue&&e.alpha===r.alpha},n.equalsArray=function(e,r,t){return e.red===r[t]&&e.green===r[t+1]&&e.blue===r[t+2]&&e.alpha===r[t+3]},n.prototype.clone=function(e){return n.clone(this,e)},n.prototype.equals=function(e){return n.equals(this,e)},n.prototype.equalsEpsilon=function(e,r){return this===e||t.defined(e)&&Math.abs(this.red-e.red)<=r&&Math.abs(this.green-e.green)<=r&&Math.abs(this.blue-e.blue)<=r&&Math.abs(this.alpha-e.alpha)<=r},n.prototype.toString=function(){return`(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`},n.prototype.toCssColorString=function(){const e=n.floatToByte(this.red),r=n.floatToByte(this.green),t=n.floatToByte(this.blue);return 1===this.alpha?`rgb(${e},${r},${t})`:`rgba(${e},${r},${t},${this.alpha})`},n.prototype.toCssHexString=function(){let e=n.floatToByte(this.red).toString(16);e.length<2&&(e=`0${e}`);let r=n.floatToByte(this.green).toString(16);r.length<2&&(r=`0${r}`);let t=n.floatToByte(this.blue).toString(16);if(t.length<2&&(t=`0${t}`),this.alpha<1){let o=n.floatToByte(this.alpha).toString(16);return o.length<2&&(o=`0${o}`),`#${e}${r}${t}${o}`}return`#${e}${r}${t}`},n.prototype.toBytes=function(e){const r=n.floatToByte(this.red),o=n.floatToByte(this.green),f=n.floatToByte(this.blue),s=n.floatToByte(this.alpha);return t.defined(e)?(e[0]=r,e[1]=o,e[2]=f,e[3]=s,e):[r,o,f,s]},n.prototype.toRgba=function(){return a[0]=n.floatToByte(this.red),a[1]=n.floatToByte(this.green),a[2]=n.floatToByte(this.blue),a[3]=n.floatToByte(this.alpha),C[0]},n.prototype.brighten=function(e,t){return r.Check.typeOf.number("magnitude",e),r.Check.typeOf.number.greaterThanOrEquals("magnitude",e,0),r.Check.typeOf.object("result",t),e=1-e,t.red=1-(1-this.red)*e,t.green=1-(1-this.green)*e,t.blue=1-(1-this.blue)*e,t.alpha=this.alpha,t},n.prototype.darken=function(e,t){return r.Check.typeOf.number("magnitude",e),r.Check.typeOf.number.greaterThanOrEquals("magnitude",e,0),r.Check.typeOf.object("result",t),e=1-e,t.red=this.red*e,t.green=this.green*e,t.blue=this.blue*e,t.alpha=this.alpha,t},n.prototype.withAlpha=function(e,r){return n.fromAlpha(this,e,r)},n.add=function(e,t,o){return r.Check.typeOf.object("left",e),r.Check.typeOf.object("right",t),r.Check.typeOf.object("result",o),o.red=e.red+t.red,o.green=e.green+t.green,o.blue=e.blue+t.blue,o.alpha=e.alpha+t.alpha,o},n.subtract=function(e,t,o){return r.Check.typeOf.object("left",e),r.Check.typeOf.object("right",t),r.Check.typeOf.object("result",o),o.red=e.red-t.red,o.green=e.green-t.green,o.blue=e.blue-t.blue,o.alpha=e.alpha-t.alpha,o},n.multiply=function(e,t,o){return r.Check.typeOf.object("left",e),r.Check.typeOf.object("right",t),r.Check.typeOf.object("result",o),o.red=e.red*t.red,o.green=e.green*t.green,o.blue=e.blue*t.blue,o.alpha=e.alpha*t.alpha,o},n.divide=function(e,t,o){return r.Check.typeOf.object("left",e),r.Check.typeOf.object("right",t),r.Check.typeOf.object("result",o),o.red=e.red/t.red,o.green=e.green/t.green,o.blue=e.blue/t.blue,o.alpha=e.alpha/t.alpha,o},n.mod=function(e,t,o){return r.Check.typeOf.object("left",e),r.Check.typeOf.object("right",t),r.Check.typeOf.object("result",o),o.red=e.red%t.red,o.green=e.green%t.green,o.blue=e.blue%t.blue,o.alpha=e.alpha%t.alpha,o},n.lerp=function(e,t,o,s){return r.Check.typeOf.object("start",e),r.Check.typeOf.object("end",t),r.Check.typeOf.number("t",o),r.Check.typeOf.object("result",s),s.red=f.CesiumMath.lerp(e.red,t.red,o),s.green=f.CesiumMath.lerp(e.green,t.green,o),s.blue=f.CesiumMath.lerp(e.blue,t.blue,o),s.alpha=f.CesiumMath.lerp(e.alpha,t.alpha,o),s},n.multiplyByScalar=function(e,t,o){return r.Check.typeOf.object("color",e),r.Check.typeOf.number("scalar",t),r.Check.typeOf.object("result",o),o.red=e.red*t,o.green=e.green*t,o.blue=e.blue*t,o.alpha=e.alpha*t,o},n.divideByScalar=function(e,t,o){return r.Check.typeOf.object("color",e),r.Check.typeOf.number("scalar",t),r.Check.typeOf.object("result",o),o.red=e.red/t,o.green=e.green/t,o.blue=e.blue/t,o.alpha=e.alpha/t,o},n.ALICEBLUE=Object.freeze(n.fromCssColorString("#F0F8FF")),n.ANTIQUEWHITE=Object.freeze(n.fromCssColorString("#FAEBD7")),n.AQUA=Object.freeze(n.fromCssColorString("#00FFFF")),n.AQUAMARINE=Object.freeze(n.fromCssColorString("#7FFFD4")),n.AZURE=Object.freeze(n.fromCssColorString("#F0FFFF")),n.BEIGE=Object.freeze(n.fromCssColorString("#F5F5DC")),n.BISQUE=Object.freeze(n.fromCssColorString("#FFE4C4")),n.BLACK=Object.freeze(n.fromCssColorString("#000000")),n.BLANCHEDALMOND=Object.freeze(n.fromCssColorString("#FFEBCD")),n.BLUE=Object.freeze(n.fromCssColorString("#0000FF")),n.BLUEVIOLET=Object.freeze(n.fromCssColorString("#8A2BE2")),n.BROWN=Object.freeze(n.fromCssColorString("#A52A2A")),n.BURLYWOOD=Object.freeze(n.fromCssColorString("#DEB887")),n.CADETBLUE=Object.freeze(n.fromCssColorString("#5F9EA0")),n.CHARTREUSE=Object.freeze(n.fromCssColorString("#7FFF00")),n.CHOCOLATE=Object.freeze(n.fromCssColorString("#D2691E")),n.CORAL=Object.freeze(n.fromCssColorString("#FF7F50")),n.CORNFLOWERBLUE=Object.freeze(n.fromCssColorString("#6495ED")),n.CORNSILK=Object.freeze(n.fromCssColorString("#FFF8DC")),n.CRIMSON=Object.freeze(n.fromCssColorString("#DC143C")),n.CYAN=Object.freeze(n.fromCssColorString("#00FFFF")),n.DARKBLUE=Object.freeze(n.fromCssColorString("#00008B")),n.DARKCYAN=Object.freeze(n.fromCssColorString("#008B8B")),n.DARKGOLDENROD=Object.freeze(n.fromCssColorString("#B8860B")),n.DARKGRAY=Object.freeze(n.fromCssColorString("#A9A9A9")),n.DARKGREEN=Object.freeze(n.fromCssColorString("#006400")),n.DARKGREY=n.DARKGRAY,n.DARKKHAKI=Object.freeze(n.fromCssColorString("#BDB76B")),n.DARKMAGENTA=Object.freeze(n.fromCssColorString("#8B008B")),n.DARKOLIVEGREEN=Object.freeze(n.fromCssColorString("#556B2F")),n.DARKORANGE=Object.freeze(n.fromCssColorString("#FF8C00")),n.DARKORCHID=Object.freeze(n.fromCssColorString("#9932CC")),n.DARKRED=Object.freeze(n.fromCssColorString("#8B0000")),n.DARKSALMON=Object.freeze(n.fromCssColorString("#E9967A")),n.DARKSEAGREEN=Object.freeze(n.fromCssColorString("#8FBC8F")),n.DARKSLATEBLUE=Object.freeze(n.fromCssColorString("#483D8B")),n.DARKSLATEGRAY=Object.freeze(n.fromCssColorString("#2F4F4F")),n.DARKSLATEGREY=n.DARKSLATEGRAY,n.DARKTURQUOISE=Object.freeze(n.fromCssColorString("#00CED1")),n.DARKVIOLET=Object.freeze(n.fromCssColorString("#9400D3")),n.DEEPPINK=Object.freeze(n.fromCssColorString("#FF1493")),n.DEEPSKYBLUE=Object.freeze(n.fromCssColorString("#00BFFF")),n.DIMGRAY=Object.freeze(n.fromCssColorString("#696969")),n.DIMGREY=n.DIMGRAY,n.DODGERBLUE=Object.freeze(n.fromCssColorString("#1E90FF")),n.FIREBRICK=Object.freeze(n.fromCssColorString("#B22222")),n.FLORALWHITE=Object.freeze(n.fromCssColorString("#FFFAF0")),n.FORESTGREEN=Object.freeze(n.fromCssColorString("#228B22")),n.FUCHSIA=Object.freeze(n.fromCssColorString("#FF00FF")),n.GAINSBORO=Object.freeze(n.fromCssColorString("#DCDCDC")),n.GHOSTWHITE=Object.freeze(n.fromCssColorString("#F8F8FF")),n.GOLD=Object.freeze(n.fromCssColorString("#FFD700")),n.GOLDENROD=Object.freeze(n.fromCssColorString("#DAA520")),n.GRAY=Object.freeze(n.fromCssColorString("#808080")),n.GREEN=Object.freeze(n.fromCssColorString("#008000")),n.GREENYELLOW=Object.freeze(n.fromCssColorString("#ADFF2F")),n.GREY=n.GRAY,n.HONEYDEW=Object.freeze(n.fromCssColorString("#F0FFF0")),n.HOTPINK=Object.freeze(n.fromCssColorString("#FF69B4")),n.INDIANRED=Object.freeze(n.fromCssColorString("#CD5C5C")),n.INDIGO=Object.freeze(n.fromCssColorString("#4B0082")),n.IVORY=Object.freeze(n.fromCssColorString("#FFFFF0")),n.KHAKI=Object.freeze(n.fromCssColorString("#F0E68C")),n.LAVENDER=Object.freeze(n.fromCssColorString("#E6E6FA")),n.LAVENDAR_BLUSH=Object.freeze(n.fromCssColorString("#FFF0F5")),n.LAWNGREEN=Object.freeze(n.fromCssColorString("#7CFC00")),n.LEMONCHIFFON=Object.freeze(n.fromCssColorString("#FFFACD")),n.LIGHTBLUE=Object.freeze(n.fromCssColorString("#ADD8E6")),n.LIGHTCORAL=Object.freeze(n.fromCssColorString("#F08080")),n.LIGHTCYAN=Object.freeze(n.fromCssColorString("#E0FFFF")),n.LIGHTGOLDENRODYELLOW=Object.freeze(n.fromCssColorString("#FAFAD2")),n.LIGHTGRAY=Object.freeze(n.fromCssColorString("#D3D3D3")),n.LIGHTGREEN=Object.freeze(n.fromCssColorString("#90EE90")),n.LIGHTGREY=n.LIGHTGRAY,n.LIGHTPINK=Object.freeze(n.fromCssColorString("#FFB6C1")),n.LIGHTSEAGREEN=Object.freeze(n.fromCssColorString("#20B2AA")),n.LIGHTSKYBLUE=Object.freeze(n.fromCssColorString("#87CEFA")),n.LIGHTSLATEGRAY=Object.freeze(n.fromCssColorString("#778899")),n.LIGHTSLATEGREY=n.LIGHTSLATEGRAY,n.LIGHTSTEELBLUE=Object.freeze(n.fromCssColorString("#B0C4DE")),n.LIGHTYELLOW=Object.freeze(n.fromCssColorString("#FFFFE0")),n.LIME=Object.freeze(n.fromCssColorString("#00FF00")),n.LIMEGREEN=Object.freeze(n.fromCssColorString("#32CD32")),n.LINEN=Object.freeze(n.fromCssColorString("#FAF0E6")),n.MAGENTA=Object.freeze(n.fromCssColorString("#FF00FF")),n.MAROON=Object.freeze(n.fromCssColorString("#800000")),n.MEDIUMAQUAMARINE=Object.freeze(n.fromCssColorString("#66CDAA")),n.MEDIUMBLUE=Object.freeze(n.fromCssColorString("#0000CD")),n.MEDIUMORCHID=Object.freeze(n.fromCssColorString("#BA55D3")),n.MEDIUMPURPLE=Object.freeze(n.fromCssColorString("#9370DB")),n.MEDIUMSEAGREEN=Object.freeze(n.fromCssColorString("#3CB371")),n.MEDIUMSLATEBLUE=Object.freeze(n.fromCssColorString("#7B68EE")),n.MEDIUMSPRINGGREEN=Object.freeze(n.fromCssColorString("#00FA9A")),n.MEDIUMTURQUOISE=Object.freeze(n.fromCssColorString("#48D1CC")),n.MEDIUMVIOLETRED=Object.freeze(n.fromCssColorString("#C71585")),n.MIDNIGHTBLUE=Object.freeze(n.fromCssColorString("#191970")),n.MINTCREAM=Object.freeze(n.fromCssColorString("#F5FFFA")),n.MISTYROSE=Object.freeze(n.fromCssColorString("#FFE4E1")),n.MOCCASIN=Object.freeze(n.fromCssColorString("#FFE4B5")),n.NAVAJOWHITE=Object.freeze(n.fromCssColorString("#FFDEAD")),n.NAVY=Object.freeze(n.fromCssColorString("#000080")),n.OLDLACE=Object.freeze(n.fromCssColorString("#FDF5E6")),n.OLIVE=Object.freeze(n.fromCssColorString("#808000")),n.OLIVEDRAB=Object.freeze(n.fromCssColorString("#6B8E23")),n.ORANGE=Object.freeze(n.fromCssColorString("#FFA500")),n.ORANGERED=Object.freeze(n.fromCssColorString("#FF4500")),n.ORCHID=Object.freeze(n.fromCssColorString("#DA70D6")),n.PALEGOLDENROD=Object.freeze(n.fromCssColorString("#EEE8AA")),n.PALEGREEN=Object.freeze(n.fromCssColorString("#98FB98")),n.PALETURQUOISE=Object.freeze(n.fromCssColorString("#AFEEEE")),n.PALEVIOLETRED=Object.freeze(n.fromCssColorString("#DB7093")),n.PAPAYAWHIP=Object.freeze(n.fromCssColorString("#FFEFD5")),n.PEACHPUFF=Object.freeze(n.fromCssColorString("#FFDAB9")),n.PERU=Object.freeze(n.fromCssColorString("#CD853F")),n.PINK=Object.freeze(n.fromCssColorString("#FFC0CB")),n.PLUM=Object.freeze(n.fromCssColorString("#DDA0DD")),n.POWDERBLUE=Object.freeze(n.fromCssColorString("#B0E0E6")),n.PURPLE=Object.freeze(n.fromCssColorString("#800080")),n.RED=Object.freeze(n.fromCssColorString("#FF0000")),n.ROSYBROWN=Object.freeze(n.fromCssColorString("#BC8F8F")),n.ROYALBLUE=Object.freeze(n.fromCssColorString("#4169E1")),n.SADDLEBROWN=Object.freeze(n.fromCssColorString("#8B4513")),n.SALMON=Object.freeze(n.fromCssColorString("#FA8072")),n.SANDYBROWN=Object.freeze(n.fromCssColorString("#F4A460")),n.SEAGREEN=Object.freeze(n.fromCssColorString("#2E8B57")),n.SEASHELL=Object.freeze(n.fromCssColorString("#FFF5EE")),n.SIENNA=Object.freeze(n.fromCssColorString("#A0522D")),n.SILVER=Object.freeze(n.fromCssColorString("#C0C0C0")),n.SKYBLUE=Object.freeze(n.fromCssColorString("#87CEEB")),n.SLATEBLUE=Object.freeze(n.fromCssColorString("#6A5ACD")),n.SLATEGRAY=Object.freeze(n.fromCssColorString("#708090")),n.SLATEGREY=n.SLATEGRAY,n.SNOW=Object.freeze(n.fromCssColorString("#FFFAFA")),n.SPRINGGREEN=Object.freeze(n.fromCssColorString("#00FF7F")),n.STEELBLUE=Object.freeze(n.fromCssColorString("#4682B4")),n.TAN=Object.freeze(n.fromCssColorString("#D2B48C")),n.TEAL=Object.freeze(n.fromCssColorString("#008080")),n.THISTLE=Object.freeze(n.fromCssColorString("#D8BFD8")),n.TOMATO=Object.freeze(n.fromCssColorString("#FF6347")),n.TURQUOISE=Object.freeze(n.fromCssColorString("#40E0D0")),n.VIOLET=Object.freeze(n.fromCssColorString("#EE82EE")),n.WHEAT=Object.freeze(n.fromCssColorString("#F5DEB3")),n.WHITE=Object.freeze(n.fromCssColorString("#FFFFFF")),n.WHITESMOKE=Object.freeze(n.fromCssColorString("#F5F5F5")),n.YELLOW=Object.freeze(n.fromCssColorString("#FFFF00")),n.YELLOWGREEN=Object.freeze(n.fromCssColorString("#9ACD32")),n.TRANSPARENT=Object.freeze(new n(0,0,0,0)),e.Color=n}));
//# sourceMappingURL=Color-ce70a4a2.js.map
