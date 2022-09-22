import { useCallback, useState } from "react";
import { View, Text, TextInput } from "react-native";
import ButtonDefault from "../../../../components/buttonDefault";
import SubMenuControl from "../../../../components/subMenuControl";
import { styles } from "./style";
import Products from "../../../../services/Sqlite/Products";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

export default function NewProductEdit() {
  const navigation = useNavigation();
  const router = useRoute();
  const [productName, setProductName] = useState("");
  const [productPrice, setValue] = useState("0");
  const [productUni, setUni] = useState("0");
  const [newProductPrice, setNewValue] = useState("0");
  const [newProductUni, setNewUni] = useState("0");
  const [newProductID, setNewID] = useState("0");

  function updateDB() {
    console.log(newProductPrice);
    Products.update(newProductID, {
      productPrice: newProductPrice,
      productUni: newProductUni,
    }).then(() => {
      console.log("Criado com sucesso" + { productName });
    });
    //navigation.navigate("Config")
  }

  async function teste() {
    const all = await Products.findByBrand(router.params.productName);

    console.log(all[0]);

    setValue(all[0].productPrice);
    setUni(all[0].productUni);
    setNewID(all[0].id);
    console.log(productPrice);
  }

  teste();

  useFocusEffect(
    useCallback(() => {
      teste();
    }, [])
  );

  return (
    <View style={styles.container}>
      <SubMenuControl></SubMenuControl>

      <Text style={styles.text}>Produto</Text>
      <TextInput
        style={styles.input}
        onChangeText={(item) => {
          setProductName(item);
        }}
        defaultValue={router.params.productName}
        editable={false}
      >
        {" "}
      </TextInput>

      <Text style={styles.text}>{"Valor Atual: " + productPrice}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(item) => {
          setNewValue(item);
        }}
      ></TextInput>

      <Text style={styles.text}>Quantidade atual é: {productUni}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(item) => {
          setNewUni(item);
        }}
      ></TextInput>

      <ButtonDefault name="Confirmar" fuc={updateDB}></ButtonDefault>
    </View>
  );
}
