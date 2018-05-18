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

        <!-- 工地信息3列 -->
        <div class="v-box">
            <div class="h-box-normal">
                <div class="column01" v-for="user in users">{{user}}</div>
            </div>
            <div class="h-box-normal">
                <div class="column01" v-for="user in users2">{{user}}</div>
            </div>
            <div class="h-box-normal">
                <div class="phone-box">
                    <span class="phone-img"></span>
                    <span class="phone-num">15833802251</span>
                </div>
                <div class="phone-box">
                    <span class="phone-img"></span>
                    <span class="phone-num">15713802251</span>
                </div>
            </div>
        </div>

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

export default {
    data(){
    return {
      topic01:'宋都南郡北区4-3-1908',
      users:['设计师名称','客户名称','套餐名称','建筑面积','房型','房屋类型'],
      users2:['陈友','金峰','米筑399豪华包','88.90m2','3房2厅1卫','新房/普通房型'],
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

<style lang="less">
@import "./Base.css";
.icon-down{
  width:18px; 
  height:12px; 
  float:right;
  background-image: url("../assets/huati/down.png");
  padding-right: 5px;
  transform: rotate(180deg);
}
.box-detail{
    display: flex;
}
.column01{
    margin: 3px;
}
.phone-box{
    margin:0 auto;
    border:1px solid darkcyan;
    border-radius:30px;
    text-align: center;
}
.v-box{
    font-size: 0.8em;
    align-items: flex-start;
}
.phone-img{
    display: flex;
    width:18px; 
    height:12px; 
    float:left;
    background-image: url("../assets/huati/dianhua.svg");
    background-size: 100% 100%;
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
</style>


