<template>
    <div class="h-box-start">
        <div class="v-box">
                <div class="itemhuati" v-for="user in users">
                    <p>{{user.userdz}}</p>
                    <span>{{user.strtopic}}</span>
                    <span>{{user.topicnum}}</span>
                </div>                
        </div>
        <div class="vfor">
          <ul>
            <li v-for="user in users">
              {{user}}
            </li>

          </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        users:[
          {userdz:"宋都南郡北区4-2-1908",strtopic:"进行中的话题",topicnum:3},
          {userdz:"宋都南郡北区5-2-1908",strtopic:"进行中的话题",topicnum:8},
          {userdz:"宋都南郡北区6-2-1908",strtopic:"进行中的话题",topicnum:7},
          {userdz:"宋都南郡北区7-2-1908",strtopic:"进行中的话题",topicnum:10},
          {userdz:"宋都南郡北区9-2-1908",strtopic:"进行中的话题",topicnum:30}
      ]}
    },
    methods: {
      aaa() {        
      }
    }
}
</script>


<style type="text/css">
@import "./Base.css";

.itemhuati{
  flex: 0 0 50%;
  border-right:1px solid #C8C8C8;
  border-bottom:2px solid #C8C8C8;
}

</style>