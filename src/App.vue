<template>
  <div id="app">
    <v-app>
      <!-- Navbar -->
      <nav-bar />
      <!-- Sidebar -->
      <side-bar />
      <v-main style="padding: 70px 0px 0px 275px;">
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
