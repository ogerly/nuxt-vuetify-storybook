import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

interface App {
  vueApp: any; // Replace 'any' with the appropriate type for 'vueApp'
}

export default defineNuxtPlugin((app: App) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})