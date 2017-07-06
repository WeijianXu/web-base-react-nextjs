/**
 * 排序算法基础模块
 * created by wjxu on 2017-06-29T10:03:13+0800
 * @return {Object}    各个排序算法的JavaScript实现
 */
import Util from './util';
/**
 * 合并两个已排好序的数组data[left...middle]和data[middle+1...right]
 * created by wjxu on 2017-06-29T09:58:50+0800
 * @param  {Array} data          需要排序的数组数据
 * @param  {Number} left         左数组起点
 * @param  {Number} middle       中间参看点位置
 * @param  {Number} right        有数组结束点
 * @param  {Object|Number} ref   参考对象或数字，作为其参考值一定需要是待排序的元素的最大值，如 Infinity
 * @param  {String} comparedAttr 可选，当元素为对象时，需设置以此属性作为判断的依据
 */
function _merge(data, left, middle, right, ref, comparedAttr) {
  let n1 = middle - left + 1; // 两个数组的大小
  let n2 = right - middle;
  let L = [],
    R = [];
  // 把两部分分别拷贝到两个数组中
  for (let i = 0; i < n1; i++) {
    L.push(data[left + i]);
  }
  for (let j = 0; j < n2; j++) {
    R.push(data[middle + j + 1]);
  }
  L.push(ref); // 使用无穷大作为哨兵值放在子数组的末尾
  R.push(ref); // 这样可以免去检查某个子数组是否已读完的步骤
  let i = 0,
    j = 0;
  // 依次比较两个子数组中的值，每次取出更小的那一个放入原数组
  if (comparedAttr) {
    for (let k = left; k <= right; k++) {
      // 如果比较的属性不存在，跳过
      if (!L[i][comparedAttr]) {
        data[k] = L[i];
        ++i;
      } else if (!R[j][comparedAttr]) {
        data[k] = R[j];
        ++j;
      } else if (L[i][comparedAttr] <= R[j][comparedAttr]) {
        data[k] = L[i];
        ++i;
      } else {
        data[k] = R[j];
        ++j;
      }
    }

  } else {
    for (let k = left; k <= right; k++) {
      if (L[i] <= R[j]) {
        data[k] = L[i];
        ++i;
      } else {
        data[k] = R[j];
        ++j;
      }
    }
  }
}


/**
 * // 非递归(迭代)实现的归并排序(自底向上)
 * created by wjxu on 2017-06-29T09:47:23+0800
 * @param  {Array} data          需要排序的数组数据
 * @param  {String|Number} refer 参考字符或数字，作为其参考值一定需要是待排序的元素的最大值，如 Infinity
 * @param  {String} comparedAttr 可选，当元素为对象时，需设置以此属性作为判断的依据，注意保证数据该属性存在
 * @return {}              
 */
function mergesort_iteration(data, refer, comparedAttr) {
  if (Util.typeof(data) !== 'array') {
    console.warn(data, '数据不是数组');
    return;
  }
  if (Util.regex.isEmpty(refer)) {
    console.warn('参考refer不能为空');
    return;
  }
  let ref;
  if (data[0] !== undefined && Util.typeof(data[0]) === 'object') {
    if (Util.regex.isEmpty(comparedAttr)) {
      console.warn('数据的元素为对象时，需要设置比较属性 comparedAttr ');
      return;
    }
    ref = {};
    ref[comparedAttr] = refer;
  } else {
    ref = refer;
  }
  let left = 0,
    right = data.length - 1;
  let low, middle, high; // 子数组索引,前一个为data[low...middle],后一个子数组为data[middle+1...high]
  // 子数组的大小初始为1,每轮翻倍
  for (let size = 1; size <= right - left; size *= 2) {
    low = left;
    // 后一个子数组存在(需要归并)
    while (low + size - 1 <= right - 1) {
      middle = low + size - 1;
      high = middle + size;
      // 后一个子数组大小不足size
      if (high > right) {
        high = right;
      }
      _merge(data, low, middle, high, ref, comparedAttr);
      low = high + 1;　 // 前一个子数组索引向后移动
    }
  }
}

export {
   mergesort_iteration as mergeSortIteration
};