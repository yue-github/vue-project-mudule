<template>
  <div class="that">
     {{data}}
     <div class="takeData">带过来的数据：{{takeData}}</div>
     <div @click="goHome" style="color:blue">back left</div>
  </div>
</template>

<script>
export default {
  name: 'that',
  data(){
  	return {
  		data:'you are my world!',
      takeData:''
  	}
  },
  beforeRouteLeave(){
    console.log(123)
  },
  components: {
    
  },
  methods:{
    goHome(){
      this.$router.push({
        name:'left',
        params:{
          name:'lowingshan',
          where:'left'
        }
      });
    }
  },
  mounted(){
   this.takeData=this.$route.query.name;
  }
}
</script>

<style scoped="scoped">
  
</style>
