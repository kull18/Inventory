export interface Product {
    name: string,
    cost: number,
    active: boolean,
    //the brand can not exists thats why the null
    brand: string | null
}