import vue from 'vue';
import vuex from 'vuex';

import taskModule from './task/store/taskModule'

vue.use(vuex);

export default new vuex.Store({
  modules: {
    taskModule
  }
});
