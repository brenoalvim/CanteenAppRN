import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import Home from "./src/screens/Home"
import Menu from "./src/screens/Menu"
import Sales from "./src/screens/Sales"
import ButtonDefault from './src/components/buttonDefault';
import ItemList from './src/components/itemList';
import SelectProduct from './src/screens/selectProducts';
import SubMenuControl from './src/components/subMenuControl';
import Users from './src/services/Sqlite/Users';
import Products from './src/services/Sqlite/Products';
import SelectProductList from './src/screens/selectProductsList';



import {ConfirmItem} from "./src/screens/confirmItem"
import { Routes } from './src/Routes';
import db from './src/services/Sqlite/SQLiteDatabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIST_SALE } from './src/localStorage/storageConfig';
import Testando from './src/screens/testePrint'; './src/screens/testePrint'; "./src/screens/testePrint" 

AsyncStorage.removeItem(LIST_SALE);
AsyncStorage.clear()
export default function App() {

 


  


  // Users.create({name:"admin",key:"admin"})
  // .then(id=>console.log("User Criado com sucesso!" +id))
  // .catch(err => console.error(err))




  // Users.all()
  // .then( 
  //   Users => Users
  // )

  console.log("=======================================================")



  "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, productName TEXT, productUni INTEGER, productPrice FLOAT);"

  // Products.create({productName:"Bolo de Morango",productPrice:2.75,productUni:21})
  // .then(id=>console.log("Produto criado com sucesso!!" + id))
  // .catch(err => console.error(err))


  


        
     
     
     
     
     
     return  (
      <Routes />
     
      
    //<Testando/>
       
       
     
   
   
  );
}




