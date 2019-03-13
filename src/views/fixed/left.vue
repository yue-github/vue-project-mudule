<template>
  <div class="left">
     hello! I is left
     <div class="takeData">带过来的数据：{{takeData}}</div>
     <div class="router" @click="goThat">go</div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data(){
    return {
      takeData:'',
      codeValue:'',
      proveCode:''
    }
  },
  components: {
    
  },
  methods:{
  	goThat(){

  		this.$router.push({
  			path:'/that',
  			query:{
  				name:'wutongyue'
  			}
  		});
  	}
 
  },
  mounted(){
    this.takeData=this.$route.params.name;
    this.$store.dispatch('TEST','18814137320')
    .then(res=>{
       console.log(res)
    })
    this.takeData=this.$route.params.name;
    this.$store.dispatch('SENDCODE','18814137320')
    .then(res=>{
       console.log(res)
    })
  }
}
</script>

<style scoped="scoped">
  .router{
  	width:100px;
  	height: 55px;
  	display:flex;
  	align-items: center;
  	justify-content: center;
  	margin:0 auto;
  	margin-top:35vh;
  	border:1px solid #ccc;
  	border-radius:5px;
  	font-size:18px;
  }
  .code{
    width:100px;
    height: 35px;
    display:flex;
    align-items: center;
    justify-content: center;
    /*margin-top:50vh;*/
    background:red;
    border-radius:10px;
    color:#fff;
  }
  .mobile{
    outline: none;
    border:1px solid #ccc;
    width:80%;
    height:25px;
  
    margin:20px;
  }
</style>
