import AsyncStorage from "@react-native-async-storage/async-storage";
import { TICKET } from "../storageConfig";




export async function createTicket(newListSale:string){
  

    try{
        
        let storage = await JSON.stringify([newListSale])
        await AsyncStorage.setItem(TICKET, storage );

    }catch(error){
        throw error
    }


}