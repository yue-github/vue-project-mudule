<template>
  <div id="main" style="width:900px;height:600px;background:#F0F0F0">
     
  </div>
</template>

<script>
  var echarts = require('echarts');
  import 'echarts/map/js/china.js';
  import Vue from 'vue'
export default {
  name: 'Module',
  components: {
    
  },
  data(){
  	return {
  		 data:'hello world'
  	}
  },
  methods:{

  },
  mounted(){
  	 var myChart = echarts.init(document.getElementById('main'));
    //  myChart.setOption({
    //     title: {
    //         text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     xAxis: {
    //         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //     }]
    // });
     // app.title = '多 X 轴示例';

// var colors = ['#5793f3', '#d14a61', '#675bba'];


// var option = {
//     color: colors,
//      title: {
//             text: '了不起，我的Echarts'
//         },
//     tooltip: {
//         trigger: 'none',
//         axisPointer: {
//             type: 'cross'
//         }
//     },
//     legend: {
//         data:['2015 降水量', '2016 降水量']
//     },
//     grid: {
//         top: 70,
//         bottom: 50
//     },
//     xAxis: [
//         {
//             type: 'category',
//             axisTick: {
//                 alignWithLabel: true
//             },
//             axisLine: {
//                 onZero: false,
//                 lineStyle: {
//                     color: colors[1]
//                 }
//             },
//             axisPointer: {
//                 label: {
//                     formatter: function (params) {
//                         return '降水量  ' + params.value
//                             + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
//                     }
//                 }
//             },
//             data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
//         },
//         {
//             type: 'category',
//             axisTick: {
//                 alignWithLabel: true
//             },
//             axisLine: {
//                 onZero: false,
//                 lineStyle: {
//                     color: colors[0]
//                 }
//             },
//             axisPointer: {
//                 label: {
//                     formatter: function (params) {
//                         return '降水量  ' + params.value
//                             + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
//                     }
//                 }
//             },
//             data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
//         }
//     ],
//     yAxis: [
//         {
//             type: 'value'
//         }
//     ],
//     series: [
//         {
//             name:'2015 降水量',
//             type:'line',
//             xAxisIndex: 1,
//             smooth: true,
//             data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
//         },
//         {
//             name:'2016 降水量',
//             type:'line',
//             smooth: true,
//             data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
//         }
//     ]
// };
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'china',
            itemStyle:{
                areaColor: '#28ff28',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            },
            
            backgroundColor:'blue',
            label:{
                show:true,
                fontSize:10
            },
            
            emphasis:{
                itemStyle:{
                    areaColor:'blue',
                },
                label:{
                    color:'#fff'
                }
            },
            scaleLimit:{
                max:2
            },
            zoom:1.2
           
        }]
    });
    Vue.prototype.$socket = new WebSocket("wss://springboot.coral3.com/tong/yue/1");
    this.$socket.onopen = (res) => 
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  this.$socket.send("发送数据");
                  alert("数据发送中...");console.log(res)
               };
    // myChart.setOption(option);
    this.$socket.onmessage = res => {
        console.log(res)
    }
    this.$socket.onclose = res => {
        console.log(res)
    }
    setTimeout(() => {
        this.$socket.close();
    },2000)
    
  }
}
</script>

<style scoped>
 #main{
     margin:0 auto;
 }
</style>