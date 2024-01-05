<template>
  <view class="content">
    <!-- #ifdef APP-PLUS || H5 -->
    <div id="mars3dContainer" class="mars3d-container"></div>
    <!-- #endif -->
    <!-- #ifndef APP-PLUS || H5 -->
    <web-view :src="url"></web-view>
    <!-- #endif -->
  </view>
</template>

<script module="mars3d" lang="renderjs">
import { mapOptions } from './config.js'

export default {
	data() {
		return {
			url: 'http://mars3d.cn/project/app/'
		}
	},
	mounted() {
		this.loadSource([
			//用本地地址
			"static/lib/Cesium/Widgets/widgets.css",
			"static/lib/Cesium/Cesium.js",
			"static/lib/mars3d/mars3d.css",
			"static/lib/mars3d/mars3d.js",
			//用在线地址
			//"http://mars3d.cn/lib/Cesium/Widgets/widgets.css",
			//"http://mars3d.cn/lib/Cesium/Cesium.js",
			//"http://mars3d.cn/lib/mars3d/mars3d.css",
			//"http://mars3d.cn/lib/mars3d/mars3d.js",
		]).then(() => {
			this.createMap()
		})
	},
	methods: {
		//创建地图
		createMap() {
			var map = new mars3d.Map('mars3dContainer', mapOptions);
      console.log(Object.keys(mars3d.layer))
      // 创建DIV数据图层
      let graphicLayer = new mars3d.layer.GraphicLayer()
      map.addLayer(graphicLayer)
			console.log("map构造完成", map)
      addDemoGraphic11(graphicLayer)
      function addDemoGraphic11(graphicLayer) {
        const graphic = new mars3d.graphic.BillboardEntity({
          position: new mars3d.LngLatPoint(117.096703, 31.81226, 1000),
          style: {
            // 支持base64
            image:
                "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2ad4.png",
            scale: 0.5,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.CENTER
          },
          attr: { remark: "示例11" }
        })
        graphicLayer.addGraphic(graphic)
      }
      function addDemoGraphic1(graphicLayer) {
        const arrData = [
          { name: "油罐一", position: [117.09521, 31.814404, 47.3] },
          { name: "油罐二", position: [117.095206, 31.814878, 47.3] },
          { name: "油罐三", position: [117.094653, 31.814428, 47.3] },
          { name: "发电机", position: [117.093428, 31.816959, 31.8] },
          { name: "指挥室", position: [117.093953, 31.814397, 36] },
          { name: "加热罐", position: [117.09385, 31.815837, 36.9] },
          { name: "冷却室", position: [117.094662, 31.816403, 32.9] }
        ]
        for (let i = 0; i < arrData.length; i++) {
          const item = arrData[i]

          const graphic = new mars3d.graphic.CanvasBillboard({
            position: item.position,
            style: {
              text: 18,
              horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              scaleByDistance: new Cesium.NearFarScalar(800, 0.4, 1200, 0.2),
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 10000)
            }
          })
          graphicLayer.addGraphic(graphic)
        }
      }

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
