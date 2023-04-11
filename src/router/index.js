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
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;