###  字符串交织 

> 题目:给定三个字符串 s1、s2、s3，请判断 s3 能不能由 s1 和 s2 交织（交错） 组成。

两个字符串 s 和 t 交织 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

* s = s1 + s2 + ... + sn
* t = t1 + t2 + ... + tm
* |n - m| <= 1
* 交织 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...

提示：a + b 意味着字符串 a 和 b 连接。

示例1：

![](../../images/2/isInterleave-1.jpg)

```js
// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出：true
```


示例2：

```js
// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 输出：false
```


示例3：

```js
// 输入：s1 = "", s2 = "", s3 = ""
// 输出：true
```


提示:

* 0 <= s1.length, s2.length <= 100
* 0 <= s3.length <= 200
* s1、s2、和 s3 都由小写英文字母组成


> 注意：本题与[主站 97 题](https://leetcode-cn.com/problems/interleaving-string/)相同。

### 思路分析

记s1的长度为n,s2的长度为m,s3的长度为t,首先我们需要知道，如果m + n !== t,则代表s3必然不可能由s1和s2交织而成，只有满足当m + n = t的时候，才会有可能出现交织。本题我们同样可以使用动态规划来解题，但是动态规划找到状态转移方程很难，我们可以采用回溯算法来解答。首先我们可以使用三个指针同时代表三个字符串的每一个字符，如果s1当前字符与s3当前字符相等，则s1和s3的下标同时加1，如果s2当前字符与s3当前字符相等，则s2和s3的下标同时加1，如果最终三个指针能走到最后，就代表可以交织，返回true。当然我们需要注意，就是在回溯的过程中，难免会有重复的访问路径，因此，我们可以使用哈希表来存储访问路径，如果已经访问过，则直接退出。


```js
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length,n = s2.length,t = s3.length;
    if(m = n !== t){
        return false;
    }
    let res = false,visited = new Set();
    function backtrace(i1,i2,i3){
        if(i1 === m && i2 === n && i3 === t){
            return res = true;
        }
        if(visited.has(`${i1}-${i2}-${i3}`)){
            return false;
        }
        visited.add(`${i1}-${i2}-${i3}`);
        if(s1[i1] === s3[i3]){
            backtrace(i1 + 1,i2,i3 + 1);
        }
        if(s2[i2] === s3[i3]){
            backtrace(i1,i2 + 1,i3 + 1);
        }
    }
    backtrace(0,0,0);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。


[更多思路](https://leetcode-cn.com/problems/IY6buf/solution/zi-fu-chuan-jiao-zhi-by-leetcode-solutio-i4ni/)。
