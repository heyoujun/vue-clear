<template>
  <div class="vbox">
    <div class="back-header">
        《 关闭 
        <span class="topic-in">{{topic}}</span>
    </div>
  </div>
</template>

<script>
  export default {
  props:{
    topic:String
  }
}
</script>

<style>
@import "./Base.css";

.back-header{
  flex:0 0 100%;
  background: black;
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: #FFFFFF;
}
.topic-in{
  padding-left: 100px;
}
</style>

