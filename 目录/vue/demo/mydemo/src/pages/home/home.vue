<template>
  <div>
    父组件：
    <input type="text" v-model="name">
    <child :inputValue='name' v-on:ChildMsg="handleSon" ></child>
    <brother></brother>
    <sister></sister>
  </div>
</template>


<script>
// import Bus from './bus'
import Child from './component/son'
import Brother from './component/brother'
import Sister from './component/sister'
export default {
  components: {
    Child,
    Brother,
    Sister
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleSon(msg){
      this.name = msg
    }
  },

}
</script>
