import Vue from 'vue'
import tasksList from '@/components/task/tasks-list'

describe('tasksList.vue', () => {

  let entryOne = {name: "task 1", isComplete: false};
  let entryTwo = {name: "task 2", isComplete: true };
  let entryThree = {name: "task 3", isComplete: true };
  const tasks = [entryOne, entryTwo, entryThree];

  it('tasksList should display the tasks properly', done => {
    const Constructor = Vue.extend(tasksList);
    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();
    Vue.nextTick(() => {
       expect(vm.$el.querySelectorAll('.tasks-list ul').length).toBe(tasks.length);
       done();
    })
  });
})
