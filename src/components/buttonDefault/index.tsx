import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";

type Props = {
  name: string;
  fuc?: any;
};

export default function ButtonDefault({ name, fuc }: Props) {
  return (
    <TouchableOpacity style={styles.buttonDefault} onPress={fuc}>
      <Text style={styles.textEnter}>{name}</Text>
    </TouchableOpacity>
  );
}
