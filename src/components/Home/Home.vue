<template>
  <div>
    <div class="d-flex justify-center" style="margin: 3rem 0rem;">
      <div v-for="(image, i) in imglist" :key="i" class="pa-2" outlined tile>
        <img
          :src="getImgUrl(image.img)"
          class=""
          style="width: 100%; height: auto"
        />
      </div>
    </div>

    <div style="margin: 3rem auto; background: #ffff; width: 85%">
      <div style="margin: autso; padding: 30px">
        <div class="p-10">
          <p class="text-h4 my-8 text-center">
            Exploring Radiology: Mastering the Art of Medical Visualization
          </p>
          <p class="my-6">
            <br /><b>Welcome to ImagingGuru! </b>

            <br />
            At ImagingGuru!, we are dedicated to unlocking the fascinating world
            of medical imaging and radiology. Our mission is to empower
            healthcare professionals, students, and enthusiasts with
            comprehensive knowledge and expertise in this dynamic field.
            <br /><br />
            <b>Why Choose ImagingGuru?</b>
            <br />
            <br /><b>Expert Learning Resources:</b> Access a wide range of
            carefully curated learning materials, including articles, case
            studies, and interactive tutorials, designed to enhance your
            understanding of radiology. <br /><br /><b
              >Cutting-Edge Technology:</b
            >
            Stay up-to-date with the latest advancements in medical imaging
            technology and techniques, ensuring you're at the forefront of
            innovation. <br /><br /><b> Trusted Guidance:</b> Benefit from the
            wisdom of experienced radiologists and experts who are passionate
            about sharing their knowledge and insights with you. <br /><br /><b
              >Community Interaction:</b
            >
            Connect with a thriving community of radiology enthusiasts,
            students, and professionals, fostering an environment of
            collaboration and growth.

            <br /><br /><b>Explore Our Sections:</b> <br /><br /><b
              >Learning Center:</b
            >
            Dive into our extensive collection of educational resources, ranging
            from basic principles to advanced imaging modalities. Whether you're
            a beginner or an experienced professional, there's something for
            everyone. <br /><br /><b>Case Studies:</b> Immerse yourself in
            real-world scenarios and intriguing cases that challenge your
            diagnostic skills. Learn from these practical examples to enhance
            your expertise in radiology interpretation. <br /><br /><b
              >News and Updates:</b
            >
            Stay informed about the latest breakthroughs, research, and trends
            in the radiology world. Our regularly updated news section keeps you
            in the loop with the rapidly evolving landscape of medical imaging.
            <br /><br /><b>Webinars and Workshops:</b>
            Participate in live webinars and workshops hosted by industry
            experts, where you can gain practical insights and engage in
            meaningful discussions.
            <br /><br /><b>Community Forum:</b> Join our vibrant community
            forum, where you can exchange ideas, seek advice, and collaborate
            with fellow radiology enthusiasts and professionals from around the
            globe. <br /><br /><i
              >Whether you're a radiology student seeking to strengthen your
              knowledge or a seasoned practitioner looking to expand your skill
              set, ImagingGuru is your gateway to a rewarding journey in the
              world of medical imaging.
            </i>

            <br /><br /><i
              >Join us today and embark on an exciting adventure into the art
              and science of radiology. Let's discover the potential of medical
              imaging together!
            </i>
            <br /><br /><a href="/contact-us">Contact Us for Inquiries </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarausalAutoplay from "@/components/CarausalAutoplay.vue";
import Imglist from "@/json/img.json";
export default {
  name: "Home", // eslint-disable-line
  components: CarausalAutoplay,
  data() {
    return {
      imglist: Imglist,
    };
  },
  methods: {
    getImgUrl(imageName) {
      if (imageName !== "") {
        const images = require.context("../../assets/img", false, /\.png$/);
        return images("./" + imageName);
      }
    },
  },
};
</script>
<style>
body {
  /* align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center; */
}

@-webkit-keyframes s_scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes s_scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 7));
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: s_scroll 10s linear infinite;
  animation: s_scroll 10s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>
