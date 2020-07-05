<template>
  <div class="that">
     <alipay v-bind:props="data" @doS="data=$event">
       
        
     </alipay>
 <div @click="clickDo">click</div>
 <div @click="gothat">123</div>
  </div>
</template>

<script>
import alipay from '@/components/alipay.vue';
export default {
  name: 'that',
  data(){
  	return {
  		data:'you are my world333!',
      takeData:'',
      user:{name:{name:'wu'}}
  	}
  },
  
  components: {
    alipay
  },
  computed:{
    
  },
  watch:{
    data:{
      immediate:true,
      handler(newV){
        console.log(newV);
      }
    }
  },
  methods:{
    gothat(){
      this.$router.push({
        path:'/upload/1212121',
       
      });
    },
    clickDo(){
    this.$axios.post('https://coral3.com/yes/public/api/test').then(res => {
   
     this.data = res;
   })
    },
    doSome(){
      this.user.name.name = 'lowingshan';
    },
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
