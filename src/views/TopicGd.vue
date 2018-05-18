<template>
  <div class="vbox">
    <!-- 调用黑头组件 -->
    <div class="back-header">
       <HeaderTab :topic="topic01"></HeaderTab>
    </div>

    <!-- 白色标题 ，带底线-->
    <div class="white-line">
      宋都南郡北区4-3-1908
      <span class="icon-down"></span>
    </div>

    <!-- 列表条件 -->
    <div class="select">
      <div class="select-item" v-for="user in users">{{user.name}}</div>
    </div>

    <!-- 画带线题头 -->
    <linetitle class="line-title" :topic="topic02"></linetitle>

    <!-- 列表行数据 ，带底线-->
    <div class="list-item">
      <div class="item-self" v-for="topic in topics">
        <div class="topic-header">{{topic.name}}</div>
        <div class="employee">{{topic.company}}</div>
        <div class="brand">
          <span class="icon-r"></span>{{topic.brand}}
        </div>        
      </div>
    </div>

    <!-- 放新增按钮 -->
    <div class="newtopic"></div>

    <!-- 白色底部 ，带顶线-->
    <div class="white-line-bottom">
    <span class="more-topic">更多话题 ></span>
    </div>

  </div>
</template>

<script>
import HeaderTab from '../components/headertab'
import linetitle from '../components/linetitle'

export default{
  data(){
    return {
      topic01:'宋都南郡北区4-3-1908',
      topic02:'相关话题',
      users:[
          {name:"维特鲁威"},
          {name:"冠珠"},
          {name:"斯米克"},
          {name:"美元据"},
          {name:"凯莎"},
          {name:"聋了"},
          {name:"欧林"},
          {name:"安华"},
          {name:"潜水艇"}
      ],
      topics:[
          {name:"卫浴安装工人何时进场？",company:"好图-刘勇 18/04/25",brand:"安华"},
          {name:"橱柜联系不到人？",company:"冠珠-王伟 18/04/25",brand:"安华"},
          {name:"水槽安装不到位？",company:"好图-刘勇 18/04/25",brand:"欧林"},
          {name:"测量没有水电图？",company:"好图-刘勇 18/04/25",brand:"聋了"},
          {name:"工期进展太慢？",company:"好图-刘勇 18/04/25",brand:"新屋"}          
      ]
    }    
  },
  components:{
  HeaderTab,
  linetitle
  }
}

</script>

<style>
@import "./Base.css";
.icon-down{
  width:18px; 
  height:12px; 
  float:right;
  background-image: url("../assets/huati/down.png");
  padding-right: 5px;
}
.select{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.select-item{
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #555555;
  background: #EAEAEA;
}
.line-title{
  margin-top: 10px;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #888888;
  letter-spacing: 0;
}
.list-item{
  display: flex;
  flex-direction: column;
  font-size: 0;
}
.item-self{
  font-family: PingFangSC-Regular;
  font-size: 0;
  color: #999999;
  letter-spacing: 0;
  border-bottom:1px solid #C8C8C8;
  margin-left: 10px;
}
.topic-header{
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
}
.employee{
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #999999;
  letter-spacing: 0;
}
.brand{
  font-family: PingFangSC-Regular;
font-size: 18px;
color: #999999;
letter-spacing: 0;
}
.icon-r:before {
  content: "\e90e";
  color: #17a271;
  margin-left:0px;
}
</style>