module.exports = function check(str, bracketsConfig) {
  if(str.length % 2) return false;

  let res = str;

  for(let i = 0; i < res.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      const [op, cl] = bracketsConfig[j];

      if (res[i] === op && res[i+1] === cl) {
        res = res.replace(`${op}${cl}`, '');
        i -= 2;
      }
    }
  }

  return !res.length
}
