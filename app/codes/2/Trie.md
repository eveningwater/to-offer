###  实现前缀树

> 题目:[Trie](https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E6%A0%91/9825209?fr=aladdin)（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

* Trie() 初始化前缀树对象。
* void insert(String word) 向前缀树中插入字符串 word 。
* boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
* boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

示例1：

```js
// 输入
// inputs = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// inputs = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// 输出
// [null, null, true, false, true, null, true]

// 解释
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // 返回 True
// trie.search("app");     // 返回 False
// trie.startsWith("app"); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True
```


提示:

* 1 <= word.length, prefix.length <= 2000
* word 和 prefix 仅由小写英文字母组成
* insert、search 和 startsWith 调用次数 总计 不超过 3 * 10 ^ 4 次



> 注意：本题与[主站 208 题](https://leetcode-cn.com/problems/implement-trie-prefix-tree/ )相同。

### 思路分析

本题主要在于理解题目，首先insert方法就是插入，search方法就是说在存储的前缀树中需要找到一个完全和给定单词相等的单词，而startsWith则是找到前缀树中存在前缀单词和给定单词一样。例如"app"就是"apple"的前缀单词，所以返回true。理解了题意之后，我们就可以来解答本题。

```js
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.wordArr = [];
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.wordArr.push(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    for(let i = 0;i < this.wordArr.length;i++){
        if(this.wordArr[i] === word){
            return true;
        }
    }
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    for(const word of this.wordArr){
        if(word.indexOf(prefix) === 0){
            return true;
        }
    }
    return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/QC3q1f/solution/shi-xian-qian-zhui-shu-by-leetcode-solut-un50/)。
