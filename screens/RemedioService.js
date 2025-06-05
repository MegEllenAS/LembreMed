// src/services/RemedioService.js

class RemedioService {
  constructor() {
    this.remedios = [];
  }

  adicionarRemedio(remedio) {
    this.remedios.push(remedio);
  }

  listarRemedios() {
    return this.remedios;
  }

  limparTudo() {
    this.remedios = [];
  }
}

const instancia = new RemedioService();
export default instancia;
