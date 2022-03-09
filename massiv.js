// problem  153

// let array = [7, 10, 5, 3, 2];
// let count = 0;
// let n = [];

// for (let i = array.length-1; i >= 0; i--) {
//     if(array[i]%2==0){
//         count++;
//         n[n.length] = i;
//     }
// }
// console.log(`${n}  c: ${count}`);


// problem 154

// let arr = [7, 10, 5, 3, 2];
// let k = 2;

// for (let i = 0; i < arr.length; i++){
//     let v = i % k;
//     for (let j = 1; j > v; j--) {
//         console.log(arr[i]);
//     }
// }


// problem 155

// let array = [7, 10, 5, 3, 2];

// for (let i = 0; i < array.length;) {
//     console.log(array[i]);
//     i += 2
// }


// problem 156


let array = [7, 10, 5, 3, 2];
let count = [];

for (let index = 1; index < array.length;) {
    count[count.length] = array[index];
    index += 2;
    for (let j = 1; j < count.length; j++) {
        if(count[j] > count[j + 1]) {
            let a = count[j + 1];
            count[j + 1] = count[j];
            count[j] = a;
        }
    }
}
console.log(count);

// console.log(count);



// problem 157


// let arr = [3, 7, 10, 5, 3, 2];




// problem 173

// let a = [1, -10, 2, 1, 2, 5];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] < 5) {
//         b[b.length] = a[i]*2;
//     } else {
//         b[b.length] = a[i]/2;
//     }
// }
// console.log(b);




