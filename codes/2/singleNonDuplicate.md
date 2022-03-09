###  排序数组中只出现一次的数字

> 题目:给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。

示例1：

```js
// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2
```

示例2：

```js
// 输入: nums =  [3,3,7,7,10,11,11]
// 输出: 10
```

提示:

* 1 <= nums.length <= 10 ^ 5
* 0 <= nums[i] <= 10 ^ 5

> 进阶: 采用的方案可以在 O(log n) 时间复杂度和 O(1) 空间复杂度中运行吗？

> 注意：本题与[主站 540 题](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/)相同。

### 思路分析

本题参考[数组中数字出现的次数(1)](../1/singleNumbers-1.md)可以得出答案。代码如下:

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let sum = 0;
    for(let i = 0;i < nums.length;i++){
        sum ^= nums[i];
    }
    return sum;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/skFtm2/solution/pai-xu-shu-zu-zhong-zhi-chu-xian-yi-ci-d-jk8w/)。
