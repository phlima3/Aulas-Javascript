//const e let são locais e só funcionam no escopo onde foi criada

console.log('> Existe y antes do bloco? ', y);
{ 
    let y = 0;
}
console.log('> existe y depois do bloco? ',y)