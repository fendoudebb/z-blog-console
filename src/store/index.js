// import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import publish from './module/publish'
import page_view from './module/page_view'
import ip_pool from './module/ip_pool'
import ip_unrecognized from './module/ip_unrecognized'
import search_stats from './module/search_stats'

// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  getters: {
    //
  },
  modules: {
    app,
    publish,
    page_view,
    ip_pool,
    ip_unrecognized,
    search_stats,
  }
})
