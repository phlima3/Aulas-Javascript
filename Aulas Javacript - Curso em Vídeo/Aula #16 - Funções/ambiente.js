function parImp(n) {
  //Cria a função com o parâmetro n
  if (n % 2 == 0) {
    //Verifica se o resto da divisão é 0, se for 0 é par, senão é ímpar
    return "Par";
  } else {
    return "Ímpar";
  }
}
let res = parImp(2); //Chamada da função   Joga o valor 2 ao parâmetro n
console.log(res); // valor de n passa a ser o que foi declarado no return (par ou impar)
