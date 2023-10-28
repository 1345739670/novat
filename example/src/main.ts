import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import novat from '@novat/novat';

createApp(App).use(novat).mount('#app');

const env = import.meta.env;
console.log('current env', env);
