import { sendCode,register } from '../../api/user'
export default {
	// 发送验证码
      SENDCODE:(store,data)=>{
          return sendCode(data);
      },
      // 注册
      REGISTER:(store,data)=>{
          return register(data);
      },
}