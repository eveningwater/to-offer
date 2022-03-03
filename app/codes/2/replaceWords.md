###  替换单词

> 题目:在英语中，有一个叫做 词根(root) 的概念，它可以跟着其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。

现在，给定一个由许多词根组成的词典和一个句子，需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。

需要输出替换之后的句子。


示例1：

```js
// 输入：dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// 输出："the cat was rat by the bat"
```

示例2：

```js
// 输入：dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// 输出："a a b c"
```

示例3：

```js
// 输入：dictionary = ["a", "aa", "aaa", "aaaa"], sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
// 输出："a a a a a a a a bbb baba a"
```

示例4：

```js
// 输入：dictionary = ["catt","cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// 输出："the cat was rat by the bat"
```

示例5：

```js
// 输入：dictionary = ["ac","ab"], sentence = "it is abnormal that this solution is accepted"
// 输出："it is ab that this solution is ac"
```


提示:

* 1 <= dictionary.length <= 1000
* 1 <= dictionary[i].length <= 100
* dictionary[i] 仅由小写字母组成。
* 1 <= sentence.length <= 10^6
* sentence 仅由小写字母和空格组成。
* sentence 中单词的总量在范围 [1, 1000] 内。
* sentence 中每个单词的长度在范围 [1, 1000] 内。
* sentence 中单词之间由一个空格隔开。
* sentence 没有前导或尾随空格。



> 注意：本题与[主站 648 题](https://leetcode-cn.com/problems/replace-words/)相同。

### 思路分析

本题一个很简单的思路就是将句子根据空白转成数组，然后遍历这个数组和字典列表，所谓的词根就是数组的每一个子字符串中存在前缀字符串与字典列表中字符串匹配上。因此找到这个匹配条件，将每一个子字符串替换成字典列表中的子字符串，即可解答本题。

```js
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(" ");
    for(let i = 0;i < sentence.length;i++){
        for(let j = 0;j < dictionary.length;j++){
            const index = sentence[i].indexOf(dictionary[j]);
            if(index === 0){
                sentence[i] === dictionary[j];
                break;
            }
        }
    }
    return sentence.join(" ");
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/UhWRSj/solution/zui-yi-yu-li-jie-de-javajie-fa-shi-jian-vcx4e/)。
