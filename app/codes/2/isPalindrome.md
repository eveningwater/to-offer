### 有效的回文 

> 题目:给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。本题中，将空字符串定义为有效的 回文串 。

示例 1：

```js
// 输入: s = "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
```

示例 2：

```js
// 输入: s = "race a car"
// 输出: false
// 解释："raceacar" 不是回文串
```

提示:

* 1 <= s.length <= 2 * 10 ^ 5
* 字符串 s 由 ASCII 字符组成

> 注意：本题与[主站 125 题](https://leetcode-cn.com/problems/valid-palindrome/)相同。

### 思路分析

本题需要理解什么是回文字符串，根据题意，一个只剩下字母和数字组合的字符串倒序等于它本身，那么它就是一个回文字符串，因此，我们可以考虑过滤掉字符串的特殊符号和空白。在这里我们可以考虑利用字母的ascii码和数字的ascii码来过滤掉，我们知道a的ascii码为97,z的ascii码为122,而0的ascii码为48,9的ascii码为57。因此我们可以编写一个helper工具函数，用来过滤字符。如下:

```js
var helper = function(s){
    //将所有大写字母转换成小写,charCodeAt可以获取到字符的ascii码值
    const code = s.toLowerCase().charCodeAt();
    const isNumber = code >= 48 && code <= 57,isLowerLetter = code >= 97 && code <= 122;
    return isNumber || isLowerLetter ? s.towLowerCase() : "";
}
```

接下来，我们不外乎正序遍历和倒序遍历，分别用s1和s2字符串拼接，最后判断s1是否和s2相等即可解答本题。详细代码如下:


```js
var helper = function(s){
    //将所有大写字母转换成小写,charCodeAt可以获取到字符的ascii码值
    const code = s.toLowerCase().charCodeAt();
    const isNumber = code >= 48 && code <= 57,isLowerLetter = code >= 97 && code <= 122;
    return isNumber || isLowerLetter ? s.towLowerCase() : "";
}
var isPalindrome = function(s) {
    let s1 = "",s2 = "",len = s.length;
    //正序遍历
    for(let i = 0;i < len;i++){
        s1 += helper(s[i]);
    }
    //倒序遍历
    for(let i = len - 1;i >= 0;i--){
        s2 += helper(s[i]);
    }
    return s1 === s2;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/XltzEq/solution/shua-chuan-jian-zhi-offer-day10-zi-fu-ch-y5ua/)。
