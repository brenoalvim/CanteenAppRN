import { useEffect, useState } from "react"
import {styles} from "./style"
import {Text, TouchableOpacity, View} from "react-native"
import { useNavigation } from "@react-navigation/native"
type Props = {
    productName:string,
    productUni :number,
    productPrice:number
}

export default function ItemListAddTicket({productName,productUni,productPrice}:Props){
    
    //const [nameProduct,setNameProduc] =   useState("");
    const navigation = useNavigation();

    function pegarName(){
        navigation.navigate("ConfirmItem",{productName})
        console.log(productName)

    }


    return(
        <View>
    
        <View style = {styles.containerList}>
            <Text style = {styles.listTextProduct}>{productName}</Text>
            <Text style = {styles.listTextUni}>{productUni}</Text>
            <Text style = {styles.listTextPrice}>R$ {productPrice}</Text>
            
        </View>

        </View>
    )
}