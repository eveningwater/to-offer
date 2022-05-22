###  多余的边
 
> 题目:树可以看成是一个连通且 无环 的 无向 图。

给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。

示例1：

![](../../images/2/findRedundantConnection-1.png)

```js
// 输入: edges = [[1,2],[1,3],[2,3]]
// 输出: [2,3]
```

示例2：

![](../../images/2/findRedundantConnection-2.png)

```js
// 输入: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// 输出: [1,4]
```

提示:

* n == edges.length
* 3 <= n <= 1000
* edges[i].length == 2
* 1 <= ai < bi <= edges.length
* ai != bi
* edges 中无重复元素
* 给定的图是连通的 

> 注意：本题与[主站 684 题](https://leetcode-cn.com/problems/redundant-connection/)相同。

### 思路分析

在一棵树中，边的数量比节点的数量少1，如果一棵树有n个节点，则这棵树有n-1条边，这道题中的图在树的基础上多了一条边，因此边的数量也就是n。树是一个连通且无环的无向图，在树中多了一条边之后就会出现环，因此多余的边就是导致环出现的边。可以通过并查集来寻找多余的边，初始时，每个节点都属于不同的连通分量，遍历每一条边，判断这条边连接的两个顶点是否属于相同的连通分量。

* 如果两个顶点属于不同的连通分量，则说明在遍历到当前的边之前，这两个顶点间不连通，因此当前的边不会导致环的出现，合并这两个顶点的连通分量。
* 如果两个顶点属于相同的连通分量，则说明在遍历到当前的边之前，这两个顶点已经连通，因此当前的边导致环的出现，为多余的边，将其作为答案返回。

```js
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length,
          f = new Array(n).fill(0).map((ele,index) => index);
    const find = x => f[x] === x ? x : (f[x] = find(f[x]));
    const union = (index1,index2) => {
        f[find(index1)] = find(index2);
    }
    for(let i = 0;i < n;i++){
        const edge = edges[i];
        const [node1,node2] = edge;
        if(find(node1) !== find(node2)){
            union(node1,node2);
        }else{
            return edge;
        }
    }
    return [0]; 
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * log<sup>n</sup>),其中 n 是图中的节点个数。需要遍历图中的 n 条边，对于每条边，需要对两个节点查找祖先，如果两个节点的祖先不同则需要进行合并，需要进行 2 次查找和最多 1 次合并。一共需要进行 2n 次查找和最多 n 次合并，因此总时间复杂度是 O(2n * log<sup>n</sup>) = O(n * log<sup>n</sup>)。这里的并查集使用了路径压缩，但是没有使用按秩合并，最坏情况下的时间复杂度是 O(n * log<sup>n</sup>)，平均情况下的时间复杂度依然是O(n * α(n))，其中 α 为阿克曼函数的反函数，α(n) 可以认为是一个很小的常数。
* 空间复杂度：O(n),其中 n 是图中的节点个数。使用数组 f 记录每个节点的祖先。

[更多思路](https://leetcode.cn/problems/7LpjUW/solution/duo-yu-de-bian-by-leetcode-solution-pnt2/)。
