### 翻转单词顺序

> 题目:输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

示例 1：

```js
// 输入: "the sky is blue"
// 输出: "blue is sky the"
```

示例 2：

```js
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

示例 3:

```js
// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

说明:

* 无空格字符构成一个单词。
* 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
* 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。


### 思路分析

本题我们可以使用双指针算法来解决。该算法的流程如下:

1. 倒序遍历字符串s，记录单词的左右索引边界为i,j。
2. 每确定一个单词边界，则将其添加到单词列表res中。
3. 最终，将单词列表拼接为字符串，并返回即可。

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let _s = s.trim(),//消除字符串两端空白
        i = _s.length - 1,
        j = i,
        res = [];
    // 边界索引大于0时循环
    while(i >= 0){
        // 如果索引为i的字符不为空，并且i >= 0，则索引自减
        while(_s.charAt(i) !== " " && i >= 0){
            i--;
        }
        // 添加单词到单词列表中,因为每个单词之间有空白，所以这里要拼接一段空白字符
        res.push(_s.slice(i + 1,j + 1) + " ");
        // 如果索引为i的字符为空，并且i >= 0，则索引自减
        while(_s.charAt(i) === " " && i >= 0){
            i--;
        }
        j = i;
    }
    // 将数组转成字符串并消除两端空白
    return res.join("").trim();
};
```

时间复杂度 O(n)：其中 n 为字符串 s 的长度，线性遍历字符串。
空间复杂度 O(n)：新建的 list(Python) 或 StringBuilder(Java) 中的字符串总长度 ≤ n ，占用 O(n) 大小的额外空间


更多详细解题思路参考[题解](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/solution/mian-shi-ti-58-i-fan-zhuan-dan-ci-shun-xu-shuang-z/)。

