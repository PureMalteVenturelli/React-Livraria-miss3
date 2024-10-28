import Livro from '../modelo/Livro';

class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      new Livro(1, 101, "Dom Casmurro", "O romance conta a história de Bento Santiago, um jovem que se apaixona por Capitu, sua vizinha de infância. A narrativa é contada por Bento, que reflete sobre seu amor e as possíveis infidelidades de Capitu, levando a uma trama cheia de mistério e suspeitas.", ["Machado de Assis"]),
      new Livro(2, 102, "O Segundo Sexo", "Este livro é uma análise profunda da condição feminina na sociedade. Beauvoir explora as maneiras pelas quais as mulheres são marginalizadas e exploradas, e argumenta que a emancipação feminina é essencial para a liberdade individual e coletiva", ["Simone de Beauvoir"]),
      new Livro(3, 103, "O Crime do Padre Amaro", "A trama gira em torno do Padre Amaro, um jovem seminarista que se apaixona por uma mulher casada, Amélia. A relação amorosa entre eles leva a uma série de eventos trágicos e revela a hipocrisia e a corrupção dentro da igreja e da sociedade portuguesa.", ["Eça de Queirós"])
    ];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  excluir(codEditora: number): void {
    this.livros = this.livros.filter(livro => livro.codEditora !== codEditora);
  }
}

export default ControleLivros;
