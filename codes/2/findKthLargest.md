###  数组中的第 k 大的数字

> 题目:给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例1：

```js
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
```


示例2：

```js
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
```

提示:

* 1 <= k <= nums.length <= 10 ^ 4
* -10 ^ 4 <= nums[i] <= 10 ^ 4



> 注意：本题与[主站 215 题](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)相同。

### 思路分析

本题实际上就是考察排序算法，根据题意，按照降序的顺序排列数组，然后返回第k个元素即符合题意。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b - a)[k - 1];
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(log<sup>n</sup>)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/xx4gT2/solution/you-xian-dui-lie-kuai-pai-cha-ru-pai-xu-rmzl6/)。
