
import Vue from 'vue'
import TasksList from '@/components/task/TasksList'

describe('TasksList.vue', () => {

  let entryOne = {name: "task 1", isComplete: false};
  let entryTwo = {name: "task 2", isComplete: true };
  let entryThree = {name: "task 3", isComplete: true };
  const tasks = [entryOne, entryTwo, entryThree];

  it('TasksList should display the tasks properly', done => {
    const Constructor = Vue.extend(TasksList);
    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();
    Vue.nextTick(() => {
       expect(vm.$el.querySelectorAll('.tasksList ul').length).toBe(tasks.length);
       done();
    })
  });
})
