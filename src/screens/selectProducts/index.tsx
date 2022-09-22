import {useFocusEffect, useNavigation} from "@react-navigation/native"
import {styles} from "./style"
import {FlatList, ScrollView, Text, TextInput, View, } from "react-native"
import SubMenuControl from "../../components/subMenuControl"
import ItemList from "../../components/itemList"
import ButtonDefault from "../../components/buttonDefault"
import { useCallback, useEffect, useState } from "react"
import { listSaleGetAll } from "../../localStorage/listProductSale/listProductSaleGetAll"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LIST_SALE } from "../../localStorage/storageConfig"
import ConfirmSales from "../ConfirmSales"
import { ConfirmItem } from "../confirmItem"
import {listProductConfirmCreate} from "../../localStorage/confirmItens/itemConfirm"

import { listProductSaleCreate } from "../../localStorage/listProductSale/listProductSale"
import { createTicket } from "../../localStorage/ticket/gerarTicket"
import { getTicket } from "../../localStorage/ticket/getTicket"
import { listProductSaleGetAll } from "../../localStorage/confirmItens/itemConfirmGetAlls"






type Props ={
    
    products?:[{
        id?:number,
        productName?:string,
        productUni?:number,
        productPrice?:number
        
    }]
    
    
}

export default function SelectProduct(){
    
    const navigate = useNavigation()
    
    function onPressListProduct(){
        navigate.navigate("SelectProductList")
        
    }
    
    function onPressNext(){
        console.log("Prórxima tela")
    }
    
    async function fecthList(productName) {
        
        const data = await listSaleGetAll()
        
        const obj = [];
        const objR = []
        if(productName){
            AsyncStorage.removeItem(LIST_SALE)
            data.forEach((item)=>{
                obj.push(JSON.parse(item))
                
            })
            
        obj.forEach((item)=>{
            if(item.productName == productName){
                
            }else{
                console.log(item.productName)
                objR.push(item)
                 
            }
        })

        
        
        // for(let x = 0; x < objR.length; x++){

        //     await listProductSaleCreate(JSON.stringify(objR[x]))    
        // }

        for(let x in objR){
            await listProductSaleCreate(JSON.stringify(objR[x]))
            

        }
        
        setProducts(objR)
        
        
        
        
    }else{
        
        
        try{
            const obj = [];
            data.forEach((item)=>{ 
                //console.log(item)
                obj.push(JSON.parse(item)
                  
                )})
                
                
                
                setProducts(obj)
                    
                }catch(error){
                    console.log(error)
                }
                
                
                
                
                
            }
            
           
            
            
            
            
        }
        const [products,setProducts] = useState([])
        
        
        async function removeItemList(productName){
            
            
            
            
        }

 
    let ticket = "100";
        

    async function confirmar(){
        //console.log(products)
        if(products[0]){
          
            

            const productsJSON = JSON.stringify(products);
            await listProductConfirmCreate(productsJSON)
           
           
           // console.log(all)

            
           navigate.navigate("ConfirmSales",{total:tudo, itens: itens})
        }else{
            console.log("falta produto")
        }
     }

    
    
    
    
    
    useFocusEffect(useCallback(()=>{
        
        fecthList()

       
        
    },[]));


 let tudo = products.reduce((initial,product)=>initial+  (Number(product.productPrice) * Number(product.quantidadeUser)),0)
 let itens = products.reduce((initial,product)=>initial+ Number(product.quantidadeUser),0)



    return(
        
        <View style = {styles.container}>
            <SubMenuControl/> 
            <ButtonDefault name="Selecione seu produto Aqui" fuc={onPressListProduct}>

            </ButtonDefault>
            

            <View style= {styles.containerListProdutc}>

                <Text style= {styles.titleListProduct}>Lista de Produto</Text>
             
                           
            </View>


        

            <FlatList
                data={products}
                keyExtractor={item=> item.productName}
                renderItem={({item})=>(
                    <ItemList productName={item.productName}productPrice={((item.productPrice * Number(item.quantidadeUser))).toFixed(2)} productUni={item.quantidadeUser} productRemove={()=>{fecthList(item.productName)}} />
                )}
                ListEmptyComponent={()=>(
                    <Text>
                        Nenhum produto Selecionado
                    </Text>
                )}
            
            />


            <Text style={styles.valueTotal}>Total:  R$  {tudo.toFixed(2)}</Text>
            <Text style={styles.uniTotal}>{itens} Itens</Text>


            <ButtonDefault fuc={confirmar} name="Próximo"></ButtonDefault>
        </View>
    )
}