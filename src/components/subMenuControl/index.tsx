import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SubMenuControl() {
  return (
    <>
      {/* <TouchableOpacity style = {styles.buttonReturn}>
            <Text  style = {styles.textButtonReturn}> Voltar </Text>
        </TouchableOpacity> */}

      <View style={styles.iconsContainer}>
        <View style={styles.icons}></View>
      </View>
    </>
  );
}
