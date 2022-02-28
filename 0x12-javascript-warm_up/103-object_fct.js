#!/usr/bin/node
let value = {
  type: 'object',
  value: 12
};
console.log(value);

value.incr = function () {
  this.value++;
};

value.incr();
console.log(value);
value.incr();
console.log(value);
value.incr();
console.log(value);
