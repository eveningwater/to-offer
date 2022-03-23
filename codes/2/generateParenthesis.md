###  生成匹配的括号 

> 题目:正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例1：

```js
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
```


示例2：

```js
// 输入：n = 1
// 输出：["()"]
```

提示:

* 1 <= n <= 8


> 注意：本题与[主站 22 题](https://leetcode-cn.com/problems/generate-parentheses/)相同。

### 思路分析

仔细观察本题，我们应该知道括号都是成对出现的，也就是说"(()"或者"())"都是无效的括号，因此我们可以创建两个指针来确定左右括号的增加，然后当left和right指针都等于n了，就代表已经生成了一对正确的括号。然后如果当left小于n，我们就需要递归，同样的当right小于left，我们也是需要递归的，分别就是将对应的指针加1，因此本题就是使用递归来解答。代码如下:

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const generate =  (left,right,s = "") => {
        if(left === n && right === n){
            res.push(s);
            return;
        }
        if(left < n){
            generate(left + 1,right,s + "(");
        }
        if(right < n){
            generate(left,right + 1,s + ")")
        }
    }
    generate(0,0);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/IDBivT/solution/java-shen-du-you-xian-sou-suo-hui-su-by-zzlqt/)。
