// Задачи
//1

function CarProduction(mark, age) {
    this.getMark = function () {
        letter = mark.slice(0, 1).toUpperCase();
        return letter + mark.substring(1);
    };
    this.getYearEdition = function () {
        return new Date().getFullYear() - age;

    }
}

var lexus = new CarProduction('lexus', 2);
console.log(lexus.getYearEdition());
console.log(lexus.getMark());

//2

function StringCode(date) {
    let str = date;
    this.getOriginStr = function () {
        return str;
    };
    this.getCodeStr = function () {
        result = '';
        for (let i = 0; i < str.length; i++) {
            result += str[i].charCodeAt() + ',';
        }
        return result;
    };
    this.clearStr = function () {
        return str = '',
            result = '',
            info = 'date is deleted'
    }
}

let myString = new StringCode('school');
console.log(myString.getOriginStr());
console.log(myString.getCodeStr());
console.log(myString.clearStr());

//3
function StrTransform(string) {
    this.str = string;
    this.setStr = function (value) {
        return string = value;
    };
    this.getStr = function () {
        return this.str;
    };
    this.toString = string.toString();
    this.valueOf = function (){
        return string.length;
    }
}

let str = new StrTransform('test');
console.log(str.str);
console.log(str.getStr());
console.log(str.setStr('new test'));
console.log(str.toString);
console.log(str.valueOf());