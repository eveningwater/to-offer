### 最近最少使用缓存

> 题目:运用所掌握的数据结构，设计和实现一个[LRU (Least Recently Used，最近最少使用) 缓存机制](https://baike.baidu.com/item/LRU)。

实现 LRUCache 类：

* LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
* int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
* void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

示例：

```js
// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4
```


提示:

* 1 <= capacity <= 3000
* 0 <= key <= 10000
* 0 <= value <= 10 ^ 5
* 最多调用 2 * 10 ^ 5 次 get 和 put

> 进阶：是否可以在 O(1) 时间复杂度内完成这两种操作？

> 注意：本题与[主站 146 题](https://leetcode-cn.com/problems/lru-cache/)相同。

### 思路分析

本题的思路也不难，只需要维护一个哈希表即可。代码如下:

```js
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cacheMap = new Map();
    //容量
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cacheMap.has(key)){
        return -1;
    }
    const val = this.cacheMap.get(key);
    this.cacheMap.delete(key);
    this.cacheMap.set(key,val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cacheMap.has(key)){
        this.cacheMap.delete(key);
    }
    if(this.cacheMap.size === this.capacity){
        const deleteKey = this.cacheMap.keys();
        this.cacheMap.delete(deleteKey.next().value);
    }
    this.cacheMap.set(key,value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(1)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/OrIXps/solution/xuan-ze-he-gua-de-shu-ju-jie-gou-de-si-k-afme/)。
