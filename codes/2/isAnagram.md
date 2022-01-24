### 有效的变位词

> 题目:给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。

注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。

示例1：

```js
// 输入: s = "anagram", t = "nagaram"
// 输出: true
```

示例2：

```js
// 输入: s = "rat", t = "car"
// 输出: false
```

示例3：

```js
// 输入: s = "a", t = "a"
// 输出: false
```

提示:

* 1 <= s.length, t.length <= 5 * 10 ^ 4
* s and t 仅包含小写字母

> 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

> 注意：本题与[主站 242 题](https://leetcode-cn.com/problems/valid-anagram/)相同。

### 思路分析

根据题意，满足两个字符串是变位词，需要满足:

* 1. 两个字符串的长度一样。
* 2. 两个字符串不能完全一样。
* 3. 字符串s和字符串t出现字符的顺序不完全相同且出现的次数相同。

因此我们可以很好的想到可以将两个字符串进行排序，只要进行排序了之后，那么就将顺序变成了相同，在比较排序后的字符串相等即可。代码如下:

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const e1 = s.length === t.length, //第一个条件
          e2 = s !== t, //第二个条件
          e3 = s.split("").sort().join("") === t.split("").sort().join(""); //第三个条件
    return e1 && e2 && e3;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * log<sup>n</sup>)。
* 空间复杂度：O(n * log<sup>n</sup>)。

[更多思路](https://leetcode-cn.com/problems/dKk3P7/solution/you-xiao-de-bian-wei-ci-by-leetcode-solu-xzi0/)。
