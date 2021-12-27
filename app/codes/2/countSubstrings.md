###  回文子字符串的个数

> 题目:给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

示例 1：

```js
// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
```

示例 2：

```js
// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

提示:

* 1 <= s.length <= 1000
* s 由小写英文字母组成

> 注意：本题与[主站 647 题](https://leetcode-cn.com/problems/palindromic-substrings/)相同。

### 思路分析

本题我们可以考虑枚举出所有的子字符串，然后统计是否是回文字符串，显然暴力循环的算法时间复杂度是非常高的，因为我们相当于是建立双指针，也就是双重循环比较是否是回文字符串，双重循环就是O(n ^ 2),再加上判断是否是回文字符串也需要遍历一次，所以就是O(n ^ 3)。详细代码如下:

```js
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length,count = 0;
    for(let i = 0;i < len;i++){
        for(let j = i;j < len;j++){
            if(isPalindrome(s,i,j)){
                count++;
            }
        }
    }
    return count;
};
var isPalindrome = function(s,start,end){
    while(start < end){
        if(s[start] !== s[end]){
            break;
        }
        start++;
        end--;
    }
    return left >= right;
}
```

我们可以优化一下，从中心展开，因为回文字符串可以分为奇数字符串和偶数字符串，因此我们可以分成奇数和偶数来统计。如下:

```js
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length,count = 0;
    for(let i = 0;i < len;i++){
        //奇数回文字符串
        count += isPalindrome(s,i,i);
        //偶数回文字符串
        count += isPalindrome(s,i,i + 1);
    }
    return count;
};
var isPalindrome = function(s,start,end){
    let count = 0;
    while(start >= 0 && end <= s.length && s[start] === s[end]){
        //从中心向两边拓展，所以是start--,end++
        start--;
        end++;
        count++;
    }
    return count;
}
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2)。
* 空间复杂度：O(1)。

本题如果要优化时间复杂度到O(n)，还可以使用Manacher 算法，详情可参考[更多思路](https://leetcode-cn.com/problems/a7VOhD/solution/hui-wen-zi-zi-fu-chuan-de-ge-shu-by-leet-ejfv/)。
