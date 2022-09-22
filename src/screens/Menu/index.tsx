import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import ButtonDefault from "../../components/buttonDefault";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
  const navigation = useNavigation();
  function onPressVender() {
    navigation.navigate("SelectProduct");
  }

  function confirm(entrada: string) {
    navigation.navigate(entrada);
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.icons}></View>
      </View>

      <View style={styles.containerButton}>
        <View>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.textButtonDefault} onPress={onPressVender}>
              VENDER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDefault}>
            <Text style={styles.textButtonDefault}>CAIXA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDefault}>
            <Text style={styles.textButtonDefault}>RELATÓRIO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDefault}>
            <Text style={styles.textButtonDefault}>GERAR CARDÁPIO</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonDefault}
          onPress={() => {
            confirm("Config");
          }}
        >
          <Text style={styles.textButtonDefault}>CONFIGURAÇÃO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
