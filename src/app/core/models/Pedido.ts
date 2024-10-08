import { ProductSale } from "./ProductSale";

export interface Pedido {
    "state": string,
    "relations": ProductSale[];
}