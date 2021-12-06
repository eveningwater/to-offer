### 包含min函数的栈

> 题目:定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。  


示例 1：

```js
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.
```

> 提示:各函数的调用总次数不超过 20000 次。

### 思路分析

本题要实现三个方法，并且时间复杂度都要是O(1)，那么我们只能尽量保证空间复杂度也不会太高。push方法我们知道，就是往队列的最后添加一个新元素，即[stack.length] = x(x为新元素)，所以push方法就好实现了。同理pop方法是删除队列最后一个元素，所以我们可以将队列的长度减1即可。而top方法根据题意实际上就是返回第length - 1为索引的元素，min方法我们可以定义一个最小值队列，然后用最小值队列来收集最小值，最后调用该方法的时候取最小值队列里的最小值即可。

```js
    /**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    // 最小值队列,默认与Infinity比最小
    this.minStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.stack.length] = x;
    // 收集最小值
    this.minStack[this.minStack.length] = Math.min(this.minStack[this.minStack.length - 1],x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.stack.length = this.stack.length - 1;
  //同时也要删除最小值的队列中的元素
   this.minStack.length = this.minStack.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

以上算法时间复杂度为O(1),由于用到了2个队列，所以空间复杂度为O(m + n)。

[更多思路](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/)。
