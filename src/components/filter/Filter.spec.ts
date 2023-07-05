import FilterView from './Filter.vue'
import vuetify from '@/plugins/vuetify'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia';
import { vi, expect, describe, it, beforeEach } from 'vitest'

vi.mock('lang', () => ({
  common: {'search': 'search'},
}));
describe('FilterView', () => {
  let wrapper: any
  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(FilterView, {
      global: {
        plugins: [vuetify]
      },
      props: {
        data: { countries: [], stations: [] }
      }
    })
  })
  it('should render the component with all the required elements', () => {
    console.log(wrapper)
    expect(wrapper.find('#origin').exists()).toBeTruthy()
    expect(wrapper.find('#destination').exists()).toBeTruthy()
    expect(wrapper.find('#offers').exists()).toBeTruthy()
    expect(wrapper.find('#departure').exists()).toBeTruthy()
    expect(wrapper.find('#return').exists()).toBeTruthy()
    expect(wrapper.find('#submit').exists()).toBeTruthy()
  })

  it('should validate the form when the submit button is clicked', async () => {
    await wrapper.find('#origin').setValue('')
    await wrapper.find('#offers').setValue('')
    await wrapper.find('#submit').trigger('click')
    expect(wrapper.vm.isValid).toBeFalsy()
  })

  it('should submit the form when the submit button is clicked and the form is valid', async () => {
    await wrapper.find('#origin').setValue('Origin - AAX')
    await wrapper.find('#destination').setValue('Dest - AMS')
    await wrapper.find('#departure').setValue('2023-07-22')
    await wrapper.find('#return').setValue('2023-08-21')
    await wrapper.find('#offers').setValue('amadeusBestOffer')
    await wrapper.find('#submit').trigger('click')
    expect(wrapper.vm.form).toBeTruthy()
  })
})
