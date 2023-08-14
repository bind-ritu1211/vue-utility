<template>
  <v-navigation-drawer
    app
    color="#ededed"
    style="z-index: 0;width: 260px;padding-bottom: 4rem; background-color: rgb(11 209 209) !important);
    border-color: rgb(11 209 209) !important);"
    floating
    permanent
    :mini-variant="$vuetify.breakpoint.xs"
  >
    <v-list color="transparent">
      <v-list-item></v-list-item>
    </v-list>

    <!-- <v-divider></v-divider> -->
    <!-- SideBarBtn -->
    <div v-if="this.$router.currentRoute.path === '/brain'">
      <SideBarBtn :btn_list="plan_list" />
    </div>
    <div v-else>
      <SideBarBtn :btn_list="plan_list" />
    </div>
  </v-navigation-drawer>
</template>

<script>
import SideBarBtn from "@/components/Layouts/sideBarBtn.vue";
import json from "@/json/data.json";
export default {
  components: { SideBarBtn },
  data() {
    return {
      plan_list: json,
      btn_list: [
        { content: "MRI FOR PATIENT'S", url: "/description" },
        { content: "CONTACT US", url: "contact-us" },
      ],
    };
  },
};
</script>

<style></style>
