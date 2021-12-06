### 只出现一次的数字 

> 题目:给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

示例 1：

```js
// 输入：nums = [2,2,3,2]
// 输出：3
```

示例 2：

```js
// 输入：nums = [0,1,0,1,0,1,100]
// 输出：100
```

提示:

* 1 <= nums.length <= 3 * 10 ^ 4
* -2 ^ 31 <= nums[i] <= 2 ^ 31 - 1
* nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次


进阶:你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

> 注意：本题与[主站 137 题](https://leetcode-cn.com/problems/single-number-ii/)相同。

### 思路分析

本题我们可以考虑使用哈希表的方式来接题。也就是说我们通过一种数据结构来统计并存储每一个元素出现的次数，然后再遍历这种数据结构，找到出现次数为1的元素即可得出最终的答案,在这里我们使用ES6的map数据结构来存储元素出现的次数。代码如下:

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    for(const num of nums){
        let count = map.get(num) || 0;
        count++;
        // count为元素出现的次数
        map.set(num,count);
    }
    for(const [key,value] of map.entries()){
         if(value === 1){
             return key;
         }
    }
    return -1;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)，其中 n 是数组的长度。
* 空间复杂度：O(n)。哈希映射中包含最多 ⌊n / 3⌋ + 1 个元素，即需要的空间为 O(n)。

[更多思路](https://leetcode-cn.com/problems/WGki4K/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-0vrt/)。
