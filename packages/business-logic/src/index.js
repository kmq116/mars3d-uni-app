// packages/business-logic/src/index.js
export class BusinessLogic {
    initialize({map, viewer, mars3d, Cesium, $ownerInstance}) {
        // 初始化业务逻辑
        // 创建矢量数据图层
        let graphicLayer = new mars3d.layer.GraphicLayer({
            allowDrillPick: true // 如果存在坐标完全相同的图标点，可以打开该属性，click事件通过graphics判断
        })
        map.addLayer(graphicLayer)
        //测试本地图片
        const graphic = new mars3d.graphic.BillboardEntity({
            position: [117.229619, 31.686288, 1000],
            style: {
                // image: img,
                image: 'static/img/mark-red.png',
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            },
            attr: {
                remark: "示例1"
            }
        })
        graphicLayer.addGraphic(graphic)
        graphic.on(mars3d.EventType.click, (e) => {
            // 注意，这里不能传函数
            $ownerInstance.callMethod('cesiumCallback', e.id)
        })
    }

    // 其他业务方法
}
