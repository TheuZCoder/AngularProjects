export class Carro {
  id_carro? : number;
  placa_carro: string;
  modelo_carro: string;
  marca_carro: string;
  ano_carro: number;
  cor_carro: string;
  disponivel_carro: boolean;
  img_carro?: string;
  preco_carro: number;

  constructor(
    id_carro: number,
    placa_carro: string,
    modelo_carro: string,
    marca_carro: string,
    ano_carro: number,
    cor_carro: string,
    disponivel_carro: boolean,
    img_carro: string,
    preco_carro: number
  ) {
    this.id_carro = id_carro;
    this.placa_carro = placa_carro;
    this.modelo_carro = modelo_carro;
    this.marca_carro = marca_carro;
    this.ano_carro = ano_carro;
    this.cor_carro = cor_carro;
    this.disponivel_carro = disponivel_carro;
    this.img_carro = img_carro;
    this.preco_carro = preco_carro;
  }

}
