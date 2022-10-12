import { StyleSheet, View, Text, Dimensions } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: deviceWidth < 380 ? 12 : 18,
    margin: deviceWidth < 380 ? 12 : 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#ddb52f",
    fontSize: deviceWidth <380 ? 26 : 34,
    fontWeight: "bold",
    textAlign: "center",
  },
});
