import AsyncStorage from "@react-native-async-storage/async-storage";
import { LIST_SALE } from "../storageConfig";
import { listSaleGetAll } from "./listProductSaleGetAll";



export async function listProductSaleCreate(newListSale:string){
  

    try{
        const storadList = await listSaleGetAll();
        const storage = await JSON.stringify([...storadList,newListSale])
        await AsyncStorage.setItem(LIST_SALE, storage );

    }catch(error){
        throw error
    }


}