### 数组中重复的数字

> 题目:在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例如下:

```js
//输入：
[2, 3, 1, 0, 2, 5, 3]
//输出：2 或 3 
```

> 限制:2 <= n <= 100000

### 思路分析

* 方法一：普通解法

我们可以通过创建一个新数组，然后判断新数组当中是否含有`nums`中的数组项，如果没有就添加到新数组中，如果有，则表明数组项重复了，则另外定义一个变量接收这个重复项，然后返回。代码如下:

```js
    var findRepeatNumber = function(nums) {
        let res = [],repeat = "",len = nums.length,i = 0;
        while(i < len){
            if(res.indexOf(nums[i]) === -1){
                res.push(nums[i]);
            }else{
                // 代表已经找到重复数字了，所以跳出循环
                repeat = nums[i];
                break;
            }
        }
        return repeat;
    }
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(n ^ 2)。
* 空间复杂度O(n)。

方法二:哈希表

我们可以使用一个哈希表来存储数组中的每一个元素，当哈希表中已经存在数组中的元素之时，就代表重复了，直接返回该元素即可。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const unique = new Set();
    for(const num of nums){
        if(unique.has(num)){
            return num;
        }
        unique.add(num);
    }
    return -1;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度O(n),遍历数组一遍。使用哈希集合（HashSet），添加元素的时间复杂度为 O(1)，故总的时间复杂度是 O(n)。
* 空间复杂度O(n),不重复的每个元素都可能存入集合，因此占用 O(n) 额外空间。

方法三:原地置换算法

我们尝试如此思考，因为题目很清楚的说明了数组项中的数的范围是在`0~n-1`之间（注意，如果没有该条件是无法使用这个算法的，这个算法也只是用时间换空间而已），也就是说比如数组的长度是2，那么数组里的所有数组项的数只能是0或1，因此我们可以猜测当数组下标等于该数组项的数的时候，则一定不会重复，如果不等于的话，那么我们把该数组项的数和等于数组下标的数做一个交换位置，在位置的交换过程中，当两者相等了，这就表明重复了。例如[1,1],两者交换位置始终都会等于1所在的数组下标，也就找到重复数字。

```js
    var findRepeatNumber = function(nums) {
        for(let i = 0,len = nums.length;i < len;i++){
            //定义一个中间变量用于交换
            let temp;
            while(nums[i] !== i){
                if(nums[i] === nums[nums[i]]){
                    // 判断数组项对应的数是否和数组数做下标对应的数一样，如果一样则重复
                    return nums[i];
                }
                // 开始做交换
                temp = nums[i];
                nums[i] = nums[temp];
                nums[temp] = temp;
            }
        }
        return -1;
    }
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度 O(n)： 遍历数组使用 O(n)，每轮遍历的判断和交换操作使用 O(1)。
* 空间复杂度 O(1)： 使用常数复杂度的额外空间。

[更多思路](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solution/mian-shi-ti-03-shu-zu-zhong-zhong-fu-de-shu-zi-yua/)。
