import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONFIRM_ITENS } from "../storageConfig";

export async function listProductConfirmCreate(newListSale: string) {
  try {
    let storage = "";
    storage = await JSON.stringify([newListSale]);
    await AsyncStorage.setItem(CONFIRM_ITENS, storage);
  } catch (error) {
    throw error;
  }
}
