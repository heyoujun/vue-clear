<template>
  <div class="h-box-start">
    <div class="top-header">
      
    </div>
    
    <div class="topic01">      
      <linetitle :topic="topic02"></linetitle>
      <div class="itemhuati-line">
        <p class="line-topic">卫浴工人为什么没进行安装？</p>
        <span>好图-刘勇  18/04/25</span>
        <span class="imgto"></span>
        <p>
          <span class="img-dz"></span>
          <span >宋都南郡北区4-2-1908</span>
          <span class="img-r"></span>
          <span class="toright">安华</span>
        </p>
      </div>
      <div class="itemhuati-line">
        <p class="line-topic">瓷砖可以送货了</p>
        <span>好图-刘勇  18/04/25</span>
        <span class="imgto"></span>
        <p>
          <span class="img-dz"></span>
          <span >宋都南郡北区4-2-1908</span>
          <span class="img-r"></span>
          <span class="toright">安华</span>
        </p>
      </div>                 
    </div>
  </div>
</template>

<script>
import linetitle from '../components/linetitle'
// import Grid from '../components/grid'
// import Content from '../components/content'

export default {
  data(){
    return{
      topic01:'在建工地',
      topic02:'进行中的话题'
    }
  },
  components:{
  linetitle
  }
}
</script>

<style>
@import "./Base.css";

.top-header{
  flex:0 0 100%;
  display: flex;
  width: 100%;
  height:200px;
  
  justify-content: center;
  flex-flow: column; 
}

.txt-gongshi{
  display:inline-box;
  width: 80px;
  height: 80px;
  line-height:80px;
  background:#17A271;
  border-radius: 50%;
  color: #FFF;
  text-align: center;
  margin: auto;
  font-size:1.2em;
}
.text-white{
  color: #FFF;
  text-align: center;
  margin-left:0;
  margin-right:0;
  margin-top:1%;
  font-size:1em;
  /* background:#DDD; */
}
.text-yellow{
  font-family: PingFangSC-Regular;
  font-size: 1.5em;
  color: #EDA710;  
  text-align:bottom;
  margin-top:1%;
  margin-left:1%;
  margin-right:10%
}
.text-red{
  font-family: PingFangSC-Regular;
  font-size: 1.5em;
  color: #F44E00;
  margin-top:1%;
  margin-left:1%;
}
.designer-tu{
  height:2%;
  margin-left:10%;
}
.topic01{
  width: 100%;
}
.itemhuati{
  flex: 0 0 50%;
  border-right:1px solid #C8C8C8;
  border-bottom:1px solid #C8C8C8;
  margin:0,5%;
  font-size:16px;
}
.itemhuati-line{
  flex: 0 0 80%;
  border-bottom:1px solid #C8C8C8;
  font-size:16px;
  font-family: PingFangSC-Regular;
}
.toright{
  /* float:right;/ */
  margin-left:2px;
}
.reddot{
  background:red;  
  width:16px; 
  height:16px; 
  float:left;
  border-radius: 50%;
}
.imghuati{
  width:26px; 
  height:26px; 
  float:left;
  background-image: url("../assets/huati/huati.svg");
  /* background-size:3% 3%;
  background-attachment: fixed; */
}
.blue-number{
  color:#1293FF;
  font-size:36px;
  font-family: PingFangSC-Regular;
}
.line-topic{
  font-family: PingFangSC-Regular;
font-size: 20px;
color: #333333;
}
.imgto{
  width:10px; 
  height:18px; 
  float:right;
  background-image: url("../assets/huati/youjiaotou.png");
}
.img-dz{
  width:26px; 
  height:28px; 
  float:left;
  background-image: url("../assets/huati/dz.svg");
}
.img-r{
  width:26px; 
  height:28px;  
  background-image: url("../assets/huati/img-r.svg");
  margin-right:60px;
}
.newtopic{
  position:absolute;
  width:100px; 
  height:100px;  
  background-image: url("../assets/huati/newtopic.svg");
  background-attachment: fixed;
  /* background-repeat: no-repeat;  */
  bottom:120px;
  right:0px;
}
</style>

