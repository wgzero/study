<template>
  <!-- <div>
    <p>{{ show }}</p>
    <p @click="showMu">点击</p>
    <p>{{ userInfos }}</p>
  </div> -->
  <!-- <div>
    <p>{{ count }}</p>
  </div> -->
  <div>
    <p>{{ count }}</p>
    <p @click="showMu">点击</p>
    <p>{{ getInfos }}</p>
    <p @click="showActions">+</p>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex';
// export default {
//   // state
//   computed: {
//     show(){
//       return this.$store.state.count
//     },
//     userInfos(){
//       return this.$store.getters.getInfo[0].name
//     }
//   },
//   // mutations
//   methods: {
//     showMu(){
//       this.$store.commit('add')
//     }
//   },
// }
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    // 1.数组扩展运算符， 还有对象扩展运算符
    ...mapState(['count']),
    // ...mapGetters(['getInfo'])
    ...mapGetters({
      getInfos: 'getInfo'
    })
  },
  methods: {
    ...mapMutations({
      showMu: 'add'
    }),
    ...mapActions({
      showActions: 'sayActions'
    })
  }
}

</script>

<style scope>

</style>
