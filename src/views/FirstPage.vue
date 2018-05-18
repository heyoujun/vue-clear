<template>
  <div class="h-box-start">
    <div class="top-image">
      <div class="top-image-box">
        <div class="green-circle"><span class="txt-gongshi">好图</span></div>
        <div class="h-box-start">
          <div class="v-box">
            <div class="text-white">刘勇</div>            
            <div class="designer-tu"><img  src="../assets/huati/gongshi.svg" alt="公司图片"></div>
            <div class="text-white">南京好图装饰</div>
          </div>
          <div class="v-box">
            <div class="text-white">在建工地</div>
            <div class="text-yellow">5</div>
            <div class="text-white">未读消息</div>
            <div class="text-red">23</div>
          </div>
        </div>
      </div>
    </div>

    <div class="topic01">
      <div class="newtopic"></div>  
      <linetitle :topic="topic01"></linetitle>
      <div class="v-box">
        <div class="itemhuati" v-for="user in users">
          <p><span class="reddot"></span> {{user.userdz}}</p>
          <span class="icon-huati"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
          <span>{{user.strtopic}}</span>
          <span class="blue-number"> {{user.topicnum}}</span>
        </div>
                    
      </div>
    </div>
    <div class="topic01">      
      <linetitle :topic="topic02"></linetitle>
      <div class="itemhuati-line">
        <p class="line-topic">卫浴工人为什么没进行安装？</p>
        <span>好图-刘勇  18/04/25</span>
        <span class="imgto"></span>
        <p>
          <span class="icon-dz"></span>
          <span >宋都南郡北区4-2-1908</span>
          <span class="icon-r"></span>
          <span class="toright">安华</span>
        </p>
      </div>
      <div class="itemhuati-line">
        <p class="line-topic">瓷砖可以送货了</p>
        <span>好图-刘勇  18/04/25</span>
        <span class="imgto"></span>
        <p>
          <span class="icon-dz"></span>
          <span >宋都南郡北区4-2-1908</span>
          <span class="icon-r"></span>
          <span class="toright">安华</span>
        </p>
      </div>
      <div class="itemhuati-line">
        <p class="line-topic">明天开个会</p>
        <span>好图-刘勇  18/04/25</span>
        <span class="imgto"></span>
        <p>
          <span class="icon-dz"></span>
          <span >宋都南郡北区4-2-1908</span>
          <span class="icon-r"></span>
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
  data () {
    return {
      topic01: '在建工地',
      topic02: '进行中的话题',
      users:[
        {userdz: '宋都南郡北区4-2-1908', strtopic: '进行中的话题', topicnum: 3},
        {userdz: '南京市宋都南郡北区5-2-1908', strtopic: '进行中的话题', topicnum: 8},
        {userdz: '宋都南郡北区6-2-1908', strtopic: '进行中的话题', topicnum: 7},
        {userdz: '宋都南郡北区7-2-1908', strtopic: '进行中的话题', topicnum: 10},
        {userdz: '宋都南郡北区9-2-1908', strtopic: '进行中的话题', topicnum: 30}
      ]}
    },
  components:{
  linetitle
  }
}
</script>

<style>
@import "./Base.css";

.top-image{
  flex:0 0 100%;
  display: flex;
  width: 100%;
  height:120px;
  background-image: url("../assets/huati/QJ9104030488.png");
  background-size:100% 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  /* align-items:center; */
  justify-content: center;
  flex-flow: column; 
}
.top-image-box{
  
  display: flex;
  width: 100%;
  height: 100%;
  align-items:center;
  flex-flow: row;
  /* background:#CCC; */
}
.green-circle{
  flex: 0 0 100px;
  display: flex;
  width: 100px;
  height: 100%;
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
  flex: 0 0 48%;
  border-right:1px solid #C8C8C8;
  border-bottom:1px solid #C8C8C8;
  padding-top: 3%;
  padding-right: 1%;
  padding-bottom: 1%;
  font-size:16px;
}
.itemhuati-line{
  flex: 0 0 80%;
  border-bottom:1px solid #C8C8C8;
  font-size:16px;
  font-family: PingFangSC-Regular;
  margin-top: 10px;
  margin-top: 10px;
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
  font-size:24px;
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
.icon-dz:before {
  content: "\e900";
  color: #17a271;
}
.newtopic{
  position:absolute;
  width:70px;
  height:70px;
  background-image: url("../assets/huati/newtopic.svg");
  background-size: 100% 100%;
  background-attachment: scroll;
  background-position: 0 0;
  /* background-repeat: no-repeat;  */
  bottom:120px;
  right:0px;
}
.icon-huati .path1:before {
  content: "\e902";
  color: #666;
}
.icon-huati .path2:before {
  content: "\e903";
  color: #000;
  margin-left: -1em;
}
.icon-huati .path3:before {
  content: "\e904";
  color: #666;
  margin-left: -1em;
}
.icon-huati .path4:before {
  content: "\e905";
  color: #666;
  margin-left: -1em;
}
.icon-r:before {
  content: "\e90e";
  color: #17a271;
  margin-left:60px;
}

</style>