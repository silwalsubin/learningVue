import Vue from 'vue'
import StatusReporter from '@/components/sharedComponents/StatusReporter'



describe('StatusReporter.vue', () => {

  it('status report for multiple tasks should be correct.', (done) => {
    const Constructor = Vue.extend(StatusReporter);
    let testStatus = { complete: 20, toDo: 15, total: 35 }
    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();

    let expectedTotal = `Number of Task${testStatus.total > 1 ? "s" : ""} : ${testStatus.total}`
    let expectedDescription = `Done : ${testStatus.complete} || To Do: ${testStatus.toDo}`

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.statusReporter h3').textContent)
            .to.equal(expectedTotal);
      expect(vm.$el.querySelector('.statusReporter h4').textContent)
            .to.equal(expectedDescription);
      done();
    })
  }),

  it('status report for single task should be correct.', (done) => {
    const Constructor = Vue.extend(StatusReporter);
    let testStatus = { complete: 1, toDo: 0, total: 1 }
    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();
    let expectedTotal = `Number of Task${testStatus.total > 1 ? "s" : ""} : ${testStatus.total}`
    let expectedDescription = `Done : ${testStatus.complete} || To Do: ${testStatus.toDo}`

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.statusReporter h3').textContent)
            .to.equal(expectedTotal);
      expect(vm.$el.querySelector('.statusReporter h4').textContent)
            .to.equal(expectedDescription);
      done();
    })
  }),

  it('status report should not show for 0 tasks', (done) => {
    const Constructor = Vue.extend(StatusReporter);
    let testStatus = { complete: 0, toDo: 0, total: 0 }
    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();
    let expectedTotal = `Number of Task${testStatus.total > 1 ? "s" : ""} : ${testStatus.total}`
    let expectedDescription = `Done : ${testStatus.complete} || To Do: ${testStatus.toDo}`

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.statusReporter h3').style.display)
            .to.equal("none");
      expect(vm.$el.querySelector('.statusReporter h4').style.display)
            .to.equal("none");
      done();
    })
  })


})
