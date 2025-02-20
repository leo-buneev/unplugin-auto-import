import {
  unplugin_default
} from "./chunk-MXZ7XE7U.js";
import "./chunk-HBHLJZOY.js";

// src/nuxt.ts
function nuxt_default(options) {
  options.exclude = options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/];
  this.extendBuild((config) => {
    config.plugins = config.plugins || [];
    config.plugins.unshift(unplugin_default.webpack(options));
  });
  this.nuxt.hook("vite:extend", async (vite) => {
    vite.config.plugins = vite.config.plugins || [];
    vite.config.plugins.push(unplugin_default.vite(options));
  });
}
export {
  nuxt_default as default
};
