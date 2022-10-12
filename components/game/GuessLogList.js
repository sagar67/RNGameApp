import { StyleSheet, Text, View } from 'react-native'

function GuessLogList({roundNumber, guess}) {
  return <View style={styles.rootContainer}>
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
  </View>
}

export default GuessLogList

const styles = StyleSheet.create({
    rootContainer:{
        padding:10,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#ddb52f',
        color:'#ffffff',
        width:'100%',
        borderWidth:2,
        borderRadius:30,
        elevation:2,
    },
    itemText:{
        fontFamily:'open-sans',
        fontSize:18,
    }
})