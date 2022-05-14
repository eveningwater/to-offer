###  计算除法
 
> 题目:给定一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。

另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。

返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。

注意：输入总是有效的。可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。


示例1：

```js
// 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
// 解释：
// 条件：a / b = 2.0, b / c = 3.0
// 问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
```

示例2：

```js
// 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// 输出：[3.75000,0.40000,5.00000,0.20000]
```

示例3：

```js
// 输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// 输出：[0.50000,2.00000,-1.00000,-1.00000]
```

提示:

* 1 <= equations.length <= 20
* equations[i].length == 2
* 1 <= Ai.length, Bi.length <= 5
* values.length == equations.length
* 0.0 < values[i] <= 20.0
* 1 <= queries.length <= 20
* queries[i].length == 2
* 1 <= Cj.length, Dj.length <= 5
* Ai, Bi, Cj, Dj 由小写英文字母与数字组成


> 注意：本题与[主站 399 题](https://leetcode-cn.com/problems/evaluate-division/)相同。

### 思路分析

我们可以将这个问题建模成一张图：给定图中的一些点（变量），以及某些边的权值（两个变量的比值），试对任意两点（两个变量）求出其路径长（两个变量的比值）。因此，我们首先需要遍历equations数组，找出其中所有不同的字符串，并通过哈希表将每个不同的字符串映射成整数。

在构建完图之后，对于任意一个查询，就可以从起点出发，通过广度优先搜索的方式，不断的更新起点和当前点之间的路径长度，直到搜索到终点为止。

```js
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let nVars = 0;
    const variables = new Map(),
          n = equations.length;
    //映射成整数
    for(let i = 0;i < n;i++){
        if(!variables.has(equations[i][0])){
            variables.set(equations[i][0],nVars++);
        }
        if(!variables.has(equations[i][1])){
            variables.set(equations[i][1],nVars++);
        }
    }
    //对于每个点，存储其直接连接到的所有点及对应的权值
    const edges = new Array(nVars).fill(0);
    for(let i = 0;i < nVars;i++){
        edges[i] = [];
    }
    for(let i = 0;i < n;i++){
        const va = variables.get(equations[i][0]),
              vb = variables.get(equations[i][1]);
        edges[va].push([vb,values[i]]);
        edges[vb].push([va,1.0 / values[i]]);
    }
    const queriesCount = queries.length;
    const ret = [];
    for(let i = 0;i < queriesCount;i++){
        const query = queries[i];
        let result = -1.0;
        if(variables.has(query[0]) && variables.has(query[1])){
            const ia = variables.get(query[0]),
                  ib = variables.get(query[1]);
            if(ia === ib){
                result = 1.0;
            }else{
                const points = [];
                points.push(ia);
                const ratios = new Array(nVars).fill(-1.0);
                ratios[ia] = 1.0;
                while(points.length && ratios[ib] < 0){
                    const x = points.pop();
                    for(const [y,val] of edges[x]){
                        if(ratios[y] < 0){
                            ratios[y] = ratios[x] * val;
                            points.push(y);
                        }
                    }
                }
                result = ratios[ib];
            }
        }
        ret[i] = result;
    }
    return ret;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(M * L + Q * (L + M))，其中 M 为边的数量，Q 为询问的数量，L 为字符串的平均长度。构建图时，需要处理 M 条边，每条边都涉及到 O(L) 的字符串比较；处理查询时，每次查询首先要进行一次 O(L)的比较，然后至多遍历 O(M)条边。
* 空间复杂度：O(M * L + Q * (L + M))，其中 M 为边的数量，Q 为询问的数量，L 为字符串的平均长度。构建图时，需要处理 M 条边，每条边都涉及到 O(L) 的字符串比较；处理查询时，每次查询首先要进行一次 O(L) 的比较，然后至多遍历 O(M) 条边。

[更多思路](https://leetcode.cn/problems/vlzXQL/solution/ji-suan-chu-fa-by-leetcode-solution-p731/)。
