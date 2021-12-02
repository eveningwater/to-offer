### 队列的最大值

> 题目:请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。若队列为空，pop_front 和 max_value 需要返回 -1。

示例 1：

```js
// 输入: 
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
```

```js
// 输入: 
// ["MaxQueue","pop_front","max_value"]
// [[],[],[]]
// 输出: [null,-1,-1]
```

提示：

* 1 <= push_back,pop_front,max_value的总操作数 <= 10000
* 1 <= value <= 10 ^ 5


### 思路分析

本题的难点在2处，题目要读懂，其次就是实现的函数均摊时间复杂度要是O(1)。在这里我们直接使用基本的操作方法就可以实现，我们用一个队列和一个最大值变量来分别存储添加的数据和最大值。

```js
var MaxQueue = function() {
   //初始化队列和最大值
   this.queue = [];
   this.maxValue = -1;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.maxValue;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue[this.queue.length] = value;
    this.maxValue = Math.max(this.maxValue,value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queue.length){
        return -1;
    }
    // 删除元素
    let first = this.queue.shift();
    if(first === this.maxValue){
        this.maxValue = Math.max(...this.queue);
    }
    // 如果删除了元素之后，队列为空，则将最大值设置为-1
    if(!this.queue.length){
        this.maxValue = -1;
    }
    return first;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/solution/ru-he-jie-jue-o1-fu-za-du-de-api-she-ji-ti-by-z1m/)。

