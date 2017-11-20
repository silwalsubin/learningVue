import Vue from 'vue'
import TasksToDo from '@/components/taskComponents/TasksToDo'
import store from "@/store";

describe ('main.js', () => {
  let expectedArray = [];
  let entryOne = {name: "task 1", isComplete: false};
  let entryTwo = {name: "task 2", isComplete: true };
  let entryThree = {name: "task 3", isComplete: true };


  it('testing addTask dispatch ', done => {
    const Constructor = Vue.extend(TasksToDo);
    const vm = new Constructor({
      propsData: {
         tasks: store.state.taskModule.tasks
       },
       store
    }).$mount();
    store.dispatch("addTask", entryOne);
    vm.$nextTick(() => {
      let elements = vm.$el.querySelectorAll(".tasksToDo ul li");
      expect(elements.length).toBe(1);
      expect(elements[0].textContent).toBe("task 1");
      done();
    });
  });

  it('getter: getTasks', done => {
    const Constructor = Vue.extend(TasksToDo);
    const vm = new Constructor({
      propsData: {
         tasks: store.state.taskModule.tasks
       },
       store
    }).$mount();
    expectedArray.push(entryOne);
    vm.$nextTick(() => {
    expect (store.getters.getTasks).toEqual(expectedArray);
    done();
    });
  });

  it('getter: getTasksStatusReport', done => {
    const Constructor = Vue.extend(TasksToDo);
    const vm = new Constructor({
      propsData: {
         tasks: store.state.taskModule.tasks
       },
       store
    }).$mount();
    store.dispatch("addTask", entryTwo);
    store.dispatch("addTask", entryThree);
    vm.$nextTick(() => {
    expect (store.getters.getTasksStatusReport.total).toBe(3);
    expect (store.getters.getTasksStatusReport.complete).toBe(2);
    expect (store.getters.getTasksStatusReport.toDo).toBe(1);
    done();
    });
  });
})
