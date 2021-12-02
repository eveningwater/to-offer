### 把字符串转换成整数

> 题目:写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明:

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2 ^ 31,  2 ^ 31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2 ^ 31 − 1) 或 INT_MIN (−2 ^ 31) 。


示例 1：

```js
// 输入: "42"
// 输出: 42
```

示例 2：

```js
// 输入: "   -42"
// 输出: -42
// 解释: 第一个非空白字符为 '-', 它是一个负号。我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

示例 3：

```js
// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

示例 4：

```js
// 输入: "words and 987"
// 输出: 0
// 解释: 第一个非空字符是 'w', 但它不是数字或正、负号。因此无法执行有效的转换。
```

示例 5：

```js
// 输入: "-91283472332"
// 输出: -2147483648
// 解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
//      因此返回 INT_MIN (−2 ^ 31) 。
```

### 思路分析

本题需要拆分情况来分析。具体有以下的字符需要考虑:

* 首尾空格：删除即可。
* 符号位：三种符号即"+","-","无符号"，新建一个变量保存符号位，返回前做判断即可。
* 非数字字符：首次遇到非数字字符，则应立即返回。
* 数字字符：
    * 字符转数字：此数字字符的ASCII码与0的ASCII码相减即可。如:("4" - "0")。
    * 数字拼接:若从左向右遍历数字，设当前位字符为c,当前位数字为x，数字结果为res，则数字拼接公式为:

    ```
    res = 10 * res + x;
    x = ascii(c) - ascii(0);
    ```

如下图所示:

![](../../images/strToInt-1.png)

当然还要注意一点，根据题意，在这里，我们需要做数字的越界处理，尽管我们可以在拼接完数值之后，在最后的结果做判断，但其实我们这里也可以有更巧妙的办法，那就是在每一次拼接的时候做判断。

设数字边界max = Math.floor(2147483647 / 10) = 214748364,则会有以下两种情况越界。

1. res > max 情况一: 执行拼接10 * res >= 2147483650越界
2. res = max,x > 7 情况二： 拼接后是2147483648或2147483649越界

如下图所示:

![](../../images/strToInt-2.png)

也许有人会好奇这里为什么是判断x > 7呢？我们尝试看拼接后的结果如果是大于等于8，那么一定会越界。这样就不难理解为什么要判断x > 7呢。根据这种思路，我们可以写出如下代码:

```js
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(s) {
    // 消除两端空白
    s = s.trim();
    // 判断如果s是空字符串，则直接返回0
    if(!s.length){
        return 0;
    }
    // 定义符号位,默认是正数即为1，结果值res以及数值的边界
    let sign = 1,res = 0,max = Math.floor(Math.pow(2,31) / 10);
    // 定义迭代起始值i
    let i = 1;
    // 判断符号位
    if(s[0] === "-"){
        sign = -1;
    }
    // 如果不是符号位，则i应该从0开始遍历
    else if(s[0] !== "+"){
        i = 0;
    }
    // 开始迭代,起始值为i
    for(let j = i;j < s.length;j++){
        // 判断如果不是数字，则直接跳出
        // 这里的判断也很巧妙，即判断ascii码值在0到9之外，则代表一定不是数字
        if(s[j] < "0" || s[j] > "9"){
            break;
        }
        // 判断越界
        if(res > max || (res === max && s[j] > '7')){
            return sign === 1 ? Math.pow(2,31) - 1 : -Math.pow(2,31);
        }
        // 根据计算公式
        res = res * 10 + (s[j] - "0");
    }
    return res * sign;
};
```

* 时间复杂度 O(n)： 其中 n 为字符串长度，线性遍历字符串占用 O(n) 时间。
* 空间复杂度 O(n)： 删除首尾空格后需建立新字符串，最差情况下占用 O(n) 额外空间。

如果不使用trim方法，从头到尾遍历字符串，则可以将空间复杂度降到O(1)。代码如下:

```js
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(s) {
    let res = 0,//结果
        max = Math.floor(Math.pow(2,31) / 10),//边界值
        i = 0,//迭代起始值
        sign = 1,//符号位
        len = s.length;//字符串长度
    if(!len){
        return res;
    }
    // 判断是否是空字符串
    while(s.charAt(i) === " "){
        if(++i === len){
            return res;
        }
    }
    // 判断符号位
    if(s.charAt(i) === "-"){
        sign = -1;
    }
    // 根据符号位更改迭代起始值
    if(s.charAt(i) === "-" || s.charAt(i) === "+"){
        i++;
    }
    for(let j = i;j < len;j++){
        // 判断如果是非数字，则跳过
        if(s.charAt(j) < '0' || s.charAt(j) > '9'){
            break;
        }
        // 判断数字越界
        if(res > max || (res === max && s[j] > "7")){
            return sign === 1 ? Math.pow(2,31) - 1 : -Math.pow(2,31);
        }
        res = 10 * res + (s[j] - "0");
    }
    return sign * res;
}
```

如果不能理解在每一次迭代中判断数字越界，我们可以在最后对结果是否越界做判断。因此以上代码可修改如下:

```js
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(s) {
    let res = 0,//结果
        max = Math.pow(2,31) - 1,//边界值
        min = -Math.pow(2,31),
        i = 0,//迭代起始值
        sign = 1,//符号位
        len = s.length;//字符串长度
    if(!len){
        return res;
    }
    // 判断是否是空字符串
    while(s.charAt(i) === " "){
        if(++i === len){
            return res;
        }
    }
    // 判断符号位
    if(s.charAt(i) === "-"){
        sign = -1;
    }
    // 根据符号位更改迭代起始值
    if(s.charAt(i) === "-" || s.charAt(i) === "+"){
        i++;
    }
    for(let j = i;j < len;j++){
        // 判断如果是非数字，则跳过
        if(s.charAt(j) < '0' || s.charAt(j) > '9'){
            break;
        }
        res = 10 * res + (s.charAt(j) - "0");
    }
    return sign * res > max ? max : sign * res < min ? min : sign * res;
}
```

除了以上方法外，我们还可以使用正则表达式，代码比较简洁，如下:

```js
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    const min = -(2 ** 31),max = 2 ** 31 - 1;
    const res = str.trim().match(/^[+-]?\d+/);
    if(!res)return 0;
    return res <= min ? min : res >= max ? max : res;
};
```

[更多思路](https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/solution/mian-shi-ti-67-ba-zi-fu-chuan-zhuan-huan-cheng-z-4/)。
