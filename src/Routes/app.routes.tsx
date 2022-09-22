import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();
import Home from "../screens/Home";
import SelectProductList from "../screens/selectProductsList";
import Menu from "../screens/Menu";
import Sales from "../screens/Sales";
import SelectProduct from "../screens/selectProducts";
import { ConfirmItem } from "../screens/confirmItem";
import ConfirmSales from "../screens/ConfirmSales";
import ConfirmSaleMoney from "../screens/ConfirmSaleMoney/ConfirmSaleMoney";
import TicketGerado from "../screens/TicketGerado";
import Config from "../screens/ConfigScreens";
import NewProduct from "../screens/configAdmin/screen/NewProduct";
import SelectProductListEditar from "../screens/configAdmin/screen/selectProductsListEdit";
import NewProductEdit from "../screens/configAdmin/screen/NewProductEdit";

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />

      <Screen name="SelectProductList" component={SelectProductList} />

      <Screen name="Menu" component={Menu} />

      <Screen name="Sales" component={Sales} />

      <Screen name="SelectProduct" component={SelectProduct} />

      <Screen name="ConfirmItem" component={ConfirmItem} />

      <Screen name="ConfirmSales" component={ConfirmSales} />

      <Screen name="ConfirmSaleMoney" component={ConfirmSaleMoney} />

      <Screen name="TicketGerado" component={TicketGerado} />

      <Screen name="Config" component={Config} />

      <Screen name="NewProduct" component={NewProduct} />

      <Screen
        name="SelectProductListEditar"
        component={SelectProductListEditar}
      />

      <Screen name="NewProductEdit" component={NewProductEdit} />
    </Navigator>
  );
}
