function multiBy(arr, func) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]));
  }

  return res;
}

let a = [1, 2, 3];

const res = multiBy(a, (a) => {
  return a * 5;
});



console.log(res);
