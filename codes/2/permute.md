###  没有重复元素集合的全排列

> 题目:给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。

示例1：

```js
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```


示例2：

```js
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
```

示例3：

```js
// 输入：nums = [1]
// 输出：[[1]]
```

提示:

* 1 <= nums.length <= 6
* -10 <= nums[i] <= 10
* nums 中的所有整数 互不相同


> 注意：本题与[主站 46 题](https://leetcode-cn.com/problems/permutations/)相同。

### 思路分析

本题和上一题类似，借鉴上一题[允许重复选择元素的组合](/codes/2/combinationSum.md)的深度优先搜索算法，我们只需要用一个数组来判定元素是否重复即可。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [],
          track = [],
          used = new Array(nums.length).fill(false);
    const dfs = () => {
        if(track.length === nums.length){
            res.push(track.slice());
            return;
        }
        for(let i = 0;i < nums.length;i++){
            //判断如果元素存在，则跳过
            if(used[i]){
                continue;
            }
            track.push(nums[i]);
            used[i] = true;
            dfs();
            track.pop();
            used[i] = false;
        }
    }
    dfs();
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * n!)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/VvJkup/solution/pei-yang-chou-xiang-neng-li-java-cpython-u88o/)。
