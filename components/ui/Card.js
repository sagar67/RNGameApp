import { Dimensions, StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: deviceWidth < 380 ? 6 : 10,
    marginTop: deviceWidth < 380 ? 26 : 34,
    marginHorizontal: deviceWidth < 380 ? 12 : 20,
    backgroundColor: "#5c1438",
    borderRadius: 20,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});
