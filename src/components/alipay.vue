<template>
  <div class="module">
     
  
    <div @click="dodo">
      dodood
      </div> {{props}}

  </div>
</template>

<script>
export default {
  name: 'module',
  
  data(){
  	return {
  	 hehe:this.props
  	}
  },
  props:['props'],
  components: {
    
  },
  computed:{
     
  },
  watch:{
    'props':function(newv,oldv){
      console.log(newv,oldv)
    }
  },
  methods:{
    dodo(){

    this.$emit('doS', 555)
    }

  },
  mounted(){
    
  }
}
</script>

<style scoped="scoped">
  
</style>
