###  最短的单词编码

> 题目:单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：

* words.length == indices.length
* 助记字符串 s 以 '#' 字符结尾
* 对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等

给定一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

示例1：

```js
// 输入：words = ["time", "me", "bell"]
// 输出：10
// 解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
// words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
```

示例2：

```js
// 输入：words = ["t"]
// 输出：2
// 解释：一组有效编码为 s = "t#" 和 indices = [0] 。
```


提示:

* 1 <= words.length <= 2000
* 1 <= words[i].length <= 7
* words[i] 仅由小写字母组成


> 注意：本题与[主站 820 题](https://leetcode-cn.com/problems/short-encoding-of-words/)相同。

### 思路分析

本题的难点也是在于理解题，如果单词 X 是 Y 的后缀，那么单词 X 就不需要考虑了，因为编码 Y 的时候就同时将 X 编码了。例如，如果 words 中同时有 "me" 和 "time"，我们就可以在不改变答案的情况下不考虑 "me"。

因此在本题中，我们可以使用哈希表来存储每一个单词，第一次存储是1，当遇到如果是其它单词的后缀，就存储为0，最后统计为1的单词的长度和。

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const map = new Map();
    for(const w of words){
        if(map.has(w)){
            continue;
        }
        map.set(w,1);
        for(let i = 1;i < w.length;i++){
            map.set(w.subStr(i),0);
        }
    }
    let count = 0;
    for(const [key,value] of map){
        if(value === 1){
            count += key.length + 1;
        }
    }
    return count;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/iSwD2y/solution/zui-duan-de-dan-ci-bian-ma-by-leetcode-s-qjxw/)。
