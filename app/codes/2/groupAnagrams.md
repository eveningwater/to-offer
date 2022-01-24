### 变位词组

> 题目:给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。

注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。

示例1：

```js
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

示例2：

```js
// 输入: strs = [""]
// 输出: [[""]]
```

示例3：

```js
// 输入: strs = ["a"]
// 输出: [["a"]]
```

提示:

* 1 <= strs.length <= 10 ^ 4
* 0 <= strs[i].length <= 100
* strs[i] 仅包含小写字母

> 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

> 注意：本题与[主站 49 题](https://leetcode-cn.com/problems/group-anagrams/)相同。

### 思路分析

本题可以结合[有效的变位词](/codes/2/isAnagram.md)来解答，在[有效的变位词](/codes/2/isAnagram.md)我们理解到了什么是变位词，因此我们可以将字符进行排序，然后使用哈希表来存储变位词组，刚好哈希表就可以很好的进行分组，最后我们再返回哈希表的值即可。

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   const map = new Map();
   for(const str of strs){
       const arr = str.split("");
       const newStr = arr.sort().toString();
       if(!map.has(newStr)){
           map.set(newStr,[]);
       }
       map.get(newStr).push(str);
   }
   return [...map.values()];
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/sfvd7V/solution/shua-chuan-jian-zhi-offer-day15-ha-xi-bi-p57n/)。
