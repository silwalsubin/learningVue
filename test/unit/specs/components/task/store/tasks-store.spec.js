import Vue from 'vue'
import store from "@/store";

describe ('task-store', () => {

  let expectedArray = [];
  let entryOne = {name: "task 1", isComplete: false};
  let entryTwo = {name: "task 2", isComplete: true };
  let entryThree = {name: "task 3", isComplete: true };

  it('dispatch: addTask', done => {
    store.dispatch("addTask", entryOne).then(() => {
      expect (store.getters.getTasks.length).toBe(1);
      done();
    });
  })

  it('getter: getTasksStatusReport', done => {
    store.dispatch("addTask", entryTwo).then(() => {
      expect (store.getters.getTasksStatusReport.total).toBe(2);
      expect (store.getters.getTasksStatusReport.complete).toBe(1);
      expect (store.getters.getTasksStatusReport.toDo).toBe(1);
      store.dispatch("addTask", entryThree).then(() => {
        expect (store.getters.getTasksStatusReport.total).toBe(3);
        expect (store.getters.getTasksStatusReport.complete).toBe(2);
        expect (store.getters.getTasksStatusReport.toDo).toBe(1);
        done();
      })
      done();
    })
  });

  it('getter: getTasks', done => {
    expectedArray.push(entryOne);
    expectedArray.push(entryTwo);
    expectedArray.push(entryThree);
    expect (store.getters.getTasks).toEqual(expectedArray);
    done();
  });

  it('dispatch: deleteTask', done => {
    store.dispatch("deleteTask", entryTwo).then(() => {
      expect (store.getters.getTasksStatusReport.total).toBe(2);
      expect (store.getters.getTasksStatusReport.complete).toBe(1);
      expect (store.getters.getTasksStatusReport.toDo).toBe(1);
      store.dispatch("deleteTask", entryThree).then(() => {
        expect (store.getters.getTasksStatusReport.total).toBe(1);
        expect (store.getters.getTasksStatusReport.complete).toBe(0);
        expect (store.getters.getTasksStatusReport.toDo).toBe(1);
        done();
      })
      done();
    })
  });

  it('dispatch: changeTaskStatus', done => {
    store.dispatch("changeTaskStatus", entryOne).then(() => {
      expect (store.getters.getTasksStatusReport.total).toBe(1);
      expect (store.getters.getTasksStatusReport.complete).toBe(1);
      expect (store.getters.getTasksStatusReport.toDo).toBe(0);
      done();
    })
  });
})
