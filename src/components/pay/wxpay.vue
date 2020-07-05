<template>
  <div class="wxpay">
     <el-button type="primary" plain @click="payOrder()">微信支付</el-button>
     <img :src="Qrcode" alt="">
     <input style="margin-left:10px" type="number" placeholder="please put your prices" v-model="price">
  </div>
</template>

<script>
export default {
  name: 'wxpay',
  data(){
  	return {
          data:'hello world66667!',
          Qrcode:'',
          price:1
  	}
  },
  components: {
    
  },
  methods:{
      // payOrder(){
      //     this.$axios.post("https://coral3.com/yes/public/api/payment/place_order",{id:1,price:this.price})
      //     .then(res=>{
      //         console.log(res.url);
      //         this.Qrcode = "https://coral3.com/yes/public/"+res.url;
      //     })
      // },
      // 测试springboot
      payOrder(){
          this.$axios.post("http://localhost/coral3/Qrcode/create",{id:1,price:this.price})
          .then(res=>{ 
            // this.Qrcode = res.url;
            // let bytes = new Uint8Array(res);
            // let data = "";
            // let len = bytes.byteLength;
            // for (let i = 0; i < len; i++) {
            //   data += String.fromCharCode(bytes[i]);
            // }
            this.Qrcode = "data:image/png;base64," + res.msg;
              console.log(this.Qrcode);
          })
      }

  },
  mounted(){
   
  }
}
</script>

<style scoped="scoped">
  
</style>
