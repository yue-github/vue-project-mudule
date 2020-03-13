<template>
  <div class="wxpay">
     <el-button type="primary" plain @click="aliPay()">支付宝支付</el-button>
     <img :src="Qrcode" alt="">
     <input style="margin-left:10px" type="number" placeholder="please put your prices" v-model="price">
    <div v-html="svg111" style="display:flex;justify-content:center;"></div>
  </div>
</template>

<script>
export default {
  name: 'wxpay',
  data(){
  	return {
          data:'hello world66667!',
          Qrcode:'',
          price:1,
          svg111:''
  	}
  },
  components: {
    
  },
  methods:{
      payOrder(){
        return new Promise((resolve,reject)=>{
           this.$axios.post("http://localhost/coral3/toAlipayPC",{
            subject:"saomazhifu",
            order_guid:666666
          })
          .then(res=>{
            console.log("12345678");
            console.log(res)
            resolve(res);
              // this.svg111=res.replace(/300px/g,"600px");
              // console.log(this.svg111)
              // this.Qrcode = "https://coral3.com/yes/public/"+res.url;
              // this.Qrcode = res+"";
          })
        });
         
      },
async aliPay(orderCode,phone,price){
          var resp=await this.payOrder();
          console.log(resp)
          if(resp.code==0){
              const div=document.createElement('divform');
              div.innerHTML=resp.msg;
              document.body.appendChild(div);
              document.forms[0].acceptCharset='UTF-8';//保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
              document.forms[0].submit();
              console.log("suceess")
          }else{
              this.$alert("错误："+resp.data,"提示",{
                  confirmButtonText:'确定'
              });
          }
      },
      payOrderGo(){
          this.$axios.post("https://coral3.com/yes/public/api/alipay/AlipayAopPage",{
            subject:"saomazhifu",
            order_guid:666666
          })
          .then(res=>{
            console.log(res);
            // location.href=res;
              // this.Qrcode = "https://coral3.com/yes/public/"+res.url;
              // this.Qrcode = res+"";
          })
      }


  },
  mounted(){
  //  this.payOrderGo();
  }
}
</script>

<style scoped="scoped">
  
</style>
