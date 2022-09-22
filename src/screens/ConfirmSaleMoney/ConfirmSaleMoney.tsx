import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TextInput, View, Button,Alert, TouchableOpacity } from 'react-native';
import ButtonDefault from '../../components/buttonDefault';
import SubMenuControl from '../../components/subMenuControl';
import { styles } from './styles';







export default function ConfirmSaleMoney(){
    const navigation = useNavigation();
    const router = useRoute();

    function confirmar(){
        navigation.navigate("TicketGerado",{total:router.params.total,troco:value,meio:"Dinheiro"})
    }

  
    console.log(router.params.total)
    const [value,setValue] = useState(0);
    const Troco = value - Number(router.params.total)
    return(

        <View style={styles.container}>

            <SubMenuControl/>

            
        <View style={styles.container2}>
            <View style={styles.containerInfo}>
                <Text style={styles.containerInfoOpacity}> Produtos</Text>
                <TouchableOpacity style={styles.containerInfo2}>
                    <Text style={styles.containerInfo2}>Itens</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.containerInfoOpacity}>Total</Text>
                
                <Text style={styles.containerInfo2}> R$: {(router.params.total).toFixed(2)}</Text>
                
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.containerInfoOpacity}>Total Recebido</Text>
                <TextInput style={styles.containerInfo2} placeholder="Digite o valor recebido" placeholderTextColor={"#FFF"} keyboardType="decimal-pad" onChangeText={(item)=>{setValue(item)}}></TextInput>
                    
               
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.containerInfoOpacity}>Troco</Text>
                <Text style={styles.containerInfo2}> Saldo a devolver R$: { Troco > 0 ? Troco.toFixed(2) : 0 }</Text>
                    
               
            </View>
        </View>

            <ButtonDefault fuc={confirmar} name='Confirmar'></ButtonDefault>

        </View>
      
    )
}