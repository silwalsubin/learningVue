import Vue from 'vue'
import statusReporter from '@/components/status-report/status-reporter'



describe('status-reporter', () => {

  it('multiple tasks should be displayed correctly.', () => {
    const Constructor = Vue.extend(statusReporter);
    let testStatus = { complete: 20, toDo: 15, total: 35 }

    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();

    expect(vm.$el.querySelector('.toDo').textContent)
          .toBe(`${testStatus.toDo}`);
    expect(vm.$el.querySelector('.complete').textContent)
          .toBe(`${testStatus.complete}`);
  });

  it('single task should be displayed correctly.', () => {

    const Constructor = Vue.extend(statusReporter);
    let testStatus = { complete: 1, toDo: 0, total: 1 }

    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();

    expect(vm.$el.querySelector('.toDo').textContent)
          .toBe(`${testStatus.toDo}`);
    expect(vm.$el.querySelector('.complete').textContent)
          .toBe(`${testStatus.complete}`);
  });
})
