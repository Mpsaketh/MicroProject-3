const sample = require('./index.json')

function food(a){
    return console.log(a);
}
food(sample)

function Vegetable(a){
    return console.log(a.filter(items=>items.category==='Vegetable'));
}
Vegetable(sample)

function fruit(a){
    return console.log(a.filter(items=>items.category==='Fruit'));
}
fruit(sample)

function protien(a){
    return console.log(a.filter(items=>items.category==='Protein'));
}
protien(sample)

function nuts(a){
    return console.log(a.filter(items=>items.category==='Nuts'));
}
nuts(sample)

function grains(a){
    return console.log(a.filter(items=>items.category==='Grain'));
}
grains(sample)

function dairy(a){
    return console.log(a.filter(items=>items.category==='Dairy'));
}
dairy(sample)

function cal(a){
    return console.log(a.filter(items=>items.calorie>100));
}
cal(sample)

function cals(a){
    return console.log(a.filter(items=>items.calorie<100));
}
cals(sample)

function pro(a){
return console.log(a.sort((a, b) => b.protiens - a.protiens));
}
pro(sample)

function cab(a){
    return console.log(a.sort((a, b) => a.cab - b.cab));
    }
    cab(sample)