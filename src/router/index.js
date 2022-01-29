import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignupForm from '../views/SignupForm.vue'
import Resume from '../views/Resume.vue'
import Testimonial from '../views/Testimonial.vue'
import Skills from '../views/Skills.vue'
import project from '../views/project.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signupForm',
    name: 'SignupForm',
    component: SignupForm
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: Testimonial
  },
  {
    path: '/project',
    name: 'project',
    component: project
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
