function BinarySerachTree() {
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 属性
    this.root = null


    //方法
    //插入 递归
    BinarySerachTree.prototype.insert = function (key) {
        let newnode = new Node(key)
        if (this.root === null) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }
    }

    //递归插入函数
    BinarySerachTree.prototype.insertNode = function (node, newnode) {
        if (newnode.key < node.key) {  //向左查找
            if (node.left == null) {
                node.left = newnode
            } else {
                this.insertNode(node.left, newnode)
            }
        } else {  //向右查找
            if (node.right == null) {
                node.right = newnode
            } else {
                this.insertNode(node.right, newnode)
            }
        }
    }

    //先序遍历(什么时候处理根节点)
    BinarySerachTree.prototype.preOrderTravesal = function (hander) {
        this.preOrderTravesalNode(this.root, hander)
    }

    BinarySerachTree.prototype.preOrderTravesalNode = function (node, hander) {
        if (node !== null) {
            //处理经过的节点
            hander(node.key)
            //处理经过节点的左子节点
            this.preOrderTravesalNode(node.left, hander)
            //处理经过节点的右子节点
            this.preOrderTravesalNode(node.right, hander)
        }
    }


    //中序遍历
    BinarySerachTree.prototype.midOrderTravesal = function (hander) {
        this.midOrderTravesalNode(this.root, hander)
    }

    BinarySerachTree.prototype.midOrderTravesalNode = function (node, hander) {
        if (node !== null) {
            //处理经过节点的左子节点
            this.midOrderTravesalNode(node.left, hander)

            //处理经过的节点
            hander(node.key)

            //处理经过节点的右子节点
            this.midOrderTravesalNode(node.right, hander)
        }
    }

    //后序遍历
    BinarySerachTree.prototype.postOrderTravesal = function (hander) {
        this.postOrderTravesalNode(this.root, hander)
    }

    BinarySerachTree.prototype.postOrderTravesalNode = function (node, hander) {
        if (node !== null) {
            //处理经过节点的左子节点
            this.midOrderTravesalNode(node.left, hander)

            //处理经过节点的右子节点
            this.midOrderTravesalNode(node.right, hander)

            //处理经过的节点
            hander(node.key)
        }
    }


    BinarySerachTree.prototype.max = function () {
        let node = this.root
        let key = null
        while (node !== null) {
            key = node.key
            node = node.right
        }
        return key
    }

    BinarySerachTree.prototype.min = function () {
        let node = this.root
        let key = null
        while (node !== null) {
            key = node.key
            node = node.left
        }
        return key
    }

    BinarySerachTree.prototype.search = function (key) {
        let node = this.root
        while(node!=null){
            if(key<node.key){
                node = node.left
            }else if(key > node.key){
                node = node.right
            }else{
                return true
            }
        }
        return false
    }
}


let a = new BinarySerachTree()

a.insert(1)
a.insert(2)
a.insert(3)
a.insert(4)
a.insert(5)
a.insert(8)
a.insert(6)
a.insert(7)


// console.log(a.search(1))
console.log(a.search(2))
console.log(a.search(1))
console.log(a.search(333))




