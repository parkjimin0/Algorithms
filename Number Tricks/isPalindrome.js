var isPalindrome = function(x) {
  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;
  let newNum = 0;

  while (x > newNum) {
    newNum = newNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === newNum || x === Math.floor(newNum / 10);
};
