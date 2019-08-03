<template>
  <div class="task">
   <div class="foot" @click="handleRender">点击随机生成今天最新5或1位名单</div>
   <div class="margin"></div>
   <div class="list" v-for="(item,index) in data" v-bind:key="index">
    <div class="list-span-main">
      <span class="list-span">{{item.name1}}</span>
      <span class="list-span">{{item.name2=='no'?'请总结':item.name2}}</span>
      <span class="list-span">{{item.name3=='no'?'':item.name3}}</span>
      <span class="list-span">{{item.name4=='no'?'':item.name4}}</span>
      <span class="list-span">{{item.name5=='no'?'':item.name5}}</span>
    </div>
    <div class="date">{{item.date}}</div>
  </div>

</div>
</template>

<script>
  export default {
    name: 'task',
    data(){
     return {

      data:[
       
      ],
      value: ''
    }
  },
  components: {

  },
  methods:{
   handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please push your password...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            },

                        })
                    },
                    onOk:(val)=>{
                      this.$Spin.show();
                      this.$axios.post('https://coral3.com/yes/public/api/getTask',{
                        password:this.value
                      })
                      .then(res=>{
                        this.$Spin.hide();
                        if(res.status==503){
                           this.$Notice.error({
                           
                            title:'严重警告',
                            desc:res.msg,
                            name:'1212',
                            duration:3
                           })
                        }else{
                          this.data=res;
                        }
                        
                      })
                      
                    }
                })
            }

  },
  mounted(){
    this.$Spin.show();
      this.$axios.post('https://coral3.com/yes/public/api/getName')
      .then(res=>{
        console.log(res)
        this.data=res;
         this.$Spin.hide();
      })

    this.$axios.post('https://coral3.com/yes/public/api/login',{
      userName:1,
      password:1
    })
    .then(res=>{
      console.log(res)
        this.$axios.post('https://coral3.com/yes/public/api/get_info',{
          token:"Bearer "+res.data.token
        })
        .then(res=>{
          console.log(res);
        })
    })
  }
}
</script>

<style scoped="scoped">
 .foot{
  width:100%;
  height:55px;
  background:blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  font-size:20px;
}
.list{
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:80px;
  flex-direction: column;
  border-bottom:1px solid #F0F0F0;
  box-sizing: border-box;
}
.list-span-main{
  width:100%;
  display:flex;
  justify-content: space-around;
}
.foot{
  top:0;
  position:fixed;
  z-index:10;
}
.margin{
  margin-top:55px;
}
</style>
