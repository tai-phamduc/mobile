import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("ChiTietSanPham")}><Text>Chi tiet san pham</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PasswordGenerator")}><Text>Password Generator</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen