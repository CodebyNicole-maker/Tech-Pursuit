import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
    supportFile: "cypress/support/index.ts",
  },

  e2e: {
    baseUrl: 'http://127.0.0.1:3001/',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
