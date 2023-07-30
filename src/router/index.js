import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Description from "@/views/home/DescriptionView"
import ContactUs from "@/views/home/ContactUs"
import Brain from "@/views/plans/BrainView"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      layout: "AppNavBarHome",
    },
  },
  {
    path: "/description",
    name: "description",
    component: Description,  
  },
  {
    path: "/brain",
    name: "brain",
    component: Brain,  
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,  
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
