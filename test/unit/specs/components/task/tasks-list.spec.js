import Vue from 'vue'
import tasksList from '@/components/task/tasks-list'

describe('tasks-list', () => {

  let entryOne = {name: "task 1", isComplete: false, id: 123};
  let entryTwo = {name: "task 2", isComplete: true, id: 321 };
  let entryThree = {name: "task 3", isComplete: true, id: 345 };
  const tasks = [entryOne, entryTwo, entryThree];

  it("tasksList should render correct number of tasks", done => {
    const Constructor = Vue.extend(tasksList);

    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();

    Vue.nextTick(() => {
       expect(vm.$el.querySelectorAll('article').length).toBe(tasks.length);
       done();
    })
  });

  it("delete button should emit deleteTask on-click ", () => {
    const Constructor = Vue.extend(tasksList);

    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();

     const spy = spyOn (vm, '$emit');

     vm.$el.querySelector('.deleteButton').click();
     expect(spy).toHaveBeenCalledWith('deleteTask', entryOne.id);
  });

  it("add button should emit addTask on-click ", (done) => {
    const Constructor = Vue.extend(tasksList);
    let taskName = "task 4";
    let emittedParameter = "";

    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();

     vm.$on("addTask", (taskName)=> {
       emittedParameter = taskName;
     })

     vm.enteredTask = taskName;
     Vue.nextTick(() => {
       vm.$el.querySelector('.button').click();
       expect(emittedParameter).toBe(taskName);
       done();
     })
  });

})
