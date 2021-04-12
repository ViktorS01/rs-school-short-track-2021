/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let numArr = [];

  for (let i = 0; i < arr.length; i++) {
    numArr[i] = '';
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        numArr[i] += arr[j];
      }
    }
    numArr[i] = Number(numArr[i]);
  }
  numArr = numArr.sort((a, b) => a - b);
  return numArr[numArr.length - 1];
}

module.exports = deleteDigit;
