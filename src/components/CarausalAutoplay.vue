<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
          height="100"
          width="250"
          alt=""
        />
      </div>
    </div>
  </div> -->
</template>

<script>
export default {};
</script>
<style>
/* body {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center;
} */

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
.slider::before, .slider::after {
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