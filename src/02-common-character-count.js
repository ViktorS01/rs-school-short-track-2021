/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const massS1 = s1.split('');
  const massS2 = s2.split('');
  let res = 0;

  massS1.forEach((element) => {
    for (let i = 0; i < massS2.length; i++) {
      if (element === massS2[i]) {
        res++;
        massS2[i] = '';
        break;
      }
    }
  });
  return res;
}

module.exports = getCommonCharacterCount;
