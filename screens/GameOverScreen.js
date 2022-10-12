import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {

   const {width, height} = useWindowDimensions();

   let imageSize= 300;

   if(width<380){
    imageSize = 150;
   }

   if(height<400){
    imageSize = 80;
   }

   const image = {
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2,
   }

    const marginTopScreen = height < 380 ? 25 : 80 ;
    const marginBottomScreen = height < 380 ? 6 : 18;

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, {marginTop:marginTopScreen, marginBottom:marginBottomScreen}]}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer,image]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.textSummary}>
          Your Phone needed{" "}
          <Text style={styles.textHighlighted}>{roundNumber}</Text> round to
          guess the number{" "}
          <Text style={styles.textHighlighted}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 4,
    borderColor: "#ffffff",
    overflow: "hidden",
    margin: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textSummary: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 22,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textHighlighted: {
    fontFamily: "open-sans-bold",
    color: "#a01313",
  },
});
