<template>
  <div>
    {{name}}
    <span @click="handleClick">B->A</span>
  </div>
</template>

<script>
import Bus from '../bus'
export default {
  data() {
    return {
      name: '',
      b:'B->A'
    }
  },
  // 从A接收值到B中
  mounted() {
    let that = this
    Bus.$on('sisterKey', (msg)=>{
      that.name = msg
    })
  },
  // B给A传值
  methods: {
    handleClick(){
      Bus.$emit('bKey', this.b)
    }
  },
}
</script>
