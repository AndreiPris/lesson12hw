const arr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];

console.log(arr.push(-2));
console.log(arr.unshift(1000));
console.log(arr.push("Last array element"));
console.log(arr.filter(function (arr) {
     return arr !== "JavaScript";
}));
const number = arr.filter(function (arr) {
    return typeof arr === 'number';
});
const map = arr.map(n => n*n);
console.log(Math.max.apply(null, number));


