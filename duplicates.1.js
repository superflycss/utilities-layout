const fs = require('fs');
const index = fs.readFileSync('target/main/css/index.css');
let selectors = index.toString().match(/\.-?[_a-zA-Z]+[\w-]*(?=[^{}]*\{)/g);

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
//console.log(hasDuplicates(selectors));

//console.dir(selectors);

var sorted_arr = selectors.slice().sort();
 var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
 console.log(results);