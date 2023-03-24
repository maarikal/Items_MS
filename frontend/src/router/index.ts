import {createRouter, createWebHistory} from 'vue-router';

// Import your components here
// @ts-ignore
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Notes from '../views/Intro.vue';
import Items from '../views/Items.vue';

const routes = [

    {
        path: '/',
        name: 'Notes',
        component: Notes,
    },
    {
        path: '/signup',
        name: 'Sign Up',
        component: SignUp,
    },
    {
        path: '/signin',
        name: 'Sign In',
        component: SignIn,
    },
    {
        path: '/items',
        name: 'List of items',
        component: Items,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
