import vue from 'vue';
import vuex from 'vuex';

import taskModule from './components/task/store'

vue.use(vuex);

export default new vuex.Store({
  modules: {
    taskModule
  }
});
