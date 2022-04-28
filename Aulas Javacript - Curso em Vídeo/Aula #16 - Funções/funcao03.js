function fatorial(n){ // cria a função com o parametro n
    let  fat = 1
    for(let c = n; c > 1; c--){ // Cria a estrutura de repetição e mantém ela funcionando enquanto o contador for menor que o valor que foi digitado no fatorial
        fat *= c
    }
    return fat;
}
console.log(fatorial(5))