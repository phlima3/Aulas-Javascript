// callback function

function sayMyName(name){
    console.log('antes do callback')
    name()
    console.log('depois do callback')
}

sayMyName(
    ()=> {
        console.log('estou em uma callback')
    }
)