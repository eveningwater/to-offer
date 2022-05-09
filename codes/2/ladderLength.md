###  单词演变
 
> 题目:在字典（单词列表） wordList 中，从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：

* 序列中第一个单词是 beginWord 。
* 序列中最后一个单词是 endWord 。
* 每次转换只能改变一个字母。
* 转换过程中的中间单词必须是字典 wordList 中的单词。

给定两个长度相同但内容不同的单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。

示例1：

```js
// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// 输出：5
// 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
```

示例2：

```js
// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// 输出：0
// 解释：endWord "cog" 不在字典中，所以无法进行转换。
```

提示:

* 1 <= beginWord.length <= 10
* endWord.length == beginWord.length
* 1 <= wordList.length <= 5000
* wordList[i].length == beginWord.length
* beginWord、endWord 和 wordList[i] 由小写英文字母组成
* beginWord != endWord
* wordList 中的所有字符串 互不相同

> 注意：本题与[主站 127 题](https://leetcode-cn.com/problems/word-ladder/)相同。

### 思路分析

本题的意思就是从起始单词出发，每次变换一个字母，变换n次，变成终点词，希望n尽量小，因此我们需要找到邻接关系，例如hit的转换词是`*it`,`h*t`,`hi*`（`*`代表26个英文字母当中的任意一个，除原本的字母以外，因此是25个字母）形式，然后看看这样的新词是否在单词表里，如果存在，就找到了一个下一层的转换词，同时我们为了避免重复访问，例如不能这样hot -> dot -> hot 这样转换回来，徒增转换次数，所以确定了下一个转换词，我们就需要将它从单词表中删除，并且下一层的转换词可能有多个，都是要考察到的，哪一条转换路径先遇到终点词时，它就是最短的转换路径。具体我们可以如此做:

* 把单词看做是一个节点，由一个节点带出下一层的邻接点，我们可以使用深度优先搜索算法即BFS来遍历。
* 维护一个队列，让起点词入队，然后定义层级level为1，接着出队考察。
* 将逐个字符变成26个字母之一，看看是否在单词表，如果在，该新词就为下一层的转换词。
* 将这个新词入队，并且层级level + 1,然后从单词表中删除这个词。
* 出队，入队……如此的重复，当出队的单词和终点词相同，就遇到了终点词，返回它的level。
* 当队列为空时，代表已经考察完所有的词，始终没有遇到终点词，也就是没有路径通往终点，返回0。


```js
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    //构建单词哈希表
    const wordSet = new Set(wordList),
          queue = []; //定义队列
    //入队起点词,是一个一维数组，第一项代表词，第二项代表层级level
    queue.push([beginWord,1]);

    //遍历队列
    while(queue.length){
        //出队
        const [word,level] = queue.shift();
        //当word与终点词相同，返回level
        if(word === endWord){
            return level;
        }
        for(let i = 0;i < word.length;i++){
            //26个小写英文字母的ascii码
            for(let w = 97;w <= 122;w++){
                //形成新的转换词
                const newWord = word.slice(0,i) + String.fromCharCode(w) + word.slice(i + 1);
                // 如果单词表中存在新词，则入队
                if(wordSet.has(newWord)){
                    queue.push([newWord,level + 1]);
                    //为避免单词在单词表中重复，需要从单词表中删除新的转换词
                    wordSet.delete(newWord);
                }
            }
        }
    }
    //考察完了，也没有路径，就返回0
    return 0;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n) ,m为单词长度，,n为单词列表长度。
* 空间复杂度：O(m * n) ,m长度的单词化为邻接单词形式时需要m，n同上。

[更多思路](https://leetcode-cn.com/problems/om3reC/solution/dan-ci-yan-bian-by-leetcode-solution-8v7s/)。
