### 矩阵中的路径

> 题目:给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

![](../../images/word.jpg)

示例 1：

```js
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：false
```


> 提示：

* 1 <= board.length <= 200
* 1 <= board[i].length <= 200
* board 和 word 仅由大小写英文字母组成
 

### 思路分析

本问题是典型的矩阵搜索问题，可以使用深度优先搜索（DFS）+ 剪枝来解决。

* 深度优先搜索：可以理解为暴力法遍历矩阵中所有字符串的可能性。DFS通过递归，先朝一个方向搜到底，然后再回溯至上一个节点，沿另一个方向搜索，以此类推。通常搜寻的方向为下->上->右->左。
* 在搜索中，遇到这条路不可能和目标字符串匹配成功的情况（例如：此矩阵元素和目标字符不同、此元素已被访问），则应立即返回，称之为可行性剪枝。

![](../../images/DFS-1.png)

> DFS解析:

* 递归参数： 当前元素在矩阵 board 中的行列索引 i 和 j ，当前目标字符在 word 中的索引 k 。
* 终止条件：
    1.返回 false： (1) 行或列索引越界 或 (2) 当前矩阵元素与目标字符不同 或 (3) 当前矩阵元素已访问过 （ (3) 可合并至 (2) ） 。
    2.返回 true ：k = len(word) - 1 ，即字符串 word 已全部匹配。
* 递推工作：
    1.标记当前矩阵元素： 将 board[i][j] 修改为空字符'' ，代表此元素已访问过，防止之后搜索时重复访问。
    2.搜索下一单元格： 朝当前元素的 上、下、左、右 四个方向开启下层递归，使用 或 连接 （代表只需找到一条可行路径就直接返回，不再做后续DFS），并记录结果至res。
    3.还原当前矩阵元素： 将 board[i][j] 元素还原至初始值，即 word[k]。
* 返回值： 返回布尔量 res ，代表是否搜索到目标字符串。

> 使用空字符做标记是为了防止标记字符与矩阵原有字符重复。当存在重复时，此算法会将矩阵原有字符认作标记字符，从而出现错误。

参考思路:[解题思路](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/solution/mian-shi-ti-12-ju-zhen-zhong-de-lu-jing-shen-du-yo/)。

- 方法一：DFS + 剪枝

代码如下:

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length,col = board[0].length;
    let DFS = function(i,j,index){
        // 行越界，列越界，目标字符与矩阵字符不相同，则返回false
        if(i < 0 || j < 0 || i > row - 1 || j > col || board[i][j] !== word[index])return false;
        // 索引遍历完了，返回true
        if(index === word.length - 1)return true;
        // 记录初始值
        let temp = board[i][j];
        // 将该值设置为一个标记值，要锁住，以免后续不能保证上一个方向的值
        board[i][j] = '-';
        //开始四个方向的搜索,下 -> 上 -> 右 -> 左
        let res = DFS(i,j + 1,index + 1) || DFS(i,j - 1,index + 1) || DFS(i + 1,j,index + 1) || DFS(i - 1,j,index + 1);
        // 恢复值
        board[i][j] = temp;
        return res;

    }
    for(let i = 0;i < row;i++){
        for(let j = 0;j < col;j++){
            if(DFS(i,j,0))return true;
        }
    }
    return false;
};
```

以上算法的时间复杂度和空间复杂度分析如下,其中M,N 分别为矩阵行列大小， K为字符串 word 长度:

* 时间复杂度O(3 ^ K * M * N)： 最差情况下，需要遍历矩阵中长度为 K 字符串的所有方案，时间复杂度为 O(3 ^ K)；矩阵中共有 M * N 个起点，时间复杂度为 O(M * N)。
方案数计算： 设字符串长度为 K ，搜索中每个字符有上、下、左、右四个方向可以选择，舍弃回头（上个字符）的方向，剩下33种选择，因此方案数的复杂度为 O(3 ^ K) 。

* 空间复杂度O(K)：搜索过程中的递归深度不超过 K ，因此系统因函数调用累计使用的栈空间占用 O(K) （因为函数返回后，系统调用的栈空间会释放）。最坏情况下 K = M * N ，递归深度为 M * N ，此时系统栈使用 O(M * N)的额外空间。

[更多思路](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/solution/ju-zhen-zhong-de-lu-jing-by-leetcode-sol-3lox/)。



