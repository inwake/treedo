import {AppRegistry} from 'react-native'
import * as Sentry from '@sentry/react-native'
import {name as appName} from './app.json'
import App from './src/app.jsx'

Sentry.init({
  dsn: 'https://990137539e3716d54e0d2c09b9871b1f@o4507507944390656.ingest.de.sentry.io/4507507946684496',

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0
})

AppRegistry.registerComponent(appName, function AppToRegister() {
  Sentry.wrap(App)
  return App
})
