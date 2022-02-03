### 后缀表达式

> 题目:根据 [逆波兰表示法](https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437)，求该后缀表达式的计算结果。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

* 整数除法只保留整数部分。
* 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

示例1：

```js
// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
```

示例2：

```js
// 输入：tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
```

示例3：

```js
// 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// 输出：22
// 解释：
// 该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
```

提示:

* 1 <= tokens.length <= 10 ^ 4
* tokens[i] 要么是一个算符（"+"、"-"、"*" 或 "/"），要么是一个在范围 [-200, 200] 内的整数

逆波兰表达式：

逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。

    * 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
    * 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。

逆波兰表达式主要有以下两个优点：

    * 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
    * 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。


> 注意：本题与[主站 150 题](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)相同。

### 思路分析

本题的难点在于逆波兰表达式的理解，根据题意，我们可以理解为用一个栈存储数据结构，然后我们取出栈中的数字来做运算，当遇到运算符的时候，我们就需要计算紧邻的两个数字结果，并再次入栈,最后返回栈顶元素即可。理解了这个思路，实际上本题就能解答出来了。

```js
var calc = function(a,b,op){
    switch(op){
        case "+":
            return a + b;
        case "*":
            return a * b;
        case "-":
            return a - b;
        default:
            //注意JavaScript计算除法可能会出现误差，使用Math.trunc方法来处理一下，转换为相近的整数
            return Math.trunc(a / b);
    }
}
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(const token of tokens){
        switch(token){
            case "+":
            case "*":
            case "-":
            case "/":
                const num2 = stack.pop(),
                      num1 = stack.pop();
                stack.push(calc(num1,num2,token));
                break;
            default:
                stack.push(parseInt(token));
                break;
        }
    }
    return stack.pop();
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/8Zf90G/solution/shua-chuan-jian-zhi-offer-day10-zi-fu-ch-c9f1/)。
