import {styles} from "./style"
import {useState , useEffect , StrictMode, useCallback} from "react"
import {FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, } from "react-native"
import SubMenuControl from "../../../../components/subMenuControl"
import ItemListAddEdit from "../../../../components/itemListAddEdit"
import ItemList from "../../../../components/itemList"
import ButtonDefault from "../../../../components/buttonDefault"
import Products from "../../../../services/Sqlite/Products"
import { isConstructorTypeNode, textSpanEnd } from "typescript"
import {useFocusEffect, useNavigation} from "@react-navigation/native"
















 









export default function SelectProductListEditar(){

    useFocusEffect(useCallback(()=>{
        
        //fecthList()
        teste();
        
    },[]));
    
    
    const [products, setProduct] = useState<any>([])
    
    
    
    
    
    
     
    async function teste(){
        await Products.all().then((item)=> setProduct(item))
    }
    

          
   // console.log(products)
      


 

       

   
      

      
   
 
    
       
       
   
         
       

    

    return(

        
        <View style = {styles.container}>
           
           

            <View style= {styles.containerListProdutc}>

                <Text style= {styles.titleListProduct}>Lisa de Produto</Text>
             
                           
            </View>



            <FlatList
                data={products}
                keyExtractor={item=>item.productName}
                renderItem={({item})=>(
                    <ItemListAddEdit  productName={item.productName} productPrice={item.productPrice} productUni={item.productUni} />
                )}
                ListEmptyComponent={()=>(
                    <Text>
                        Nenhum produto Selecionado
                    </Text>
                )}
            
            />

{/* 
            <Text style={styles.valueTotal}>Total:  R$  {products.reduce((initial,product)=>initial+product.productPrice,0)}</Text>
            <Text style={styles.uniTotal}>{products.reduce((initial,product)=>initial+ Number(product.productUni),0)} Itens</Text> */}


            
        </View>
    );
}