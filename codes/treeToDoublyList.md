### 二叉搜索树与双向链表

> 题目:输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

为了让您更好地理解问题，以下面的二叉搜索树为例：

![示例](../images/treeToDoublyList-1.png)

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

![示例](../images/treeToDoublyList-2.png)

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

### 思路分析

本题考察了一条非要终于的关于二叉树的性质:二叉搜索树的中序遍历(左->根->右)时`递增序列`。因此记住这一点性质决定了这道题的解法。接下来我们来分析题意。

根据题意，主要包含了三个要点:

1. 二叉搜索树转化成排序链表。即排序链表必须是递增的，因此采用二叉搜索树的中序遍历来完成节点的从小到大的排序。
2. 二叉搜索树转化成双向链表。即在构建相邻的节点的引用关系时，我们假设定义前驱节点为`prev`,当前节点为`cur`。则有如下关系:
    2.1 `pre.right=cur`即前驱节点的右指针指向当前节点。
    2.2 `cur.left=pre`即当前节点的左指针指向前驱节点。
3. 二叉搜索树转化成循环链表。假如我们设置链表的头节点为`head`,链表的尾节点为`tail`。则有如下关系:
    3.1 `tail.right=head`即尾节点的右指针指向头节点。
    3.2 `head.left=tail`即头节点的左指针指向尾节点。

我们创建一个`DFS`的搜索函数，则该函数一定有如下代码段:

```js
function DFS(root){
    if(!root){
        return null;
    }
    DFS(root.left);
    console.log(root.val);
    DFS(root.right);
}
```

根据以上的分析，我们确定了使用中序遍历来搜索每一个节点`cur`,并且在搜索每一个节点`cur`的同时，我们需要同时构建节点与前驱节点`prev`的引用指向。当我们的中序遍历完成之后，我们再构建头节点`head`与尾节点`tail`的引用指向。接下来，我们来看算法流程:

`DFS(cur)`:中序遍历每一个节点:

1. 终止条件: 当`cur`节点为空时，代表已经越过了叶子节点，所以直接返回。
2. 递归左子树:即DFS(root.left)。
3. 构建链表:
    3.1 当前驱节点`pre`为空的时候，代表此时访问的是链表头部节点，记为`head`。
    3.2 当前驱节点`pre`不为空的时候,代表我们需要修改双向节点的引用，即`pre.right=cur`和`cur.left=pre`。
    3.3 保存好当前节点`cur`，更新`pre=cur`,因为当前节点就是后继节点的前驱节点。
4. 递归右子树:即DFS(root.right)。

treeToDoublyList(root):

1. 特别处理:即当`root`节点为空的时候，直接返回`null`。
2. 初始化前驱节点`pre`和当前节点`cur`。
3. 转化为双向链表:即`DFS(root)`。
4. 构建循环链表:当中序遍历完成之后，就需要将`head`指向头节点,`pre`指向尾节点，即修改`head`和`pre`的双向节点引用。
5. 返回值:返回链表的头节点`head`即可。


```js
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    //特别处理
    if(!root){
        return null;
    }
    //初始化当前节点和前驱节点
    let cur = null,pre = cur;
    //转化为双向链表
    DFS(root);
    //构建链表
    pre.right = cur;
    cur.left = pre;
    //定义中序遍历函数DFS
    function DFS(node){
        //特别处理，当节点为空时，直接返回
        if(!node){
            return null;
        }
        //递归左子树
        DFS(root.left);
        //构建链表，根据前驱节点来判断
        if(!pre){
            //如果前驱节点为空，代表越过了叶子节点，因此修改当前节点指向为头节点
            cur = node;
        }else{
            //如果前驱节点不为空，则构建链表的右指针
            pre.right = node;
        }
        //构建节点的左指针
        node.left = pre;
        //更新前驱节点为当前节点
        pre = node;
        //递归右子树
        DFS(root.right);
    }
    //返回头部节点
    return cur;
};
```

以上算法，时间复杂度是O(n),n为二叉树的节点数，中序遍历需要访问所有节点。空间复杂度也为O(n)，最差情况下，即树退化为链表时，递归深度达到n,系统使用 O(n)栈空间。更多详细解题思路参考[题解](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solution/mian-shi-ti-36-er-cha-sou-suo-shu-yu-shuang-xian-5/)。

