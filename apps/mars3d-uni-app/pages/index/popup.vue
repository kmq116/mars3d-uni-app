<script>
import {CesiumEmitter, emitter} from "./cesiumEmitter";

export default {
  mounted(){
    emitter.on(CesiumEmitter.test, (a) => {
      console.log('收到了 cesiumCallback 发布的事件', a)
      this.testData = a
    })
  },
  data(){
    return {
      testData:''
    }
  },
  methods: {
    drawCesiumPoint() {
      console.log('click drawCesiumPoint')
      emitter.emit(CesiumEmitter.cesium, {
        type: 'drawPoint' + Date.now(),
        params: {}
      })
    }
  }

}
</script>

<template>
  <div style="width: 200px;height: 300px;background: #fff">
    <div>
      cesium 点击的信息: {{ testData}}
    </div>
    <button @click="drawCesiumPoint">点击绘制点</button>
  </div>
</template>

<style scoped>

</style>
