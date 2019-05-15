import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/auth/Login'
import ResetPassword from '@/components/auth/ResetPassword'
import NewPassword from '@/components/auth/NewPassword'

import TheHomePanel from '@/components/TheHomePanel'

import AddUser from '@/components/profile/AddUser'
import ProfileEdit from '@/components/profile/ProfileEdit'
import ProfilePhoto from '@/components/profile/ProfilePhoto'

const debug = require('debug')('cl8.route')

Vue.use(Router)

debug('routing')
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHomePanel,
      meta: { requiresAuth: true }
    },
    {
      path: '/edit',
      name: 'editProfile',
      component: ProfileEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/photo',
      name: 'editProfilePhoto',
      component: ProfilePhoto,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'signin',
      component: Login
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword
    },
    {
      path: '/new-password',
      name: 'newPassword',
      component: NewPassword
    },
    {
      path: '/add-user',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
})

export default router
