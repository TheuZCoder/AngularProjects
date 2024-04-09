export class Produto {
    id_pizza: number;
    nome_pizza: string;
    image_pizza: string;
    descricao_pizza: string;
    preco_pizza: number;

    constructor(id: number, nome: string = '', imagem: string = '', descricao: string = '', preco: number = 0) {
      this.id_pizza = id;
      this.nome_pizza = nome;
      this.image_pizza = imagem;
      this.descricao_pizza = descricao;
      this.preco_pizza = preco;
    }
  }

export class Carrinho {
  produtos: Produto[] = [];
  total: number = 0;

  adicionarPizza(produto: Produto): void {
    this.produtos.push(produto);
    this.calcularTotal();
  }

  removerPizza(index: number): void {
    this.produtos.splice(index, 1);
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.produtos.reduce((acc, produtos) => acc + produtos.preco_pizza, 0);
  }
}
