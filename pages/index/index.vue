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
          position: new mars3d.LngLatPoint(116.2, 30.8, 1000),
          style: {
            // 支持base64
            image:
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzRweCIgaGVpZ2h0PSI4MnB4IiB2aWV3Qm94PSIwIDAgNzQgODIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+56m6PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjUwJSIgeDI9IjMzLjYyOTE0ODglIiB5Mj0iNTcuNzg0Njc0MyUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzdCNzk3OSIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC44MTk4MjA4MDQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGZpbHRlciB4PSItOS4xJSIgeT0iLTE1LjclIiB3aWR0aD0iMTE4LjIlIiBoZWlnaHQ9IjEzMS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjEyIiBpbj0iU291cmNlR3JhcGhpYyI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjEwMCUiIHgyPSI1MCUiIHkyPSIzLjA2MTYxN2UtMTUlIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkU2NTEiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzgyRCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNMzAuOTk3OTc4OSw2Ny4yMjAyOTE3IEMzMy42ODgyMDAzLDYyLjE3NzMwOTYgMzUuNzA2MDI5Niw1OS40OTQzMzI0IDM3LjA1MTQ2NjgsNTkuMTcxMzYwMSBDNTAuMjM0NjM4OCw1Ni4wMDY3Mzg1IDYwLjAzMiw0NC4xNDY5MDc1IDYwLjAzMiwzMCBDNjAuMDMyLDEzLjQzMTQ1NzUgNDYuNTkzMzc5LDAgMzAuMDE2LDAgQzEzLjQzODYyMSwwIDAsMTMuNDMxNDU3NSAwLDMwIEMwLDQ0LjExMzQwOTQgOS43NTEwMTgzMyw1NS45NTA1NjA1IDIyLjg4Njk0Miw1OS4xNDg3MzM2IEMyNC4yNDk5NDEsNTkuNDgwNTc5OCAyNi4yOTU3NDA0LDYyLjE3Mjc4NDUgMjkuMDI0MzQwMyw2Ny4yMjUzNDc2IEwyOS4wMjQzNjIsNjcuMjI1MzM1OSBDMjkuMzE4MjgxMSw2Ny43Njk1ODc1IDI5Ljk5Nzc1MjcsNjcuOTcyNTIyMSAzMC41NDIwMDQzLDY3LjY3ODYwMjkgQzMwLjczNTc0Myw2Ny41NzM5NzU4IDMwLjg5NDM0MzQsNjcuNDE0NTYyNiAzMC45OTc5Nzg5LDY3LjIyMDI5MTcgWiIgaWQ9InBhdGgtNCI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTEyLjUlIiB5PSItMTAuOSUiIHdpZHRoPSIxMjUuMCUiIGhlaWdodD0iMTE5LjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNSI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41IDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9Ii0yLjQ4OTQ5ODEzZS0xNSUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtNiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZERkIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3QjUxRCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmkJzntKIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5LiO6aKc6ImyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwOS4wMDAwMDAsIC01MTIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnqboiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMTQuMDAwMDAwLCA1MTcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6ELTIiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHBvaW50cz0iMzAuMDE2IDY5LjEwNzE0MjkgNjcgNTMuNTcxNDI4NiA2NyA3NSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNCI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IuakreWchuW9oiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci01KSIgeGxpbms6aHJlZj0iI3BhdGgtNCI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC00Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IuakreWchuW9oiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIuNCIgZmlsbC1vcGFjaXR5PSIwLjUxIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTYpIiBjeD0iMzAuMTI1IiBjeT0iMzAuMTExNjA3MSIgcng9IjIzLjkyNSIgcnk9IjIzLjkxMTYwNzEiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0iNiIgeD0nMzAnIHk9JzM0JyAgIHN0eWxlPSdkb21pbmFudC1iYXNlbGluZTptaWRkbGU7dGV4dC1hbmNob3I6bWlkZGxlOycgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtU2VtaWJvbGQsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgMQogICAgICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
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
