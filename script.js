let month = prompt('Назовите номер месяца')

if (month >= 1 && month <= 2) {
    alert('Это зимний сезон')
}
else if (month >= 3 && month <= 5) {
    alert('Это весенний сезон')
}
else if (month >= 6 && month <= 8) {
    alert('Это летний сезон')
}
else if (month >= 9 && month <= 11){
    alert('Это осенний сезон')
}
else {
    alert('Это зимний сезон')
}


let date = prompt('Назовите дату')

if (date >= 1 && date <= 10) {
    alert('Это первая декада')
}
else if (date >= 11 && date <= 20) {
    alert('Это вторая декада')
}
else {
    alert('Это третья декада')
}


let mathoperat = prompt('Введите математическое действие, НАПРИМЕР(+, -, * или /): ');

let a  = parseFloat(prompt('Введите первое число: '));
let b = parseFloat(prompt('Введите второе число: '));

let result;

if (mathoperat == '+' || mathoperat == 'плюс' ) {
    result = a + b;
}
else if (mathoperat == '-' || mathoperat == 'минус') {
    result = a - b;
}
else if (mathoperat == '*' || mathoperat == 'x' || mathoperat == 'умножить') {
    result = a * b;
}
else if (mathoperat == '/' || mathoperat == 'разделить' ){
    result = a / b
}
else {
    alert('Вы ввели что-то неправильно !')
}

alert(`${a} ${mathoperat} ${b} = ${result}`);