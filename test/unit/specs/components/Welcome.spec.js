import Vue from 'vue'
import Welcome from '@/components/Welcome'

describe('Welcome.vue', () => {
  it('should render correct welcome message', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .to.equal("Welcome to Subin's To-Do App")
  })
})
