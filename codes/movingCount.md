### 机器人的运动范围

> 题目:地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

```js
// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1
```

> 提示：1 <= n,m <= 100,0 <= k <= 20

### 思路分析

本题和[矩阵中的路径](/codes/exist.md)有些类似，都可以用DFS算法来解决，但是这里使用BFS广度优先遍历搜索比深度优先遍历搜索更好一点，因为深度优先遍历搜索会从四个方向去进行搜索，而这里根据题意，我们可以直接排除向上和向左方向的搜索，因此在这里，我们可以使用BFS算法来解决。

[参考解题思路](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/javascriptyan-du-you-xian-bian-li-bfszhu-shi-xiang/)。

首先我们需要计算位数和，然后我们可以使用方向数组来表示机器人运动的方向，由于每次机器人只能走一步，并且k不能大于位数和，如果大于位数和，那就是临界条件，不满足。另外我们可以使用set数据结构来存储移动的次数，最后得到的set的长度即是最终答案。


- 方法一：BFS

代码如下:

```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    // 求位数和
    let getSum = v => v.toString().split("").reduce((a,b) => Number(a) + Number(b),0);
    // 初始化机器人移动方向数组,只需要判断向右或者向下方向即可
    let direction = [
        [0,1],
        [1,0]
    ],l = direction.length;
    // 利用set数据结构存储移动次数
    let set = new Set(['0,0']);
    // 初始队列，也就是移动方格的初始值
    let queue = [[0,0]];
    while(queue.length){
        //移除首队列，也就是机器人移动的坐标x,y
        let [x,y] = queue.shift();
        for(let i = 0;i < l;i++){
            // 每移动一次的x与y坐标，即偏移x与y坐标
            let offsetX = x + direction[i][0],
                offsetY = y + direction[i][1];
            // 临界值判断
            if(offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || set.has(`${ offsetX },${ offsetY }`))continue;
            // 每移动一次添加到set数据结构中
            set.add(`${ offsetX },${ offsetY }`);
            //也添加到队列中
            queue.push([offsetX,offsetY]);
        }
    }
    // 返回的长度即移动的格数
    return set.size;
};
```

由于用到了一个循环，所以这个算法的时间复杂度为 O(n),用了一个数组存储，所以空间复杂度为 O(n)。


