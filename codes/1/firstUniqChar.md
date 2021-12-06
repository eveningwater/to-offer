### 第一个只出现一次的字符

> 题目:在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例1:

```js
// 输入：s = "abaccdeff"
// 输出：'b'
```

示例2:

```js
// 输入：s = "" 
// 输出：' '
```

限制:

* 0 <= s 的长度 <= 50000

### 思路分析

本题的难度不大。我们可以考虑使用hash表来存储每一个字符，这个hash表的键名就是字符值，键值就是字符数。也就是说当我们一轮循环下来，则可以知道每一个字符的数量，然后我们再遍历这个hash表，只要找到键值为1的字符即是最终的答案。

```js
var firstUniqChar = function(s){
    // 使用map来存储每一个字符
    const map = new Map();
    // 返回结果
    let res = " ";
    for(const char of s){
        if(map.has(char)){
            // 对应的字符数加1
            let count = map.get(char);
            map.set(char,count + 1);
        }else{
            // 否则即使字符数为1
            map.set(char,1);
        }
    }
    // 遍历map
    for(const [key,value] of map.entires()){
        if(value === 1){
            res = key;
            //第一次找到即可中断遍历了
            break;
        }
    }
    return res;
}
```

时间复杂度 O(n) ： n 为字符串 s 的长度；需遍历 s 两轮，使用 O(n)；HashMap 查找操作的复杂度为 O(1)；
空间复杂度 O(1) ： 由于题目指出 s 只包含小写字母，因此最多有 26 个不同字符，HashMap 存储需占用 O(26) = O(1)的额外空间。
更多详细解题思路参考[题解](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/solution/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-by-3zqv5/)。

