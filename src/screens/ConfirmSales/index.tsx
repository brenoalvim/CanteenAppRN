import { styles, styles2 } from "./style";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONFIRM_ITENS } from "../../localStorage/storageConfig";
import ItemList from "../../components/itemList";
import { listProductSaleGetAll } from "../../localStorage/confirmItens/itemConfirmGetAlls";
import SubMenuControl from "../../components/subMenuControl";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function ConfirmSales() {
  const navigation = useNavigation();

  function ConfirmMoney() {
    navigation.navigate("ConfirmSaleMoney", { total: router.params.total });
  }
  function Confirmar(obj) {
    navigation.navigate("TicketGerado", {
      meio: obj,
      total: router.params.total,
      troco: 0,
    });
  }

  async function getList() {
    const all = await listProductSaleGetAll();
  }

  getList();
  const router = useRoute();

  console.log(router.params.total);
  //console.log(router.params.total)

  const [valor, setValor] = useState(0);
  const [ticket, setTicket] = useState("100");
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerItensInfo}>
          <View style={styles.itensInfo}>
            <Text style={styles.itensinfoTotalText}>{router.params.itens}</Text>
            <TouchableOpacity>
              <Text style={styles.itensInfoText}>Itens Selecionados</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itensInfoTotal}>
            <Text style={styles.itensinfoTotalText}>Total</Text>
            <Text style={styles.itensInfoText}>
              {" "}
              R$: {router.params.total.toFixed(2)}
            </Text>
          </View>
        </View>
        <Text>Valor recebido</Text>
        {/* <TextInput onChangeText={(item)=>{setValor(item)}} keyboardType="number-pad" style={styles.inputSaldo} placeholder="Digite o valor recebido"></TextInput>
        <Text style= {styles.troco}>R${Number(router.params.total)-valor}</Text> */}
      </View>

      <View>
        <Text style={styles.textFormPg}>Formas de Pagamento</Text>
      </View>

      <View style={styles.containerFormsPG}>
        <TouchableOpacity style={styles.buttonFormsPG} onPress={ConfirmMoney}>
          <Text style={styles.buttonFormsPGText}>Dinheiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFormsPG}
          onPress={() => {
            Confirmar("pix");
          }}
        >
          <Text style={styles.buttonFormsPGText}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFormsPG}
          onPress={() => {
            Confirmar("cartão");
          }}
        >
          <Text style={styles.buttonFormsPGText}>Cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFormsPG}
          onPress={() => {
            Confirmar("À Prazo");
          }}
        >
          <Text style={styles.buttonFormsPGText}>À Prazo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
