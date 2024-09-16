import { View, Text, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const Page2 = () => {
  return (
    <View style={{ flex: 1, borderColor: "black", backgroundColor: "#00ccf9" }}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', "#37D6F8", "#00CCF9"]}
        locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />
      <View style={{ alignItems: 'center', paddingTop: 96, paddingBottom: 72 }}>
        <Image
          source={require("../assets/page1_circle.png")}
        />
      </View>
      <View style={{ paddingBottom: 72 }}>
        <Text style={{ fontWeight: 700, fontSize: 25, lineHeight: 29.3, textTransform: "uppercase", textAlign: 'center' }}>
          {`Grow\n your business`}
        </Text>
      </View>
      <View style={{ paddingBottom: 72 }}>
        <Text style={{ fontWeight: 700, fontSize: 15, lineHeight: 17.58, textAlign: 'center' }}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{ flexDirection: "row", alignSelf: 'stretch', justifyContent: "space-evenly", paddingBottom: 24 }}>
        <TouchableOpacity style={{ backgroundColor: "#e3c000", paddingHorizontal: 32, paddingVertical: 16 }}>
          <Text style={{ textTransform: "uppercase", fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#e3c000", paddingHorizontal: 32, paddingVertical: 16 }}>
          <Text style={{ textTransform: "uppercase", fontWeight: 700, fontSize: 20, lineHeight: 23.44 }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: 18 }}>How we work?</Text>
      </View>
    </View>
  )
}

export default Page2