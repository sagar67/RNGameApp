import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily:'open-sans-bold',
    fontSize: 28,
    color: "#ffffff",
    textAlign: "center",
    borderWidth: Platform.OS === 'android' ? 3 : 0,
    // borderWidth: Platform.select({android: 3, ios: 0}),
    borderColor: "#ffffff",
    borderRadius: 18,
    padding:8,
  },
});