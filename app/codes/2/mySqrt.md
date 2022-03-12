###  求平方根

> 题目:给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。正数的平方根有两个，只输出其中的正数平方根。如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

示例1：

```js
// 输入: x = 4
// 输出: 2
```

示例2：

```js
// 输入: x = 8
// 输出: 2
// 解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2
```

提示:

* 0 <= x <= 2 ^ 31 - 1

> 注意：本题与[主站 69 题](https://leetcode-cn.com/problems/sqrtx/)相同。

### 思路分析

本题实际上就是对二分算法的考察，在二分算法当中，我们取中间值相乘，如果小于等于x，那么代表中间值就是所求的平方根，否则修改边界继续求值。代码如下

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //注意这里初始化为0，即当x = 0的时候，平方根就为0
    let l = 0,r = x,res = 0;
    //注意这里必须要小于等于，因为当x = 1的时候，也要进入循环
    while(l <= r){
        const m = Math.floor((l + r) / 2);
        //小于等于x就代表m就是所求平方根
        if(m * m <= x){
            res = m;
            l = m + 1;
        }else{
            r = m - 1;
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(log<sup>n</sup>)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/jJ0w9p/solution/jian-zhi-offer-ii-072-qiu-ping-fang-gen-3q3on/)。
