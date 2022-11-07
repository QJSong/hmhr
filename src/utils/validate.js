/**
 * Created by PanJiaChen on 16/11/18.
 */

/** 判断是不是外链
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断传进来手机号
 * @param {string} str
 * @returns {Boolean} 通过校验给true
 */
export function validMobile(str) {
  return /^1[3-9]\d{9}$/.test(str)
}
