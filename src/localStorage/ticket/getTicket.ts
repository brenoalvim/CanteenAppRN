import AsyncStorage from "@react-native-async-storage/async-storage";
import { TICKET } from "../storageConfig";



export async function getTicket() {

    try{
        const storage = await AsyncStorage.getItem(TICKET);
        
        const list:string[] = storage ? JSON.parse(storage) : []
        
        return list

    }catch(error){
        throw error
    }

    

    
}