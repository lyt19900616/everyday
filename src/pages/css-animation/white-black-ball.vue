<template>
  <div class="box">
    <div class="circle">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// 容器的大小
$boxSize: 200px;
// 小球的大小
$ballSize: 10px;
// 小球的数量
$n: 36;
$deg: calc(360deg / $n);
$duration: 2s;
.box {
  width: 100vw;
  height: 100vh;
  background-color: varcss.$color-light;
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    width: $boxSize;
    height: $boxSize;
    position: relative;
    // border: 1px solid #fff;
    border-radius: 50%;
    .dot {
      position: absolute;
      left: 50%;
      top: 0;
      width: $ballSize;
      height: $ballSize;
      // background-color: #f40;
      margin-left: calc($ballSize / 2 * -1);
      margin-top: calc($ballSize / 2 * -1);
      // 设置旋转的中心点
      transform-origin: center calc($boxSize / 2 + $ballSize / 2);

      perspective: 70px;
      transform-style: preserve-3d;
      // &:nth-child(1) {
      //   transform: rotate(0deg);
      // }
      @for $i from 1 through $n {
        &:nth-child(#{$i}) {
          transform: rotate($deg * ($i - 1));
          &::before,
          &::after {
            animation-delay: calc($duration / $n * ($i - 1) * -6);
          }
        }
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: $ballSize;
        height: $ballSize;
        border-radius: 50%;
      }
      &::before {
        background-color: #000;
        top: -100%;
        animation: rotate-black $duration infinite;
        @keyframes rotate-black {
          0% {
            animation-timing-function: ease-in;
          }
          25% {
            transform: translate3d(0, 100%, $ballSize);
            animation-timing-function: ease-out;
          }
          50% {
            transform: translate3d(0, 200%, 0);
            animation-timing-function: ease-in;
          }
          75% {
            transform: translate3d(0, 100%, -$ballSize);
            animation-timing-function: ease-out;
          }
        }
      }
      &::after {
        background-color: #fff;
        top: 100%;
        animation: rotate-white $duration infinite;
        @keyframes rotate-white {
          0% {
            animation-timing-function: ease-in;
          }
          25% {
            transform: translate3d(0, -100%, -$ballSize);
            animation-timing-function: ease-out;
          }
          50% {
            transform: translate3d(0, -200%, 0);
            animation-timing-function: ease-in;
          }
          75% {
            transform: translate3d(0, -100%, $ballSize);
            animation-timing-function: ease-out;
          }
        }
      }
    }
  }
}
</style>
