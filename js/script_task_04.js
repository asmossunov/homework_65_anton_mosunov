let out_04 = document.querySelector('.task_4_out')

function Duck(name, color, age) {
    this.name = name,
    this.color = color,
    this.age = age,
    this.toStr = function(){
        out_04.innerHTML += (`${this.name}, ${this.color}, ${this.age}`) + '<br>';
    },
    this.say = function(){
        out_04.innerHTML += 'кря кря' + '<br>'
    };
};

let duck = new Duck('Дональд', 'белый', '1');

let startDuck = () => {
    duck.toStr();
    duck.say();
};
