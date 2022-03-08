###  查找插入位置

> 题目:给定一个排序的整数数组 nums 和一个整数目标值 target ，请在数组中找到 target ，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置

请必须使用时间复杂度为 O(log n) 的算法。


示例1：

```js
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
```

示例2：

```js
// 输入: nums = [1,3,5,6], target = 2
// 输出: 1
```

示例3：

```js
// 输入: nums = [1,3,5,6], target = 7
// 输出: 4
```

示例4：

```js
// 输入: nums = [1,3,5,6], target = 0
// 输出: 0
```

示例5：

```js
// 输入: nums = [1], target = 0
// 输出: 0
```

提示:

* 1 <= nums.length <= 10 ^ 4
* -10 ^ 4 <= nums[i] <= 10 ^ 4
* nums 为无重复元素的升序排列数组
* -10 ^ 4 <= target <= 10 ^ 4


> 注意：本题与[主站 35 题](https://leetcode-cn.com/problems/search-insert-position/)相同。

### 思路分析

本题我们可以很轻易的就想到二分算法，此外需要注意的就是，本题在二分算法完成之后，还要考虑是否找到值，否则就需要返回插入的索引,事实上在二分算法完成之后，仍然找不到值，我们直接返回开始索引的值即可。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //res默认初始化为-1就是方便后续判断的
    let start = 0,end = nums.length - 1,res = -1;
    while(start <= end){
        let m = Math.floor((start + end) / 2);
        if(nums[m] > target){
            end = m - 1;
        }else if(nums[m] < target){
            start = m + 1;
        }else{
            res = m;
            break;
        }
    }
    return res !== -1 ? res : start;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(log<sup>n</sup>)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/ms70jA/solution/zui-da-de-yi-huo-by-leetcode-solution-hr7m/)。
