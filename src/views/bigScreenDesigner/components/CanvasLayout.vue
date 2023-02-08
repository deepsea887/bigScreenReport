<script setup>
import { ref, reactive, defineProps, onMounted } from "vue";
import { ReScale } from "./";
import Moveable from "vue3-moveable";
import { ConsoleSqlOutlined } from "@ant-design/icons-vue";

let canvasSetting = ref({
  left: 320,
  top: 20,
  width: 900,
  height: 700,
});
const moveWorkbench = function (e) {
  e.stopPropagation();
  const pos = canvasSetting.value;
  const startY = e.clientY;
  const startX = e.clientX;
  // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
  const startTop = Number(pos.top);
  const startLeft = Number(pos.left);

  const move = (moveEvent) => {
    const currX = moveEvent.clientX;
    const currY = moveEvent.clientY;
    pos.top = currY - startY + startTop;
    pos.left = currX - startX + startLeft;
  };

  const up = () => {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
  };

  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", up);
};

const scrollWorkbench = function (direction) {
  var step = 50;
  const distance = direction === "up" ? step : -step;
  const pos = canvasSetting.value;
  pos.top = pos.top + distance;
};
defineExpose({
  scrollWorkbench,
});

let workbenchScale = ref(1);
const handlerWorkbenchScale = function(type) {
  target.value = null;
  const scaleStep = 0.1;
  if(type === 'zoomin') {
    workbenchScale.value -= scaleStep;
  }
  else if(type === 'zoomout') {
    workbenchScale.value += scaleStep;
  }
  else if(type === 'onetonoe') {
    workbenchScale.value = 1;
  }
  //target.value = document.querySelector("#widget2");
};
const scrollBounds = function () {
  const limit = 200;
};

let widgets = reactive([
  {
    type: "chart",
    name: "widget1",
    content: "组件1",
    style: {
      width: 100 + "px",
      height: 100 + "px",
      left: 50 + "px",
      top: 50 + "px",
      background: "#ff6600",
    },
  },
  {
    type: "image",
    name: "widget2",
    content: "组件2",
    style: {
      width: 300 + "px",
      height: 150 + "px",
      left: 150 + "px",
      top: 350 + "px",
      background: "#00a93c",
    },
  },
]);
let target = ref(null);
const onDrag = function ({ transform }) {
  target.value.style.transform = transform;
};
const onResize = function ({ width, height, dist, delta, clientX, clientY }) {
  target.value.style.width = `${width}px`;
  target.value.style.height = `${height}px`;
};
const onRotate = function ({ drag }) {
  target.value.style.transform = drag.transform;
};
const widgetsOnActived = function (index) {
  console.log('组件被点击')
};

let grabShow = ref(false);
onMounted(() => {
  document.onkeydown = function (e) {
    let key = window.event.keyCode;
    if (key == 32) {
      grabShow.value = true;
    }
  };
  document.onkeyup = function (e) {
    let key = window.event.keyCode;
    if (key == 32) {
      grabShow.value = false;
    }
  };
});
</script>
<template>
  <div
    id="workbenchOuter"
    :style="{
      width: canvasSetting.width + 'px',
      height: canvasSetting.height + 'px',
      left: canvasSetting.left + 'px',
      top: canvasSetting.top + 'px',
    }"
  >
    <div
      id="workbench"
      class="workbench"
      :style="{
        width: canvasSetting.width + 'px',
        height: canvasSetting.height + 'px',
        left: 0 + 'px',
        top: 0 + 'px',
        'background-color': '#ffffff',
        'background-position': '0% 0%',
        'background-size': '100% 100%',
        'background-repeat': 'initial',
        'background-attachment': 'initial',
        'background-origin': 'initial',
        'background-clip': 'initial',
        'transform': 'scale('+workbenchScale+')'
      }"
      v-on:keyup.space="typeSpace"
    >
      <div
        v-for="(widget, index) in widgets"
        :key="widget.name"
        :id="widget.name"
        class="widgets"
        :style="widget.style"
        @click="widgetsOnActived(index)"
      >
        {{ widget.content }}
      </div>
    </div>
    <Moveable
      className="moveable"
      :target="target"
      :draggable="true"
      :resizable="true"
      :rotatable="true"
      @drag="onDrag"
      @resize="onResize"
      @rotate="onRotate"
    />
  </div>
  <ReScale @handlerScale="handlerWorkbenchScale"></ReScale>
  <div class="canvasGrab" @mousedown="moveWorkbench" v-show="grabShow"></div>
</template>

<style scoped lang="scss">
.workbench {
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 15px;
  position: absolute;
  overflow: hidden;
}
#workbenchOuter {
  position: absolute;
}
.canvasGrab {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  cursor: url(@/assets/hand.png) 8 8, auto;
}
.widgets {
  position: absolute;
}
</style>
