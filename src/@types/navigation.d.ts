export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SelectProductList: undefined;
      SelectProduct: undefined;
      ConfirmItem: {
        productName?: string;
      };
      ConfirmSales: {
        total: number;
        itens: number;
      };
      ConfirmSaleMoney: {
        total: number;
      };
      TicketGerado: {
        total: number;
        troco: number;
        meio: string;
      };
      Config: undefined;
      NewProduct: undefined;
      SelectProductListEdit: undefined;
      NewProductEdit: {
        productName: string;
      };
    }
  }
}
