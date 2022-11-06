import router from './router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // 进度条的配置

// const whiteList = ['/login'] // 白名单

// 路由守卫
router.beforeEach(async(to, from, next) => {
  next()
})

router.afterEach(() => {

})
