### 和为s的两个数字

> 题目:输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

示例 1：

```js
// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]
```

示例 2：

```js
// 输入：nums = [10,26,30,31,47,60], target = 40
// 输出：[10,30] 或者 [30,10]
```

限制:

* 1 <= nums.length <= 10 ^ 5
* 1 <= nums[i] <= 10 ^ 6

### 思路分析

本题可以使用双指针算法来解决。定义一个起始指针l和结束指针r，则有:

1. l = 0;
2. r = nums.length - 1;

当在闭区间[l,r]中访问数组项，我们可以通过nums[l] + nums[r]来判定哪个指针相加/相减。直到找到和为target的数组项为止。如下:

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums,target) {
    let l = 0,r = nums.length - 1,res = 0;
    // 当res不等于target时开始循环
    while(res !== target){
        res = nums[l] + nums[r];
        // 由于是数组是递增排序的，因此通过相加之和与target判定从而得到是哪个指针变动
        if(res > target){
            r--;
        }else if(res < target){
            l++;
        }
    }
    // 返回一对数组项
    return (nums[l] + "," + nums[r]).split(",");
};
```

时间复杂度 O(n)：  n 为数组 nums 的长度；双指针共同线性遍历整个数组。
空间复杂度 O(1)： 变量 l, r 使用常数大小的额外空间。

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/solution/mian-shi-ti-57-he-wei-s-de-liang-ge-shu-zi-shuang-/)。

