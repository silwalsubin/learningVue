import Vue from 'vue'
import statusReporter from '@/components/status-reporter'



describe('status-reporter', () => {

  it('multiple tasks should be displayed correctly.', (done) => {
    const Constructor = Vue.extend(statusReporter);
    let testStatus = { complete: 20, toDo: 15, total: 35 }

    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();

    let expectedTotal = `Number of Task${testStatus.total > 1 ? "s" : ""} : ${testStatus.total}`
    let expectedDescription = `Done : ${testStatus.complete} || To Do: ${testStatus.toDo}`

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.status-reporter h3').textContent)
            .toBe(expectedTotal);
      expect(vm.$el.querySelector('.status-reporter h4').textContent)
            .toBe(expectedDescription);
      done();
    })
  }),

  it('single task should be displayed correctly.', (done) => {
    const Constructor = Vue.extend(statusReporter);
    let testStatus = { complete: 1, toDo: 0, total: 1 }

    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();

    let expectedTotal = `Number of Task${testStatus.total > 1 ? "s" : ""} : ${testStatus.total}`
    let expectedDescription = `Done : ${testStatus.complete} || To Do: ${testStatus.toDo}`

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.status-reporter h3').textContent)
            .toBe(expectedTotal);
      expect(vm.$el.querySelector('.status-reporter h4').textContent)
            .toBe(expectedDescription);
      done();
    })
  }),

  it('status report should not show for 0 tasks', (done) => {
    const Constructor = Vue.extend(statusReporter);
    let testStatus = { complete: 0, toDo: 0, total: 0 }

    const vm = new Constructor({
      propsData: {
        status : testStatus
      }
    }).$mount();

    let expectedTotal = `Number of Task${testStatus.total > 1 ? "s" : ""} : ${testStatus.total}`
    let expectedDescription = `Done : ${testStatus.complete} || To Do: ${testStatus.toDo}`

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.status-reporter h3').style.display)
            .toBe("none");
      expect(vm.$el.querySelector('.status-reporter h4').style.display)
            .toBe("none");
      done();
    })
  })


})
