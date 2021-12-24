### 含有所有字符的最短字符串

> 题目:给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

如果 s 中存在多个符合条件的子字符串，返回任意一个。

> 注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

示例 1：

```js
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC" 
// 解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
```

示例 2：

```js
// 输入：s = "a", t = "a"
// 输出："a"
```

示例 3：

```js
// 输入：s = "a", t = "aa"
// 输出：""
// 解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
```

提示:

* 1 <= s.length, t.length <= 10 ^ 5
* s 和 t 由英文字母组成

> 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

> 注意：本题与[主站 76 题](https://leetcode-cn.com/problems/minimum-window-substring/)相似（本题答案不唯一）。

### 思路分析

本题虽然我们可以使用暴力循环的算法来实现，但是时间复杂度想来应该是不满足题意的。因此我们需要想另外的算法，而恰巧这里就可以使用滑动窗口的算法来解决。滑动窗口顾名思义就是创建一个窗口，窗口会有开始和结束，因此我们可以表示为[left,right]，我们可以用一个哈希表来统计字符串t中出现的字符，然后用另一个哈希表来定义这个滑动窗口，因此本题可以转换为求最短的滑动窗口，如果求出了滑动窗口的长度以及窗口的起始值start，那么我们就可以以start作为开始索引，以stat + len + 1作为结束索引，截取字符串s，从而得到符合条件的子字符串。本质上滑动窗口算法也就是双指针算法，因为我们相当于约定一个left和right指针用来扩展和缩短窗口。理解了这个思路，对于这道题，我们就很好解决了，我们来看详细的代码，如下所示:

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //定义2个哈希表来统计字符串t和窗口出现的字符,在这里可以使用对象，也可以使用map，为了节省空间，我们可以使用map数据结构
    const mapT = new Map(),//定义统计t字符串的字符数的哈希表
          mapWindow = new Map(); //定义窗口
    //开始统计字符串t出现的字符数，相当于是映射
    for(const char of t){
        //第一次哈希表中应该是没有统计出字符数的，所以需要初始化为0
        mapT.set(char,(mapT.get(char) || 0) + 1);
    }
    let left = 0,//left指针
        right = 0,//right指针
        valid = 0,//验证字符数
        len = Number.MAX_VALUE; //窗口的长度，初始化为无穷大
    for(;right < s.length;right++){
        //获取每一个字符
        const x = s.charAt(right);
        //判断存储字符串t中的哈希表中是否存在该字符
        if(mapT.has(x)){
            //同时窗口中也应该统计该字符
            mapWindow.set(x,(mapWindow.get(x) || 0) + 1);
            //如果窗口中也含有该字符，则验证两个哈希表中都存在字符，统计相同字符数valid = valid + 1,即valid++
            if(mapT.get(x) === mapWindow.get(x)){
                valid++;
            }
        }
        //当valid也就是相同字符数等于哈希表mapT的大小在，证明窗口已经满足条件，此时需要开始考虑缩短窗口了，
        // 因为此时满足题意的窗口不一定是最短的窗口
        while(valid === mapT.size){
            //当right指针 - left指针小于设置的窗口长度，我们就可以修改起始值以及窗口长度
            if(right - left < len){
                //此时截取字符串的起始索引应该等于left指针
                start = left;
                //修改窗口的长度
                len = right - left;
            }
            //需要统计移除窗口的字符，从而达到缩短窗口，也就是说right指针是扩展窗口，而left指针就是缩短窗口
            //这就是双指针left和right的意义所在
            const y = s.charAt(left);
            left++;
            //如果第一个哈希表中存在该字符
            if(mapT.has(y)){
                //并且窗口中也存在该字符，则统计相同字符数就要相减，也就达到了缩短窗口的目的
                if(mapT.get(y) === mapWindow.get(y)){
                    valid--;
                }
                mapWindow.set(y,mapWindow.get(y) - 1);
            }
        }
    }
    //最后计算出来的len就是最短窗口的长度，而start也就是截取的起始索引
    return len === Number.MAX_VALUE ? "" : s.slice(start,start + len + 1);
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(m + n * m),其中m为字符串t的长度，n为字符串s的长度。
* 空间复杂度O(2n),也就是O(n)。

[更多思路](https://leetcode-cn.com/problems/M1oyTv/solution/c-zi-ren-wei-gai-fang-fa-bi-yuan-shu-hao-2x4l/)。
