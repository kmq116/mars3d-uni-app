<template>
  <view class="content">
    <!-- #ifdef APP-PLUS || H5 -->
    <!--    这里有个坑，就是必须使用 view 组件，而不能使用 div-->
    <view id="mars3dContainer" :prop="option" :change:prop="mars3d.updateCesium" class="mars3d-container"></view>
        <popup style="position: absolute;z-index: 10;right:0"></popup>
    <!-- #endif -->
    <!-- #ifndef APP-PLUS || H5 -->
    <web-view :src="url"></web-view>
    <!-- #endif -->
  </view>
</template>
<script>
import {CesiumEmitter, emitter} from "./cesiumEmitter";
import Popup from "./popup.vue";


export default {
  components: {Popup},
  data() {
    return {
      option: {
        type: 'default',
        params: {}
      },
    }
  },
  mounted() {
    // 在这里订阅发布的 mitter 事件

    emitter.on(CesiumEmitter.cesium, ({type, params}) => {
      console.log('收到 mitter 发布的事件')
      this.option = {
        type, params
      }
      console.log('收到 mitter 发布的事件', this.option)
    })
  },
  methods: {
    cesiumCallback(data) {
      console.log(data, 'cesiumCallback 的参数')
      emitter.emit(CesiumEmitter.test, data)
    }
  }
}
</script>
<script module="mars3d" lang="renderjs">
import { mapOptions } from './config.js'
import { BusinessLogic } from 'business-logic'
import { setupCesium, initCesium, injectBusinessLogic } from 'mars3d-cesium-wrapper'
// 添加 replaceAll 的 polyfill 有些安卓机的 js 引擎没有这个 api
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }
    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

export default {
  data() {
    return {
      url: 'http://mars3d.cn/project/app/'
    }
  },
  mounted() {
    this.loadSource([
      //用本地地址，并可以官网下载最新包，手动覆盖下，http://mars3d.cn/download.html
      "static/lib/Cesium/Widgets/widgets.css",
      "static/lib/Cesium/Cesium.js",
      "static/lib/mars3d/mars3d.css",
      "static/lib/mars3d/mars3d.js",
      "static/css/style.css",

      //用在线地址
      // "http://mars3d.cn/lib/Cesium/Widgets/widgets.css",
      // "http://mars3d.cn/lib/Cesium/Cesium.js",
      // "http://mars3d.cn/lib/mars3d/mars3d.css",
      // "http://mars3d.cn/lib/mars3d/mars3d.js",
      // "static/css/style.css",
    ]).then(() => {
      this.rewriteCesiumSources(Cesium);
      this.createMap()
    })
  },
  methods: {
    updateCesium(newValue, oldValue, ownerInstance, instance) {
      console.log('updateData rederjs 层的数据', newValue)
    },
    //创建地图
    createMap() {
      const Cesium = mars3d.Cesium;
      initCesium({cesium: Cesium, _mars3d: mars3d})
      const map = setupCesium({container: 'mars3dContainer', mapOptions})
      console.log("map构造完成", map)
      const businessLogic = new BusinessLogic()
      injectBusinessLogic({viewer: map.viewer, mars3d, Cesium, map, $ownerInstance: this.$ownerInstance}, businessLogic)
      // 创建矢量数据图层
      // let graphicLayer = new mars3d.layer.GraphicLayer({
      //   allowDrillPick: true // 如果存在坐标完全相同的图标点，可以打开该属性，click事件通过graphics判断
      // })
      // map.addLayer(graphicLayer)
// // 添加谷歌地图图层
//       var googleMapsImageryProvider = new Cesium.UrlTemplateImageryProvider({
//         url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
//         credit: 'Google Maps'
//       });
//
//
//       viewer.imageryLayers.addImageryProvider(googleMapsImageryProvider);

      //测试本地图片
      // const graphic = new mars3d.graphic.BillboardEntity({
      //   position: [117.229619, 31.686288, 1000],
      //   style: {
      //     image: "static/img/mark-red.png",
      //     horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      //     verticalOrigin: Cesium.VerticalOrigin.BOTTOM
      //   },
      //   attr: {
      //     remark: "示例1"
      //   }
      // })
      // graphicLayer.addGraphic(graphic)
      // graphic.on(mars3d.EventType.click, () => {
      //   // 注意，这里不能传函数
      //   this.$ownerInstance.callMethod('cesiumCallback', '点击了对象')
      // })
    },

    //重写cesium接口
    rewriteCesiumSources(Cesium) {
      const loadImageElement_old = Cesium.Resource._Implementations.loadImageElement;
      Cesium.Resource._Implementations.loadImageElement = function (url, crossOrigin, deferred) {
        // 修改本地file本地文件需要设置跨域（uniapp环境等）
        if (url.startsWith('file')) {
          crossOrigin = true;
        }
        if (!url.startsWith('http')) {
          crossOrigin = true;
        }

        return loadImageElement_old(url, crossOrigin, deferred);
      };

      const contains_old = Cesium.TrustedServers.contains;
      Cesium.TrustedServers.contains = function (url) {
        // 修改本地file本地文件需要设置跨域（uniapp环境等）
        if (url.startsWith('file')) {
          return false;
        }
        return contains_old.bind(this)(url);
      };
    },

    // 加载资源
    loadSource(loadQueen) {
      const stepOne = (resolve) => {
        if (loadQueen.length) {
          const dep = loadQueen.shift()

          let loader
          if (dep.endsWith(".css")) {
            loader = this.loadLink(dep)
          } else {
            loader = this.loadScript(dep)
          }

          loader.then(() => {
            stepOne(resolve)
          })
        } else {
          resolve(true)
        }
      }

      return new Promise((resolve) => {
        stepOne(resolve)
      })
    },

    // 加载scrpit
    loadScript(src, async = true) {
      const $script = document.createElement("script")
      $script.async = async
      $script.src = src
      document.body.appendChild($script)
      return new Promise((resolve, reject) => {
        $script.onload = () => {
          resolve(true)
        }
      })
    },

    // 加载scrpit
    loadLink(src) {
      const $link = document.createElement("link")
      $link.rel = "stylesheet"
      $link.href = src
      document.head.appendChild($link)
      return new Promise((resolve, reject) => {
        $link.onload = () => {
          resolve(true)
        }
      })
    }

  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
