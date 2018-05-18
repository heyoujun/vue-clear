<template>
  <!-- 主体 -->
  <div class="box">
    
    <!-- 头部 -->
    <div class="header">
      <img class="img-logo" src="../assets/huati/logo.png">
      <div class="biaoyu">互联网一站式整装平台</div>
    </div>
    <div class="mid">
      <div class="shouji">
        <img src="../assets/huati/shouji.svg" alt="shouj" class="shouji-tu">
        <input type="number" maxlength="11" class="shouji-input">
        <div class="space01">获取验证码</div>
        <img src="../assets/huati/qingchu.svg" alt="" class="shouji-clear">
      </div>
      <div class="line01" ></div>
      <div class="yanzhen">
        <input type="number" maxlength="6" class="yanzhen-input">
        <div class="space02">发送验证码</div>
      </div>
      <div class="line01" ></div>    
      <div class="commit">绑   定</div>      
    </div>
  
  </div>

</template>

<script>

export default {
  components:{
    // 'm-button': Button
  }  
}
</script>

<style lang="less">

//  <!-- 主体 -->
.box{
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url("../assets/huati/logonbg.gif"); 
  background-size:100% 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;  
  align-items:center;
  flex-flow: column; 
  }
// <!-- 头部 -->
.header{
   display: flex;
   width: 100%;
   height: 40%;
   flex-flow: column;      
   align-items: center;
  //  background-color: yellow;
 }
//  中部
.mid{
   display: flex;
   width: 100%;
   flex-flow: column;      
   align-items: center;
   justify-content:space-around;
   margin:10%;
  //  background-color: yellow;
 }
.img-logo{
    width: 30%;
    height: 20%;
    margin-top: 20%;
   }
.biaoyu{
   color: white;
   font-size: 1rem;
   font-family: cursive,'Courier New', Courier, monospace;
  //  font-family: X-;
   font-style: agreeMent;
   margin-top: 2%;
 }
 .shouji{
   width: 80%;
   height: 10%;
   display:flex;
   margin-top: 10%;
   align-items:center;
 }
 .shouji-tu{
   width:5%;
   flex:1;
   }
 .shouji-input{
   width: 60%;
   height: 100%;
   background-color:transparent;
   BORDER-top-STYLE:none;
   border-right-style: solid;
   border-left-style: none;
   border-bottom-style: none;
   border-right-color: white;
   margin-left:2%;
 }
 .shouji-clear{
   width:5%;   
   }
 .space01{
   width: 40%;
   height: 100%;
   margin-left:2%;
   color: aliceblue;
 }
 .line01{
   width:80%;
   height:1px;
   margin:1% auto;
   padding:0px;
   background:#D5D5D5;
   overflow:hidden;
 }
  .yanzhen{
   width: 80%;
   height: 10%;
   display:flex;
   margin-top: 10%;
   align-items:center;
 }
 .yanzhen-input{
   width: 60%;
   height: 100%;
   background-color:transparent;
   BORDER-top-STYLE:none;
   border-right-style: solid;
   border-left-style: none;
   border-bottom-style: none;
   border-right-color: white;
   margin-left:2%;
 }
 .space02{
   width: 40%;
   height: 100%;
   margin-left:2%;
   color: aliceblue;
 }
.commit{
  margin-top: 20%;
  width: 80%;
  color:black;
  background-color: active;
}

</style>