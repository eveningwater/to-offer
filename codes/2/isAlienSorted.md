### 外星语言是否排序

> 题目:某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

示例1：

```js
// 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// 输出：true
// 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
```

示例2：

```js
// 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// 输出：false
// 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
```

示例3：

```js
// 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// 输出：false
// 解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小。
```

（<a href="https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E5%BA%8F" target="_blank" rel="noopener noreferrer">更多信息</a>）。

提示:

* 1 <= words.length <= 100
* 1 <= words[i].length <= 20
* order.length == 26
* 在 words[i] 和 order 中的所有字符都是英文小写字母。

> 注意：本题与[主站 953 题](https://leetcode-cn.com/problems/verifying-an-alien-dictionary/)相同。

### 思路分析

本题重点在理解题意，根据题意，我们已知顺序字母表是按升序规则排列的，因此我们可以使用哈希表来存储每一个字母的所属位置（也可以记为是索引），然后再比较单词表中的每一个字母的所属位置，第一个字母从下标为0开始，第二个字母就应该是从下标为1开始，然后当第一个字母的索引大于了第二个字母的索引，就不会满足题意，也就需要返回false，而当第一个字母的索引小于了第二个字母的索引，那么则无需比较，直接跳过，直到最后满足题目时，返回true。代码如下:

```js
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = new Map();
    //哈希表来存储字母表中的顺序索引
    for(let i = 0;i < order.length;i++){
        //存储索引
        map.set(o.charAt(i),i);
    }
    //这里是相当于有2个指针比较，所以需要减1
    for(let i = 0;i < words.length - 1;i++){
        const w1 = words[i],
              w1Len = w1.length,
              w2 = words[i + 1],
              w2Len = w2.length;
        //开始循环比较
        for(let j = 0;j < Math.max(w1Len,w2Len);j++){
            //获取单词字母在哈希表中的顺序索引
            const idx1 = j >= w1Len ? -1 : map.get(w1.charAt(j)),
                  idx2 = j >= w2Len ? -1 : map.get(w2.charAt(j));
            //比较索引
            if(idx1 > idx2){
                return false;
            }
            if(idx1 < idx2){
                break;
            }
        }
    }
    return true;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/lwyVBB/solution/shua-chuan-jian-zhi-offer-day16-ha-xi-bi-mtik/)。
