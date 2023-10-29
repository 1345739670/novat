import type { Component, App } from 'vue'
import NvButton from '@novat/button'

// 感觉这个方式还是不太对, 之后再想想
import '../style/index.scss'

// components
const components: {
  [propName: string]: Component;
} = {
  NvButton
}

export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
    }
  }
}
