###  外星文字典
 
> 题目:现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。给定一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。请你根据该词典还原出此语言中已知的字母顺序，并按字母递增顺序排列。若不存在合法字母顺序，返回 "" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。

字符串 s 字典顺序小于字符串 t 有两种情况：

* 在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。
* 如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。

示例1：

```js
// 输入：words = ["wrt","wrf","er","ett","rftt"]
// 输出："wertf"
```

示例2：

```js
// 输入：words = ["z","x"]
// 输出："zx"
```

示例3：

```js
// 输入：words = ["z","x","z"]
// 输出：""
// 解释：不存在合法字母顺序，因此返回 "" 。
```

提示:

* 1 <= words.length <= 100
* 1 <= words[i].length <= 100
* words[i] 仅由小写英文字母组成

> 注意：本题与[主站 269 题](https://leetcode-cn.com/problems/alien-dictionary/)相同。

### 思路分析

根据题意，给定的字符列表是已经按照递增顺序来排列的，例如:words = ["wrt","wrf","er","ett","rftt"],中的字符串是按照递增顺序来排列的，因此"wrt" < "wrf" < "er" < "ett" < "rftt"。我们以"wrt" < "wrf"为例，根据题意"wrt"为题意中的字符串s,"wrf"为题意中的字符串t,那么字符串s小于字符串t会有两种情况。

第一个条件，两个字符串的第一个不同的字母为t与f,因为s < t,因此我们可以知道"t" < "f",同理根据"wrf" < "er"我们可以得知"w" < "e",根据"er" < "ett"可以得知"r" < "t"，根据"ett" < "rftt"可以得知"e" < "r"。最后就可以得到了字母顺序为"w" < "e" < "r" < "t" < "f"即可得最终的结果"wertf"为答案。通过这一番分析，我们就知道这道题主要考察的是根据题意将字符列表构建成一个图，图节点就是每一个字符，然后我们就需要遍历图即可。完整代码如下:

```js
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let c = 0;
    //哈希表构建字符列表的大小关系,注意这里之所以要转成字符串又转成数组，就是方便将字符列表里面的每一个字符串分解成单个字符，set数据去重，从而得知剩下来的字符大小关系
    const letters = new Set(words.join("").split(""));
    //使用哈希表收集字符大小关系，也就是构建图
    const larger = new Map();
    for(const l of letters){
        larger.set(l,new Set());
    }
    while(c < words.length - 1){
        // 比较相邻字符串
        const pre = words[c],after = words[c + 1];
        for(let i = 0;i < pre.length;i++){
            //根据题意，pre的length必须要小于after的length
            if(i >= after.length){
                return "";
            }
            //找到第一个不同的字母 "wrt" < "wrf
            if(pre[i] !== after[i]){
                // pre[i]为t,after[i]为f
                if(larger.get(pre[i]).has(after[i])){
                    return "";
                }
                larger.get(after[i]).add(pre[i]);
                break;
            }
        }
        c++;
    }

    let res = [],
        isCircle = false,//是否有环
        visited = new Array(26).fill(false);//因为字母只有26个
    //深度优先搜索算法
    function dfs(n,path = new Set()){
        if(isCircle){
            return;
        }
        //遍历的路径存在字母，就代表有环，将isCircle设置为true，并直接返回，无须做遍历
        if(path.has(n)){
            isCircle = true;
            return;
        }
        path.add(n);//记录当前遍历节点
        //获取当前字母在数组当中的对应索引值
        const index = n.charCodeAt(0) - "a".charCodeAt(0);
        if(!visited[index]){
            // 哈希表中的对应字母
            const orderLetters = larger.get(n);
            //如果大小为0，则代表是只有一个字母，也就是最小字母，添加到结果数组中
            if(orderLetters.size === 0){
                res.push(n);
                visited[index] = true;
                return;
            }
            for(const l of orderLetters){
                dfs(l,path);
            }
            visited[index] = true; 
            res.push(n);
        }
        //每次遍历了当前字母就要删除
        path.delete(n);
    }
    for(const i of letters){
        dfs(i);
    }
    //如果不存在环，则返回结果
    return isCircle ? "" : res.join("");
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n),其中单词列表的长度为 n，每个单词的平均长度为 m。
* 空间复杂度：O(m * n),存储单词列表为n,每次遍历又需要存储每个单词的字母，为m。

[更多思路](https://leetcode.cn/problems/Jf1JuT/solution/jian-zhi-offer-2-mian-shi-ti-114-shu-zho-8itg/)。
