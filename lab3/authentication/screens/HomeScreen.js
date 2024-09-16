import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Page1")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>First Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Page2")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>1_a</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Page3")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>1_b</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => navigation.navigate("Page4")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>1_c</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Page5")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>1_d</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Page6")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>1_e</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Page7")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>2_a</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Page8")} style={{ backgroundColor: "#00ccf9", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontSize: 16 }}>XMEye</Text>
      </TouchableOpacity>
    </View >
  )
}

export default HomeScreen