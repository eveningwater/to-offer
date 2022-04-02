###  分割回文子字符串 

> 题目:给定一个字符串 s ，请将 s 分割成一些子串，使每个子串都是 回文串 ，返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

示例1：

```js
// 输入：s = "google"
// 输出：[["g","o","o","g","l","e"],["g","oo","g","l","e"],["goog","l","e"]]
```


示例2：

```js
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
```

示例3：

```js
// 输入：s = "a"
// 输出：[["a"]]
```

提示:

* 1 <= s.length <= 16
* s 仅由小写英文字母组成


> 注意：本题与[主站 131 题](https://leetcode-cn.com/problems/palindrome-partitioning/)相同。

### 思路分析

本题我们可以采用深度优先搜素算法，或者也可以叫回溯算法来解答，首先我们需要知道，如何判断一个字符串是回文字符串，也就是说从一个字符串的开始指针到结束指针依次遍历，如果对于这个遍历的字符串，每个字符不相等，就代表不是回文字符串。伪代码如下:

```js
    let isPartition = (s,l,r) => {
        while(l < r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    //当然判断是否是回文字符串还可以使用API
    //如: s.split(" ").reverse().join(" ") === s
```

下一步，我们就是使用回溯算法递归拼接每一个字符串，对于每一个子字符串判定是回文字符串，就添加到存储结果的数组中去。

```js
const isPartition = (s,l,r) => {
    while(l < r){
        if(s[l] !== s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const dfs = (index,list) => {
        //如果遍历索引等于字符串的长度，就代表已经遍历完成，所以停止递归
        if(index === s.length){
            res.push(list.slice());
            return;
        }
        for(let i = index;i < s.length;i++){
            //如果不是回文字符串，就跳过
            if(!isPartition(s,index,i)){
                continue;
            }
            list.push(s.slice(index,i + 1));
            dfs(i + 1,list);
            // 注意这里需要删除,也就是说每次添加一次回文字符串完成之后，再重置，就保证了不会重复添加回文字符串
            list.pop();
        }
    }
    dfs(0,[]);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/M99OJA/solution/js-by-qing-tian-bw-zw3t/)。
