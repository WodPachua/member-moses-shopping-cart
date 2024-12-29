import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";

const options = {
  webpackOptions: {
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { transpileOnly: true },
        },
      ],
    },
  },
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", webpack(options));
      return config;
    },
    baseUrl: "http://localhost:5173/",
    viewportWidth: 1280,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
