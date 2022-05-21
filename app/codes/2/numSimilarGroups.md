###  相似的字符串
 
> 题目:如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。

例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与 "tars"，"rats"，或 "arts" 相似。

总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts" 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。

给定一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个 字母异位词 。请问 strs 中有多少个相似字符串组？

字母异位词（anagram），一种把某个字符串的字母的位置（顺序）加以改换所形成的新词。

示例1：

```js
// 输入：strs = ["tars","rats","arts","star"]
// 输出：2
```

示例2：

```js
// 输入：strs = ["omv","ovm"]
// 输出：1
```

提示:

* 1 <= strs.length <= 300
* 1 <= strs[i].length <= 300
* strs[i] 只包含小写字母。
* strs 中的所有单词都具有相同的长度，且是彼此的字母异位词。


> 注意：本题与[主站 839 题](https://leetcode-cn.com/problems/similar-string-groups/)相同。

### 思路分析

如果我们把每个字符串看做是图当中的节点，把每个字符串之间相似看做是两个字符串相连的边，那么就可以发现本题实际上就是求边数。这里可以使用一种叫[并查集](https://baike.baidu.com/item/%E5%B9%B6%E6%9F%A5%E9%9B%86/9388442?fr=aladdin)的算法。具体地，我们枚举给定序列当中的任意字符串，检查其是否具有相似性，如果相似，就可以将这两个字符串相连。当然在实际代码中，我们首先需要判断的是两个字符串是否连通，然后再判断相似性。

```js
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const n = strs.length,//序列长度
          m = strs[0].length,//每一个字符串的长度
          f = new Array(n).fill(0).map((ele,index) => index); //创建一个索引数组
    //检查两个字符串是否相似，只需要统计不同字符的个数就行，超过了2个就代表不可能相似
    const check = (a,b) => {
        let num = 0;
        for(let i = 0;i < m;i++){
            if(a[i] !== b[i]){
                num++;
                if(num > 2){
                    return false;
                }
            }
        }
        return true;
    }
    //检查节点是否连通,这是一个递归查找的过程，也是并查集算法的核心基础
    const find = x => f[x] === x ? x : (f[x] = find(f[x]));
    for(let i = 0;i < n;i++){
        for(let j = i + 1;j < n;j++){
            const fi = find(i),
                  fj = find(j);
            if(fi === fj){
                continue;
            }
            // 检查是否相似从而连通节点
            if(check(strs[i],strs[j])){
                f[fi] = fj;
            }
        }
    }
    let count = 0;
    for(let i = 0;i < n;i++){
        if(f[i] === i){
            count++;
        }
    }
    return count;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2 * m + n * log<sup>n</sup>)，其中 n 是字符串的数量。我们需要 O(n ^ 2)地枚举任意一对字符串之间的关系，对于任意一对字符串，我们需要 O(m) 的时间检查字符串是否相同。在最坏情况下我们需要对并查集执行 O(n) 次合并，合并的均摊时间复杂度 O(log<sup>n</sup>)。综上，总的时间复杂度为O(n ^ 2 * m + n * log<sup>n</sup>)。
* 空间复杂度：O(n),其中 n 是字符串的数量。并查集需要 O(n) 的空间。

[更多思路](https://leetcode.cn/problems/H6lPxb/solution/xiang-si-de-zi-fu-chuan-by-leetcode-solu-1bg1/)。
