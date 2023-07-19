const func1 = () => {
  const func2 = (a) => a * 2;
  return func2;
};

const returnedFunc = func1();
console.log(returnedFunc);
const res = returnedFunc(5);
console.log(res);
