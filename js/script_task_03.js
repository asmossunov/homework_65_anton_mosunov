let out_03 = document.querySelector('.task_3_out')

const getAnswer = () => {
    let number = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?", 0);
    if(number == 5 || number == 'пять') {
        out_03.innerHTML += 'Ответ верный<br>';
        alert('Ответ верный!');
    }
    else {
        out_03.innerHTML += 'Ответ неверный<br>';
        alert('Ответ неверный!');
    };

};
