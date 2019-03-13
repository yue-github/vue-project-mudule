<template>
  <div class="fixed">
    <router-view/>
    <div class="fixed-footer">
        <div v-bind:class="{fixedButton:true,changeColor:showColor1}" @click="fixedClick(0)">
          <router-link to="/left" class="fixed-nav fixed-line">left</router-link>
        </div>
        <div v-bind:class="{fixedButton:true,changeColor:showColor2}" @click="fixedClick(1)">
          <router-link to="/right" class="fixed-nav">right</router-link>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'fixed',
  data(){
    return {
      
        showColor1:true,
        showColor2:false
       
      
    }
  },
  components: {
     
  },
  methods:{
    fixedClick(arg){
      switch(arg){
        case 0:
        this.showColor1=true;
        this.showColor2=false;
        break;
        case 1:
        this.showColor1=false;
        this.showColor2=true;
        break;
      }
    }
  },
  mounted(){
    
    if(this.$route.params.where=='right'){
          this.showColor1=false;
          this.showColor2=true;
          this.$router.push({
            path:'/right',
          })
    }else{
          this.$router.push({
            path:'/left',
          })
    }
     
  }
     
}
</script>
<style scoped='scoped'>

  .fixed-footer{
    width:100%;
    height:55px;
    position:fixed;
    background:#fff;
    left:0;
    bottom:0;
    display:flex;
    align-items: center;
    box-shadow:0px -1px 5px 1px #F0F0F0;
  }
   .fixedButton{
    width:50%;
    height:55px;
  }
  .fixed-nav{
    display:flex;
    width:100%;
    height:55px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color:#000;
    box-sizing:border-box;
  }
  .fixed-nav:hover{
    text-decoration: none;
  }
  .fixed-line{
    border-right:1px solid #F0F0F0;
  }
  .changeColor{
    background:#F0F0F0;
  }
</style>