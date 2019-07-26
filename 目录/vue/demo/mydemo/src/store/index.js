import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 1.设置与获得数据
  state: {
    count: 1,
    info: [{
      id: 1,
      name: 'zero',
      age: 18
    }, {
      id: 2,
      name: 'summer',
      age: 19
    }, {
      id: 3,
      name: 'hello world',
      age: 20
    }]
  },
  // 2.数据更新
  mutations: {
    add () {
      this.state.count += 5
    }
  },
  // 3.获得数据
  getters: {
    getInfo (state) {
      return state.info.filter(item => {
        return item.id === 1
      })
    }
  },
  // 4.判断数据的更新与显示
  actions: {
    sayActions (state) {
      state.commit('add')
    }
  }
})
