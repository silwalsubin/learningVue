import vue from 'vue';
import vuex from 'vuex';

import actions from './store/action'
import mutations from './store/mutation'
import getters from './store/getter'


vue.use(vuex);

export default new vuex.Store({
  state: {
    tasks: []
  },
  actions,
  mutations,
  getters
});
