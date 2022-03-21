### 含有重复元素集合的组合

> 题目:给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

示例1:

```js
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
```

示例2:

```js
// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]
```
 
提示:

* 1 <= candidates.length <= 100
* 1 <= candidates[i] <= 50
* 1 <= target <= 30

> 注意：本题与[主站 40 题](https://leetcode-cn.com/problems/combination-sum-ii/)相同。

### 思路分析

本题和上一题类似，借鉴上一题[允许重复选择元素的组合](/app/codes/2/combinationSum.md)的深度优先搜索算法，结合剪枝，我们就可以完成本题的解答。

代码如下:

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [],track = [];
    const dfs = (start,sum) => {
        if(sum === target){
            res.push(track.slice());
            return;
        }
        for(let i = start;i < candidates.length;i++){
            //多加了一个判断元素是否重复的条件
            if(i - 1 >= start && candidates[i - 1] === candidates[i]){
                //判断元素索引是否存在，以及当前元素是否和上一个元素相等，满足就跳过
                continue;
            }
            track.push(candidates[i]);
            sum += candidates[i];
            dfs(i + 1,sum);
            track.pop();
            sum -= candidates[i];
        }
    }
    //需要进行排序
    candidates.sort((a,b) => a - b);
    dfs(0,0);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/4sjJUc/solution/java-hui-su-jian-zhi-jiao-ni-ru-he-bi-mi-nx9y/)。

