### 左旋转字符串

> 题目:字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。


示例 1：

```js
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
```

示例 2：

```js
// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"
```

限制:

* 1 <= k < s.length <= 10000

### 思路分析

本题的思路比较简单，我们可以定义2个字符串遍历，然后遍历这个字符串，当遍历索引i < n，则添加到字符串1中，否则添加到字符串2中，最后将字符串1和字符串2拼接起来即可。

```js
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s,n) {
    let s1 = "",s2 = "",l = s.length;
    for(let i = 0;i < l;i++){
        if(i < n){
            s1 += s[i];
        }else {
            s2 += s[i];
        }
    }
    return s2 + s1;
};
```

时间复杂度 O(n) ： 线性遍历 s 并添加，使用线性时间；
空间复杂度 O(n) ： 假设循环过程中内存会被及时回收，内存中至少同时存在长度为 n 和 n - 1 的两个字符串（新建长度为 n 的 res 需要使用前一个长度 n - 1 的 res ），因此至少使用 O(n) 的额外空间。


更多详细解题思路参考[题解](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/solution/mian-shi-ti-58-ii-zuo-xuan-zhuan-zi-fu-chuan-qie-p/)。

