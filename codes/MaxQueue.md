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



```js
var MaxQueue = function() {
   
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
   
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

