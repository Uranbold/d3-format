export default function(x) {
  var i = Math.floor(x);
  if (+x !== i) return null;
  x = i.toFixed(0);
  i = x.indexOf("e");
  if (i < 0) i = x.length;
  return [
    x[0] === "-" ? "-" : "",
    x.slice(x[0] === "-" ? 1 : 0, i),
    x.slice(i)
  ];
};
