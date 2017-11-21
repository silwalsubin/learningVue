import vue from 'vue';
import vuex from 'vuex';

import task from './components/task/store'

vue.use(vuex);

export default new vuex.Store({
  modules: {
    task
  }
});
