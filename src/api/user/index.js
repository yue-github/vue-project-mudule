import request from '../../utils/request'
export function sendCode(arg){
	return request({
        url:"/code/send",
        method:'post',
        data:{
        	mobile:arg
        }
     })
      
}
export function register(arg){
	return request({
        url:"/user/register",
        method:'post',
        data:{
        	code:arg
        }
     })
      
}
