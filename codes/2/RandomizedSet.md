###  插入、删除和随机访问都是 O(1) 的容器

> 题目:设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构：

* insert(val)：当元素 val 不存在时返回 true ，并向集合中插入该项，否则返回 false 。
* remove(val)：当元素 val 存在时返回 true ，并从集合中移除该项，否则返回 false 。
* getRandom：随机返回现有集合中的一项。每个元素应该有 相同的概率 被返回。

示例：

```js
// 输入: inputs = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// 输出: [null, true, false, true, 2, true, false, 2]
// 解释:
// RandomizedSet randomSet = new RandomizedSet();  // 初始化一个空的集合
// randomSet.insert(1); // 向集合中插入 1 ， 返回 true 表示 1 被成功地插入

// randomSet.remove(2); // 返回 false，表示集合中不存在 2 

// randomSet.insert(2); // 向集合中插入 2 返回 true ，集合现在包含 [1,2] 

// randomSet.getRandom(); // getRandom 应随机返回 1 或 2 
  
// randomSet.remove(1); // 从集合中移除 1 返回 true 。集合现在包含 [2] 

// randomSet.insert(2); // 2 已在集合中，所以返回 false 

// randomSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 
```



提示:

* -2 ^ 31 <= val <= 2 ^ 31 - 1
* 最多进行 2 * 105 次 insert ， remove 和 getRandom 方法调用
* 当调用 getRandom 方法时，集合中至少有一个元素


> 注意：本题与[主站 380 题](https://leetcode-cn.com/problems/insert-delete-getrandom-o1/)相同。

### 思路分析

本题有2个难点:

* 1. 插入、删除、随机访问这三个操作的时间复杂度必须都是O(1)。
* 2. getRandom方法返回的元素必须是等概率返回随机元素。换句话说，就是如果这个数据结构中有n个元素，那么每个元素被返回的几率就是1 / n。

首先对于第1点，如果要插入、删除、随机访问的时间复杂度都是O(1)，那么只有哈希表这种数据结构满足题意。但是如果只使用哈希表，则并不能满足第二点，因为哈希表并不能等概率的返回每个元素。而如果想等概率且必须是在O(1)的时间内取出元素，那么只能使用数组这种数据结构。对于数组的插入，我们直接push即是O(1)，而对于删除，那么我们可以交换想要删除的元素索引到数组的最后，在pop就可以让时间复杂度变为O(1)。为了存储索引，我们就可以使用哈希表来存储每个元素的索引。

```js
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    //存储索引的哈希表
    this.dataMap = new Map();
    //存储值的数组
    this.data = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    //如果哈希表中存在该值，直接返回false
    if(this.dataMap.has(val)){
        return false;
    }
    //存储值与对应的索引
    this.dataMap.set(val,this.data.length);
    this.data.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    //如果元素不存在与哈希表中，则无需执行删除操作
    if(!this.dataMap.has(val)){
        return false;
    }
    //获取要被删除元素的索引
    const index = this.dataMap.get(val);
    //更新索引
    this.dataMap.set(this.data[this.data.length - 1],index);
    //从哈希表中删除这个元素
    this.dataMap.delete(val);
    //修改数组
    this.data[index] = this.data[this.data.length - 1];
    this.data.length--;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = parseInt(Math.random() * this.data.length);
    return this.data[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(1)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/FortPu/solution/jie-he-ha-xi-biao-he-shu-zu-de-te-xing-l-fbp8/)。
