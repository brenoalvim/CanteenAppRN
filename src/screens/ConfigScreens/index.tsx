import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import ButtonDefault from "../../components/buttonDefault";
import SubMenuControl from "../../components/subMenuControl";
import { styles } from "./styles";

export default function Config (){
    
    const navigation = useNavigation();


    function confirm(entrada:string){
        navigation.navigate(entrada)

    }

    return(
        <View style={styles.container}>
            <SubMenuControl></SubMenuControl>
            <ButtonDefault name="Novo Produto" fuc={()=>{confirm("NewProduct")}}></ButtonDefault>
            <ButtonDefault name="Entrada"></ButtonDefault>
            <ButtonDefault name="Editar Produto" fuc={()=>{confirm("SelectProductListEditar")}}></ButtonDefault>

        </View>
    )

}