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
export function gdmzd(msg){
	return request({
        url:"/gdmzdTest",
        method:'post',
        data:{
        	msg:msg
        }
     })
       
}