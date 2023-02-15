module.exports = function check(str, bracketsConfig) {
  let arr = Array.from(str);
  let a;
  do {
    a = arr.length;
    bracketsConfig.forEach(item => {
      for (let i = 0; i < arr.length; i++) {
        if (item[0] == arr[i] && item[1] == arr[i + 1])
          arr.splice(i, 2);
      }
    })
  } while (a > arr.length)
  return arr.length === 0 ? true : false;
}