import Vue from 'vue'
import Vuex from 'vuex'
import { test } from './api/test'
import actions from './store/actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	user:{
  		token:'TEST-token'
   	}
  },
  mutations: {

  },
  actions: {
    // 测试
      TEST:(store,data)=>{
          return test(data);
      },
      ...actions

  },
  getters:{
  	 token:state=>state.user.token
  }
   
  
})
