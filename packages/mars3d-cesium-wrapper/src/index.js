let Cesium, mars3d

export function initCesium({cesium, _mars3d}) {
    Cesium = cesium
    mars3d = _mars3d
}

export function setupCesium({container, mapOptions}) {
    return new mars3d.Map(container, mapOptions);
}

export function injectBusinessLogic(cesiumBase, businessLogic) {
    // 这里可以定义如何将业务逻辑注入到 Cesium 中
    businessLogic.initialize(cesiumBase);
}
