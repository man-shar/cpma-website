import Router from 'vue-router'
import Home from "@/components/Home.vue";
import Academics from "@/components/Academics.vue";
import Activities from "@/components/Activities.vue";
import Campus from "@/components/Campus.vue";
import Faculty from "@/components/Faculty.vue";
import Admissions from "@/components/Admissions.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      name: 'Home',
      component: Home,
      path: '/'
    },
    {
      name: 'Academics',
      component: Academics,
      path: '/academics'
    },
    {
      name: 'Activities',
      component: Activities,
      path: '/activities'
    },
    {
      name: 'Campus',
      component: Campus,
      path: '/campus'
    },
    {
      name: 'Faculty',
      component: Faculty,
      path: '/faculty'
    },
    {
      name: 'Admissions',
      component: Admissions,
      path: '/admissions'
    },
    {
      name: 'About',
      component: About,
      path: '/about'
    },
    {
      name: 'Contact',
      component: Contact,
      path: '/contact'
    }
  ]
})