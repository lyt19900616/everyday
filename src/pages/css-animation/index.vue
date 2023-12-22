<template>
  <div class="box">
    <div class="btn title" v-for="item in list" @click="gotoPage(item)">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const list = ref([{ path: '/white-black-ball', title: '黑白双球交叉动画' }]);

const gotoPage = (item: any) => {
  router.push({ path: item.path });
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 10px;
  .title {
    color: varcss.$font-color-default;
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
    // 右上角白色描边  左下角灰色描边 阴影
    text-shadow: 1px -1px #fff, -1px 1px #999, -4px 4px 1px #80808080;
    cursor: pointer;
  }
  .btn {
    padding: 10px;
    &:hover {
      background-color: #fafafa;
    }
  }
}
</style>
