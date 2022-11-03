let out_02 = document.querySelector('.task_2_out')

const a = [1, 5, 12, 4, 3];
const b = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const c = [3, 10, 17]
const array = [a, b, c];

const getAverage = (array) => {
    let sum = 0;
    for(let arr = 0; arr < array.length; arr++) {
        for (let number = 0; number < array[arr].length; number++) {
            sum += array[arr][number];
        }
         out_02.innerHTML += sum / array[arr].length + '<br>';
         sum = 0;
    };
};
