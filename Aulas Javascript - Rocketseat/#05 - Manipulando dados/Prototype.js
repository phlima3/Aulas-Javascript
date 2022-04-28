// Transformar String em Número e Número em String
    // let string = "123"
    // console.log(typeof Number(string))

    // let number = 321
    // console.log(typeof String(number))

// Contar cartacteres de digitos   
    // let word = "Pedro"
    // console.log(word.length)
    // let number = 12345
    // console.log(String(number).length);

// Transformar número quebrado com 2 casas decimais e trocar ponto por vírgula
    // let number = 3426.31123
    // console.log(number.toFixed(2).replace("." , ","))
    
// Transformar minusculas em maiusculas    
    // let word = "Palmeiras não tem mundial!"
    // console.log(word.toUpperCase())
    // console.log(word.toLowerCase())

// Separando strings
    // let phrase = "Tricolor hexacampeão!"
    // let myArray = phrase.split(" ")
    // let phraseWithUnderscorde = myArray.join("_")
    // console.log(phraseWithUnderscorde.toUpperCase())

// Encontrando palavras em frases
    // let phrase = "Palmeiras não tem mundial!"
    // console.log(phrase.includes("mundial"))

// Criando array com construtor
    // let myArray = new Array('a','b','c')
    // console.log(myArray.length)

// Strings para arrays
    // let word = "manipulação"
    // console.log(Array.from(word))
    
// Manipulando arrays
    
    let techs = ["HTML" , "CSS", "JS"]
    //Adicionar ao fim
        techs.push("nodejs")
    //Adicionar ao começo
        techs.unshift("sql")
    //Remover do fim
        //techs.pop()
    //Remover do começo
        //techs.unshift()
    //Pegar somente alguns elementos do array
        //console.log(techs.slice(1, 2))
    //Remover 1 ou mais items em qualquer posição do array
        //techs.splice(1, 3)
    //Encontrar a posição de um elemento no array    
    let index = techs.indexOf('css')
    techs.splice(index, 1)

    console.log(techs)