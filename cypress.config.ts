import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  viewportWidth: 1400,
  viewportHeight: 1200,

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
