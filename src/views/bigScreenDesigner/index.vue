<script setup>
import { ref } from "vue";
import { ReInfoLayout, ReToolLayout, ReCanvasLayout } from "./components";
import "@/assets/icons/iconfont.css";

const getCanvasLayout = ref()
const handleScroll = function (e) {
  let direction = e.deltaY > 0 ? "down" : "up"; //deltaY为正则滚轮向下，为负滚轮向上
  if (direction == "down" && e.deltaY >= 125) {
    getCanvasLayout.value.scrollWorkbench('down');
  }
  if (direction == "up" && e.deltaY <= -125) {
     getCanvasLayout.value.scrollWorkbench('up');
  }
};
</script>

<template>
  <div class="designerLayout">
    <div class="designerInfoLayout">
      <ReInfoLayout></ReInfoLayout>
    </div>
    <div class="designerContentLayout">
      <div class="designerToolLayout">
        <ReToolLayout></ReToolLayout>
      </div>
      <div class="designerCanvasLayout" @mousewheel="handleScroll">
        <ReCanvasLayout ref="getCanvasLayout"></ReCanvasLayout>
      </div>
      <div class="designerToolPanel">右侧工具属性</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/bigScreenDesigner/index.scss"; //局部
</style>