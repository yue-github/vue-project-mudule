import request from '../utils/request'
export function test(arg){
	return request({
        url:"/test",
        method:'post',
        data:{
        	mobile:arg
        }
     })
      
}