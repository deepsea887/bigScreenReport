<script setup>
  import { ref } from 'vue'
  const filename = ref('未命名文件');
</script>
<template>
  <div class="infoTool">
    <div class="logo"></div>
    <a-tooltip title="撤销操作">
      <div class="undo dobtn"><span class="iconfont icon-shangyibu"></span></div>
    </a-tooltip>
    <a-tooltip title="重做">
      <div class="redo dobtn"><span class="iconfont icon-xiayibu"></span></div>
    </a-tooltip>
    <div class="savetitme"><span class="iconfont icon-baocun"></span> 保存于 2022-12-05 12:25:11</div>
    <div class="filename">
      <a-input v-model:value="filename" placeholder="Basic usage" />
    </div>
    <div class="ctrlbtn">
      <div class="theme">
        <span class="iconfont icon-taiyang-copy" v-if="false"></span>
        <span class="iconfont icon-dark"></span>
      </div>
      <a-button class="item" type="primary" size="lagre">保存</a-button>
      <a-button class="item" type="primary" size="lagre" danger>关闭</a-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.infoTool {
  display: flex;
  height: 100%;
  position: relative;
}
.designerInfoLayout .logo {
  width: 230px;
  height: 100%;
  background: url(@/assets/designerLogo.png) no-repeat center center;
  background-size: 184px 30px;
}
.dobtn{
  width: $designerInfoLayoutHeight;
  height: $designerInfoLayoutHeight;
  line-height: $designerInfoLayoutHeight;
  font-size: 20px;
  text-align: center;
  color: $gray-color-1;
  cursor: pointer;
}
.dobtn:hover{
  background: $primary-color;
  color: $white-color;
}
.ctrlbtn {
  display: flex;
  right: 0;
  top: 0;
  height: 100%;
  position: absolute;
  align-items: center;
}
.ctrlbtn .item {
  margin: 0 10px 0 0;
}
.ctrlbtn .theme {
  margin: 0 10px 0 0;
  width: $designerInfoLayoutHeight;
  height: $designerInfoLayoutHeight;
  line-height: $designerInfoLayoutHeight;
  text-align: center;
  font-size: 26px;
  color: $gray-color-2;
  cursor: pointer;
}
.savetitme {
  font-size: 14px;
  color: $gray-color-2;
  line-height: $designerInfoLayoutHeight;
}
.filename {
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
}
</style>