import Vue from 'vue'
import vueHelpers from 'vue-helpers'
import TasksToDo from '@/components/taskComponents/TasksToDo'
import App from '@/components/App'

describe('TasksToDo.vue', () => {
  /*
  it('enter button should create tasks.', () => {
    const Constructor = Vue.extend(TasksToDo);
    const vm = new Constructor().$mount();
    enterData(vm);
    expect(vm.tasks.length).to.equal(4);
  })



  it('delete button should delete tasks.', (done) => {
    const Constructor = Vue.extend(TasksToDo);
    const vm = new Constructor().$mount();
    enterData(vm);
    Vue.nextTick(() => {
      removeTask(vm);
      removeTask(vm);
      expect(vm.tasks.length).to.equal(2);
      done();
    })
  })*/
})

function enterData(vm){
  enterTask(vm, "one");
  enterTask(vm, "two");
  enterTask(vm, "three");
  enterTask(vm, "four");
}

function enterTask (vm, taskName){
  vm.$el.querySelector('.tasksToDo input').text = taskName;
  vm.$el.querySelector('.tasksToDo button').click();
}

function removeTask (vm){
  vm.$el.querySelector('.tasksToDo ul button').click();
}
