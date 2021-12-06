### 最长不含重复字符的子字符串

> 题目: 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。


示例 1：

```js
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2：

```js
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3：

```js
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
 
> 提示:

* s.length <= 40000

### 思路分析

本题可以采用哈希表来存储字符串的最后一个索引，然后用循环遍历的变量i去和这个索引相减，再和我们的结果值取最大值即可解答本题。

```js
var lengthOfLongestSubstring  = function(s) {
    let map = new Map(),res = 0,i = -1;
    for(let j = 0,l = s.length;j < l;j++){
        if(map.has(s[j])){
            i = Math.max(map.get(s[j]),i);
        }
        map.set(s[j],j);
        res = Math.max(res,j - i);
    }
    return res;
};
```

* 时间复杂度 O(n) ： n 为循环字符串的长度。
* 空间复杂度 O(1) ： 字符的 ASCII 码范围为 0 ~ 127 ，哈希表 dic 最多使用 O(128) = O(1) 大小的额外空间。

[更多思路](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/solution/mian-shi-ti-48-zui-chang-bu-han-zhong-fu-zi-fu-d-9/)。

