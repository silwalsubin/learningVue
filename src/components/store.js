import vue from 'vue';
import vuex from 'vuex';

import state from './store/state'
import actions from './store/action'
import mutations from './store/mutation'
import getters from './store/getter'

vue.use(vuex);

export default new vuex.Store({
  modules : {
    taskModule :{
      state,
      actions,
      mutations,
      getters
    }
  }
});
