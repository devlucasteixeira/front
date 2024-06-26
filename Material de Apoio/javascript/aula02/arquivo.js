let x = 10;
x += 5;  // Equivalente a x = x + 5
console.log(x); // 15

x -= 3;  // Equivalente a x = x - 3
console.log(x); // 12

x *= 2;  // Equivalente a x = x * 2
console.log(x); // 24

x /= 4;  // Equivalente a x = x / 4
console.log(x); // 6

x %= 3;  // Equivalente a x = x % 3
console.log(x); // 0


//Operadores comparação

let a = 10;
let b = 5;

console.log(a == b);  // Igualdade: false
console.log(a != b);  // Desigualdade: true
console.log(a === b); // Estritamente igual (compara valor e tipo): false
console.log(a !== b); // Estritamente diferente (compara valor e tipo): true
console.log(a > b);   // Maior que: true
console.log(a < b);   // Menor que: false
console.log(a >= b);  // Maior ou igual: true
console.log(a <= b);  // Menor ou igual: false


//Operadores Lógicos

let c = true;
let d = false;

console.log(c && d); // AND: false
console.log(c || d); // OR: true
console.log(!c);     // NOT: false
