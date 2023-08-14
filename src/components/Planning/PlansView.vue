<template>
  <div style="margin: 3rem auto; background: #ffff; width: 90%">
    <h1
      class="text-h3 text-lg text-center"
      style="color: rgb(8 10 10); padding: 10px 0px 8px 0px"
    >
      {{ plans.title }}
    </h1>
    <p class="text-center">
      {{ plans.text }}
    </p>
    <hr />
    <hr />
    <div style="padding: 22px">
      <p v-for="plan in plan_text" :key="plan">
        {{ plan.text }}
      </p>
      <strong> Lobska quis vel eros donec ac At volutpat diam ut v: </strong>
      <ul v-for="plan in plans_items" :key="plan">
        <li style="padding: 10px; list-style: none">
          <img src="@/assets/img/circle.svg" alt="Circle" style="width: 10px" />
          <span> {{ plan.text }}</span>
        </li>
      </ul>
      <div class="o-video">
        <iframe
          src="https://www.youtube.com/embed/Kch8n4tcOZQ"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import PlanList from "@/json/plans_list";
import PlanTextList from "@/json/plans_text";
export default {
  props: {
    plans: String,
  },
  data() {
    return {
      plans_items: PlanList,
      plan_text: PlanTextList,
    };
  },
};
</script>
<style>
.o-video {
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 56.25%; /* 9 / 16 * 100 */
  margin: 3rem 0rem;
}
.o-video > iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
}
</style>
