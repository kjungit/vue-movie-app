import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import MovieSearch from './MovieSearch'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash, History
  // https://google.com/#/search
   history: createWebHashHistory(),
   scrollBehavior() {
     return { top: 0 }
   },
   //pages
   // https://google.com/
   routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/movie',
      component: MovieSearch
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
   ]
})