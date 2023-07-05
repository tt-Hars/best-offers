import { vi, describe, it, expect, beforeEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import SearchListPanelContent from '../SearchListPanelContent.vue'
import vuetify from '@/plugins/vuetify'
import { setActivePinia, createPinia } from 'pinia'

describe('Search list panel content view', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render the search list panel content view component', () => {
    const wrapper = shallowMount(SearchListPanelContent, {
      global: {
        plugins: [vuetify],
      }
    })
    
    expect(SearchListPanelContent).toBeTruthy()
  })
})
