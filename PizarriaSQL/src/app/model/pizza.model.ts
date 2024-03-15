export class Produto {
    id_pizza: number;
    nome_pizza: string;
    image_pizza: string;
    descricao_pizza: string;
    preco_pizza: number;
  
    constructor(id: number = 0, nome: string = '', imagem: string = '', descricao: string = '', preco: number = 0) {
      this.id_pizza = id;
      this.nome_pizza = nome;
      this.image_pizza = imagem;
      this.descricao_pizza = descricao;
      this.preco_pizza = preco;
    }
  }
  