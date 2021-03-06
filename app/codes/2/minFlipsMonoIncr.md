###  翻转字符 

> 题目:如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是 单调递增 的。我们给出一个由字符 '0' 和 '1' 组成的字符串 s，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。返回使 s 单调递增 的最小翻转次数。

示例1：

```js
// 输入：s = "00110"
// 输出：1
// 解释：我们翻转最后一位得到 00111.
```


示例2：

```js
// 输入：s = "010110"
// 输出：2
// 解释：我们翻转得到 011111，或者是 000111。
```

示例3：

```js
// 输入：s = "00011000"
// 输出：2
// 解释：我们翻转得到 00000000。
```


提示:

* 1 <= s.length <= 20000
* s 中只包含字符 '0' 和 '1'


> 注意：本题与[主站 926 题](https://leetcode-cn.com/problems/flip-string-to-monotone-increasing/)相同。

### 思路分析

本题如果使用正则表达式来解决将会很简单，首先我们要知道导致字符串无法单调递增的一定是10字符串，所以我们可以将10替换成00,01,11，但是不管是如何替换，都被算作翻转1次，因此我们只要不断的匹配是否出现10字符串，然后累加次数，即可得到答案。

```js
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let count = 0;
    while(s.indexOf("10") > -1){
        s = s.replace(/10/,"");
        count++;
    }
    return count;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

当然本题还可以使用动态规划的算法来解决，我们只需要遍历每一个字符，然后判断是否是0，如果等于0，则需要知道是将0字符前面全为1的字符反转为0还是将当前字符反转为1哪个次数少，就取哪个。

```js
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let one = 0,dp = 0;
    for(let i = 0;i < s.length;i++){
        const char = s.charAt(i);
        if(char === "0"){
            dp = Math.min(one,dp + 1);
        }else{
            one++;
        }
    }
    return dp;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/cyJERH/solution/jian-zhi-offer-2-mian-shi-ti-92-shu-zhon-4oz8/)。
