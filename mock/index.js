import Mock from 'mockjs'
import{ index,deleteData } from './news'
import { gdmzdTest } from './test'
 

 
 // news模块
Mock.mock('/news/index', 'post',index);
Mock.mock('/news/deleteData', 'post',deleteData);
// 测试模块
Mock.mock('/gdmzdTest', 'post',gdmzdTest);