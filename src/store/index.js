import vue from 'vue';
import vuex from 'vuex';

import state from './state'
import actions from './action'
import mutations from './mutation'
import getters from './getter'

vue.use(vuex);

export default new vuex.Store({
  state,
  actions,
  mutations,
  getters
});
