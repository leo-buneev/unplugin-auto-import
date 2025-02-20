"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDEAHT4JGcjs = require('./chunk-DEAHT4JG.cjs');
require('./chunk-SU2WDJNA.cjs');

// src/nuxt.ts
function nuxt_default(options) {
  options.exclude = options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/];
  this.extendBuild((config) => {
    config.plugins = config.plugins || [];
    config.plugins.unshift(_chunkDEAHT4JGcjs.unplugin_default.webpack(options));
  });
  this.nuxt.hook("vite:extend", async (vite) => {
    vite.config.plugins = vite.config.plugins || [];
    vite.config.plugins.push(_chunkDEAHT4JGcjs.unplugin_default.vite(options));
  });
}


module.exports = nuxt_default;
exports.default = module.exports;