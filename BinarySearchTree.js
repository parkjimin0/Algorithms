class BinarySearchTree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this.val > value) {
      if (!this.left) {
        this.left = value;
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = value;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (this.val === value) {
      return true;
    } else if (this.val > value) {
      if (this.left) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else {
      if (this.right) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  }

  breadthDepthFirstSearch(callback) {
    let queue = [this];
    while (queue.length) {
      let currentNode = queue.shift();
      callback(currentNode);
      if (this.left) queue.push(this.left);
      if (this.right) queue.push(this.right);
    }
  }

  orderTraversal(order, callback) {
    if (order === 'pre-order') callback(this);

    if (this.left) this.left.orderTraversal(order, callback);

    if (order === 'in-order') callback(this);

    if (this.right) this.right.orderTraversal(order, callback);

    if (order === 'post-order') callback(this);
  }

  getMinValue() {
    if (this.left) {
      return this.left.getMinValue();
    } else {
      return this.val;
    }
  }

  getMaxValue() {
    if (this.right) {
      return this.right.getMinValue();
    } else {
      return this.val;
    }
  }
}
