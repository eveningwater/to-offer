###  数据流的第 K 大数值

> 题目:设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

* KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
* int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

示例1：

```js
// 输入：
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// 输出：
// [null, 4, 5, 5, 8, 8]

// 解释：
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8
```


提示:

* 1 <= k <= 10 ^ 4
* 0 <= nums.length <= 10 ^ 4
* -10 ^ 4 <= nums[i] <= 10 ^ 4
* -10 ^ 4 <= val <= 104
* 最多调用 add 方法 10 ^ 4 次
* 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素


> 注意：本题与[主站 703 题](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)相同。

### 思路分析

本题如果只使用排序的话，很简单就能实现，代码如下:

```js
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    return this.nums.sort((a,b) => b - a)[k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/jBjn9C/solution/shu-ju-liu-de-di-k-da-shu-zhi-by-leetcod-11n3/)。
