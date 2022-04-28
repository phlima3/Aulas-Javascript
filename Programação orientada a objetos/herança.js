class Veiculo {
  rodas = 4;

  mover(direcao) {}
  virar(direcao) {}
}

class Moto extends Veiculo {
  constructor() {
    super();
    this.rodas = 2;
  }
}
