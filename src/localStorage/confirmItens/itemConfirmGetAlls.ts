import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONFIRM_ITENS } from "../storageConfig";



export async function listProductSaleGetAll() {

    try{
        const storage = await AsyncStorage.getItem(CONFIRM_ITENS);
        
        const list:string[] = storage ? JSON.parse(storage) : []
        
        return list

    }catch(error){
        throw error
    }

    

    
}