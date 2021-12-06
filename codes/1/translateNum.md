### 把数字翻译成字符串

> 题目: 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

示例 1：

```js
// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

 
> 提示:

* 0 <= num < 231

### 思路分析

本题的实现思路与[青蛙跳台阶](./numWays.md)很相似。因此可以考虑使用动态规划算法来解决。我们假设翻译数字x的前i个数(i <= x.toString().length)dp[i]表示翻译的方法数。我们知道一个一位数的翻译方法数一定是1。因此dp[1] = 1，同理可得dp[2] = 2。而为了保证dp[2] = dp[1] + dp[0]这个等式成立，则有dp[0] = 1。因此初始状态为dp[0] = 1，dp[1] = 1。而根据这个通项公式，我们就可以推导出动态规划的转移方程为dp[i] = dp[i - 1] + dp[i - 2]。现在我们知道翻译一个数字只会分成2种情况:

1. 每个数字单独翻译。
2. 2个数字组合起来翻译。(超过三个数字组合是不可能的，根据题意就可以推导出来)

根据以上的情况，我们就可以确定了，假如dp[i]转成数值的值在10 ~ 25之间，则dp[i] = dp[i - 1] + dp [i - 2]成立，否则dp[i] = dp[i - 1]。然后最后返回dp[n]就是翻译前i个数字的方法数，其中n为转成字符串的数字的长度。因此，我们可以很快写出如下的代码:

```js
var translateNum  = function(num) {
    let str = num.toString(),
        n = str.length;
    let dp = new Array(n + 1),
        dp[0] = dp[1] = 1;
    //从第2项开始循环,主要最后一个数字也要算在内，所以循环加1
    for(let i = 2;i < n + 1;i++){
        const t = Number(dp[i - 1] + dp[i - 2]);
        if(t >= 10 && t <= 25){
            dp[i] = dp[i - 1] + dp[i - 2];
        }else{
            dp[i] = dp[i - 1];
        }
    }
    return dp[n];
};
```

观察如上代码，我们发现dp[i]始终与dp[i - 1]和dp[i - 2]有关，因此我们可以不用定义dp为数组，用变量来代替即可。这样我们就可以将空间复杂度从O(n)降到了O(1)。
代码如下:

```js
var translateNum  = function(num) {
    let str = num.toString(),
        n = str.length;
    let a = 1,b = 1;
    for(let i = 2;i < n + 1;i++){
        const t = Number(str[i - 1] + str[i - 2]);
        if(t >= 10 && t <= 25){
            let k = b;
            b = k + a;
            a = k;
        }else{
            a = b;
        }
    }
    return b;
};
```

该算法时间复杂度O(log<sup>n</sup>),空间复杂度是O(1)。

[更多思路](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-by-leetcode-sol/)。

