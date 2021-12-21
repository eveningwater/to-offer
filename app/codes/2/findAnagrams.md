### 字符串中的所有变位词

> 题目:给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

变位词 指字母相同，但排列不同的字符串。

示例 1：

```js
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
```

示例 2：

```js
// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
```


提示:

* 1 <= s.length, p.length <= 3 * 10 ^ 4
* s 和 p 仅包含小写字母


> 注意：本题与[主站 438 题](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/)相同。

### 思路分析

本题实际上就是[字符串中的变位词](/codes/2/checkInclusion.md)的一个扩展，所以思路和它很相似，我们只需要收集left指针的值就可以了，因为left指针的值就是变位词的开始索引。

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const m = s.length,
          n = p.length,
          letterArr = [],
          res = []; //收集起始索引的结果
    if(n > m){
        return res;
    }
    // 初始化26个英文字母的字符数，为0
    for(let i = 0;i <= 26;i++){
        letterArr.push(0);
    }
    // 收集p字符串的字符
    for(let j = 0;j < n;j++){
        letterArr[p[j].charCodeAt() - "a".charCodeAt()]--;
    }
    // 定义开始指针
    let left = 0;
    for(let right = 0;right < m;right++){
        const x = s[right].charCodeAt() - "a".charCodeAt();
        letterArr[x]++;
        while(letterArr[x] > 0){
            letterArr[s[left].charCodeAt() - "a".charCodeAt()]--;
            left++;
        }
        if(right - left + 1 === n){
            //此时left就是满足条件的起始索引
            res.push(left);
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(26 + n + m),也就是O(n + m)。
* 空间复杂度O(26 + n),也就是O(n)。

[更多思路](https://leetcode-cn.com/problems/VabMRr/solution/shua-chuan-jian-zhi-offer-day09-zi-fu-ch-f3mv/)。
