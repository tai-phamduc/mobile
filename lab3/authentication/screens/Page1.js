import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Page1 = () => {
  return (
    <View style={{ flex: 1, borderColor: "black", backgroundColor: "#00ccf9" }}>
      <View style={{ alignItems: 'center', paddingVertical: 96 }}>
        <Image
          source={require("../assets/page1_circle.png")}
        />
      </View>
      <View style={{ paddingBottom: 80 }}>
        <Text style={{ fontWeight: 700, fontSize: 25, lineHeight: 29.3, textTransform: "uppercase", textAlign: 'center' }}>
          {`Grow\n your business`}
        </Text>
      </View>
      <View style={{ paddingBottom: 96 }}>
        <Text style={{ fontWeight: 700, fontSize: 15, lineHeight: 17.58, textAlign: 'center' }}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{ flexDirection: "row", alignSelf: 'stretch', justifyContent: "space-evenly" }}>
        <TouchableOpacity style={{ backgroundColor: "#e3c000", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 16 }}>
          <Text style={{ textTransform: "uppercase", fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#e3c000", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 16 }}>
          <Text style={{ textTransform: "uppercase", fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default Page1