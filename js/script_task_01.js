
let list = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']
const goodBad = (array) => {
    let out_01 = document.querySelector('.task_1_out')
    for (let i = 0; i < list.length; i++) {
        if (list[i] == 'молоко') {
            out_01.innerHTML += 'хорошо<br>';
        } else if (list[i] == 'пиво') {
            out_01.innerHTML += 'плохо<br>';
        }
    }
}
