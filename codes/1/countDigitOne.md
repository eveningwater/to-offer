###  1 ~ n 整数中 1 出现的次数

> 题目:输入一个整数 n ，求1 ~ n这 n 个整数的十进制表示中1出现的次数。

例如，输入12，1 ~ 12这些整数中包含1的数字有1、10、11和12，1一共出现了5次。

示例 1：

```js
// 输入：n = 12
// 输出：5
```

示例 2：

```js
// 输入：n = 13
// 输出：6
```
 
限制：

* 1 <= n < 2 ^ 31

### 思路分析

本题难度很大，需要从题意中找出数学规律。根据题意，我们可以理解为，求1 ~ n 的个位、十位、百位 ... 的 1 出现的次数相加，即为1出现的总次数。

设数字 n 是一个 x 位数，记数字 n 的第 i 位数位n<sub>i</sub>,则数字n可以表示为n<sub>x</sub>n<sub>x-1</sub>...n<sub>2</sub>n<sub>1</sub>。

* 将 n<sub>i</sub> 称为当前位，记为 cur。
* 将 n<sub>i-1</sub>n<sub>i-2</sub>...n<sub>2</sub>n<sub>1</sub> 称为低位，记为low。
* 将 n<sub>x</sub>n<sub>x-1</sub>...n<sub>i+2</sub>n<sub>i+1</sub> 称为高位,记为high。
* 将 10<sup>i</sup> 称为位因子，记为digit。

然后，我们计算某位中1出现的次数的计算方法如下:

根据当前位 cur 的值的不同，我们可以分成三种情况:

1. 当 cur = 0 时: 此时 1 的出现次数只由高位来决定(因为低位一定全是0)，计算公式为:`high * digit`。

> 如下图所示，以 n = 2304 为例，求 digit = 10 （即十位）的 1 出现次数。

![](../images/countDigitOne-1.png)

2. 当 cur = 1 时: 此时 1 的出现次数由高位与低位来决定，计算公式为:`high * digit + low + 1`(加1就是包含当前位)

> 如下图所示，以 n = 2314 为例，求 digit = 10 （即十位）的 1 出现次数。

![](../images/countDigitOne-2.png)

3. 当 cur = 2 时: 此时 1 的出现次数由高位来决定，计算公式为:`(high + 1) * digit`(之所以要加1再乘以10，就是包含当前位出现1的次数)。

> 如下图所示，以 n = 2324 为例，求 digit = 10 （即十位）的 1 出现次数。

![](../images/countDigitOne-3.png)

根据前面的三点分析，我们从而可以推导出递推公式，当然再推导出公式之前，我们应该先初始化`high,cur,low,digit`的初始值，如下所示:

```js
high = Math.floor(n / 10);
cur = n % 10;
low = 0;
digit = 1;
```

因此，从个位到最高位的推导公式即为:

```js
//当最高位或者当前位为0的时候，则代表已经越过了最高位
while(high !== 0 || cur !== 0){
    low += cur * digit;//下一轮的低位应该是当前位与位因子的乘积
    cur = high % 10;//下一轮的当前位应该是最高位与位因子的求余
    high = Math.floor(high / 10);//下一轮的最高位应该除以位因子
    digit = digit * 10;//每一轮的位因子也是10的倍数
}
```

根据以上的三种情况的分析和推导公式，我们就可以得到本题的解法:

```js
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n){
    //初始化
    let low = 0, //最低位
        d = 1,//位因子
        high = Math.floor(n / 10),//最高位
        cur = n % 10;//当前位
    //结果值
    let res = 0;
    while(high !== 0 || cur !== 0){
        if(cur === 0){
            //当前位是0的时候,计算公式为最高位与位因子的乘积
            res += high * d;
        }else if(cur === 1){
            //当前位是1的时候，计算公式为最高位与位因子加上最低位加上当前位之和
            res += high * d + low + 1;
        }else {
            //当前位是2 ~ 9的时候，计算公式为最高位与位因子的乘积和当前位与位因子的乘积之和
            res += (high + 1) * d;
        }
        low += cur * d;//计算最低位
        cur = high % 10;//计算当前位
        high = Math.floor(high / 10);//计算最高位
        d *= 10; //计算位因子
    }
    //返回结果
    return res;
}
```

时间复杂度 O(log <sup>n</sup>) ： 循环内的计算操作使用 O(1) 时间；循环次数为数字 n 的位数，即 log<sub>10</sub><sup>n</sup>，因此循环使用O(log<sup>n</sup>)时间。
空间复杂度 O(1)： 几个变量使用常数大小的额外空间。

更多解法见[精选答案](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/1n-zheng-shu-zhong-1-chu-xian-de-ci-shu-umaj8/)。

