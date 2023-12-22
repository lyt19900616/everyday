<template>
  <div class="app">
    <div class="center">
      <div class="menu-box">
        <div class="header-box">
          <div class="img-box">
            <img src="./assets/my.jpeg" />
          </div>
          <div class="title">李耀亭</div>
          <div class="subtitle">编程爱好者</div>
        </div>
        <div class="tag-box">
          <div
            v-for="(tag, index) in tags"
            :key="index"
            :class="tagIndex === index ? 'active' : ''"
            @click="tagChange(index, tag.path)"
          >
            {{ tag.name }}
          </div>
        </div>
      </div>
      <div class="content-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const tags = ref([
      {
        name: '个人信息',
        path: '/index',
      },
      {
        name: '技术技能',
        path: '',
      },
      {
        name: 'CSS动画',
        path: '/css-animation',
      },
    ]);
    const router = useRouter();
    const tagIndex = ref(0);
    const tagChange = (index: number, path: string) => {
      tagIndex.value = index;
      router.push(path);
    };

    return {
      tags,
      tagIndex,
      tagChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .center {
    width: 1600px;
    height: 800px;
    display: flex;
    box-shadow: 0 0 8px 10px varcss.$bg-color-default;
    .menu-box {
      width: 100%;
      height: 100%;
      width: 430px;
      padding: 30px;
      .header-box {
        display: flex;
        align-items: center;
        .img-box {
          position: relative;
          width: 300px;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background: linear-gradient(to right, #000000, transparent);
          }
          img {
            z-index: 2;
            width: 300px;
          }
        }
        .title {
          padding: 10px;
          writing-mode: vertical-rl; /* 设置文字垂直排列，从右向左 */
          text-orientation: upright; /* 设置文字直立显示 */
          white-space: nowrap; /* 防止文字换行 */
          display: flex;
          align-items: center;
          color: varcss.$color-default;
          font-size: 24px;
          font-weight: bolder;
        }
        .subtitle {
          writing-mode: vertical-rl; /* 设置文字垂直排列，从右向左 */
          text-orientation: upright; /* 设置文字直立显示 */
          white-space: nowrap; /* 防止文字换行 */
          display: flex;
          align-items: flex-end;
          color: varcss.$color-minor;
        }
      }
      .tag-box {
        div {
          margin-top: 10px;
          width: 300px;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: varcss.$font-size-sl;
          cursor: pointer;
          box-shadow: 2px 4px 8px 0px varcss.$color-primary;
          // box-shadow:X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色 投影方式
          &:hover {
            color: varcss.$color-white;
            box-shadow: 2px 0 8px 0px varcss.$color-primary inset;
          }
        }
        .active {
          background-color: varcss.$color-minor;
          color: varcss.$color-white;
          font-weight: bolder;
        }
      }
    }
    .content-box {
      flex: 1;
    }
  }
}
</style>
