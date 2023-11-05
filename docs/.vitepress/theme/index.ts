
import DefaultTheme from "vitepress/theme";
import novat from '@novat/novat'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(novat);
  },
};