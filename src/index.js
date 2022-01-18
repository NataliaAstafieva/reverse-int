module.exports = function reverse(n) {
  let num = Math.abs(n);
  let str = num.toString();
  let a = str.split('');
  let s = a.reverse();
  let r = s.join('');
  return r;
}