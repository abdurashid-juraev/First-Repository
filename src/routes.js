import usersComp from './components/user.vue'
import aboutComp from './components/about/about.vue'
import homeComp from './components/home.vue'

export const routes = [
  {
    path: '/user', component: usersComp, children: [
      { path: ':id', component: usersComp }
    ]
  },

  { path: '/about', component: aboutComp },
  { path: '', component: homeComp }
]