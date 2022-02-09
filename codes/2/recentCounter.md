###  最近请求次数

> 题目:写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请实现 RecentCounter 类：

* RecentCounter() 初始化计数器，请求数为 0 。
* int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。

保证 每次对 ping 的调用都使用比之前更大的 t 值。


示例1：

```js
// 输入：
// inputs = ["RecentCounter", "ping", "ping", "ping", "ping"]
// inputs = [[], [1], [100], [3001], [3002]]
// 输出：
// [null, 1, 2, 3, 3]

// 解释：
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
// recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
```

提示:

* 1 <= t <= 10 ^ 9
^ 保证每次对 ping 调用所使用的 t 值都 严格递增
^ 至多调用 ping 方法 10 ^ 4 次


> 注意：本题与[主站 933 题](https://leetcode-cn.com/problems/number-of-recent-calls/)相同。

### 思路分析

本题的难点在于题目的理解。如果理解了题目，那么这道题就很好解答了，根据题意，我们每次添加一个请求的时候，都会用到，因此我们可以使用一个队列来存储所有请求数。接下来就是需要过滤掉不满足条件的时间，首先每次假如一个t，时间的最大值就确定了就是t，这是因为每次添加的t都是严格递增的，但是当t变大，t - 3000的值也就变大，最小值的范围就变大了，所以我们只要过滤掉队列中不满足最小值的请求时间即可，最后再返回整个队列的长度。代码如下:

```js
var RecentCounter = function() {
    //初始化存储请求时间的队列
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    //将t时间添加到队列中
    this.requests.push(t);
    //计算最小值
    const time = t - 3000;
    //过滤掉请求中不满足最小值的时间
    while(this.requests[0] < time){
        //移除队首元素,因为是从队首开始判断的
        this.requests.shift();
    }
    //返回队列长度
    return this.requests.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(1)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/H8086Q/solution/jian-zhi-offer-2-mian-shi-ti-42-shu-zhon-ty7w/)。
