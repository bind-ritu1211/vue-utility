<template>
  <div style="padding: 6px; line-height: 4">
    <a
      v-for="text in btn_list"
      :key="text"
      :href="text.url"
      :target="text.target"

      style="
        color: #000000;
        text-shadow: 1px 1px #e5e1e1;
        text-decoration: none;
        font-size: 12px;
      "
    >
      <v-btn style="width: 100%" color="secondary-1 " height="40" :class="{ 'selected-item': text.selected }">
        
        {{ text.content }}
      </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    btn_list: String,
  },
  methods: {
    getClass(item) {
      return item.condition ? 'class-for-true' : 'class-for-false';
    }
  }
};
</script>

<style>
.selected-item {
  background-color: yellow !important;
}
</style>
