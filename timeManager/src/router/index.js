import Vue from 'vue'

import ChartManager from '@/components/ChartManager'
import ClockManager from '@/components/ClockManager'
import User from '@/components/User'
import WorkingTime from '@/components/WorkingTime'
import WorkingTimes from '@/components/WorkingTimes'

import Connexion from '@/components/Connexion'
import UpdateEmail from '@/components/updateEmail'

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
    },{
      path: '@/components/ClockManager',
      name: 'ClockManager',
      component: ClockManager
    },{
      path: '@/components/UpdateEmail',
      name: 'UpdateEmail',
      component: UpdateEmail
    },{
      path: '@/components/ChartManager',
      name: 'ChartManager',
      component: ChartManager
    },{
      path: '@/components/User',
      name: 'User',
      component: User
    },{
      path: '@/components/WorkingTime',
      name: 'WorkingTime',
      component: WorkingTime
    },{
      path: '@/components/WorkingTimes',
      name: 'WorkingTimes',
      component: WorkingTimes
    }
  ]
})
