import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
const HomeScreen = () => {

  const navigation = useNavigation()
  const [currentColor, setCurrentColor] = useState("blue")
  const images = {
    blue: require("../assets/blue.png"),
    red: require("../assets/red.png"),
    black: require("../assets/black.png"),
    pink: require("../assets/pink.png"),
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 16, backgroundColor: "white" }}>
      <View style={{ gap: 12 }}>
        {/* first row */}
        <View style={{ alignItems: 'center' }}>
          <View style={{ alignItems: "center", height: 400 }}>
            <Image
              source={images[currentColor]}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>
        </View>
        {/* second row */}
        <View>
          <Text style={{ fontSize: 15 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        {/* third row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <View style={{ flexDirection: 'row', gap: 2 }}>
            <Image
              source={require("../assets/star.png")}
              style={{ width: 24, height: 24 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 24, height: 24 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 24, height: 24 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 24, height: 24 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 24, height: 24 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        {/* fourth row */}
        <View style={{ flexDirection: 'row', gap: 32, alignItems: 'center' }}>
          <View><Text style={{ fontWeight: 'bold', fontSize: 18 }}>1.790.000 đ</Text></View>
          <View><Text style={{ textDecorationLine: 'line-through', fontSize: 15, fontWeight: 'bold', color: "grey" }}>1.790.000 đ</Text></View>
        </View>
        {/* fifth row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ color: "#FA0000", textTransform: 'uppercase', fontWeight: 'bold' }}>Ở đâu rẻ hơn hoàn tiền</Text>
          <Image source={require("../assets/question-mark.png")} style={{ width: 16, height: 16 }} />
        </View>
        {/* sixth row */}
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate("ColorChoosing") }} style={{ alignItems: 'center', borderWidth: 1, borderColor: "grey", borderRadius: 8, paddingVertical: 8, position: "relative" }}>
            <Text style={{ textTransform: 'uppercase', fontSize: 15 }}>4 màu - chọn màu</Text>
            <Image
              source={require("../assets/next.png")}
              style={{ position: 'absolute', right: 12, width: 12, height: 12, top: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: "#FA0000", paddingVertical: 12, borderRadius: 8 }}>
          <Text style={{ color: "#F9F2F2", fontSize: 20, textTransform: 'uppercase', fontWeight: 'bold' }}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen