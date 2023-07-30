<template>
  <v-app-bar app color="primary-1">
    <v-toolbar-title>ImagingGuru.com</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text v-for="nav_text in links" :key="nav_text">
      <a
        :href="nav_text.url"
        :target="nav_text.target"
        style="color: aliceblue; text-decoration: none"
      >
        {{ nav_text.content }}
      </a>
    </v-btn>
    <v-btn text><a href="/Planingsite" target="_blank" style="color: rgb(249, 245, 245); text-decoration: none">Virtual Planning</a></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          url: "/",
          content: "HOME",
        },
        {
          url: "/brain",
          content: "PLANNING",
        },
        {
          url: "/tech",
          content: "TECHNIQUE",
        },
        {
          url: "/anatomy",
          content: "ANATOMY",
        },
       
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style></style>
