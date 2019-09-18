import Vue from 'vue'
import App from './App'
import router from './router'
import Connexion from '@/components/Connexion'
import ChartManager from '@/components/ChartManager'
import ClockManager from '@/components/ClockManager'
import User from '@/components/User'
import WorkingTime from '@/components/WorkingTime'
import WorkingTimes from '@/components/WorkingTimes'
import UpdateEmail from '@/components/updateEmail'
import SignUp from '@/components/SignUp'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
