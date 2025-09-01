let a = 5;
console.log(a, typeof a);
a = 'name';
console.log(a, typeof a);
a = true;
console.log(a, typeof a);
a = undefined;
console.log(a, typeof a);
a = null;
console.log(a, typeof a);

console.log('non-primitive');

a = [1,2];
console.log(a, typeof a);
a = {name: 'value'};
console.log(a, typeof a);
a = function(){};
console.log(a, typeof a);