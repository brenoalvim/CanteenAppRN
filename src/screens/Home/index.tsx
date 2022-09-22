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
    if (useLogin == "A" && useSenha == "A") {
      console.log(
        "Clicou no botão de entrar, aqui terá que haver uma autenticação de usuário"
      );
    }
    navigation.navigate("Menu");
  }

  const [useLogin, setLogin] = useState("testando");
  const [useSenha, setSenha] = useState("testando");

  return (
    <View style={styles.container}>
      <Text style={styles.textMenu}>Cardápio</Text>

      <Text style={styles.textSubMenu}>SimpleMenu</Text>

      <TextInput
        autoFocus={true}
        style={styles.textLogin}
        placeholder="Digite seu login"
        placeholderTextColor="#FFF"
        onChangeText={(item) => {
          setLogin(item);
        }}
      />

      <TextInput
        style={styles.textKey}
        placeholder="Digite sua senha"
        placeholderTextColor="#FFF"
        onChangeText={(item) => {
          setSenha(item);
        }}
      />

      {/* <Button

          
          onPress={()=>{ Alert.alert(
            "Seja Bem vindo",
            "Seja bem vindo",
         
          )}}
          title="Entrar"
          
          color="#0EA5E9"
          accessibilityLabel="Learn more about this purple button"
        
        /> */}

      <TouchableOpacity style={styles.btnEnter} onPress={chamarEntrar}>
        <Text style={styles.textEnter}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
