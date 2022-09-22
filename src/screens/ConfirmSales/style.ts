import { StyleSheet } from "react-native";
export const styles2 = StyleSheet.create({
  blue: {
    backgroundColor: "blue",
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
  },
  itensInfo: {
    flexDirection: "row",
    //backgroundColor:"blue",
    justifyContent: "space-between",
  },
  containerItensInfo: {
    marginBottom: 15,
  },

  itensInfoText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    backgroundColor: "#999",
    width: 200,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  itensInfoTotal: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  itensinfoTotalText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    backgroundColor: "#999",
    width: 100,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  textFormPg: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  containerFormsPG: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFormsPG: {
    width: 300,
    backgroundColor: "#666",
    marginBottom: 15,
  },
  buttonFormsPGText: {
    textAlign: "center",
    fontSize: 20,
    padding: 15,
  },
  inputSaldo: {
    backgroundColor: "#888",
    padding: 20,
  },
  troco: {
    padding: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
