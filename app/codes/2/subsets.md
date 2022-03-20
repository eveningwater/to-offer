###  所有子集

> 题目:给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例1：

```js
// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```


示例2：

```js
// 输入：nums = [0]
// 输出：[[],[0]]
```

提示:

* 1 <= nums.length <= 10
* -10 <= nums[i] <= 10
* nums 中的所有元素 互不相同

> 注意：本题与[主站 148 题](https://leetcode-cn.com/problems/subsets/)相同。


### 思路分析

观察本题，我们可以使用深度优先搜索算法来解答，我们再每一轮遍历的时候，就依次添加元素到数组中，当停止递归的时候，再将这个数组添加到结果数组中，这样我们就得到了所有的解集。代码如下:


```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const dfs = (index,list) => {
        //停止递归
        if(index === nums.length){
            res.push(list.slice());
            return;
        }
        list.push(nums[index]);
        dfs(index + 1,list);
        //添加完了需要清空列表，然后再继续递归下一个解集
        list.pop();
        dfs(index + 1,list);
    }
    //需要根据索引来依次递归
    dfs(0,[]);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/TVdhkn/solution/java-er-jin-zhi-mei-ju-zhuang-tai-ya-suo-9xxz/)。
