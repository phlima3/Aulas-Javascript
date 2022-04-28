let num = [5, 8, 2, 9, 3]; // Cria um Array
num.push(30); //Adiciona o valor 1 no Array
num.sort(); //Ordena por ordem Crescente os valores
console.log(num); // Mostra o array formatado
console.log(`O vetor tem ${num.length} Posições`); // num.lenght fala quantos elementos tem dentro do array
console.log(typeof num[5]); // Mostra o número na quarta posição do array


/* var contador = 0;
while (contador <= num.length) {
  console.log(num[contador]);
  contador++;
} 

for (let contador = 0; contador < num.length; contador++) {
  num.sort();
  console.log(num[contador]);
}
for (let pos in num) { função própria pra array, inicia a variável dentro do array num
  console.log(num[pos]); 
}ESSES DOIS EXIBEM OS VALORES DO ARRAY NA HORIZONTAL */


// let posicao = num.indexOf(4); // Index of procura o valor dentro do array
// if (pos == -1) {
//   console.log("O valor não foi encontrado!");
// } else {
//   console.log(`O valor está na posição ${pos}`);
// }
