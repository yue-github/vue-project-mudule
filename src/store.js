import Vue from 'vue'
import Vuex from 'vuex'
import { test , gdmzd } from './api/test'
import actions from './store/actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	user:{
  		token:""
   	}
  },
  mutations: {

  },
  actions: {
    // 测试
      TEST:(store,data)=>{
          return test(data);
      },
      GDMZD:(store,data)=>{
          return gdmzd(data);
      },
      ...actions

  },
  getters:{
  	 token:state=>state.user.token
  }
   
  
})
