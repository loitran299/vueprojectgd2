import cookie from '@/stores/cookie'
import Role from '@/Const/role'
import {createRouter ,createWebHistory} from 'vue-router'
import TheLogin from '@/components/pages/common/TheLogin.vue'
import TheEmployee from '@/components/pages/employee/TheHome.vue'
import TheManager from '@/components/pages/manager/TheHome.vue'

    const routes = [
    { path: '/',name: 'home',meta: { requiresAuth: true }},
    { path: '/login',name: 'login', component: TheLogin },
    { path: '/employees', name: 'employees', component: TheEmployee, meta: { requiresAuth: true }},
    { path: '/manager', name: 'manager',component: TheManager, meta: { requiresAuth: true }},
  ]

  export function getRouter() {
      const router = createRouter({
      history: createWebHistory(),
      routes: routes
    })
    router.beforeEach((to, from, next) => {
      const userInfo= cookie.getUser();
      // next-line: check if route ("to" object) needs authenticated
      if (to.meta.requiresAuth && !userInfo.Username) {
        next('/login');
      }
      else if (userInfo.Username) {
        switch (to.name) {
          case "home":
              if(userInfo.Role == Role.Employee){
                next({ path: '/employees' });
              }else if(userInfo.Role == Role.Manager){
                next({ path: '/manager' });
              }else{
                next({path: '/login'})
              }
            break;
          default:
            next();
            break;
        }
      } else next();
  })
    return router
  }

