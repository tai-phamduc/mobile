import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen.js'
import ChiTietSanPham from './screens/ChiTietSanPham.js'
import PasswordGenerator from './screens/PasswordGenerator.js'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChiTietSanPham" component={ChiTietSanPham} />
        <Stack.Screen name="PasswordGenerator" component={PasswordGenerator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}