### 含有所有字符的最短字符串

> 题目:给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

如果 s 中存在多个符合条件的子字符串，返回任意一个。

> 注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

示例 1：

```js
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC" 
// 解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
```

示例 2：

```js
// 输入：s = "a", t = "a"
// 输出："a"
```

示例 3：

```js
// 输入：s = "a", t = "aa"
// 输出：""
// 解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
```

提示:

* 1 <= s.length, t.length <= 10 ^ 5
* s 和 t 由英文字母组成

> 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

> 注意：本题与[主站 76 题](https://leetcode-cn.com/problems/minimum-window-substring/)相似（本题答案不唯一）。

### 思路分析


```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(26 + n + m),也就是O(n + m)。
* 空间复杂度O(26 + n),也就是O(n)。

[更多思路](https://leetcode-cn.com/problems/M1oyTv/solution/c-zi-ren-wei-gai-fang-fa-bi-yuan-shu-hao-2x4l/)。
