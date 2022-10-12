import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  //   function onPressHandler() {
  //     // console.log('Pressed')
  //     alert("onPress");
  //   }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        onPress={onPress}
        android_ripple={{ color: "#af2469" }}
      >
        <Text style={styles.textInput}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    marginVertical: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#801E4F",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInput: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
