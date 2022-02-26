###  出现频率最高的 k 个数字

> 题目:给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。

示例1：

```js
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
```

示例2：

```js
// 输入: nums = [1], k = 1
// 输出: [1]
```

提示:

* 1 <= nums.length <= 10 ^ 5
* k 的取值范围是 [1, 数组中不相同的元素的个数]
* 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的


> 进阶：所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

> 注意：本题与[主站 347 题](https://leetcode-cn.com/problems/top-k-frequent-elements/)相同。

### 思路分析

本题根据题意，我们需要找到数组中出现次数最多的元素，将它们按降序排列，然后截取0到k的元素也就得到了出现频率最多的元素，但是在这里我们需要注意的是，我们要使用哈希表，来存储元素的个数，然后重新添加到一个新的数组中去，再对这个数组进行排序。哈希表中存储的键就是数组中的元素，值就是元素的个数。代码如下:

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for(const n of nums){
        //键是数组中的元素，值是元素出现的个数
        map.set(n,(map.get(n) || 0) + 1);
    }
    const numCountList = [];
    for(const item of map){
        numCountList.push(item);
    }
    return numCountList.sort((a,b) => b[1] - a[1]).slice(0,k).map(item => item[0]);
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/g5c51o/solution/chu-xian-pin-lu-zui-gao-de-k-ge-shu-zi-b-a1td/)。
