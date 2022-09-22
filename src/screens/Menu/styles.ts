import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
    height: "100%",
  },
  containerButton: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  buttonDefault: {
    backgroundColor: "#0EA5E9",
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
  },
  buttonPrimary: {
    backgroundColor: "#777",
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
  },

  textButtonDefault: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  iconsContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  icons: {
    width: 150,
    height: 150,
    backgroundColor: "red",
  },
});
