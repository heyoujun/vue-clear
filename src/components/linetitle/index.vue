<template>
  <div class="box">
    <div class="line-20"></div>
    <div class="text-mid">{{topic}}</div>
    <div class="line-20"></div>
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
.box{
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: row;
  background: rgb(227, 227, 235); 
  justify-content: flex-start; 
  align-items: center;
}

.line-20{
   width:30%;
   height:1px;
   margin:1% auto;
   background:#C8C8C8;
 }
 .text-mid{
   font-family: PingFangSC-Regular;
   height:10%;
   margin:1% auto;
   text-align: center;
   color: #888888;
 }
</style>

