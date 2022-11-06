<template>
  <!--component是元组件 根据is属性来渲染 -->
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    // 链接跳转的路径
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    // 判断路径是不是外链 是外链就返回true
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      // 是外链就让component 渲染一个a标签
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>
