import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";

/*Aqui fazemos o pedido, porem funciona como o carrinho de compras */
export class Pedido {
    public idPedido!: number;
    public status!: number;
    public cliente!: Cliente;
    public itensPedido!: ItemPedido[];
    public valorTotal!: number;
    public observacoes!: string;


}