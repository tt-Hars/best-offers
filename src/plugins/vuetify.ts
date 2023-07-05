/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import '@/assets/global.scss'

// Composables
import { createVuetify } from 'vuetify'

// @ts-ignore ***
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FB8C00',
    'primary-darken-1': '#3700B3',
    secondary: '#4D5A58',
    'secondary-darken-1': '#018786',
    accent: '#e3e4e0',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#5A392D'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})
