import { loginAPI } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // 存token
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token) // 本地在存一份
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  // 删除token
  REMOVE_TOKEN: (state, token) => {
    state.token = '',
    removeToken()
  }
}

const actions = {
  // 登录的逻辑
  async loginActions({ commit }, data) {
    const res = await loginAPI(data)
    // 在当前模块内 不需要加模块名
    commit('SET_TOKEN', res.data)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

