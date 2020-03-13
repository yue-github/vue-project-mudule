<template>
  <div class="right">
     hello! I is right
     <div @click="goThat" style="color:blue">to that</div>
  </div>
</template>

<script>
export default {
  name: 'right',
  data(){
    return {
     
    }
  },
  components: {
    
  },
  methods:{
  	goThat(){
      this.$router.push({
        name:'that',
        params:{
          name:'low'
        }
      });
    }
  },
  mounted(){
   console.log(this.$route)
  }
}
</script>

<style scoped="scoped">
  
</style>
