<template>
  <div class="left">
     <span>hello! I is left</span>
     <div class="router" @click="goThat">go</div>
  </div>
</template>

<script>

export default {
  name: 'left',
  data(){
    return {
     
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
     this.$axios.post('http://localhost/voy/public/api/test',{
           phone: '18814137320',
           password: 'wutongyue'

     })
     .then(res=>{
        console.log(res);
     })
    // this.$store.dispatch('TEST','18814137320')
    // .then(res=>{
    //    cfunconsole.log(res)
    // })
  
  }
}
 // http://education-test.bayou-tech.cn/class/search?offset=0&length=999&token=eyJpdiI6Ikh6NXNBdUJkcmUycW9tVzVSdzFYcmc9PSIsInZhbHVlIjoiT0dsNHR4aURtWUhsOGE0RlFVYVBhcHZvaVdZaERCNWRjd1wvcm5jcVVxZFJLcDN1c3NuQTM5ck10SVwvVDVkakQxIiwibWFjIjoiMzE2Y2JjMTJhODc4NmUxZjA5MGM4ZTY0YWZhZmU0NDQyZTEzZmFkMTcwY2FiYTUwYjUxM2RiOWI0NDUzZmEzNyJ9
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
