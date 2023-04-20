import { createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/items/:id",
        name: "item.edit",
        component: () => import("@/views/ItemEdit.vue"),
        props: true
    },
    {
        path: "/items",
        name: "item.add",
        component: () => import("@/views/ItemAdd.vue"),
        props: true
    },
    {
        path: "/bill",
        name: "bill",
        component: () => import("@/views/Bill.vue"),
    },

    // {
    //     path: "/login",
    //     name: "login",
    //     component: () => import("../views/Login.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;