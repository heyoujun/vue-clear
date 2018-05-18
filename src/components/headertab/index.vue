<template>
  <div class="v-box">
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
@import "../../assets/Base.css";

.back-header{
  flex:0 0 100%;
  background: black;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #FFFFFF;
  padding-top: 5px;
  padding-bottom: 5px;
}
.topic-in{
  padding-left: 30px;
}
</style>

