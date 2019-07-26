<template>
  <div>
    子组件：
    <span>{{ inputValue }}</span>
    <input type="button" value="点击" @click="handleClick">
  </div>
</template>

<script>
export default {
  props: {
    inputValue: String
  },
  data () {
    return {
      msg: '我是子组件内容'
    }
  },
  methods: {
    handleClick () {
      this.$emit('ChildMsg', this.msg)
    }
  }

}
</script>

<style lang="">

</style>
