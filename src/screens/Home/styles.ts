import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
  },
  textMenu: {
    textAlign: "center",
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  textSubMenu: {
    textAlign: "center",
    color: "#6b6b6b",
    fontSize: 10,
    marginBottom: 15,
  },
  textKey: {
    backgroundColor: "#777",
    marginBottom: 35,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#fff",
    input: "password",
  },

  textLogin: {
    backgroundColor: "#777",
    marginBottom: 35,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#fff",
  },

  btnEnter: {
    backgroundColor: "#0EA5E9",
    padding: 16,
    borderRadius: 15,
  },
  textEnter: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});
