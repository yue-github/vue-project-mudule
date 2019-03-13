<template>
  <div id="app">
       <router-view/>
  </div>
</template>

<script>
 
// const loading = this.$loading({
//             lock: true,
//             text: '数据删除中...',
//             spinner: 'el-icon-loading',
//             background: 'rgba(0, 0, 0, 0.7)'
//           });
// loading.close();

// 公共地址请求配置安装中间件
// npm install -S http-proxy-middleware

// swiper css配置搜索输入‘wutongyue’
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
