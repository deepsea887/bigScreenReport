<script setup>
  const emit = defineEmits([ "handlerScale" ]);
  const handlerScale = function(type) {
    emit('handlerScale',type)
  }
</script>
<template>
  <div class="scaleToolBar">
    <a-space>
      <span class="iconfont icon-suoxiao toolitem" @click="handlerScale('zoomin')"></span>
      <span>55%</span>
      <span class="iconfont icon-fangda toolitem" @click="handlerScale('zoomout')"></span>
      <span class="splitline"> | </span>
      <span class="iconfont icon-screen1-1 toolitem" @click="handlerScale('onetonoe')"></span>
    </a-space>
  </div>
</template>

<style scoped lang="scss">
.scaleToolBar {
  background: $gray-color-2;
  position: absolute;
  bottom: 25px;
  font-size: 14px;
  z-index: 99999999;
  height: 40px;
  line-height: 40px;
  background: $white-color;
  border: 1px solid $gray-color-3;
  border-radius: 4px;
  color: $gray-color-1;
  right: 27px;
  padding: 0 10px;
}
.toolitem {
  color: $gray-color-1;
  cursor: pointer;
}
.toolitem:hover,onetoone:hover {
  color: $primary-color;
}
.splitline {
  color: $gray-color-3;
}
</style>