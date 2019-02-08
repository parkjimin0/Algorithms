function addSum(x, y) {
  return x + y;
}

function curry(callback) {
  return function(...arg) {
    if (arg.length >= callback.length) {
      return callback(...arg);
    } else {
      return curry(callback.bind(null, ...arg));
    }
  };
}
