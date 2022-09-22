import { View, Text, FlatList } from "react-native";
import SubMenuControl from "../../components/subMenuControl";
import { style } from "./style";
import ItemListAddTicket from "../../components/itemListAddTicket";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { listProductSaleGetAll } from "../../localStorage/confirmItens/itemConfirmGetAlls";
import { getTicket } from "../../localStorage/ticket/getTicket";
import { createTicket } from "../../localStorage/ticket/gerarTicket";
import ButtonDefault from "../../components/buttonDefault";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TICKET } from "../../localStorage/storageConfig";

export default function TicketGerado() {
  getTicketHere();
  async function getTicketHere() {
    let ticket = await getTicket();
    const objContagem = [];
    //console.log(ticket)
    ticket.forEach((item) => {
      objContagem.push(JSON.parse(item));
    });

    //console.log(objContagem.length)
    setValueTicket(objContagem[objContagem.length - 1]);
  }

  async function getControlTicket() {
    //console.log(await AsyncStorage.getItem(TICKET))

    try {
      let ticket = await getTicket();
      if (ticket == "") {
        createTicket("100");
        console.log("sim");
      } else {
        const objContagem = [];
        //console.log(ticket)
        ticket.forEach((item) => {
          objContagem.push(JSON.parse(item));
        });

        //console.log(objContagem.length)
        setValueTicket(objContagem[objContagem.length - 1]);
        const valorProximo = objContagem[objContagem.length - 1] + 1;
        console.log(valorProximo);
        //typeof(valorProximo)
        createTicket(valorProximo);
      }
    } catch (error) {
      console.log("caiu aqui");
    }
  }

  const router = useRoute();

  const Troco = router.params.troco - router.params.total;

  const [products, setProducts] = useState([]);

  async function fecthList() {
    const data = await listProductSaleGetAll();
    //console.log(data)

    try {
      const obj = [];
      data.forEach((item) => {
        //console.log(item)
        obj.push(JSON.parse(item));
      });

      setProducts(obj[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const [ticket, setValueTicket] = useState("");

  useFocusEffect(
    useCallback(() => {
      fecthList();
    }, [])
  );

  async function teste() {
    let all = await console.log(all);
  }

  const html = `
    
    <html>
        <body>
                
        </body>
    </html>
        
    
    `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });
    await shareAsync(file.uri);
  };

  //console.log(products[0].productName)

  let valueReal = products
    .reduce(
      (initial, product) =>
        initial + Number(product.quantidadeUser) * product.productPrice,
      0
    )
    .toFixed(2);

  return (
    <View style={style.container}>
      <SubMenuControl></SubMenuControl>
      <Text style={style.center}>Ticket</Text>
      <Text style={style.ticket}>{ticket}</Text>

      <Text style={style.center}>Itens</Text>

      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.productName}
          renderItem={({ item }) => (
            <ItemListAddTicket
              productName={item.productName}
              productUni={item.quantidadeUser}
              productPrice={(
                item.productPrice * Number(item.quantidadeUser)
              ).toFixed(2)}
            ></ItemListAddTicket>

            // <ItemList productName={item.productName}productPrice={(item.productPrice * Number(item.quantidadeUser))} productUni={item.quantidadeUser} productRemove={()=>{fecthList(item.productName)}} />
          )}
          ListEmptyComponent={() => <Text>Nenhum produto Selecionado</Text>}
        />
      </View>
      <View style={style.infoSub}>
        <Text>
          Quantidade de itens:{" "}
          {products.reduce(
            (initial, product) => initial + Number(product.quantidadeUser),
            0
          )}
        </Text>
        <Text>Tipo do Pagamento {router.params.meio}</Text>
        <Text>
          Valor Total:{" "}
          {Troco > 0 ? (Troco + Number(valueReal)).toFixed(2) : valueReal}
        </Text>
        <Text>Troco: {Troco > 0 ? Troco.toFixed(2) : "Não houve troco"}</Text>
      </View>
      <ButtonDefault
        fuc={() => {
          getControlTicket();
        }}
        name="IMPRIMIR"
      ></ButtonDefault>
    </View>
  );
}
