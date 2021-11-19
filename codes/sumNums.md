### 求1+2+…+n

> 题目:求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

示例 1：

```js
// 输入: n = 3
// 输出: 6
```

示例 2：

```js
// 输入: n = 9
// 输出: 45
```

限制:

* 1 <= n <= 10000

### 思路分析

如果本题没有条件限制，那么这道题就没什么难度。现在我们先假设没有限制方式，我们就可以知道求加法有三种方法。

1.迭代。
2.计算公式（即平均值法），1 + 2 + ... + n = n * (n + 1) / 2 (等差数列求和公式
3.递归

现在，我们再来看题的限制，首先迭代是会用到循环的，因此这种方式不可采纳。迭代法代码如下:

```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    let res = 0;
    for(let i = 0;i <= n;i++){
        res += i;
    }
    return res;
};
```

我们再看第二种方式的实现:

```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n * (n + 1) / 2;
};
```

这个方法使用到了乘除法，而本题要求不能使用乘除法，因此这种方式也不可采纳。接下来我们来看第三种方式的实现。首先我们要知道如果采用递归，那么就需要找到递归条件，递归条件我们就可以找到了。我们可以很快写出如下代码:

```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // 由于题目限制了n只会是大于等于1，所以递归终止条件就是等于1
    if(n === 1){
        return 1;
    }
    n += sumNums(n - 1);
    return n;
};
```

显然递归的方式，我们用到了if条件语句，不满足条件。但是我们可以思考一下，这里的递归终止条件是不是可以采用其他方式来替代呢？因为综上三种方法，也只有递归的方式更符合题意了。而此时我们的难题就在于如何去掉if条件语句，从而终止递归。

那么我们有没有其他的办法来终止递归呢？答案自然是有的。如果熟悉ES的逻辑操作符，我们就应该知道ES的&&和||就可以终止递归。

我们来试想一下A && B，当A为false的时候，那么此时就会出现短路，不会去和B进行比较，此时就直接返回了false，同样的A || B，假如A 为true，那么同样的也不会执行后续的B。因此，我们可以把第二个操作数写成递归，第一个操作数自然是n本身，然后返回n本身即可。代码如下:


```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // 注意这里要把第二个操作数用圆括号包裹起来，因为此时递归才会执行，等递归执行完了才会和第一个操作数进行比较
    n && (n += sumNums(n - 1));
    return n;
};
```

时间复杂度 O(n)： 计算 n + (n-1) + ... + 2 + 1  需要开启 n 个递归函数。
空间复杂度 O(n)： 递归深度达到 n ，系统使用 O(n) 大小的额外空间。

> 事实上，本题还可以通过位运算来模拟乘除法，这样我们就可以使用平均值法来解答这道题。这种算法也被叫做[俄罗斯农民乘法（快速乘）](https://baike.baidu.com/item/%E4%BF%84%E7%BD%97%E6%96%AF%E4%B9%98%E6%B3%95/4051312?fr=aladdin)。关于这种解法，这里不做详解，感兴趣的可以参考[这里](https://leetcode-cn.com/problems/qiu-12n-lcof/solution/qiu-12n-by-leetcode-solution/)。以下是使用该算法的答案:

```js
var sumNums = function(n) {
    let ans = 0, A = n, B = n + 1;
    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    return ans >> 1;
};
```

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/qiu-12n-lcof/solution/mian-shi-ti-64-qiu-1-2-nluo-ji-fu-duan-lu-qing-xi-/)。

