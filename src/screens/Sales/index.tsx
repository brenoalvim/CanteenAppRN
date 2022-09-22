import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import SubMenuControl from "../../components/subMenuControl";
import ButtonDefault from "../../components/buttonDefault";
import { useNavigation } from "@react-navigation/native";

export default function Sales() {
  const navigate = useNavigation();

  function teste() {
    navigate.navigate("SelectProduct");
  }

  return (
    <View style={styles.container}>
      <SubMenuControl />

      <Text>Nome do Cliente</Text>
      <TextInput style={styles.client} placeholder="Consumidor Final" />

      <ButtonDefault fuc={teste} name="Próximoa" />
    </View>
  );
}
