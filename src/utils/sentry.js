import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

const options = {
  release: process.env.VERSION,
  ignoreUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
    // Firefox extensions
    /^resource:\/\//i,
    // Ignore Google flakiness
    /\/(gtm|ga|analytics)\.js/i
  ]
}

Raven
  .config('https://7c6d14a381b64ea6b5e45e0cf7674338@sentry.io/1854047', options)
  .addPlugin(RavenVue, Vue)
  .install()

Raven.setUserContext({
  version: process.env.VERSION,
  location: window.location
})
