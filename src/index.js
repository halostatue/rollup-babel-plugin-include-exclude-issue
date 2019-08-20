import 'regenerator-runtime/runtime'
import cssVars from 'css-vars-ponyfill'

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueCookie from 'vue-cookie'
import { sync } from 'vuex-router-sync'

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

import store from '@store'
import router from './router'

import apolloProvider from './common/apollo'

import App from './App'

cssVars({ exclude: '[href*=semantic]'})

if (document.body.dataset.sentrydsn) {
  Sentry.init({
    dsn: document.body.dataset.sentrydsn,
    environment: document.body.dataset.sentryenv,
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true,
      }),
    ],
  });
}

Vue.use(Vuelidate)
Vue.use(VueCookie)

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  render: createElement => createElement(App, {})
})
