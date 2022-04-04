###  环形房屋偷盗 

> 题目:一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。


示例1：

```js
// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```


示例2：

```js
// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。
```

示例3：

```js
// 输入：nums = [0]
// 输出：0
```

提示:

* 1 <= nums.length <= 100
* 0 <= nums[i] <= 1000


> 注意：本题与[主站 213 题](https://leetcode-cn.com/problems/house-robber-ii/)相同。

### 思路分析

本题也是典型的动态规划算法题，同样的也用动态规划的思路来学习，而且思路同参考[爬楼梯的最少成本](/codes/2/rob.md)思路，只是增加了一个判断条件，那就是从第一间房间开始偷盗，就不能偷最后一间房，即数组从索引0开始到数组长度n - 1为止，或者就是从第二间房开始到最后一间房，两者之间取最大值即可，即数组从索引1开始到数组长度n为止，当然还有2个边界情况判断，即数组长度为0和1的时候。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var ringRob = function(nums) {
    let rob = function(list){
        let prev = 0,cur = 0,temp;
        for(let i = 0;i < list.length;i++){
            temp = cur;
            cur = Math.max(prev + list[i],cur);
            prev = temp;
        }
        return cur;
    }
    if(nums.length === 0){
        return 0;
    }
    if(nums.length === 1){
        return nums[0];
    }
    return Math.max(nums.slice(0,nums.length - 1),nums.slice(1));
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/PzWKhm/solution/jian-zhi-offer-ii-090-huan-xing-fang-wu-0znjv/)。
