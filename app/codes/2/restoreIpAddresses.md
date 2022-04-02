###  复原 IP 

> 题目:给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

示例1：

```js
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
```


示例2：

```js
// 输入：s = "0000"
// 输出：["0.0.0.0"]
```

示例3：

```js
// 输入：s = "1111"
// 输出：["1.1.1.1"]
```

示例4：

```js
// 输入：s = "010010"
// 输出：["0.10.0.10","0.100.1.0"]
```

示例5：

```js
// 输入：s = "10203040"
// 输出：["10.20.30.40","102.0.30.40","10.203.0.40"]
```

提示:

* 0 <= s.length <= 3000
* s 仅由数字组成


> 注意：本题与[主站 93 题](https://leetcode-cn.com/problems/restore-ip-addresses/ )相同。

### 思路分析

本题我们可以使用递归思想，运行四次函数，每次将字符串分成:前面1~3个字符 + 后面的字符，然后开始检验前面1~3个字符是否是有效的IP地址（即首位不为0,且不能小于255）。

```js
var check = function(s){
    return !((+s[0] === 0 && s.length > 1) || +s > 255);
}
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let len = s.length;
    if(len > 12 || len < 4 || !/^\d+$/.test(s)){
        return [];
    }
    const res = [];
    function slice(s,str,n){
        if(s.length < n){
            return;
        }
        if(n === 1){
            if(check(s)){
                res.push(str + s);
            }
            return;
        }
        n--;
        // 检验第一个字符
        if(check(s.slice(0,1))){
            slice(s.slice(1),str + s.slice(0,1) + '.',n);
        }
        // 检验前二个字符
        if(check(s.slice(0,2))){
            slice(s.slice(2),str + s.slice(0,2) + '.',n);
        }
        //检验前三个字符
        if(check(s.slice(0,3))){
            slice(s.slice(3),str + s.slice(0,3) + '.',n);
        }
    }
    slice(s,'',4);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/0on3uN/solution/liang-chong-jie-fa-xun-huan-hui-su-by-ji-04ao/)。
