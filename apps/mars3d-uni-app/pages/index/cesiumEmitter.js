import mitt from 'mitt';

export const CesiumEmitter = {
  test: 'test',
  drawPoint: 'drawPoint',
  cesium: 'cesium'
}
console.log(CesiumEmitter)


export const emitter = mitt();
