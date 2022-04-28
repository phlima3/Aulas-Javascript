//var é global e local

console.log('> Existe x antes do bloco? ', x);
{ 
    var x = 0;
}
console.log('> existe x depois do bloco? ',x)