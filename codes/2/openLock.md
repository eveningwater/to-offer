###  开密码锁
 
> 题目:一个密码锁由 4 个环形拨轮组成，每个拨轮都有 10 个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，请给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

示例1：

```js
// 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// 输出：6
// 解释：
// 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
// 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，因为当拨动到 "0102" 时这个锁就会被锁定。
```

示例2：

```js
// 输入: deadends = ["8888"], target = "0009"
// 输出：1
// 解释：
// 把最后一位反向旋转一次即可 "0000" -> "0009"。
```

示例3：

```js
// 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// 输出：-1
// 解释：
// 无法旋转到目标数字且不被锁定。
```

示例4：

```js
// 输入: deadends = ["0000"], target = "8888"
// 输出：-1
```

提示:

* 1 <= deadends.length <= 500
* deadends[i].length == 4
* target.length == 4
* target 不在 deadends 之中
* target 和 deadends[i] 仅由若干位数字组成

> 注意：本题与[主站 752 题](https://leetcode-cn.com/problems/open-the-lock/)相同。

### 思路分析

本题可以使用广度优先搜索算法，找出从初始数字0000到解锁数字target的最小旋转次数。具体地，我们在一开始就将(0000,0)添加到队列中，并使用该队列进行广度优先搜索。在搜索的过程中，设当前搜索的数字为status，旋转的次数为step，我们可以枚举status通过一次旋转得到的数字。设其中的某个数字为next_status，如果其没有被搜索过，我们就将(next_status,step + 1)添加到队列中。如果搜索到了target，我们就返回对应的旋转次数。

为了避免搜索到死亡数字，我们可以使用哈希表来存储deadends中的所有元素，这样在搜索的过程中，我们可以均摊的O(1)判断一个数字是否为死亡数字，同时，我们还需要一个哈希表存储所有搜索到的状态，避免重复搜索，如果搜索完成后，我们仍没有搜索到target，说明我们无法解锁，返回-1。

本题中还需要注意以下2点:

* 如果target的初始数字为0000,那么直接返回答案0。
* 如果初始数字0000在deadends中，那么直接返回答案-1。


```js
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(target === "0000"){
        return 0;
    }
    const dead = new Set(deadends);
    if(dead.has("0000")){
        return -1;
    }
    let step = 0;
    const queue = [],seen = new Set();
    queue.push("0000");
    seen.add("0000");

    const numPrev = x => x === "0" ? "9" : (parseInt(x) - 1) + '';
    const numNext = x => x === "9" ? "0" : (parseInt(x) + 1) + '';

    const get = status => {
        const ret = [];
        const array = Array.from(status);
        for(let i = 0;i < 4;i++){
            const num = array[i];
            array[i] = numPrev(num);
            ret.push(array.join(""));
            array[i] = numNext(num);
            ret.push(array.join(""));
            array[i] = num;
        }
        return ret;
    }
    while(queue.length){
        step++;
        const size = queue.length;
        for(let i = 0;i < size;i++){
            const status = queue.shift();
            for(const nextStatus of get(status)){
                if(!seen.has(nextStatus) && !dead.has(nextStatus)){
                    if(nextStatus === target){
                        return step;
                    }
                    queue.push(nextStatus);
                    seen.add(nextStatus);
                }
            }
        }
    }
    return - 1;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(b ^ d * d ^ 2 + m * d),其中 b 是数字的进制，d 是拨轮数字的位数，m 是数组 deadends 的长度，在本题中 b=10，d=4。
    * 拨轮数字的可能性一共有 b^d种，这也是我们可以搜索到的状态数上限。对于每一个拨轮数字，我们需要 O(d)的时间枚举旋转的数位，同时需要 O(d) 的时间生成旋转后的数字（即加入队列），因此广度优先搜索的总时间复杂度为 O(b ^ d * d ^ 2)。
    * 此外，在搜索前我们需要将deadends 中的所有元素放入哈希表中，计算一个字符串哈希值需要的时间为 O(d)，因此需要的总时间为O(md)。
* 空间复杂度：O(b ^ d * d + m)。
    * 我们最多需要在队列中存储 O(b ^ d)个长度为 d 的字符串，空间复杂度为O(b ^ d * d)。
    * 哈希表需要 O(m) 的空间。如果使用的语言存储的是元素的拷贝，那么需要的空间为 O(m * d)

[更多思路](https://leetcode.cn/problems/zlDJc7/solution/kai-mi-ma-suo-by-leetcode-solution-b964/)。
