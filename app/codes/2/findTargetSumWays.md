###  加减的目标值
 
> 题目:给定一个正整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

* 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。

返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。


示例1：

```js
// 输入：nums = [1,1,1,1,1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
```


示例2：

```js
// 输入：nums = [1], target = 1
// 输出：1
```

提示:

* 1 <= nums.length <= 20
* 0 <= nums[i] <= 1000
* 0 <= sum(nums[i]) <= 1000
* -1000 <= target <= 1000


> 注意：本题与[主站 494 题](https://leetcode-cn.com/problems/target-sum/)相同。

### 思路分析

数组nums的每个元素都可以添加符号+或者符号-,因此每个元素有2种添加符号的方法，n个数共有2 ^ n种添加符号的方法，对应2 ^ n种不同的表达式。当n个元素都添加符号之后，即可得到一种表达式，如果表达式的结果等于目标数target，则该表达式即为符合要求的表达式。

因此，本题我们可以采用回溯算法去遍历所有的表达式，回溯的过程之中维护一个计数器count，当遇到一种表达式的结果等于target时，就将计数器count加1，遍历完所有的表达式之后，即可得到等于目标数target的表达式的数目。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0,len = nums.length;
    const backTrace = (index,sum) => {
        if(index === len){
            if(sum === target){
                count++;
            }
        }else{
            backTrace(index + 1,sum + nums[index]);
            backTrace(index + 1,sum - nums[index]);
        }
    }
    backTrace(0,0);
    return count;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(2 ^ n),其中 n 是数组 nums 的长度。回溯需要遍历所有不同的表达式，共有 2 ^ n 种不同的表达式，每种表达式计算结果需要 O(1) 的时间，因此总时间复杂度是 O(2 ^ n)。
* 空间复杂度：O(n)，其中 n 是数组nums 的长度。空间复杂度主要取决于递归调用的栈空间，栈的深度不超过 n。

[更多思路](https://leetcode-cn.com/problems/YaVDxD/solution/jia-jian-de-mu-biao-zhi-by-leetcode-solu-be5t/)。
