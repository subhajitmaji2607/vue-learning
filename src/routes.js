import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import { createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Signup',
        component:Signup,
        path:'/signup'
    },
    {
        name:'Login',
        component: Login,
        path:'/login'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;