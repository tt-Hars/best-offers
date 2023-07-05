import { vi, describe, it, expect, beforeEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Home from './Home.vue'
import vuetify from '@/plugins/vuetify'
import { setActivePinia, createPinia } from 'pinia'

describe('Home view', () => {
  let wrapper: any
  let lang = {
    common: {
      'home': 'home'
    }
  }
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render the Home view component', () => {
    wrapper = shallowMount(Home, {
      global: {
        plugins: [vuetify],
      }
    })
    
    expect(Home).toBeTruthy()
    // expect(wrapper.find('.home__view-container').toBeTruthy())
  })
})
