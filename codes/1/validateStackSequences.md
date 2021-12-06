### 栈的压入、弹出序列

> 题目:输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

示例 1：

```js
// 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// 输出：true
// 解释：我们可以按以下顺序执行：
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

示例 2：

```js
// 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// 输出：false
// 解释：1 不能在 2 之前弹出。
```

提示:

1. 0 <= pushed.length == popped.length <= 1000
2. 0 <= pushed[i], popped[i] < 1000
3. pushed 是 popped 的排列。


### 思路分析

根据题意，我们可以用一个队列来模拟栈的压入和弹出，遍历这个队列，然后将队列的所有元素添加到这个模拟队列中，定义一个弹出索引，然后我们循环判断该队列是否有值，并且该队列中的值是否等于popped[弹出索引]的值，如果相等，则删除，并且令弹出索引自加，最后看这个模拟栈队列的长度是否为0即可。

```js
 /**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    // 模拟栈队列，pushed队列长度，模拟栈索引，循环索引
    let stack = [],len = pushed.length,stackIndex = 0,i = 0;
    while(i < len){
        // 将pushed队列的元素添加到栈队列中
        stack.push(pushed[i]);
        // 这里是核心，判断模拟队列中的元素是否与popped的弹出项相等，相等就删除
        while(stack.length && stack[stack.length - 1] === popped[stackIndex]){
            stack.pop();
            // 比较下一项
            stackIndex++;
        }
        i++:
    }
    return !stack.length;
};
```

以上算法时间复杂度为O(n)，所以空间复杂度为O(n)。

[更多思路](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/solution/mian-shi-ti-31-zhan-de-ya-ru-dan-chu-xu-lie-mo-n-2/)。
