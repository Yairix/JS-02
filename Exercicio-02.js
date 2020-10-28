//Usando o prompt

//Primeira pessoa

let name = prompt("Digite nome da primeira pessoa");
let age = prompt("Digite idade da primeira pessoa");
let color = prompt("Digite o cor preferido da primeira pessoa");

//Segunda pessoa

let nameTwo = prompt("Digite nome da segunda pessoa");
let ageTwo = prompt("Digite idade da segunda pessoa");
let colorTwo = prompt("Digite o cor preferido da segunda pessoa");

console.log("Nomes: " + name + " " + "e" + " " + nameTwo);

console.log("Idade de " + name + ": " + age);

console.log("Idade de " + nameTwo + ": "  + ageTwo);

    if (age == ageTwo){
        console.log(name + " " + "e" + " " + nameTwo + " " + "Tem a mesma idade");
    } else if (age > ageTwo) {
        console.log(name + " " + "é mais velho/a que " + nameTwo);
    } else if (age < ageTwo) {
        console.log(name + " " + "é mais joven que" + " " + nameTwo);
    }
    
// color 

    if (color == colorTwo) {
        console.log("O cor preferido de " + name + " " + "e" + " " + nameTwo + " " + "é o mesmo, " + color);
    } else if (color != colorTwo) {
        console.log("O cor preferido de " + name + " " + "é " + color);
        console.log("O cor preferido de " + nameTwo + " " + "é " + colorTwo);
    }
    