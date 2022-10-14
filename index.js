function identity(arg) {
  return arg;
}

function identityF(num) {
  return function () {
    return num;
  };
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function increment(num) {
  return add(num, 1);
}

function addF(num1) {
  return function (num2) {
    return add(num1, num2);
  };
}

function curry(binary, num1) {
  return function (num2) {
    return binary(num1, num2);
  };
}

function liftF(binary) {
  return function (num1) {
    return function (num2) {
      return binary(num1, num2);
    };
  };
}

function twice(binary) {
  return function (num) {
    return binary(num, num);
  };
}

function composeU(first, second) {
  return function (arg) {
    return second(first(arg));
  };
}

function composeB(func1, func2) {
  return function (a, b, c) {
    return func2(func1(a, b), c);
  };
}

function limit(binaryFunc, limit) {
  let count = 0;
  return function (a, b) {
    if (count < limit) {
      count++;
      return binaryFunc(a, b);
    }
  };
}

function from(num) {
  return function () {
    return num++;
  };
}

function to(func, num) {
  let count = 0;
  return function () {
    if (count < num) {
      count++;
      return func();
    }
  };
}

function fromTo() {}

function element() {
  return function () {};
}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF(a, b) {
  count = 0;
  let A = a;
  let B = b;

  return function fiBInner() {
    if (count === 0) {
      count++;
      return a;
    }
    if (count === 1) {
      count++;
      return b;
    }
    count++;
    let C = A + B;
    A = B;
    B = C;
    return C;
  };
}

let fib = fibonacciF(0, 1);
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
