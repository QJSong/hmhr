<template>
  <!-- 左侧边栏的容器 -->
  <div :class="{ 'has-logo': showLogo }">
    <!-- 头部logo vuex里的传过来的变量为false 所以隐藏 -->
    <logo v-if="showLogo" :collapse="isCollapse" />
    <!-- 主体部分的容器 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- 菜单 （下面属性都可以查文档）-->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      // 获取到路由里的 mata 和 path 属性
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // 控制logo 显示或者隐藏
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    // 在侧边栏 打开的时候关闭每个菜单
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
