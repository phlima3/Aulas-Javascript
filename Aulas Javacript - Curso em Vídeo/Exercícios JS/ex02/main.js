function contar() {
  var inicio = document.querySelector("#inicio");
  var fim = document.querySelector("#fim");
  var passo = document.querySelector("#passo");
  var res = document.querySelector("#res");

  if (!passo.value || !fim.value || !inicio.value) {
    alert("Por favor insira um valor válido");
    res.innerHTML= 'Impossível contar!'
  } else {
    res.innerHTML = "Contando:  <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
        //Contagem crescente 
      for (let c = 1; c <= f; c += p) {
        res.innerHTML += `${c}  \u{1F449} `;
      }

    }else{
        //Contagem decrescente
        for(let c = i; c>=f; c -=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
    
  }
  // for (inicioValue; inicioValue==fimValue ; passoValue) {
  //     valor++
  //     console.log()
  // }
}
