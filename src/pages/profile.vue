<template>
  <div class="profile-box">
    <div class="code" v-html="codeInStyleTag"></div>
    <div class="base-info">
      <div class="item" v-for="item in baseInfo" :key="item.title">
        <span class="title">{{ item.title }}</span>
        <span class="content">{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { preloadText } from './preloadedText';

interface info {
  title: string;
  content: string;
}

export default defineComponent({
  setup() {
    const interval = ref(40);
    const currentStyle = ref('');
    const codeInStyleTag = computed(() => {
      return `${currentStyle.value}`;
    });

    const baseInfo = ref<info[]>([]);

    // 渐进式代码展示
    const progressivelyShowStyle = () => {
      return new Promise<void>((resolve) => {
        const showStyle = async () => {
          const style = preloadText;
          if (!style) return;
          // 计算前 n 个 style 的字符总数
          const length = preloadText.length;
          const prefixLength = length - style.length;
          if (currentStyle.value.length < length) {
            const l = currentStyle.value.length - prefixLength;
            const char = style.substring(l, l + 1) || ' ';
            currentStyle.value += char;
            setTimeout(showStyle, interval.value);
          } else {
            console.log('结束');
            resolve();
          }
        };
        showStyle();
      });
    };
    const drawBaseInfo = () => {
      baseInfo.value = [{ title: '姓名', content: '李耀亭' }];
    };

    onMounted(async () => {
      await progressivelyShowStyle();
      drawBaseInfo();
    });

    return {
      codeInStyleTag,
      baseInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
.profile-box {
  width: 100%;
  height: 100%;
  padding: 30px;
  .code {
    font-size: 18px;
    line-height: 2em;
    color: varcss.$color-light;
  }
  .base-info {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: varcss.$font-color-default;
    .item {
      width: 50%;
      display: flex;
      span {
        padding: 10px;
      }
      &:first-child {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &:last-child {
        flex: 3;
      }
    }
  }
}
</style>
