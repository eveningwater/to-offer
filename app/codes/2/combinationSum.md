###  允许重复选择元素的组合

> 题目:给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

示例1：

```js
// 输入: candidates = [2,3,6,7], target = 7
// 输出: [[7],[2,2,3]]
```


示例2：

```js
// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
```

示例3：

```js
// 输入: candidates = [2], target = 1
// 输出: []
```

示例4：

```js
// 输入: candidates = [1], target = 1
// 输出: [[1]]
```

示例5：

```js
// 输入: candidates = [1], target = 2
// 输出: [[1,1]]
```

提示:

* 1 <= candidates.length <= 30
* 1 <= candidates[i] <= 200
* candidate 中的每个元素都是独一无二的。
* 1 <= target <= 500


> 注意：本题与[主站 39 题](https://leetcode-cn.com/problems/combination-sum/)相同。

### 思路分析

本题和上一题类似，借鉴上一题[含有 k 个元素的组合](/app/codes/2/combine.md)的深度优先搜索算法，结合剪枝，我们就可以完成本题的解答。

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [],track = [];
    const dfs = (start,sum) => {
        if(sum === target){
            res.push(track.slice());
            return;
        }
        if(sum > target){
            return;
        }
        for(let i = start;i < candidates.length;i++){
            track.push(candidates[i]);
            sum += candidates[i];
            dfs(i,sum);
            track.pop();
            sum -= candidates[i];
        }
    }
    dfs(0,0);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * n!)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/Ygoe9J/solution/jian-zhi-offer-2-mian-shi-ti-81-shu-zhon-sngb/)。
