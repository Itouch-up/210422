const a = new Array('red','blue','green')

console.log(a,typeof a)
console.log(a instanceof Array)
console.log(a instanceof Object)

const b = ['red','blue','green']
console.log(b, typeof b)
console.log(b instanceof Array)
console.log(b instanceof Object)

console.log(b.slice(0,1))
console.log(Array.prototype.slice, Object.prototype.slice)