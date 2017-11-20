
import Vue from 'vue'
import TasksToDo from '@/components/taskComponents/TasksToDo'
import App from '@/components/App'


describe('TasksToDo.vue', () => {

  let entryOne = {name: "task 1", isComplete: false};
  let entryTwo = {name: "task 2", isComplete: true };
  let entryThree = {name: "task 3", isComplete: true };
  const tasks = [entryOne, entryTwo, entryThree];

  it('TasksToDo should display the tasks properly', done => {
    const Constructor = Vue.extend(TasksToDo);
    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();
    Vue.nextTick(() => {
       expect(vm.$el.querySelectorAll('.tasksToDo ul').length).toBe(tasks.length);
       done();
    })
  });
})
