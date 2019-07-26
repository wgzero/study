<template>
  <div>
    <span @click="SisterValue">A->B</span>
    <span>{{name}}</span>
  </div>
</template>

<script>
import Bus from '../bus'
export default {
  data () {
    return {
      msg: 'A->B',
      name: ''
    }
  },
  methods: {
    SisterValue () {
      Bus.$emit('sisterKey', this.msg)
    }
  },
  // 接收从b传给a的值
  mounted () {
    let that = this
    Bus.$on('bKey', (msg) => {
      that.name = msg
    })
  }
}
</script>
