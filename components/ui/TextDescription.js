import { StyleSheet, Text } from "react-native";

function TextDescription({ children }) {
  return <Text style={styles.textDescription}>{children}</Text>;
}

export default TextDescription;

const styles = StyleSheet.create({
  textDescription: {
    fontFamily:'open-sans',
    color: "#ddb52f",
    fontSize: 22,
  },
});
