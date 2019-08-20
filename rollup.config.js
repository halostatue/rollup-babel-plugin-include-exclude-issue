/* eslint-env node */

import path from 'path'

import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-copy'
import gzipPlugin from 'rollup-plugin-gzip'
import json from 'rollup-plugin-json'
import minify from 'rollup-plugin-babel-minify'
import css from 'rollup-plugin-css-only'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import sizes from 'rollup-plugin-sizes'
import strip from 'rollup-plugin-strip'
import vue from 'rollup-plugin-vue'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'

let minifier

switch (process.env.SHRINKER) {
  case 'babel-minify': {
    minifier = minify
    break
  }
  case 'terser': {
    minifier = terser
    break
  }
  default: {
    minifier = terser
  }
}

const destination = 'build'
const env = process.env.NODE_ENV || 'development'
const isProduction = env === 'production'

const babelConfig = { exclude: ['node_modules/**'] }

if (process.env.INCLUDE_BABEL !== undefined) {
  babelConfig.include = ['node_modules/vue-password/**']
}

const plugins = [
  replace({
    include: 'withParams.js',
    'process.env.BUILD': JSON.stringify('web')
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
    'process.env.BUILD': JSON.stringify(env)
  }),
  resolve({
    mainFields: ['module', 'browser', 'main'],
    extensions: ['.mjs', '.js', '.vue', '.json'],
    preferBuiltins: false,
    browser: true
  }),
  commonjs({ include: 'node_modules/**' }),
  json(),
  babel(babelConfig),
  eslint({ throwOnError: true, throwOnWarning: true }),
  sizes(),
  vue({ style: 'scss', css: false }),
  alias({
    resolve: ['.vue', '.js', '/index.js'],
    'vue-password': require.resolve('vue-password/src/index.js'),
    '@common': path.resolve('./src/common/'),
    '@components': path.resolve('./src/components/'),
    '@': path.resolve('./src/'),
    'vue': require.resolve('vue/dist/vue.esm.js')
  }),
  ...isProduction ? [
    strip(),
    minifier(),
    gzipPlugin()
  ] : [],
]

const app = {
  input: 'src/index.js',
  output: {
    dir: `${destination}/js`,
    format: 'iife'
  },
  plugins: [
    css({ output: `${destination}/css/customer-app.css` }),
    copy({
      targets: [{
        src: ['static/favicon.ico', 'static/robots.txt', 'static/images'],
        dest: destination
      }]
    }),
    ...plugins
  ]
}

export default app
