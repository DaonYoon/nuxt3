// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@pinia/nuxt"],
});
