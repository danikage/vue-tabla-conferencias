import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Test from '@/views/Test'
import Sessions from '@/views/Sessions'
import People from '@/views/People'
import PeopleDetail from '@/views/PeopleDetail'
import Location from '@/views/Location'
import Info from '@/views/Info'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/sessions',
    name: 'Sessions',
    component: Sessions
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/people/:peopleId',
    name: 'PeopleDetail',
    component: PeopleDetail
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
