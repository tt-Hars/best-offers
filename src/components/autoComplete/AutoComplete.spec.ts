import { vi, describe, it, expect, beforeEach, SpyInstance } from 'vitest'
import { mount } from '@vue/test-utils'
import AutoComplete from './AutoComplete.vue'
import vuetify from '@/plugins/vuetify'

describe('AutoComplete', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(AutoComplete, {
      global: {
        plugins: [vuetify]
      },
      props: {
        station: 'test',
        inputLabel: 'Station',
        'onUpdate:station': async (e: any) => await wrapper.setProps({ station: e }),
      },
      slots: {
        default: 'item'
      }
    })
  })

  it('should render the autocomplete with the correct label', () => {
    expect(AutoComplete).toBeTruthy()
    expect(wrapper.find('.v-field-label').text()).toBe('Station')
  })

  it.skip('should emit the value', async () => {
    await wrapper.find('input').setValue('test')
    await wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick()
    expect(wrapper.props('station')).toEqual('test2')
  })
})
