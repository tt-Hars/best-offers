import { expect, describe, it, beforeEach } from 'vitest'
import DateRange from './DateRange.vue'
import { mount } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify'

describe('DateRange', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(DateRange, {
      global: {
        plugins: [vuetify]
      },
      props: {
        departureDate: '',
        returnDate: '',
        today: new Date()
      }
    })
  })

  it('should validate the departure date', async () => {
    await wrapper.findAll('input')[0].trigger('focus')
    await wrapper.findAll('input')[0].trigger('blur')
    expect(wrapper.vm.departureDate).toBe('')
    expect(wrapper.findAll('.v-messages')[0].element.textContent).toEqual('The field is required')
  })

  it('should validate the return date', async () => {
    await wrapper.findAll('input')[1].trigger('focus')
    await wrapper.findAll('input')[1].trigger('blur')
    expect(wrapper.vm.departureDate).toBe('')
    expect(wrapper.findAll('.v-messages')[1].element.textContent).toEqual('The field is required')
  })

  it('should validate the dates are in the correct order', async () => {
    await wrapper.findAll('input')[0].trigger('focus')
    await wrapper.findAll('input')[0].setValue('2023-06-14')
    await wrapper.findAll('input')[1].trigger('focus')
    await wrapper.findAll('input')[1].setValue('2023-06-18')
    expect(wrapper.findAll('.v-messages')[0].element.textContent).toEqual('')
  })
})
