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
 * 判断传进来的是不是admin 和 editor
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  // indexOf（值） 找下标
  return valid_map.indexOf(str.trim()) >= 0
}
