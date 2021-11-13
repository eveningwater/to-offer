### 数组中数字出现的次数(2)

> 题目:在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

示例 1：

```js
// 输入：nums = [3,4,3,3]
// 输出：4
```

示例 2：

```js
// 输入：nums = [9,1,7,9,7,9,7]
// 输出：1
```

限制:

* 1 <= nums.length <= 10000
* 1 <= nums[i] < 2^31

### 思路分析

由于本题不同于[数组中数字出现的次数(1)](./singleNumbers-1.md)，并没有明确的时间和空间复杂度要求。因此我们可以使用简单的哈希表方法来解决。也就是用一个对象来存储每一个数组项的出现次数，然后再遍历这个对象，找到只出现一次的数字即可。

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let number = {},count = 0,l = nums.length,res = 0;
    for(let i = 0;i < l;i++){
        if(number[nums[i]]){
            number[nums[i]]++;
        }else{
            number[nums[i]] = 1;
        }
    }
    const keys = Object.keys(number);
    for(let j = 0,len = keys.length;j < len;j++){
        if(number[keys[j]] === 1){
            res = keys[j];
            break;
        }
    }
    return res;
};
```

时间复杂度 O(n)：使用了2个循环，时间复杂度为O(2n),即O(n)。
空间复杂度 O(n)： 使用对象存储，也就需要消耗O(n)的内存。

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/solution/san-chong-jie-fa-ha-xi-biao-shu-xue-ji-qiao-he-wei/)。

