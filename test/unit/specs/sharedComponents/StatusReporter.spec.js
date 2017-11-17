import Vue from 'vue'
import StatusReporter from '@/components/sharedComponents/StatusReporter'

describe('StatusReporter.vue', () => {

  it('status report for multiple tasks should be correct.', (done) => {
    const Constructor = Vue.extend(StatusReporter);
    let testStatus = {
      complete: 20,
      toDo: 15,
      total: 35
    }
    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();
    let expectedResult = "Number of Tasks : 35"

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.statusReporter h3').textContent)
            .to.equal(expectedResult);
            done();
    })
  }),

  it('status report for single task should be correct.', (done) => {
    const Constructor = Vue.extend(StatusReporter);
    let testStatus = {
      complete: 1,
      toDo: 0,
      total: 1
    }
    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();
    let expectedResult = "Number of Task : 1"

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.statusReporter h3').textContent)
            .to.equal(expectedResult);
            done();
    })
  }),

  it('status report should not show for 0 tasks', (done) => {
    const Constructor = Vue.extend(StatusReporter);
    let testStatus = {
      complete: 0,
      toDo: 0,
      total: 0
    }
    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();
    let expectedResult = "Number of Task : 0"

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.statusReporter h3').style.display)
            .to.equal("none");
            done();
    })
  })


})
