import usersComp from './components/user.vue'
import aboutComp from './components/about/about.vue'
import homeComp from './components/home.vue'
import aboutContentComp from './components/about/about-connent.vue'

export const routes = [
  {
    path: '/user', component: usersComp, children: [
      { path: ':id', component: usersComp, name: 'userProfile' }
    ]
  },

  {
    path: '/about', component: aboutComp, children: [
      { path: 'show', component: aboutContentComp }
    ]
  },
  { path: '', component: homeComp },
  { path: '*', component: homeComp }
]