import { useState } from "react";
import { View , Text, TextInput, Alert} from "react-native";
import ButtonDefault from "../../../../components/buttonDefault";
import SubMenuControl from "../../../../components/subMenuControl";
import {styles} from "./style"
import Products from "../../../../services/Sqlite/Products";
import { useNavigation } from "@react-navigation/native";




export default function NewProduct(){
        const navigation = useNavigation();
        const [productName, setProductName] = useState("");
        const [productPrice, setValue] = useState("0");
        const [productUni, setUni] = useState("0")

        async function insertDB(){
   

            if(productName !=="" && productPrice !== "0" && productUni !==  "0"){
                try{
                    await Products.findByBrand(productName)
                    console.log("banco de dados")
                    Alert.alert(
                       "Já Existe esse Produto",
                       "Tente mudar o nome",
                       [
                         
                         { text: "OK", onPress: () => console.log("OK Pressed") }
                       ]
                     );
    
                }catch(error){
                    Products.create({productName,productPrice,productUni}).then(()=>{console.log("Criado com sucesso" + {productName})})
                    navigation.navigate("Config")
    
    
                }
               
                
            }else{
                Alert.alert(
                    "Preencha todos os campos são obrigatorio",
                    "verifica os campos Nome, quantidade e valor",
                    [
                      
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );


            }

           
           
             

             

             
        }

       

    return(
        <View style={styles.container}>
            <SubMenuControl></SubMenuControl>

            <Text style={styles.text}>Nome do Produto</Text>
            <TextInput style={styles.input} onChangeText={(item)=>{setProductName(item)}}></TextInput>

            <Text style={styles.text}>Valor</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(item)=>{setValue(item)}}></TextInput>

            <Text style={styles.text}>Quantidade</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={(item)=>{setUni(item)}}></TextInput>

            

            <ButtonDefault name="Confirmr" fuc={insertDB} ></ButtonDefault>
           

        </View>
    )
}