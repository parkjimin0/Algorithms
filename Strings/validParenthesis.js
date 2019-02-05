function validParenthesis(str) {
  if (str.length === 0) return true;
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (brackets.hasOwnProperty(letter)) {
      stack.push(brackets[letter]);
    } else {
      if (stack.pop() !== letter) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
