###  重建序列
 
> 题目:请判断原始的序列 org 是否可以从序列集 seqs 中唯一地 重建 。

序列 org 是 1 到 n 整数的排列，其中 1 ≤ n ≤ 104。重建 是指在序列集 seqs 中构建最短的公共超序列，即  seqs 中的任意序列都是该最短序列的子序列。

示例1：

```js
// 输入: org = [1,2,3], seqs = [[1,2],[1,3]]
// 输出: false
// 解释：[1,2,3] 不是可以被重建的唯一的序列，因为 [1,3,2] 也是一个合法的序列。
```

示例2：

```js
// 输入: org = [1,2,3], seqs = [[1,2]]
// 输出: false
// 解释：可以重建的序列只有 [1,2]。
```

示例3：

```js
// 输入: org = [1,2,3], seqs = [[1,2],[1,3],[2,3]]
// 输出: true
// 解释：序列 [1,2], [1,3] 和 [2,3] 可以被唯一地重建为原始的序列 [1,2,3]。
```

示例4：

```js
// 输入: org = [4,1,5,2,6,3], seqs = [[5,2,6,3],[4,1,5,2]]
// 输出: true
```

提示:

* 1 <= n <= 104
* org 是数字 1 到 n 的一个排列
* 1 <= segs[i].length <= 105
* seqs[i][j] 是 32 位有符号整数

> 注意：本题与[主站 444 题](https://leetcode-cn.com/problems/sequence-reconstruction/)相同。

### 思路分析

本题实际上也还是构建图，遍历图的问题。根据题意，原始序列需要是唯一能被重建的，因此我们可以构建哈希表来确定图中的每一个节点在拓扑排序后的序列是否与原始序列相等。然后确定了之后，我们就可以构建图哈希表以及入度数组来计算每个节点的入度。接着我们定义一个队列，以及一个结果数组，将入度为0节点添加到队列中。然后我们开始遍历队列，当队列的长度不为1，也是不会存在重建后的序列与原始序列相等的，所以直接返回false。然后依次将下一个入度为0的节点添加到队列中，直到遍历每一个节点完成，我们用一个数组来存储遍历的每一个节点，最后只需要比较这个数组是否与原始序列相等即可。代码如下:

```js
/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function(org, seqs) {
    // 构建哈希表确定seqs的创建序列的唯一性
    const set = new Set(),n = org.length;
    for(const seq of seqs){
        for(const num of seq){
            set.add(num);
        }
    }
    // 如果序列元素只有1个，并且哈希表中不存在该元素，或者哈希表的大小不等于序列的长度，则代表没有符合条件的
    if((n === 1 && !set.has(n))|| set.size !== n){
        return false;
    }
    // 构建图和入度数组
    const graph = new Map(),
          inDegree = new Array(n + 1).fill(0);
    for(let i = 1;i <= n;i++){
        graph.set(i,new Set());
    }
    // 添加图节点，并计算每个节点的入度
    for(const seq of seqs){
        for(let i = 0;i < seq.length - 1;i++){
            if(!graph.get(seq[i]).has(seq[i + 1])){
                graph.get(seq[i]).add(seq[i + 1]);
                inDegree[seq[i + 1]]++;
            }
        }
    }
    // 定义队列和结果列表
    const queue = [],list = [];
    // 将入度为0的节点添加到队列当中
    for(let i = 1;i <= n;i++){
        if(inDegree[i] === 0){
            queue.push(i);
        }
    }
    while(queue.length){
        // 如果队列的长度不为1，则不满足条件
        if(queue.length !== 1){
            return false;
        }
        // 出队
        const cur = queue.shift();
        list.push(cur);
        // 如果图中不存在该节点，则跳过
        if(!graph.get(cur)){
            continue;
        }
        for(const n of graph.get(cur)){
            inDegree[n]--;
            // 下一个节点的入度为0，则添加到队列中
            if(inDegree[n] === 0){
                queue.push(n);
            }
        }
    }
    return list.toString() === org.toString();
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(v * e),其中v为序列org的长度,e为构建图的边数O(sum(seqs[i].length))。
* 空间复杂度：O(v * e)。

[更多思路](https://leetcode.cn/problems/ur2n8P/solution/tuo-bu-pai-xu-que-ding-wei-yi-chu-dui-xu-zkb5/)。
