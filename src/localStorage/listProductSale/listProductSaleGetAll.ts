import AsyncStorage from "@react-native-async-storage/async-storage";
import { LIST_SALE } from "../storageConfig";



export async function listSaleGetAll() {

    try{
        const storage = await AsyncStorage.getItem(LIST_SALE);
        
        const list:string[] = storage ? JSON.parse(storage) : []
        return list

    }catch(error){
        throw error
    }

    

    
}