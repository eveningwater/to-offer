###  滑动窗口的平均值

> 题目:给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。

实现 MovingAverage 类：

* MovingAverage(int size) 用窗口大小 size 初始化对象。
* double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。


示例1：

```js
// 输入：
// inputs = ["MovingAverage", "next", "next", "next", "next"]
// inputs = [[3], [1], [10], [3], [5]]
// 输出：
// [null, 1.0, 5.5, 4.66667, 6.0]

// 解释：
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // 返回 1.0 = 1 / 1
// movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
// movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3
```

提示:

* 1 <= size <= 1000
* -10 ^ 5 <= val <= 10 ^ 5
* 最多调用 next 方法 10 ^ 4 次


> 注意：本题与[主站 346 题](https://leetcode-cn.com/problems/moving-average-from-data-stream/)相同。

### 思路分析

本题并不难，只要理解了题目就很容易就相当了解法，我们可以用一个数组或者一个哈希表来存储每次添加的元素，再用一个求和变量来计算每次添加的求和值。代码如下:

```js
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.averageList = [];
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.averageList.length === this.size){
        //超出窗口大小删除窗口第一个元素再添加新的元素进去
        this.total -= this.averageList.shift();
    }
    this.total += val;
    this.averageList.push(val);
    return this.total / this.averageList.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(1)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/qIsx9U/solution/jian-zhi-offer-ii-041-hua-dong-chuang-ko-2p9d/)。
