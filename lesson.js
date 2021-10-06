// let a = 3;
// console.log(a);




// //Massivy
// let arr = [];
// //let arr2 = newArray(); // старый массив
// let newArr = arr;
// let arr3 = arr;


// console.log(arr3===arr);
// console.log(arr===newArr);

// let m = [1, 2, 3, 4, function(){}, {}, true, 'sss'];
// let n = m;
// n[0] = 100;
// console.log(m);


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[0][1]);



// let numbers = [1,2,3,4,5];
// console.log(numbers.length);

// console.log(numbers[7]); // undefined - не существующий элемент


// // add element to massive
// // push(...args) 
// numbers[7] = 'six';

// console.log(numbers);    // образовывается пустота так как по индексу не лежит никакого элемента будет empty

// numbers.push(6,7,8,9); //добавляет в конец массива значение
// console.log(numbers); 


// // удаление элементов из массива
// numbers.length = 5; // обрубает массив - можно делать но не нужно
// console.log(numbers); 

// // pop() - удаляет и возвращает последний эл массива

// numbers.pop();
// console.log(numbers); 
// console.log(numbers.pop());



// // unshift(...args) - добавляет args в начало массива

// numbers.unshift(-2,-1, 0);
// console.log(numbers);

// //shift - удаляет и возвращает первый эл массива
// numbers.shift();
// console.log(numbers);

// // splice - удаляет и добавлет элементы в середину массива (в любое место)
// // splice(startCount, deleteCount, replaceValues) - удаляет начиная с pasStart, deleteCount  элементов
// // И вместо них меняет на то что мы пишем в 3 значении и т.д.
// // все индексы сдвигаются

// numbers.splice(1, 1);

// numbers.splice(1,2,'fff', 'екурр'); // 1 цифра индекс с какого элем начиная, вторая цифра сколько удалять элементов
// // 3  - на что меняем
// console.log(numbers);




// // slice - начало и конец

// let numbersNew = [1,2,3,4,5];

// let numbersSub = numbersNew.slice(1,2);

// console.log(numbersNew);
// console.log(numbersSub);



// let smth = numbersNew.concat(1,2,3,4);
// console.log(smth);
// console.log(numbersNew);    


// let s = [1,2,3,4,5];
// let index = s.indexOf(1);
// console.log(index);
// console.log(s.indexOf(3));



// // let incl = s.includes(1);
// console.log(incl);



// HARD METHODS

// forEach  // map // filter // reduce // some  // every






// for (let item of Arr){
//     console.log(item);
// }


//можно но не нужно
// for (let key in Arr){
//     console.log(Arr(key));
// }


// forEach

let Arr = [1,2,3,4,5,'6', true, false, function(){}]; 

// myForEach(Arr, callBackFn)


let arr1 = [1,2,3,4,5,6];
arr1.forEach((item, index) => {
    if(index % 2 === 0){
        console.log(item);
    }
})


// map - применяет функцию к каждому эл массива и возвращает новый массив
// let arr2 = [1,2,3,4,5,6,7];

// let arr3 = arr2.map((item,number) => {
//     return item * 2;
// })

// console.log(arr3);





let arr5 = [1,2,3,4,5];
// let arr6 = arr5.map((item)=>{
//     if(item % 2 === 0){
//         return item * 2;
//     } 
//     return item * 3;
    
// });
let arr6 = arr5.map((item)=> !(item % 2) ? item * 2 : item * 3);
console.log(arr6);

