import Vue from 'vue'
import store from "@/store";
import uuid from 'uuid';


describe ('task-store', () => {

  let task1 = {name: "task 1", id: 1234, isComplete: false};
  let task2 = {name: "task 2", id: 2234, isComplete: true};

  it('should add a task', () => {
    store.commit('addTask', task1);
    expect (store.getters.getTasks.length).toBe(1);
  });

  it('should change the status', () => {
    store.commit('changeTaskStatus', task1.id);
    expect (store.getters.getTasks.find(x => x.id === task1.id).isComplete).toBe(true);
  });

  it('should delete a task', () => {
    store.commit('deleteTask', task1.id);
    expect (store.getters.getTasks.length).toBe(0);
  });

  it('should load all tasks', () => {
    store.commit('setTasks', [task1, task2]);
    expect (store.getters.getTasks.length).toBe(2);
  });
})
