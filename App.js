import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Pressable, Alert, Button } from 'react-native'

export default function App() {

  const [timePress, setTimePress] = useState(0)
  console.log(`timePress`, timePress)

  const handleAlert = () => {
    Alert.alert(
      "Hello Amir",
      "Have a Good Day",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  return (
    <ScrollView contentContainerStyle={style.container}>
      <Image style={style.amir} source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }} />
      <Image style={style.amir} source={require('./assets/konexio-logo_1.png')} />
      {/* <View style={style.textContainer}>
        <Text style={style.tet1}>Hello</Text>
        <Text style={style.tet2}>Hello</Text>
        <Text style={style.tet3}>Hello</Text>
       </View>  */}
      <Pressable onPress={() => (setTimePress(now => now + 1))} >
        <Text>Click Here</Text>
        <Text>{timePress}</Text>
      </Pressable>
      <View style={style.btn} >
        <Button onPress={handleAlert} title={'Alert Button'} />
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    backgroundColor: 'white'
  },
  tet1: {
    margin: 80,
    fontSize: 30
  },
  tet2: {
    margin: 80,
    textAlign: 'center'
  },
  tet3: {
    margin: 80,
    fontWeight: 'bold'
  },
  amir: {
    margin: 'auto',
    width: 200,
    height: 70,
    borderRadius: 10,
    borderColor: 'black'
  },
  btn: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }

})