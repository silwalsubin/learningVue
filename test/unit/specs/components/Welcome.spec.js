import Vue from 'vue'
import welcome from '@/components/welcome'

describe('welcome', () => {
  it('should render correct welcome message', () => {
    const Constructor = Vue.extend(welcome);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .toBe("Welcome to To-Do App")
  })
})
