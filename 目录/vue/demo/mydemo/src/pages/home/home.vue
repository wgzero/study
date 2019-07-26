<template>
  <div>
    父组件：
    <input type="text" v-model="name">
    <child :inputValue='name' v-on:ChildMsg="handleSon" ></child>
    <brother></brother>
    <sister></sister>
    <show-vuex></show-vuex>
  </div>
</template>

<script>
// import Bus from './bus'
import Child from './component/son'
import Brother from './component/brother'
import Sister from './component/sister'
import ShowVuex from './showvuex'
export default {
  components: {
    Child,
    Brother,
    Sister,
    ShowVuex
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    handleSon (msg) {
      this.name = msg
    }
  },
  mounted() {
    
  },

}
</script>
