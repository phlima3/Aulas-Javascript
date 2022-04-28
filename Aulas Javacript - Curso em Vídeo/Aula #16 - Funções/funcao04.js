//RECURSIVIDADE
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1); // Chama o parâmetro dentro da propria função
  }
}
console.log(fatorial(5)); // Exibe a variável fatorial sendo fatorial de 5!
