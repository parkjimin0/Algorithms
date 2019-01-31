var reverse = function(x) {
  let arrNum = x.toString().split('');
  let pos = true;

  if (arrNum[0] === '-') {
    pos = false;
    arrNum.splice(0, 1);
  }

  let strNum = arrNum.reverse().join('');
  if (
    Number(strNum) > Math.pow(2, 31) - 1 ||
    Number(strNum) < Math.pow(2, 31) * -1
  ) {
    return 0;
  }
  return pos ? Number(strNum) : Number(strNum) * -1;
};
