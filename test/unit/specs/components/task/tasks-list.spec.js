import Vue from 'vue'
import tasksList from '@/components/task/tasks-list'

describe('tasks-list', () => {

  let entryOne = {name: "task 1", isComplete: false};
  let entryTwo = {name: "task 2", isComplete: true };
  let entryThree = {name: "task 3", isComplete: true };
  const tasks = [entryOne, entryTwo, entryThree];

  it("tasksList should render correct number of tasks", done => {
    const Constructor = Vue.extend(tasksList);

    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();

    Vue.nextTick(() => {
       expect(vm.$el.querySelectorAll('.tasks-list ul').length).toBe(tasks.length);
       done();
    })
  });


  it("delete button should emit deleteTask on-click ", () => {
    const Constructor = Vue.extend(tasksList);

    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();

     const spy = spyOn (vm, '$emit');

     vm.$el.querySelector('.tasks-list ul .delete-task').click();
     expect(spy).toHaveBeenCalledWith('deleteTask', entryOne);
  });


  it("add button should emit addTask on-click ", (done) => {
    const Constructor = Vue.extend(tasksList);
    let taskName = "task 4";
    let tasks = [];

    const vm = new Constructor({
       propsData: { tasks }
     }).$mount();

     vm.$on("addTask", (task)=> {
       tasks.push(task);
     })

     vm.enteredTask = taskName;
     Vue.nextTick(() => {
       vm.$el.querySelector('.tasks-list button').click();
       expect(tasks.length).toBe(1);
       expect(tasks[0].name).toBe(taskName);
       expect(tasks[0].isComplete).toBe(false);
       done();
     })
  });
})
