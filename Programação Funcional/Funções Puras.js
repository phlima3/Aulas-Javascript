// Função imputa

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.pi * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Camarda',
    agr: 'jovem'
}

function changeName(name) {
    person.name = name
}
// Função pura

// Exemplo 1
    const calculateCircumference = function (pi,radius) {
        return pi * (radius + radius)
    }
