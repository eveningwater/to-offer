### 二进制加法

> 题目:给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

输入为 非空 字符串且只包含数字 1 和 0。


示例 1：

```js
// 输入: a = "11", b = "10"
// 输出: "101"
```


示例 2：

```js
// 输入: a = "1010", b = "1011"
// 输出: "10101"
```

提示:

* 每个字符串仅由字符 '0' 或 '1' 组成。
* 1 <= a.length, b.length <= 10^4
* 字符串如果不是 "0" ，就都不含前导零。

> 注意：本题与[主站 67 题](https://leetcode-cn.com/problems/add-binary/)相同。

### 思路分析

本题首先需要明确的一点那就是二进制的加法原理。与十进制的加法类似，十进制加法是逢10进1，而二进制加法由于只有0和1，所以逢2进1。也正因为如此"11" + "10"才等于"101"。我们来模拟一下这两个数的加法。

```js
   11
+  10
——————
  101
```

可以看到，我们第一次计算是1 + 0 = 1,可以理解成是二进制的个位，然后是二进制的十位1 + 1 = 2，由于二进制数只能是1和0,因此需要进位为1，然后该位变成0。根据这个原理，我们可以倒序循环，然后分别加对应的位，可以创建一个临时变量来代表进位。在最后我们需要判断临时变量如果不为0，还需要添加一次进位。循环的位数起始值我们可以为a和b两者的长度的最大值。即:

```js
// 如a = "1",b = "111",则len为3
const len = Math.max(a.length,b.length);
```

正因为a和b的位数也就是长度不一样，我们需要填补0来保证a和b的位数一致。即:

```js
for(let i = 0;i < len;i++){
    if(a.length !== len){
        // 记住我们是在二进制数前面补0的
        a = "0" + a;
    }
    if(b.length !== len){
        b = "0" + b;
     }
}
```

需要注意的点就这些了，接下来根据分析，我们可以很快写出如下代码:

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aLen = a.length,
          bLen = b.length,
          len = Math.max(aLen,bLen);
    // 补0保证a和b位数一样
    for(let i = 0;i < len;i++){
        // 如果是a的位数不一样，则给a前面补0，否则就给b前面补0
        if(aLen !== len){
            a = "0" + a;
        }
        if(bLen !== len){
            b = "0" + b;
        }
    }
    // 创建进位变量和最终结果值
    let res = "",
        temp = 0;
    // 开始循环,由于是需要比较到第0位相加的，因此需要大于等于0
    for(let i = len - 1;i >= 0;i++){
        let sum = Number(a.charAt(i)) + Number(b.charAt(i)) + temp;
        // 和大于1代表需要进位
        temp = sum > 1 ? 1 : 0;
        sum = sum > 1 ? sum - 2 : sum;
        res = sum + res;
    }
    // 如果第第0位相加超出了2，temp会是1，因此这里也需要判断一下
    if(temp === 1){
        res = temp + res;
    }
    // 返回结果
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度 O(n)： 循环n次，所以时间复杂度为O(n)。
* 空间复杂度 O(1)： 使用常数大小的额外空间。

[更多思路](https://leetcode-cn.com/problems/JFETK5/solution/fu-xue-ming-zhu-er-jin-zhi-jia-fa-xiang-bu5dt/)。
