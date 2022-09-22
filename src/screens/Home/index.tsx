import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Home/styles";
import { useState } from "react";

export default function Home() {
  const navigation = useNavigation();
  function chamarEntrar() {
    if (useLogin == "Root" && useSenha == "root") {
      navigation.navigate("Menu");
    } else {
      console.log("Login ou senha incorretos");
    }
  }

  const [useLogin, setLogin] = useState("testando");
  const [useSenha, setSenha] = useState("testando");

  return (
    <View style={styles.container}>
      <Text style={styles.textMenu}>Login</Text>

      <Text style={styles.textSubMenu}>Insira as informações abaixo</Text>

      <TextInput
        autoFocus={true}
        style={styles.textLogin}
        placeholder="Login"
        placeholderTextColor="#FFF"
        onChangeText={(item) => {
          setLogin(item);
        }}
      />

      <TextInput
        style={styles.textKey}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        onChangeText={(item) => {
          setSenha(item);
        }}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnEnter} onPress={chamarEntrar}>
        <Text style={styles.textEnter}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
