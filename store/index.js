export const state = () => {
  return {
    token: ''
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  /*nuxt声明周期1*/
  nuxtServerInit(store, context) {
    store.commit('setToken', '12313123')
    console.log('nuxtServerInit')
  }
}
