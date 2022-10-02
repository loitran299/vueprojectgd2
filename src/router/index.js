
import {createRouter ,createWebHistory} from 'vue-router'
import TheLogin from '@/components/pages/common/TheLogin.vue'
import TheEmployee from '@/components/pages/employee/TheHome.vue'
import TheManager from '@/components/pages/manager/TheHome.vue'

    const routes = [
    { path: '/',name: 'Trang Đăng nhập', redirect: '/login' },
    { path: '/login',name: 'Đăng nhập', component: TheLogin },
    { path: '/employees', component: TheEmployee },
    { path: '/manager', component: TheManager },
  ]

  export function getRouter() {
      const router = createRouter({
      history: createWebHistory(),
      routes: routes
    })
    return router
  }

