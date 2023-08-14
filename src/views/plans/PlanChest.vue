<template>
    <div>
      <plans-view v-for="plans in  plans_text" :key="plans" :plans="plans" />
    </div>
  </template>
  
  <script>
  import PlansView from '@/components/Planning/PlansView.vue';
  export default {
    components: { PlansView },
    data(){
      return{
        plans_text:[{
          title:  "CHEST",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }]
      }
    }
  };
  </script>