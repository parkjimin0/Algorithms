var isHappy = function(n) {
  let hash = {};
  while (!hash[n]) {
    if (n === 1) {
      return true;
    }

    hash[n] = true;
    let nArr = n.toString().split('');

    n = nArr.reduce((a, b) => {
      a = Number(a);
      b = Number(b);
      console.log(a, b);
      return a + Math.pow(b, 2);
    }, 0);
  }

  return false;
};
