

function pow(num, exponent) {
    var result = num;

    for (var i = 1; i < exponent; i++) {
        result *= num;
    }
    return result
}

var num = prompt('Целое число', '');

if (num == Math.ceil(num)) {
    var exponent = prompt('степень', '');

    if (exponent < 1) {
        alert('Число ' + exponent + ' не может быть степеню, введите степень больше 1')
    } else {
        console.log(pow(num, exponent));
    }
} else {
    alert('Введите целое число')
}


