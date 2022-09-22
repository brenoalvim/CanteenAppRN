import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import SubMenuControl from "../../components/subMenuControl";
import ButtonDefault from "../../components/buttonDefault";

import Products from "../../services/Sqlite/Products";
import { useEffect, useState } from "react";
import { listProductSaleCreate } from "../../localStorage/listProductSale/listProductSale";

export function ConfirmItem() {
  const navigation = useNavigation();
  const [productHere, setProductHere] = useState([
    {
      id: "teste",
      productName: "Gerando info",
      productPrice: 0.0,
      productUnit: 0,
    },
  ]);
  const [quantidade, setQuantidade] = useState("1");

  const route = useRoute();
  const { productName } = route.params;

  Products.findByBrand(productName).then((item) =>
    setProductHere((prevState) => item)
  );

  // console.log(productHere[0].productName)

  async function confirm() {
    const obj = productHere[0];
    Object.assign(obj, {
      quantidadeUser: quantidade,
    });

    console.log(obj);
    const objString = JSON.stringify(obj);
    await listProductSaleCreate(objString);
    navigation.navigate("SelectProduct");
  }

  function aumentarQuantidade() {
    const value = Number(quantidade);
    // console.log(productHere[0].productUni)
    if (value >= 0 && value < productHere[0].productUni) {
      setQuantidade((prevState) => Number(prevState) + 1);
    }
  }

  function diminuirQuantidade() {
    const value = Number(quantidade);
    console.log(quantidade);
    if (value > 1) {
      console.log("entrou");
      setQuantidade((prevState) => Number(prevState - 1));
    }
  }

  return (
    <View style={styles.container}>
      <SubMenuControl></SubMenuControl>
      <View style={styles.infoProduct}>
        <Text>Produto</Text>
        <Text>Valor</Text>
      </View>

      <View style={styles.infoProductDynamic}>
        <Text style={styles.infoValue}>{productHere[0].productName}</Text>
        <Text style={styles.infoValue}>R$ {productHere[0].productPrice}</Text>
      </View>
      <View style={styles.infoValueMult}>
        <Text style={styles.infoValueMultText}>
          R$ {(productHere[0].productPrice * quantidade).toFixed(2)}
        </Text>
      </View>

      <View style={styles.containerControll}>
        <TouchableOpacity
          style={styles.buttonDecrease}
          onPress={diminuirQuantidade}
        >
          <Text style={styles.textDecrease}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.textDecrease}>{quantidade}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonIncrease}
          onPress={aumentarQuantidade}
        >
          <Text style={styles.textDecrease}>+</Text>
        </TouchableOpacity>
      </View>

      <ButtonDefault name="Confirmar" fuc={confirm}></ButtonDefault>
    </View>
  );
}
