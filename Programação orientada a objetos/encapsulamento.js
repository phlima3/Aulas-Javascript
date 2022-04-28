// //Estrutural 

// let altura = 60;
// let largura = 50;

//     function calcularArea(){
//         return altura * largura ;
//     }

//     let area = calcularArea();
//     console.log(area)


    //Orientando a objetos

        class Poligono {
            constructor(altura,largura) {
                this.altura = altura;
                this.largura = largura;
            }
            get area() {
                return this.#calcularArea()
            }

            #calcularArea() {
                return this.altura * this.largura
            }

        }

        // criar o objeto
        let poligono = new Poligono(50,60)
        console.log(poligono)