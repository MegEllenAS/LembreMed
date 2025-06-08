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
  removerRemedio(nome) {
    this.remedios = this.remedios.filter(item => item.nome !== nome);
  }
}

const instancia = new RemedioService();
export default instancia;
