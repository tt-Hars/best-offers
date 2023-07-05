import { vi, describe, it, expect, beforeEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import SearchList from '../SearchList.vue'
import vuetify from '@/plugins/vuetify'
import { setActivePinia, createPinia } from 'pinia'

describe('Search list view', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render the Search list view component', () => {
    const wrapper = shallowMount(SearchList, {
      global: {
        plugins: [vuetify],
      }
    })
    
    expect(SearchList).toBeTruthy()
  })
})
