### 打印从1到最大的n位数

> 题目:输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
 

说明：

* 用返回一个整数列表来代替打印
* n 为正整数

### 思路分析

本题的思路很简单，首先我们可以如此想，n一定是从1开始的，那么我们就可以用一个变量从1开始，然后去循环，并且每次都加1。首先这个循环的次数我们就需要找到了，根据题意，很简单，那就是n的值就是循环的次数，而我们可以这样想，这个i变量转成字符串的长度也就是位数小于等于n就符合判断条件了。所以我们可以编写如下代码:

```js
var printNumbers = function(n) {
    let res = [],i = 1;
    while(i.toString().length <= n){
        res.push(i);
        i++;
    }
    return res;
};
```

当然我们还可以使用递归法，其实思路都是差不多的。这个算法的时间复杂度应该为O(n),因为最大可能是执行n次，而空间复杂度也是O(n)。
