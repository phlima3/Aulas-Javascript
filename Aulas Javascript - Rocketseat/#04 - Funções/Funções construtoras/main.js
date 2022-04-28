function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está   andando"
    }
}
const pedro = new Person("Pedro")
const myke = new Person("Myke");
console.log(pedro.walk());
console.log(myke.walk());