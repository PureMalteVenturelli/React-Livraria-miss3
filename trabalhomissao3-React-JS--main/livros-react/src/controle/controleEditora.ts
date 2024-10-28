import Editora from '../modelo/Editora';

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      new Editora(101, "Livraria Garnier"),
      new Editora(102, "Gallimard"),
      new Editora(103, "Livraria Internacional")
    ];
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}

export default ControleEditora;
