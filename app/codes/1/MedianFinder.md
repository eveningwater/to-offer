###  数据流中的中位数

> 题目:如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

* void addNum(int num) - 从数据流中添加一个整数到数据结构中。
* double findMedian() - 返回目前所有元素的中位数。


示例 1：

```js
// 输入：
// ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
// [[],[1],[2],[],[3],[]]

// 输出：[null,null,null,1.50000,null,2.00000]
。
```

示例 2：

```js
// 输入：
// ["MedianFinder","addNum","findMedian","addNum","findMedian"]
// [[],[2],[],[3],[]]
// 输出：[null,null,2.00000,null,2.50000]

```

限制：

* 最多会对 addNum、findMedian 进行 50000 次调用。

### 思路分析

本题虽然标注难度为困难，但其实难点在于题目的不好理解，而且容易理解错。多读几遍题目，读懂了之后，还是很好解答的。首先，我们需要知道中位数的定义。根据题意，中位数的定义分为2种情况:

1. 数据流(即一个数组的长度)为偶数时，该数据流中的中位数应该是:

```js
let l = 0,r = queue.length - 1;
let m = Math.floor((l + r) / 2);
median = (queue[m] + queue[m + 1]) / 2;
```

2. 数据流(即一个数组的长度)为奇数时,该数据流中的中位数应该是:

```js
let l = 0,r = queue.length - 1;
let m = Math.floor(l + r);
median = queue[m / 2];
```

此时，我们可以用一个队列queue来存储数据，用一个变量来代表中位数。这里我们还需要注意的一点就是我们可以使用位运算符来判断数据流的奇偶性。如下所示:

```js
(len & 1) === 0 ? "偶数" : "奇数"
```

```js
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.queue = [];
    this.median = 0;
};
/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.queue.push(num);
    //递增排序
    this.queue.sort((a,b) => a - b);
    const len = this.queue.length,l = 0,r = len - 1;
    const m = Math.floor((l + r) / 2);
    if((len & 1) === 0){
        this.median = (this.queue[m] + this.queue[m + 1]) / 2;
    }else{
        this.median = this.queue[m]
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.median;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

以上算法，时间复杂度是O(n),空间复杂度也为O(n)。更多详细解题思路参考[题解](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/mian-shi-ti-41-shu-ju-liu-zhong-de-zhong-wei-shu-y/)。

