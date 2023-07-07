import { vi, describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchListPanel from '../SearchListPanel.vue'
import vuetify from '@/plugins/vuetify'
import { setActivePinia, createPinia } from 'pinia'

describe('Search list panel view', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render the Search list panel view component', () => {
    mount(SearchListPanel, {
      global: {
        plugins: [vuetify],
      },
      // props: {
      //   flight: {
      //     uuid: '1234'
      //   }
      // }
    })
    
    expect(SearchListPanel).toBeTruthy()
  })
})
