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


// let array = [7, 10, 5, 3, 2];
// let array = [1, 2, 3, 10, -4, true];
// let array = [];


// for (let index = array.length-2; index >=0;) {
//     console.log(array[index]);
//     index-=2;
// }



// problem 157

// let array = [7, 10, 5, 3, 2];

// for (let i = 0; i < array.length;) {
//     console.log(array[i]);
//     i += 2
// }
// for (let i = 1; i < array.length;) {
//     console.log(array[i]);
//     i += 2
// }


// 158 problem

// let arr = [7, 10, 3, 2];
// let res = "";

// for (let i = 0; i < arr.length / 2; i++) {
//     res += arr[i] + " " + arr[arr.length - 1 - i] + " ";
// }

// console.log(res);


// 159 problem


// let arr = [7, 10, 8, 5];
// let arr = [7, 10, 3, 5];
// let arr = [2, 4, 12];
// let arr = [10, 12, 5, 3, 2, 10];

// let fin = arr[arr.length - 1];
// let natija = 'Mavjud emas';
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < fin) {
//         natija = arr[i];
//         break;
//     } 
// }

// console.log(natija);


// 160 problem

// let arr = [5, 10, 3, 7];
// let arr = [10, 12, 5, 11, 13, 15];
// let arr = [2, 4, 12];
// let a = arr[0];
// let t = arr[arr.length-1];
// let natija = false;

// for (let i = 0; i < arr.length; i++) {
//     if (a < arr[i] && t > arr[i]) {
//         natija = i;
//     }
// }

// console.log(natija);


//  161 problem

// let arr = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (k < i && i < l) {
//         count += arr[i];
//     }
// }

// console.log(count);


// problem 162


// let arr = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let count = 0;
// let t = 0;
// let temp = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (k < i && i < l) {
//         t++;
//         count += arr[i];
//         temp = count / t;

//     }
// }

// console.log(temp);



// problem 163

// let arr = [5, 10, 3, 7, 10, 12, 4];
// let k = 0;
// let l = 4;
// let arr = [1, 12, 5, 3, 13, 15, 1, 2];
// let k = 2;
// let l = 6;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i >= l || k >= i) {
//         count += arr[i];
//     } 
// }

// console.log(count);


// 164 problem 

// let arr = [11, 14, 17, 20, 23];
// let arr = [1];
// let arr = [1, 2, 5, 3];

// let n = arr[1] - arr[0];
// let natija = true;
// for(let i =arr.length-1; i>0; i--){

//   if(arr[i]-n !== arr[i-1]){
//     natija = false;
//     break;
//   }
//   else if(arr[i]-n==arr[i-1]){
//     natija = n;
//   }
// }
// console.log(natija);


// 165 problem 

// let arr = [2, 6, 18];
// let arr = [-2, 4, -8, 16, -32];
// let arr = [1];

// let n = arr[1] / arr[0];
// let natija = false;

// for(let i =arr.length-1; i>0; i--){

//   if(arr[i]/n !== arr[i-1]){
//     natija = false;
//     break;
//   }
//   else if(arr[i]/n==arr[i-1]){
//     natija = n;
//   }
// }
// console.log(natija);


// 166 problem

// let arr = [4,-2, 5, -10, 12, 3, -4, -5];
// let natija = true;

// if (arr[0] < 0) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i] > 0) {
//             natija = i;
//             break;

//         } else if (i % 2 != 0 && arr[i] < 0){
//             natija = i;
//             break;
//         }
//     }
// } else {
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i] < 0) {
//             natija = i;
//             break;

//         } else if (i % 2 != 0 && arr[i] > 0){
//             natija = i;
//             break;
//         }
//     }
// }

// console.log(natija);


// 167 problem

// let arr = [-2, 5, -10, 12, 3, -4, -5];
// let arr = [-2, 4, -8, 16, -32];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         count += arr[i];
//     } 
// }

// console.log(count);


// 168 problem

// let arr = [-2, 5, -10, 12, 3, -4, -5];
// let arr = [-2, 4, -8, 16, -32];
// let arr = [1, -3, 12, -1, 3, -4];
// let count = [];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] < arr[i]) {
//         count = i;
//         console.log(count);
//         sum++;
//     }
// }
// console.log("c:", sum);


// 169 - problem 


// let arr = [-2, 5, -10, 12, 3, -4, -5];
// let arr = [-2, 4, -8, 16, -32];
// let arr = [1, -3, 12, -1, 3, -4];
// let count = [];
// let sum = 0;

// for (let i = arr.length - 1; 0 <= i; i--) {
//     if (arr[i + 1] < arr[i]) {
//         count = arr[i];
//         console.log(count);
//         sum++;
//     }
// }
// console.log("c:", sum);


// 170 problem

// const arr = [1, 2, -10, 3, 5];
// const r = 5;
// const arr = [-2, 4, -8, 16, -32];
// const r = 2; 
// let a = arr[0];
// let res = Infinity;

// for (let i = 0; i < arr.length; i++) {
//     const t = Math.abs(arr[i] - r);
//     if (res > t) {
//         res = t;
//         a = arr[i];
//     }
// }
// console.log(a);


// 171 problem  takrorlangan sonni bittasini chiqaruvchi dastur

// let arr = [1, -10, 2, 1, 2, 5];
// let arr = [2, 5, 6, 4, 4];
// let newArr = [];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//         if (arr[j] != arr[i]) {
//             count = 0;
//         } else {
//             count = 1;
//             break;
//         }
//     }
//     if (count == 0) {
//         newArr[newArr.length] = arr[i];
//     }
// }
// console.log(newArr);


//  172 problem

// let a = [true, -5];
// let b = [2, null];
// let a = [1, 2];
// let b = [3, 4];

// for (let i = 0; i < a.length; i++) {
//     let num = 0;
//     num = a[i];
//     a[i] = b[i];
//     b[i] = num;
// }

// console.log(a, b);


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



// problem 174

// let a = [1, 5];
// let b = [-3, 3];
// let a = [10, -8];
// let b = [5, 1];
// let a = [1, -3, 10];
// let b = [12, 4, -3];
// let c = [];

// for (let i = 0, j = 0; i < a.length, i < b.length; i++, j++) {
//     if (a[i] > b[i]) {
//         c[i] = a[i];
//     } else {
//         c[i] = b[i];
//     }
// }

// console.log(c);


// problem 175

// let a = [1, 2, 3, 4, 5];
// let a = [2, 10, 5, 8, 12];
// let b = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         b[b.length] = a[i];
//     }
// }

// console.log(b);


// problem 176


// let a = [1, 2, 3, 4, 5];
// let a = [2, 10, 5, 8, 12];
// let a = [9, 14, 3, 2, 1];
// let b = [];
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//     b[b.length] = a[i] += count;
//     count = a[i];
//     a[i] = count;
// }

// console.log(b);


// problem 177


// let a = [1, 2, 3, 4, 5];
// let a = [2, 10, 5, 8, 12];
// let a = [9, 14, 3, 2, 1];
// let b = [];


// for (let i = 0; i < a.length; i++) {
//     let count = 0;
//     for (let j = i; j < a.length; j++) {
//         count += a[j];
//     }
//     b[b.length] = count;
// }

// console.log(b);


// problem 178

// let arr =  [1, 2, 10, 5, 6, 7];
// let arr = [2, 10, 5, 8, 12];
// let arr = [9, 14, 3, 2, 1];
// let arr =  [1, 2, 5, 3, 4, 5, 6, -1, -2, -3, -4, -3, -2, -1, 0, 1];
// let result = [];
// let sometime = [];

// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]+1 == arr[index+1]) {
//         sometime.push(arr[index])
//     }
//     else {
//         sometime.push(arr[index])
//         result = result.length<sometime.length ? sometime : result
//         sometime = []
//     }
// }
// console.log(result);



// problem 179

// let i;
// let fib = [];
// let n = 6;

// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= n; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }


// problem 180

// let arr = [1, 2, 10, 5, 6, 7];
// let arr = [2, 10, 5, 8, 12];
// let max = arr[0];
// let min = arr[0];

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     } else if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log("max:", max, "min:", min);


// problem 181   ishkal :(


// problem 182 

// let a = [7, 3, 5, 3, 2];
// let n = 3;
// let a = [1, 2, 3];
// let n = 5;
// let a = [0, 1, 10, 22, 5];
// let n = 10;
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] == n) {
//         sum = i;
//         break;
//     } else {
//         sum = -1;
//     }
// }

// console.log(sum);


//  >>>>>>>>>>>>> FINISH <<<<<<<<<<<<<<<