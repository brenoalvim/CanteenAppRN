import { styles } from "./style";
import { Text, TouchableOpacity, View } from "react-native";
import { removeItemList } from "../../localStorage/listProductSale/removeItemListSale";
import { listSaleGetAll } from "../../localStorage/listProductSale/listProductSaleGetAll";
import { listProductSaleCreate } from "../../localStorage/listProductSale/listProductSale";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LIST_SALE } from "../../localStorage/storageConfig";
import SelectProduct from "../../screens/selectProducts";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
type Props = {
  productName: string;
  productUni?: number;
  productPrice?: number;
  productRemove?: any;
};

export default function ItemList({
  productName,
  productUni,
  productPrice,
  productRemove,
}: Props) {
  return (
    <View>
      <View style={styles.containerList}>
        <Text style={styles.listTextProduct}>{productName}</Text>
        <Text style={styles.listTextUni}>{productUni}</Text>
        <Text style={styles.listTextPrice}>R$ {productPrice}</Text>
        <TouchableOpacity
          style={styles.listProductRemove}
          onPress={productRemove}
        >
          <Text style={styles.listTextProductRemove}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
