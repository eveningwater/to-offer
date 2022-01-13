### 0 和 1 个数相同的子数组

> 题目:给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。


示例 1：

```js
// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
```

示例 2：

```js
// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。
```

提示:

* 1 <= nums.length <= 10 ^ 5
* nums[i] 不是 0 就是 1

> 注意：本题与[主站 525 题]( https://leetcode-cn.com/problems/contiguous-array/)相同。

### 思路分析

由于数组nums中0和1的数量相同，也就等价于1的数量减去0的数量等于0，因此我们可以将数组nums中的0视作-1，则求具有相同数量0和1的最长连续子数组可以转换为求最长的连续子数组，其元素和为0。

设数组nums的长度为n，将数组nums进行转换得到长度相同的新数组newNums。对于0 <= i < n，则有:

* 当nums[i] = 1时，newNums[i] = 1
* 当nums[i] = 0时，newNums[i] = -1

此时为了快速计算出newNums最长子数组的元素和，我们就需要求出newNums的前缀和。将newNums的前缀和极为prefixNums[i],即表示从下标0到下标i的前缀和。则newNums从下标i到下标k(i < k)的子数组的元素和为prefixNums[k] - prefixNums[i],该子数组的长度就为k - i。

当prefixNums[k] - prefixNums[i] = 0 时，即得到了newNums的一个长度为k - i的子数组元素和为0，对应的就是求数组nums中具有相同数量0和1的子数组。

当然，在代码的实现上面，我们可以不需要维护一个newNums和prefixNums，我们只需要维护一个变量counter存储newNums的前缀和即可，这样也可以将降低空间复杂度。具体的做法就是，遍历nums，当nums[i]为1时，counter加1，当nums[i]为0时，counter减1。在遍历的过程中需要使用哈希表存储每个前缀和第一次出现的下标。

规定空的前缀和的结束下标为-1,由于空的前缀和的元素和为0，因此在遍历之前，首先需要往哈希表中存储一个(0,-1)。在遍历过程中，对于每个下标i,则有如下操作:

* 如果counter的值在哈希表中存在，则取出对应counter的下标值，记为prevIndex,nums从下标prevIndex + 1到下标i的子数组中具有相同数量的0和1，该子数组的长度为i - prevIndex,使用该子数组的长度更新为最长的连续子数组的长度，也就是取最大值。
* 如果counter的值在哈希表中不存在，则将当前counter的下标i存在哈希表中。

由于哈希表存储的是counter的每个取值的第一次出现的下标，因此当遇到重复的前缀和时，根据当前的下标和哈希表中存储的下标计算得到的子数组长度是以当前下标结尾的子数组中满足具有相同数量的0和1的最长连续子数组。遍历结束时，即可得到nums中具有相同数量的0和1的最长连续子数组的长度，返回该长度即可。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLength = 0,counter = 0;
    const map = new Map();
    map.set(counter,-1);
    const n = nums.length;
    for(let i = 0;i < n;i++){
        if(nums[i] === 1){
            counter += 1;
        }else{
            counter -= 1;
        }
        if(map.has(counter)){
            const prevIndex = map.get(counter);
            maxLength = Math.max(maxLength,i - prevIndex);
        }else{
            map.set(counter,i);
        }
    }
    return maxLength;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/A1NYOS/solution/0-he-1-ge-shu-xiang-tong-de-zi-shu-zu-by-xbyt/)。
