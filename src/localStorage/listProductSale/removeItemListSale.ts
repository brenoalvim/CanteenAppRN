import { listSaleGetAll } from "./listProductSaleGetAll";



export async function removeItemList(){
    const all = listSaleGetAll()
    console.log(all)
}