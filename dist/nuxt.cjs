"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ4LA7RJIcjs = require('./chunk-J4LA7RJI.cjs');
require('./chunk-SU2WDJNA.cjs');

// src/nuxt.ts
function nuxt_default(options) {
  options.exclude = options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/];
  this.extendBuild((config) => {
    config.plugins = config.plugins || [];
    config.plugins.unshift(_chunkJ4LA7RJIcjs.unplugin_default.webpack(options));
  });
  this.nuxt.hook("vite:extend", async (vite) => {
    vite.config.plugins = vite.config.plugins || [];
    vite.config.plugins.push(_chunkJ4LA7RJIcjs.unplugin_default.vite(options));
  });
}


module.exports = nuxt_default;
exports.default = module.exports;