/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.6.18
 * 编译日期：2023-12-31 22:41:58
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2023-03-17
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';const _0x45b96c=_0xebf0;(function(_0x1a51e3,_0x3f5052){const _0x5ce740={_0xfa6a73:0x101,_0x253a8c:0x124,_0x2d4321:0x119,_0x56d475:0x14a,_0x1552fc:0x11b,_0x3935b4:0x10e,_0x18cb35:0x132,_0x2c49e0:0x122},_0x23fb29=_0xebf0,_0x115e70=_0x1a51e3();while(!![]){try{const _0x31d371=-parseInt(_0x23fb29(0x156))/0x1*(-parseInt(_0x23fb29(_0x5ce740._0xfa6a73))/0x2)+parseInt(_0x23fb29(_0x5ce740._0x253a8c))/0x3*(parseInt(_0x23fb29(0xf3))/0x4)+-parseInt(_0x23fb29(_0x5ce740._0x2d4321))/0x5*(-parseInt(_0x23fb29(_0x5ce740._0x56d475))/0x6)+parseInt(_0x23fb29(_0x5ce740._0x1552fc))/0x7+parseInt(_0x23fb29(_0x5ce740._0x3935b4))/0x8+-parseInt(_0x23fb29(_0x5ce740._0x18cb35))/0x9+-parseInt(_0x23fb29(_0x5ce740._0x2c49e0))/0xa;if(_0x31d371===_0x3f5052)break;else _0x115e70['push'](_0x115e70['shift']());}catch(_0x46b8cb){_0x115e70['push'](_0x115e70['shift']());}}}(_0xacae,0x7f915));function _interopNamespace(_0x3e6c51){const _0x70710={_0x191a98:0x12f},_0x21164f={_0x1c4454:0xfd},_0x4671d6=_0xebf0;if(_0x3e6c51&&_0x3e6c51[_0x4671d6(_0x70710._0x191a98)])return _0x3e6c51;var _0x4cd204=Object['create'](null);return _0x3e6c51&&Object['keys'](_0x3e6c51)['forEach'](function(_0x2509a8){const _0x23d392=_0x4671d6;if(_0x2509a8!=='default'){var _0x390586=Object[_0x23d392(_0x21164f._0x1c4454)](_0x3e6c51,_0x2509a8);Object['defineProperty'](_0x4cd204,_0x2509a8,_0x390586['get']?_0x390586:{'enumerable':!![],'get':function(){return _0x3e6c51[_0x2509a8];}});}}),_0x4cd204['default']=_0x3e6c51,_0x4cd204;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function _0xacae(){const _0x222c24=['ymin','getHeight','147771CGfRqf','bind','destroy','click','context','_reset','canvas','forEach','_map','animatorMovestartEvent','map','animation','updateCallback','steps','dataSet','postRender','animatorMoveendEvent','_data','DataSet','methods','_onMoveStartEvent','clickEvent','pointerEvents','options','2016426FsAbYz','height','absolute','canvasLayer','width','SceneMode','render','get','_removedHook','push','cameraMoveStart','mapvFixedHeight','1DjGgaA','length','remove','COLOR_BUFFER_BIT','globe','_cache_event','mapvAutoHeight','mode','1334884sGkzFa','_mapVRenderer','_onMapClick','updateData','fillStyle','data','mars3d-mapv','mapvDepthTest','draw','parentElement','getOwnPropertyDescriptor','Polygon','baiduMapLayer','add','869446nVfOwB','clearData','FeatureCollection','getContext','mouseMove','scene','isEnabledTime','_onMapMouseMove','style','depthTest','rgba(0,\x200,\x200,\x20.1)','zIndex','clear','6888960PGxWqU','removeData','_setOptionsHook','MapVLayer','getData','save','xmin','off','geometry','setZIndex','unbindEvent','15NhkLzO','bindEvent','2559410HYsbwT','cameraMoveEnd','EventType','none','initDataRange','mapv','fromDegrees','27981920HkZLFy','initDevicePixelRatio','6fMDzUf','animator','coordinates','defined','all','top','DomUtil','_pointerEvents','0px','size','LayerUtil','__esModule'];_0xacae=function(){return _0x222c24;};return _0xacae();}function _0xebf0(_0x5f1e20,_0x93218d){const _0xacae4a=_0xacae();return _0xebf0=function(_0xebf0a5,_0x1d1523){_0xebf0a5=_0xebf0a5-0xef;let _0x349a9d=_0xacae4a[_0xebf0a5];return _0x349a9d;},_0xebf0(_0x5f1e20,_0x93218d);}const Cesium$1=mars3d__namespace['Cesium'],baiduMapLayer=mapv__namespace?mapv__namespace[_0x45b96c(0xff)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function;class MapVRenderer extends BaseLayer$1{constructor(_0x4aa3d8,_0x442f67,_0x479da5,_0x4fbc12){const _0x5b6e3d={_0x28059f:0x13c,_0x15cd30:0x123,_0x413daa:0x13d},_0x4afd5a=_0x45b96c;super(_0x4aa3d8,_0x442f67,_0x479da5);if(!BaseLayer$1)return;this[_0x4afd5a(_0x5b6e3d._0x28059f)]=_0x4aa3d8,this[_0x4afd5a(0x106)]=_0x4aa3d8['scene'],this['dataSet']=_0x442f67,_0x479da5=_0x479da5||{},this['init'](_0x479da5),this['argCheck'](_0x479da5),this[_0x4afd5a(_0x5b6e3d._0x15cd30)](),this['canvasLayer']=_0x4fbc12,this['stopAniamation']=!0x1,this[_0x4afd5a(_0x5b6e3d._0x413daa)]=_0x479da5['animation'];}['initDevicePixelRatio'](){this['devicePixelRatio']=window['devicePixelRatio']||0x1;}['addAnimatorEvent'](){}['animatorMovestartEvent'](){const _0x414f41={_0xa51ee4:0x13f},_0x45309e=_0x45b96c,_0x287e0e=this[_0x45309e(0x149)][_0x45309e(0x13d)];this['isEnabledTime']()&&this['animator']&&(this[_0x45309e(_0x414f41._0xa51ee4)]['step']=_0x287e0e['stepsRange']['start']);}[_0x45b96c(0x142)](){const _0x4382f1={_0x40fc79:0x107},_0x139193=_0x45b96c;this[_0x139193(_0x4382f1._0x40fc79)]()&&this['animator'];}['getContext'](){const _0xdaeec4=_0x45b96c;return this[_0xdaeec4(0x14d)]['canvas'][_0xdaeec4(0x104)](this['context']);}['init'](_0x1e6bb3){const _0x3a8578={_0x178c0e:0x11f,_0xf406a8:0x136,_0x51e19e:0x127,_0x121229:0x117},_0x56f887=_0x45b96c;this[_0x56f887(0x149)]=_0x1e6bb3,this[_0x56f887(_0x3a8578._0x178c0e)](_0x1e6bb3),this['context']=this['options'][_0x56f887(_0x3a8578._0xf406a8)]||'2d',Cesium$1[_0x56f887(_0x3a8578._0x51e19e)](this['options'][_0x56f887(0x10c)])&&this['canvasLayer']&&this[_0x56f887(0x14d)][_0x56f887(_0x3a8578._0x121229)]&&this[_0x56f887(0x14d)]['setZIndex'](this[_0x56f887(0x149)]['zIndex']),this['initAnimator']();}['_canvasUpdate'](_0x194275){const _0x59d6bd={_0x5dbad9:0x136,_0x4d6f6b:0x113,_0x1b9ea1:0xf7,_0x42b977:0x159,_0x340043:0x151,_0x4aaa73:0x12d,_0x3f39fa:0x144,_0x42a451:0x149,_0x297160:0x13e},_0x444424={_0x57e3e1:0x131,_0x21c36e:0xfa,_0x31831c:0x14f},_0x1c76c6=_0x45b96c,_0xbabd4a=this['scene'];if(this['canvasLayer']&&!this['stopAniamation']){const _0x107937=this['options']['animation'],_0x554bfa=this['getContext']();if(this['isEnabledTime']()){if(void 0x0===_0x194275)return void this[_0x1c76c6(0x10d)](_0x554bfa);this[_0x1c76c6(_0x59d6bd._0x5dbad9)]==='2d'&&(_0x554bfa[_0x1c76c6(_0x59d6bd._0x4d6f6b)](),_0x554bfa['globalCompositeOperation']='destination-out',_0x554bfa[_0x1c76c6(_0x59d6bd._0x1b9ea1)]=_0x1c76c6(0x10b),_0x554bfa['fillRect'](0x0,0x0,_0x554bfa[_0x1c76c6(0x138)]['width'],_0x554bfa['canvas'][_0x1c76c6(0x14b)]),_0x554bfa['restore']());}else this['clear'](_0x554bfa);if(this['context']==='2d')for(const _0x3cfcad in this['options']){_0x554bfa[_0x3cfcad]=this[_0x1c76c6(0x149)][_0x3cfcad];}else _0x554bfa['clear'](_0x554bfa[_0x1c76c6(_0x59d6bd._0x42b977)]);const _0x38e3fc={'transferCoordinate':function(_0x328246){const _0x407bc0=_0x1c76c6,_0x2b6eba=null;let _0x1f532e=_0xbabd4a['mapvFixedHeight'];_0xbabd4a['mapvAutoHeight']&&(_0x1f532e=_0xbabd4a['globe'][_0x407bc0(_0x444424._0x57e3e1)](Cesium$1['Cartographic'][_0x407bc0(0x121)](_0x328246[0x0],_0x328246[0x1])));const _0x56b90d=Cesium$1['Cartesian3'][_0x407bc0(0x121)](_0x328246[0x0],_0x328246[0x1],_0x1f532e);if(!_0x56b90d)return _0x2b6eba;const _0x1ecb1c=_0xbabd4a['cartesianToCanvasCoordinates'](_0x56b90d);if(!_0x1ecb1c)return _0x2b6eba;if(_0xbabd4a[_0x407bc0(_0x444424._0x21c36e)]&&_0xbabd4a[_0x407bc0(0xf2)]===Cesium$1[_0x407bc0(_0x444424._0x31831c)]['SCENE3D']){const _0x563637=new Cesium$1['EllipsoidalOccluder'](_0xbabd4a[_0x407bc0(0xef)]['ellipsoid'],_0xbabd4a['camera']['positionWC']),_0x425369=_0x563637['isPointVisible'](_0x56b90d);if(!_0x425369)return _0x2b6eba;}return[_0x1ecb1c['x'],_0x1ecb1c['y']];}};void 0x0!==_0x194275&&(_0x38e3fc['filter']=function(_0x49eb89){const _0x625533=_0x107937['trails']||0xa;return!!(_0x194275&&_0x49eb89['time']>_0x194275-_0x625533&&_0x49eb89['time']<_0x194275);});const _0x2b6db4=this['dataSet'][_0x1c76c6(_0x59d6bd._0x340043)](_0x38e3fc);this['processData'](_0x2b6db4),this['options']['unit']==='m'&&this['options']['size'],this['options']['_size']=this['options'][_0x1c76c6(_0x59d6bd._0x4aaa73)];const _0x386a80=_0xbabd4a['cartesianToCanvasCoordinates'](Cesium$1['Cartesian3']['fromDegrees'](0x0,0x0));if(!_0x386a80)return;this['drawContext'](_0x554bfa,new mapv__namespace[(_0x1c76c6(_0x59d6bd._0x3f39fa))](_0x2b6db4),this['options'],_0x386a80),this[_0x1c76c6(_0x59d6bd._0x42a451)]['updateCallback']&&this['options'][_0x1c76c6(_0x59d6bd._0x297160)](_0x194275);}}['updateData'](_0x3d6ae2,_0x3638b2){const _0x5baed0={_0x28fbed:0x151,_0x1cdab9:0x140},_0x287f7c=_0x45b96c;let _0x524b83=_0x3d6ae2;_0x524b83&&_0x524b83[_0x287f7c(0x151)]&&(_0x524b83=_0x524b83[_0x287f7c(_0x5baed0._0x28fbed)]()),void 0x0!==_0x524b83&&this[_0x287f7c(_0x5baed0._0x1cdab9)]['set'](_0x524b83),super['update']({'options':_0x3638b2});}['addData'](_0xc0c326,_0x5bd125){const _0x37047d={_0x5b58f4:0x100},_0x533848=_0x45b96c;let _0x3ea219=_0xc0c326;_0xc0c326&&_0xc0c326['get']&&(_0x3ea219=_0xc0c326['get']()),this['dataSet'][_0x533848(_0x37047d._0x5b58f4)](_0x3ea219),this['update']({'options':_0x5bd125});}[_0x45b96c(0x112)](){return this['dataSet'];}[_0x45b96c(0x10f)](_0x3a89e2){const _0x28f13f={_0x1db219:0x140},_0x16a786=_0x45b96c;if(this[_0x16a786(_0x28f13f._0x1db219)]){const _0x178bbb=this[_0x16a786(_0x28f13f._0x1db219)]['get']({'filter':function(_0x34e84f){return _0x3a89e2==null||typeof _0x3a89e2!=='function'||!_0x3a89e2(_0x34e84f);}});this['dataSet']['set'](_0x178bbb),this['update']({'options':null});}}['clearData'](){const _0x362f0c=_0x45b96c;this['dataSet']&&this['dataSet'][_0x362f0c(0x10d)](),this['update']({'options':null});}['draw'](){const _0x452341=_0x45b96c;this['canvasLayer'][_0x452341(0xfb)]();}['clear'](_0x42758a){const _0x2f0817={_0x51f37a:0x138},_0x37fb2a=_0x45b96c;_0x42758a&&_0x42758a['clearRect']&&_0x42758a['clearRect'](0x0,0x0,_0x42758a['canvas']['width'],_0x42758a[_0x37fb2a(_0x2f0817._0x51f37a)][_0x37fb2a(0x14b)]);}['destroy'](){const _0x5ac78b={_0x740d5:0x104,_0x20092a:0x102},_0x7ff33f=_0x45b96c;this['clear'](this[_0x7ff33f(_0x5ac78b._0x740d5)]()),this[_0x7ff33f(_0x5ac78b._0x20092a)](),this['animator']&&this[_0x7ff33f(0x125)]['stop'](),this['animator']=null,this[_0x7ff33f(0x14d)]=null;}}if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace['DataSet'])mapv__namespace[_0x45b96c(0x144)]['prototype']['transferCoordinate']=function(_0x46e733,_0x5d97be,_0x34771c,_0x5ce3c3){const _0x3fb54b={_0x407083:0x126,_0x47db3a:0x116,_0xd9c4af:0xfe},_0x5188f2={_0x1a821f:0x153},_0x33336f=_0x45b96c;_0x5ce3c3=_0x5ce3c3||'_coordinates',_0x34771c=_0x34771c||_0x33336f(_0x3fb54b._0x407083);for(let _0x39f0a3=0x0;_0x39f0a3<_0x46e733['length'];_0x39f0a3++){const _0x266e38=_0x46e733[_0x39f0a3][_0x33336f(_0x3fb54b._0x47db3a)],_0x3b29fd=_0x266e38[_0x34771c];switch(_0x266e38['type']){case'Point':{const _0x289e1e=_0x5d97be(_0x3b29fd);_0x289e1e?_0x266e38[_0x5ce3c3]=_0x289e1e:_0x266e38[_0x5ce3c3]=[-0x3e7,-0x3e7];}break;case'LineString':{const _0x2ef44e=[];for(let _0x84f16f=0x0;_0x84f16f<_0x3b29fd['length'];_0x84f16f++){const _0x233000=_0x5d97be(_0x3b29fd[_0x84f16f]);_0x233000&&_0x2ef44e['push'](_0x233000);}_0x266e38[_0x5ce3c3]=_0x2ef44e;}break;case'MultiLineString':case _0x33336f(_0x3fb54b._0xd9c4af):{const _0x5edbb6=_0x280fb0(_0x3b29fd);_0x266e38[_0x5ce3c3]=_0x5edbb6;}break;case'MultiPolygon':{const _0x4e1130=[];for(let _0x4a6f77=0x0;_0x4a6f77<_0x3b29fd['length'];_0x4a6f77++){const _0xbfeb39=_0x280fb0(_0x3b29fd[_0x4a6f77]);_0xbfeb39['length']>0x0&&_0x4e1130['push'](_0xbfeb39);}_0x266e38[_0x5ce3c3]=_0x4e1130;}break;}}function _0x280fb0(_0x34720c){const _0x5f3958=_0x33336f,_0x21f605=[];for(let _0x491ea2=0x0;_0x491ea2<_0x34720c['length'];_0x491ea2++){const _0x458560=_0x34720c[_0x491ea2],_0x592d11=[];for(let _0x13d25a=0x0;_0x13d25a<_0x458560[_0x5f3958(0x157)];_0x13d25a++){const _0x11caf=_0x5d97be(_0x458560[_0x13d25a]);_0x11caf&&_0x592d11[_0x5f3958(0x153)](_0x11caf);}_0x592d11['length']>0x0&&_0x21f605[_0x5f3958(_0x5188f2._0x1a821f)](_0x592d11);}return _0x21f605;}return _0x46e733;};else throw new Error('请引入\x20mapv\x20库\x20');const Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace['layer']['BaseLayer'];class MapVLayer extends BaseLayer{constructor(_0x307c9b,_0x5cbf9){const _0x4cb545={_0x41e987:0x12b,_0x1f7831:0x149,_0x55f940:0x140,_0x21cd64:0xf8,_0x11a115:0x138},_0x5efd77=_0x45b96c;super(_0x307c9b),this[_0x5efd77(_0x4cb545._0x41e987)]=this[_0x5efd77(_0x4cb545._0x1f7831)]['pointerEvents'],this[_0x5efd77(_0x4cb545._0x55f940)]=_0x5cbf9||new mapv__namespace['DataSet'](_0x307c9b[_0x5efd77(_0x4cb545._0x21cd64)]),this[_0x5efd77(_0x4cb545._0x11a115)]=null;}get[_0x45b96c(0x148)](){return this['_pointerEvents'];}set['pointerEvents'](_0x414a45){const _0x2d94c9={_0x470591:0x128},_0x5d6075=_0x45b96c;this['_pointerEvents']=_0x414a45,this['canvas']&&(_0x414a45?this['canvas']['style']['pointerEvents']=_0x5d6075(_0x2d94c9._0x470591):this[_0x5d6075(0x138)]['style']['pointerEvents']=_0x5d6075(0x11e));}['_showHook'](_0x14e871){const _0x292211={_0x389fdf:0x138},_0x9bf2b5=_0x45b96c;_0x14e871?this[_0x9bf2b5(_0x292211._0x389fdf)]['style']['display']='block':this['canvas'][_0x9bf2b5(0x109)]['display']='none';}['_mountedHook'](){const _0x509e3c={_0x503198:0xf1},_0x2735e7=_0x45b96c;this['_map']['scene']['mapvDepthTest']=this['options'][_0x2735e7(0x10a)]??!![],this['_map']['scene'][_0x2735e7(_0x509e3c._0x503198)]=this['options']['clampToGround']??![],this['_map']['scene'][_0x2735e7(0x155)]=this[_0x2735e7(0x149)]['fixedHeight']??0x0;}['_addedHook'](){const _0x5d84fc={_0x4b416b:0x140,_0x47244c:0x143,_0x5b935b:0x157,_0x343242:0x138},_0xa0da7=_0x45b96c;this[_0xa0da7(_0x5d84fc._0x4b416b)]&&(!this['dataSet']['_data']||this['dataSet'][_0xa0da7(_0x5d84fc._0x47244c)][_0xa0da7(_0x5d84fc._0x5b935b)]===0x0)&&(this['dataSet']['_data']=[]['concat'](this['dataSet']['_dataCache'])),this['_mapVRenderer']=new MapVRenderer(this['_map'],this['dataSet'],this['options'],this),this['initDevicePixelRatio'](),this[_0xa0da7(_0x5d84fc._0x343242)]=this['_createCanvas'](),this['render']=this['render']['bind'](this),this[_0xa0da7(0x11a)](),this['_reset']();}[_0x45b96c(0x152)](){const _0x4ac736={_0x192245:0xf4},_0x560004=_0x45b96c;this['unbindEvent'](),this[_0x560004(_0x4ac736._0x192245)]&&(this['_mapVRenderer']['destroy'](),this[_0x560004(0xf4)]=null),this[_0x560004(0x138)][_0x560004(0xfc)]['removeChild'](this[_0x560004(0x138)]);}['initDevicePixelRatio'](){this['devicePixelRatio']=window['devicePixelRatio']||0x1;}['bindEvent'](){const _0x11c1d4={_0xe28a69:0x11d,_0x3adc42:0x108},_0x411af9=_0x45b96c;var _0x1781fa,_0x4c1175;this['_map']['on'](mars3d__namespace['EventType']['mouseDown'],this[_0x411af9(0x146)],this),this['_map']['on'](mars3d__namespace[_0x411af9(_0x11c1d4._0xe28a69)]['cameraMoveStart'],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace['EventType'][_0x411af9(0x11c)],this['_onMoveEndEvent'],this),(_0x1781fa=this['options'])!==null&&_0x1781fa!==void 0x0&&(_0x1781fa=_0x1781fa['methods'])!==null&&_0x1781fa!==void 0x0&&_0x1781fa['click']&&this['_map']['on'](mars3d__namespace['EventType']['click'],this[_0x411af9(0xf5)],this),(_0x4c1175=this[_0x411af9(0x149)])!==null&&_0x4c1175!==void 0x0&&(_0x4c1175=_0x4c1175['methods'])!==null&&_0x4c1175!==void 0x0&&_0x4c1175['mousemove']&&this['_map']['on'](mars3d__namespace['EventType']['mouseMove'],this[_0x411af9(_0x11c1d4._0x3adc42)],this);}[_0x45b96c(0x118)](){const _0xc8b2b0={_0xe92a64:0x13a,_0x30a4a:0x13a,_0x2aa672:0x115,_0x12213f:0x105},_0x492bab=_0x45b96c;var _0x448765,_0x37cd32;this[_0x492bab(_0xc8b2b0._0xe92a64)]['off'](mars3d__namespace['EventType']['mouseDown'],this['_onMoveStartEvent'],this),this[_0x492bab(_0xc8b2b0._0x30a4a)][_0x492bab(_0xc8b2b0._0x2aa672)](mars3d__namespace['EventType'][_0x492bab(0x154)],this['_onMoveStartEvent'],this),this['_map']['off'](mars3d__namespace[_0x492bab(0x11d)]['cameraMoveEnd'],this['_onMoveEndEvent'],this),this['_map']['off'](mars3d__namespace['EventType']['postRender'],this['_reset'],this),(_0x448765=this['options'])!==null&&_0x448765!==void 0x0&&(_0x448765=_0x448765['methods'])!==null&&_0x448765!==void 0x0&&_0x448765[_0x492bab(0x135)]&&this[_0x492bab(0x13a)]['off'](mars3d__namespace[_0x492bab(0x11d)]['click'],this['_onMapClick'],this),(_0x37cd32=this[_0x492bab(0x149)])!==null&&_0x37cd32!==void 0x0&&(_0x37cd32=_0x37cd32[_0x492bab(0x145)])!==null&&_0x37cd32!==void 0x0&&_0x37cd32['mousemove']&&this['_map']['off'](mars3d__namespace[_0x492bab(0x11d)][_0x492bab(_0xc8b2b0._0x12213f)],this['_onMapMouseMove'],this);}['_onMoveStartEvent'](){const _0x3800dc={_0x3b31ae:0x13b,_0x3b0c3c:0x141,_0x5c4ed4:0x13a},_0x4763f6=_0x45b96c;this['_mapVRenderer']&&(this['_mapVRenderer'][_0x4763f6(_0x3800dc._0x3b31ae)](),this[_0x4763f6(0x13a)]['off'](mars3d__namespace[_0x4763f6(0x11d)][_0x4763f6(_0x3800dc._0x3b0c3c)],this[_0x4763f6(0x137)],this),this[_0x4763f6(_0x3800dc._0x5c4ed4)]['on'](mars3d__namespace['EventType'][_0x4763f6(0x141)],this['_reset'],this));}['_onMoveEndEvent'](){const _0x95e122={_0x14db36:0x137,_0x1b97bf:0x142},_0x62cf0e=_0x45b96c;this['_mapVRenderer']&&(this['_map'][_0x62cf0e(0x115)](mars3d__namespace['EventType']['postRender'],this[_0x62cf0e(_0x95e122._0x14db36)],this),this['_mapVRenderer'][_0x62cf0e(_0x95e122._0x1b97bf)](),this[_0x62cf0e(0x137)]());}[_0x45b96c(0x110)](_0x20b8b3,_0x4489b6){const _0x1601cd=_0x45b96c;this[_0x1601cd(0x152)](),this['_addedHook']();}['addData'](_0x5d41d7){const _0x37b9cb={_0x1b88d3:0xf4},_0x27251d=_0x45b96c;this[_0x27251d(_0x37b9cb._0x1b88d3)]&&this[_0x27251d(0xf4)]['addData'](_0x5d41d7,this['options']);}['updateData'](_0xf44a03){const _0x539d24=_0x45b96c;this[_0x539d24(0xf4)]&&this['_mapVRenderer'][_0x539d24(0xf6)](_0xf44a03,this[_0x539d24(0x149)]);}['getData'](){const _0x186057={_0x1fbfe9:0xf4,_0x58c177:0x140},_0x3d51f5=_0x45b96c;return this[_0x3d51f5(_0x186057._0x1fbfe9)]&&(this[_0x3d51f5(_0x186057._0x58c177)]=this['_mapVRenderer']['getData']()),this[_0x3d51f5(0x140)];}['removeData'](_0x52a81d){this['_mapVRenderer']&&this['_mapVRenderer']['removeData'](_0x52a81d);}['removeAllData'](){const _0x3f845f=_0x45b96c;this['_mapVRenderer']&&this['_mapVRenderer'][_0x3f845f(0x102)]();}['_createCanvas'](){const _0x156c30={_0x5d02b0:0x12a,_0x497485:0x14c,_0x38d5a2:0x109,_0x5d5d09:0x129,_0x116de3:0x14e,_0x1f50ff:0x14b},_0x4b8d88=_0x45b96c,_0x174729=mars3d__namespace[_0x4b8d88(_0x156c30._0x5d02b0)]['create']('canvas',_0x4b8d88(0xf9),this['_map']['container']);_0x174729['id']=this['id'],_0x174729['style']['position']=_0x4b8d88(_0x156c30._0x497485),_0x174729[_0x4b8d88(_0x156c30._0x38d5a2)][_0x4b8d88(_0x156c30._0x5d5d09)]=_0x4b8d88(0x12c),_0x174729['style']['left']='0px',_0x174729['width']=parseInt(this['_map']['canvas'][_0x4b8d88(_0x156c30._0x116de3)]),_0x174729[_0x4b8d88(_0x156c30._0x1f50ff)]=parseInt(this['_map'][_0x4b8d88(0x138)]['height']),_0x174729['style']['width']=this['_map'][_0x4b8d88(0x138)][_0x4b8d88(0x109)]['width'],_0x174729[_0x4b8d88(_0x156c30._0x38d5a2)]['height']=this['_map']['canvas']['style']['height'],_0x174729['style'][_0x4b8d88(0x148)]=this[_0x4b8d88(0x12b)]?'auto':_0x4b8d88(0x11e),_0x174729['style']['zIndex']=this[_0x4b8d88(0x149)][_0x4b8d88(0x10c)]??0x9;if(this['options']['context']==='2d'){const _0xf5468e=this['devicePixelRatio'];_0x174729['getContext'](this['options']['context'])['scale'](_0xf5468e,_0xf5468e);}return _0x174729;}['_reset'](){const _0x5e8c3a={_0x1291f0:0x150},_0x4be6a9=_0x45b96c;this['resize'](),this[_0x4be6a9(_0x5e8c3a._0x1291f0)]();}[_0x45b96c(0xfb)](){this['_reset']();}[_0x45b96c(0x158)](){const _0x2de7ff={_0x30e564:0x134,_0x1ac190:0xf4,_0x54dbbe:0x138},_0x40942e=_0x45b96c;this['_mapVRenderer']&&(this['_mapVRenderer'][_0x40942e(_0x2de7ff._0x30e564)](),this[_0x40942e(_0x2de7ff._0x1ac190)]=null),this[_0x40942e(_0x2de7ff._0x54dbbe)]['parentElement']['removeChild'](this[_0x40942e(_0x2de7ff._0x54dbbe)]);}['render'](){this['_mapVRenderer']['_canvasUpdate']();}['resize'](){const _0x3fc06e={_0x247d45:0x138,_0x3e71a1:0x109,_0x14c0f2:0x13a,_0x1f63c1:0x14e,_0x9d558c:0x14b},_0x43b359=_0x45b96c;if(this[_0x43b359(_0x3fc06e._0x247d45)]){const _0x3acde4=this['canvas'];_0x3acde4[_0x43b359(0x109)]['position']=_0x43b359(0x14c),_0x3acde4['style']['top']='0px',_0x3acde4[_0x43b359(_0x3fc06e._0x3e71a1)]['left']='0px',_0x3acde4['width']=parseInt(this['_map']['canvas']['width']),_0x3acde4['height']=parseInt(this[_0x43b359(_0x3fc06e._0x14c0f2)]['canvas']['height']),_0x3acde4['style'][_0x43b359(_0x3fc06e._0x1f63c1)]=this['_map']['canvas']['style']['width'],_0x3acde4['style']['height']=this['_map']['canvas']['style'][_0x43b359(_0x3fc06e._0x9d558c)];}}['getRectangle'](_0x3306cd){const _0x274a7c={_0x209fe7:0x140,_0x31245d:0x114,_0x213d83:0x130},_0x322278=_0x45b96c;if(!this[_0x322278(_0x274a7c._0x209fe7)]||!this[_0x322278(0x140)]['_data'])return;const _0x466df3=mars3d__namespace['Util']['getExtentByGeoJSON']({'type':_0x322278(0x103),'features':this['dataSet']['_data']});if(!_0x466df3)return;return _0x3306cd!==null&&_0x3306cd!==void 0x0&&_0x3306cd['isFormat']?_0x466df3:Cesium['Rectangle']['fromDegrees'](_0x466df3[_0x322278(_0x274a7c._0x31245d)],_0x466df3[_0x322278(_0x274a7c._0x213d83)],_0x466df3['xmax'],_0x466df3['ymax']);}[_0x45b96c(0xf5)](_0x45e07a){const _0x2216cc={_0x339ec5:0x147},_0x2dd867=_0x45b96c;this['_cache_event']=_0x45e07a,this['_mapVRenderer']&&this['_mapVRenderer'][_0x2dd867(_0x2216cc._0x339ec5)](_0x45e07a['windowPosition'],_0x45e07a);}['_onMapMouseMove'](_0x27bd0e){const _0x1bf4f8=_0x45b96c;this['_cache_event']=_0x27bd0e,this[_0x1bf4f8(0xf4)]&&this['_mapVRenderer']['mousemoveEvent'](_0x27bd0e['windowPosition'],_0x27bd0e);}['on'](_0x2a5bb5,_0x10636e,_0x19bd9e){const _0x90ee79={_0x4453fd:0x149,_0xd1d769:0x149,_0x1b6d4c:0x135,_0x2a6fc2:0xf5,_0x19d505:0x11d,_0x1db179:0x13a,_0x3e6f40:0x108},_0x1fa225={_0x178ed0:0xf0},_0x12f3b0={_0x52c4d4:0x133,_0x138834:0xf0},_0x1c4c29=_0x45b96c;this[_0x1c4c29(_0x90ee79._0x4453fd)]['methods']=this[_0x1c4c29(0x149)]['methods']||{};if(_0x2a5bb5===mars3d__namespace[_0x1c4c29(0x11d)]['click'])this[_0x1c4c29(_0x90ee79._0xd1d769)]['methods']['click']=_0x5e5017=>{const _0x20aca3=_0x1c4c29;_0x5e5017&&_0x10636e[_0x20aca3(_0x12f3b0._0x52c4d4)](_0x19bd9e)({...this[_0x20aca3(_0x12f3b0._0x138834)],'layer':this,'data':_0x5e5017});},this['_map']['on'](mars3d__namespace['EventType'][_0x1c4c29(_0x90ee79._0x1b6d4c)],this[_0x1c4c29(_0x90ee79._0x2a6fc2)],this);else _0x2a5bb5===mars3d__namespace[_0x1c4c29(_0x90ee79._0x19d505)][_0x1c4c29(0x105)]&&(this['options'][_0x1c4c29(0x145)]['mousemove']=_0x168a02=>{const _0x47bf9c=_0x1c4c29;_0x168a02&&_0x10636e['bind'](_0x19bd9e)({...this[_0x47bf9c(_0x1fa225._0x178ed0)],'layer':this,'data':_0x168a02});},this[_0x1c4c29(_0x90ee79._0x1db179)]['on'](mars3d__namespace[_0x1c4c29(0x11d)]['mouseMove'],this[_0x1c4c29(_0x90ee79._0x3e6f40)],this));return this;}['off'](_0x5ceaeb,_0x23add2){const _0x27e853={_0x18640:0x13a,_0x2885e5:0x115,_0x4fad7f:0x149,_0xa6a550:0x145,_0x1f9f7f:0x135,_0x6b7547:0x13a},_0xe4cb9b=_0x45b96c;if(_0x5ceaeb==='click'){var _0x17b1b0;this[_0xe4cb9b(_0x27e853._0x18640)][_0xe4cb9b(_0x27e853._0x2885e5)](_0x5ceaeb,this['_onMapClick'],this),(_0x17b1b0=this[_0xe4cb9b(_0x27e853._0x4fad7f)][_0xe4cb9b(_0x27e853._0xa6a550)])!==null&&_0x17b1b0!==void 0x0&&_0x17b1b0['mousemove']&&delete this['options']['methods'][_0xe4cb9b(_0x27e853._0x1f9f7f)];}else{if(_0x5ceaeb===_0xe4cb9b(0x105)){var _0x12872a;this[_0xe4cb9b(_0x27e853._0x6b7547)][_0xe4cb9b(_0x27e853._0x2885e5)](_0x5ceaeb,this['_onMapMouseMove'],this),(_0x12872a=this['options']['methods'])!==null&&_0x12872a!==void 0x0&&_0x12872a['mousemove']&&delete this['options']['methods']['mousemove'];}}return this;}}mars3d__namespace[_0x45b96c(0x12e)]['register']('mapv',MapVLayer),mars3d__namespace['layer'][_0x45b96c(0x111)]=MapVLayer,mars3d__namespace[_0x45b96c(0x120)]=mapv__namespace,exports['MapVLayer']=MapVLayer,Object['keys'](mapv)[_0x45b96c(0x139)](function(_0x24e842){if(_0x24e842!=='default'&&!exports['hasOwnProperty'](_0x24e842))Object['defineProperty'](exports,_0x24e842,{'enumerable':!![],'get':function(){return mapv[_0x24e842];}});}),Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));
