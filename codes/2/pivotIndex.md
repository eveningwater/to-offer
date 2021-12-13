### 左右两边子数组的和相等

> 题目:给你一个整数数组 nums ，请计算数组的`中心下标`。数组`中心下标`是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。如果`中心下标`位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

示例 1：

```js
// 输入：nums = [1,7,3,6,5,6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
// 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
```

示例 2：

```js
// 输入：nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心下标。
```

示例 3：

```js
// 输入：nums = [2, 1, -1]
// 输出：0
// 解释：
// 中心下标是 0 。
// 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
// 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
```

提示:

* 1 <= nums.length <= 10 ^ 4
* -1000 <= nums[i] <= 1000

> 注意：本题与[主站 724 题](https://leetcode-cn.com/problems/find-pivot-index/)相同。

### 思路分析

本题不难。我们可以这样思考，假如存在一个中心下标，记为i，根据这个中心下标i将数组划分为nums<sub>left</sub>和nums<sub>right</sub>，则nums<sub>left</sub> === nums<sub>right</sub>成立。如果数组所有元素的和记为total，则根据这个等式，可以得出:

nums<sub>left</sub> = total - nums<sub>right</sub> - nums[i];

假如nums<sub>left</sub>和nums<sub>right</sub>相等，我们记为和sum，以上等式可以记作:

sum = total - sum - nums[i]

即:

2 * sum + nums[i] = total。

根据前缀和的算法思想，我们可以初始化sum为0，然后只要满足这个等式，即迭代变量i就是我们要找的中心下标。如果不存在的话，则这个等式也不成立，直接返回-1即可。详细代码如下:

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // 计算所有元素的总和
    const total = nums.reduce((a,b) => a + b,0);
    //初始化前缀和，为0
    let sum = 0;
    for(let i = 0;i < nums.length;i++){
        //满足这个等式，则代表i是中心下标
        if(2 * sum + nums[i] === total){
            return i;
        }
        sum += nums[i];
    }
    //遍历完了也没有中心下标i就返回-1
    return -1;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(n):计算total需要遍历所有元素为O(n),循环求前缀和为O(n),即O(2n),忽略常数，即O(n)。
* 空间复杂度O(1)。

[更多思路](https://leetcode-cn.com/problems/tvdfij/solution/zuo-you-liang-bian-zi-shu-zu-de-he-xiang-5j4r/)。
