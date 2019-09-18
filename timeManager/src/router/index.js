import Vue from 'vue'

import ChartManager from '@/components/ChartManager'
import ClockManager from '@/components/ClockManager'
import User from '@/components/User'
import WorkingTime from '@/components/WorkingTime'
import WorkingTimes from '@/components/WorkingTimes'

import Connexion from '@/components/Connexion'

import SignUp from '@/components/SignUp'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '@/components/Connexion',
      name: 'Connexion',
      component: Connexion
    },{
      path: '@/components/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
