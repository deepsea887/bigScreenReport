<script setup>
  
</script>
<template>
  <div class="toolList">
    <div class="item">
      <div class="icon"><span class="iconfont icon-bingtutubiao"></span></div>
      <div class="name">饼图</div>
    </div>
    <div class="item">
      <div class="icon"><span class="iconfont icon-bingtutubiao"></span></div>
      <div class="name">饼图</div>
    </div>
    <div class="item">
      <div class="icon"><span class="iconfont icon-bingtutubiao"></span></div>
      <div class="name">饼图</div>
    </div>
    <div class="item">
      <div class="icon"><span class="iconfont icon-bingtutubiao"></span></div>
      <div class="name">饼图</div>
    </div>
    <div class="item">
      <div class="icon"><span class="iconfont icon-bingtutubiao"></span></div>
      <div class="name">饼图</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .toolList{
    padding: 10px 0 0 0;
  }
  .toolList .item{
    margin: 10px 0 0 0;
    cursor: pointer;
    text-align: center;
    border-left: 4px solid $white-color;
  }
  .toolList .item:hover {
    border-left: 4px solid $primary-color;
  }
  .toolList .item .icon{
    font-size: 30px;
  }
  .toolList .item .name{
    font-size: 12px;
    user-select: none;
  }
  .toolList .item .icon, .toolList .item .name{
    color: $gray-color-1;
  }
  .toolList .item:hover .icon, .toolList .item:hover .name{
    color: $primary-color;
  }
</style>