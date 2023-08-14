<template>
  <div id="app">
    <v-app>
      <!-- Navbar -->
      <nav-bar />
      <!-- Sidebar -->
      <side-bar v-if="this.$router.currentRoute.path === '/'" style="width: 0px; display: none;"/>
      <side-bar v-else/>
      <v-main v-if="this.$router.currentRoute.path === '/'" style="padding: 55px 0px 0px 0px;background: rgb(239, 234, 255);">
        <router-view />
      </v-main>
      <v-main v-else style="padding: 70px 0px 0px 275px; background: rgb(239, 234, 255);">
        <router-view />
      </v-main>
      <!-- Footer -->
      <FootervView />
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/Layouts/NavBar.vue";
import SideBar from "./components/Layouts/SideBar.vue";
import FootervView from "./components/Layouts/FootervView.vue";
export default {
  components: { NavBar, SideBar, FootervView },
  name: "App",
};
</script>
