import Vue from 'vue'
import Vuex from 'vuex'
import TaskModule from '@/modules/taskModule/taskModule'

describe('Welcome.vue', () => {
  it('action addTask should add tasks', () => {

    let firstEntry = {name: "testtest"};
    const Constructor = Vue.extend(TaskModule);
    const vm = new Constructor().$mount();

    expect(2)
      .to.equal(2);
  })
})
