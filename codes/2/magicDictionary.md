###  神奇的字典

> 题目:设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于已构建的神奇字典中。

实现 MagicDictionary 类：

* MagicDictionary() 初始化对象
* void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
* bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。



示例：

```js
// 输入
// inputs = ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
// inputs = [[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
// 输出
// [null, null, false, true, false, false]

// 解释
// MagicDictionary magicDictionary = new MagicDictionary();
// magicDictionary.buildDict(["hello", "leetcode"]);
// magicDictionary.search("hello"); // 返回 False
// magicDictionary.search("hhllo"); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
// magicDictionary.search("hell"); // 返回 False
// magicDictionary.search("leetcoded"); // 返回 False
```


提示:

* 1 <= dictionary.length <= 100
* 1 <= dictionary[i].length <= 100
* dictionary[i] 仅由小写英文字母组成
* dictionary 中的所有字符串 互不相同
* 1 <= searchWord.length <= 100
* searchWord 仅由小写英文字母组成
* buildDict 仅在 search 之前调用一次
* 最多调用 100 次 search


> 注意：本题与[主站 676 题](https://leetcode-cn.com/problems/implement-magic-dictionary/)相同。

### 思路分析

本题在于理解题目，理解了题目，那么就好解答本题，根据题意，默认初始化使用一个数组来存储每一个字符串，然后在buildDict方法中实际上就是将初始化的字典列表修改为传入的字典列表。而在search方法中，我们其实只需要统计searchWord与字典列表中的每一个字符串对应的字符个数，如果为1，就代表可以替换掉，如果不为1，那么就无法替换掉。当然在字典列表中我们首先要找到与searchWord相近的字符串。

```js
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.words = [];
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.words = dictionary;
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for(const word of this.words){
        //字符串长度不一样，则代表字符串与searchWord字符串都不相似，所以跳过
        if(word.length !== searchWord.length){
            continue;
        }
        //统计不同字符数
        let count = 0;
        for(let i = 0;i < searchWord.length;i++){
            //如果不同字符数大于了1,则肯定不满足题意，不需要进行后续的遍历了，直接终止掉
            if(count > 1){
                break;
            }
            if(searchWord[i] !== word[i]){
                count++;
            }
        }
        if(count > 1){
            return true;
        }
    }
    return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/US1pGT/solution/jsliang-jie-zi-fu-chuan-bi-jiao-ha-xi-bi-bk2i/)。
