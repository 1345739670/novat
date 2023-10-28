import { App } from 'vue';
import Button from '@novat/button';

// 感觉这个方式还是不太对
import '../scss/index.scss';
// import component end
// import '../scss/index.scss';

// components
const components = [Button];

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
