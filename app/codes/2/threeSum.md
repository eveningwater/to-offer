### 数组中和为 0 的三个数

> 题目:给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。


示例 1：

```js
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
```

示例 2：

```js
// 输入：nums = []
// 输出：[]
```

示例 3：

```js
// 输入：nums = [0]
// 输出：[]
```

提示:

* 0 <= nums.length <= 3000
* -10 ^ 5 <= nums[i] <= 10 ^ 5

> 注意：本题与[主站 15 题](https://leetcode-cn.com/problems/3sum/)相同。

### 思路分析

本题可以说是[排序数组中两个数字之和 ](/codes/2/twoSum.md)的加强版题。如果使用暴力循环的方式来解答，至少需要O(n ^ 3)的时间复杂度。现在，我们先来试试看使用暴力循环来解答本题，代码如下:

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    // 判断边界条件
    if(nums.length < 3){
        return res;
    }
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            for(let k = j + 1;k < nums.length;k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    // 存储满足条件的结果
                    res.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return res;
};
```

接下来，我们以nums = [-1,0,1,2,-1,-4]作为示例，应该会得到如下结果:

```js
// [ [ -1, 0, 1 ], [ -1, 2, -1 ], [ 0, 1, -1 ] ]
```

很显然，这个结果是不满足题意的，因为包含了重复的项(即[ 0, 1, -1 ]和[ -1, 0, 1 ]重复)，那么我们应该如何去去除重复的项呢？当然我们可以看到它们之间索引值对应不一致，所以，首先我们需要先将这个数组排序。因此我们尝试将之排序，如下所示:

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    // 判断边界条件
    if(nums.length < 3){
        return res;
    }
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            for(let k = j + 1;k < nums.length;k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    // 存储满足条件的结果
                    res.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return res;
};
```

再次以nums = [-1,0,1,2,-1,-4]作为示例，应该会得到如下结果:

```js
// [ [ -1, -1, 2 ], [ -1, 0, 1 ], [ -1, 0, 1 ] ]
```

可以看到，这就是重复的项了，接下来，我们来考虑如何将这个重复的项给去掉，很简单，使用哈希表来去重。也就是说我们将每一项转成字符串，当做key，然后满足条件的每一项当做value，存储到map中，然后再将这个map数据结构转成数组即可。更改代码如下:

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const map = new Map();
    // 判断边界条件
    if(nums.length < 3){
        return res;
    }
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            for(let k = j + 1;k < nums.length;k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    // 去重原理
                    const key = [nums[i],nums[j],nums[k]];
                    if(!map.has(key.toString())){
                        map.set(key.toString(),key);
                    }
                }
            }
        }
    }
    return [...map.values()];
};
```

再次以nums = [-1,0,1,2,-1,-4]作为示例，应该会得到如下结果:

```js
// [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
```

满足题意，那么这个解法是可以的。但是我们可以看到这个解法的时间复杂度是很高的，那么我们有没有优化的办法呢？答案肯定是有的。我们可以先固定一项，然后使用双指针的办法优化三层循环，因为在固定一项之后，我们的数组是有序的，所以我们可以定义开始指针left和结束指针right，因此我们可以使用双指针算法。然后如果固定其中一项，那么我们可以很明显的知道假如上一项和当前项值是一致的，那么就认定上一项和当前项是重复计算，因此需要跳过。我们可以用伪代码表示如下:

```js
// 首先保证遍历数组的每一项的迭代值i肯定是要大于0的
if(i > 0 && nums[i] === nums[i - 1]){
    continue;
}
```

其次，当双指针left和right互相变动的时候，也是有可能会重复的。也就是说当left < right并且nums[left] !== nums[left - 1]，此时也是重复计算，也要去重计算，right也是同理，这样我们就可以达到去重的目的，我们可以用伪代码表示如下:

```js
// left指针，也就是起始指针,满足这个条件跳过即可
while(left < right){
    left++;
    if(nums[left] !== nums[left - 1]){
        break;
    }
}
// right指针同理
while(right > left){
    right--;
    if(nums[right] !== nums[right + 1]){
        break;
    }
}
```

除此之外，我们还需要知道，假如固定了一项，那么另外两项的和就必须是该固定项的相反数，因为只有这样才能满足三数之和为0,经过这几点去重的分析，我们应该知道就不需要哈希表来去重了。分析了需要优化的点之后，我们就可以将三层循环优化如下：

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    // 判断边界条件
    if(nums.length < 3){
        return res;
    }
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length;i++){
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        let left = i + 1,
            right = nums.length - 1;
        const target = -nums[i];
        // 双指针算法
        while(left < right){
           const sum = nums[left] + nums[right];
           if(sum === target){
                res.push([nums[i],nums[left],nums[right]]);
                // left指针，也就是起始指针,满足这个条件跳过即可
                while(left < right){
                    left++;
                    if(nums[left] !== nums[left - 1]){
                        break;
                    }
                }
                // right指针同理
                while(right > left){
                    right--;
                    if(nums[right] !== nums[right + 1]){
                        break;
                    }
                }
                //以上的2个循环可以简化成如下的代码:
                //while(left < right && nums[left] === nums[++left]);
                //while(left < right && nums[right] === nums[--right]);
           }else if(sum > target){
               right--;
           }else{
               left++;
           }
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(log<sup>n</sup> + n ^ 2):排序需要log<sup>n</sup>,双指针加循环是O(N ^ 2)。
* 空间复杂度O(n):需要一个数组来存储结果。

[更多思路](https://leetcode-cn.com/problems/1fGaJU/solution/jian-dan-yi-dong-javac-pythonjs-san-shu-nu6el/)。
