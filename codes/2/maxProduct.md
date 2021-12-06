### 单词长度的最大乘积 

> 题目:给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

示例 1：

```js
// 输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
// 输出: 16 
// 解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
```

示例 2：

```js
// 输入: words = ["a","ab","abc","d","cd","bcd","abcd"]
// 输出: 4 
// 解释: 这两个单词为 "ab", "cd"。
```

示例 3：

```js
// 输入: words = ["a","aa","aaa","aaaa"]
// 输出: 0 
// 解释: 不存在这样的两个单词。
```

提示:

* 2 <= words.length <= 1000
* 1 <= words[i].length <= 1000
* words[i] 仅包含小写字母

> 注意：本题与[主站 318 题](https://leetcode-cn.com/problems/maximum-product-of-word-lengths/)相同。 

### 思路分析

本题需要注意的有两点，即单词长度达到最大，每个单词之间不能出现重复的字母。如果使用暴力循环来解答的话，还是不复杂的。如下:

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const l = words.length;
    let res = 0;
    for(let i = 0;i < l;i++){
        for(let j = i + 1;j < l;j++){
            // 判断两个单词如果没有出现重复字符，则求最大的单词乘积
            if(!hasSameLetter(words[i],words[j])){
                res = Math.max(words[i].length * words[j].length,res);
            }
        }
    }
};
var hasSameLetter = function(wordA,wordB){
    for(const letter of wordA){
        if(wordB.indexOf(letter) !== -1){
            return true;
        }
    }
    return false;
}
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2 * m ^ 2)，其中 n 是数组的长度,m为单词的长度。
* 空间复杂度：O(1),只用了一个辅助变量。

暴力解法，我们可以看到时间复杂度还是很高的，那么我们来考虑一下如何优化，首先需要优化的是hasSameLetter方法，通常这种情况，我们就可以考虑位运算来优化。由于英文字母有26个，因此我们可以使用一个26位的二进制数来代表每一个字母，例如从右到左可以是a ~ z。如下所示:

```js
// z...cba。
```

也就是说，当某个位上出现了该字母，那么就是1，没有出现就是0，比如`abcd`，其中a出现了1次，那么对应的第一位上就应该是数字1。根据按位与(&)运算的性质，我们不难得出当两个单词的二进制表示执行按位与的结果，如果等于0的话，那么这两个单词是一定不重复的。因为按位与的结果就是只有当2个操作数的每一个位上的数字都是1的时候，执行结果才是1。现在假设我们"a"的位已知，我们求其它字母的位，我们是可以使用其它字母的ascii - "a"的ascii码得出来的，但是这里我们也可以使用左移操作符来得出来。我们来看如果单词是a，表示如下:

```js
// 0 0 0 ... 1 a的表示
// =>
// b的表示
// 0 0 0 ... 1 0 => 相当于将a左移1位，然后再求按位或。即等价b = b | 1 << a
// 简写为b |= 1 << a
```

因此，我们可以分别用2个变量来统计出两个单词之间每一个字母的位，然后再求出按位与即可。因此以上的代码我们就可以修改如下:

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const l = words.length;
    let res = 0;
    for(let i = 0;i < l;i++){
        for(let j = i + 1;j < l;j++){
            // 判断两个单词如果没有出现重复字符，则求最大的单词乘积
            if(!hasSameLetter(words[i],words[j])){
                res = Math.max(words[i].length * words[j].length,res);
            }
        }
    }
};
var hasSameLetter = function(wordA,wordB){
    let x = 0,y = 0;
    for(const letter of wordA){
        // 字符串的charCodeAt方法可以得到字母的ascii码值
        x |= 1 << (letter.charCodeAt() - "a".charCodeAt());
    }
    for(const letter of wordB){
        // 字符串的charCodeAt方法可以得到字母的ascii码值
        y |= 1 << (letter.charCodeAt() - "a".charCodeAt());
    }
    // 按位操作符优先级低因此需要加括号
    return (x & y) !== 0;
}
```

接下来，我们来优化嵌套循环里的代码。我们可以采用哈希表法，用一个哈希表来存储每一个单词的长度，最后我们遍历这个哈希表，求出最大长度即可。在这里，我们可以使用JavaScript的Map数据结构来存储。

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let map = new Map(),
        n = words.length,
        res = 0;
    const asciiA = "a".charCodeAt();
    for(let i = 0;i < n;i++){
        let temp = 0;
        for(const c of words[i]){
            temp |= 1 << (c.charCodeAt() - asciiA);
        }
        // 根据temp来设置单词的长度
        if(map.has(temp)){
            // 设置单词长度的最大值
            map.set(temp,Math.max(words[i].length,map.get(temp)));
        }else{
            map.set(temp,words[i].length);
        }
    }
    for(const keyA of map.keys()){
        for(const keyB of map.keys()){
            // 按位与操作为0，则代表单词字符不重复
             if((keyA & keyB) === 0){
                 res = Math.max(res,map.get(keyA) * map.get(keyB));
             }
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O((m + n) * n)，其中 m 是查找单词中字母的次数，n是遍历哈希表的次数。
* 空间复杂度：O(n)。哈希映射中包含最多 n 个元素，即需要的空间为 O(n)。

[更多思路](https://leetcode-cn.com/problems/aseY1I/solution/jian-zhi-offer-2-mian-shi-ti-5-shu-zhong-8iqq/)。
