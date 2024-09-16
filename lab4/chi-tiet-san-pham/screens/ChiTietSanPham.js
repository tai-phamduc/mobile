import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { cloneElement, useState } from 'react'

const ChiTietSanPham = () => {
  const [soLuong, setSoLuong] = useState(1)
  function decreaseSoLuong() {
    if (soLuong <= 0) return
    setSoLuong(soLuong => soLuong - 1)
  }
  function increaseSoLuong() {
    setSoLuong(soLuong => soLuong + 1)
  }
  return (
    <View style={{ flex: 1 }}>
      {/* the first row */}
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24, backgroundColor: "white", marginBottom: 16 }}>
        {/* 1 */}
        <View style={{ flexDirection: "row", gap: 16, paddingBottom: 16 }}>
          <Image
            source={require("../assets/nguyenhamtichphan.png")}
          />
          <View style={{ flex: 1, gap: 6 }}>
            <Text style={{ fontWeight: 'bold' }}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{ fontWeight: 'bold' }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ color: "#EE0D0D", fontWeight: 'bold', fontSize: 18 }}>141.800 đ</Text>
            <Text style={{ color: "#808080", fontWeight: 'bold', textDecorationLine: 'line-through' }}>141.800 đ</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
              <View style={{ flexDirection: "row", gap: 12, alignItems: 'center' }}>
                <TouchableOpacity onPress={decreaseSoLuong}>
                  <Text style={{ backgroundColor: "#aaa", paddingHorizontal: 8, fontWeight: 'bold', fontSize: 16 }}>-</Text>
                </TouchableOpacity>
                <Text>{soLuong}</Text>
                <TouchableOpacity onPress={increaseSoLuong}>
                  <Text style={{ backgroundColor: "#aaa", paddingHorizontal: 6, fontWeight: 'bold', fontSize: 16 }}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={{ color: "#0A5EB7", fontWeight: 'bold' }}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 2 */}
        <View style={{ flexDirection: "row", gap: 16, paddingBottom: 32 }}>
          <Text style={{ fontWeight: 'bold' }}>Mã giảm giá đã lưu</Text>
          <Text style={{ color: "#0A5EB7", fontWeight: 'bold' }}>Xem tại đây</Text>
        </View>
        {/* 3 */}
        <View style={{ flexDirection: 'row', alignContent: 'stretch', gap: 24, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', borderColor: "black", borderWidth: 1, paddingLeft: 16, paddingRight: 48, paddingVertical: 14 }}>
            <View style={{ backgroundColor: "yellow", width: 32, height: 16 }}></View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mã giảm giá</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: "#0A5EB7", justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18, borderRadius: 8 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* the second row */}
      <View style={{ flexDirection: 'row', gap: 12, padding: 16, backgroundColor: "white", marginBottom: 16 }}>
        <Text style={{ fontWeight: 'bold' }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#0A5EB7", fontWeight: 'bold' }}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      {/* the third row */}
      <View style={{ flexDirection: 'row', gap: 12, padding: 16, backgroundColor: "white", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tạm tính</Text>
        <Text style={{ color: "#EE0D0D", fontSize: 18, fontWeight: 'bold' }}>{(soLuong * 141800).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</Text>
      </View>
      {/* the fourth row */}
      <View style={{ marginTop: "auto", padding: 16, backgroundColor: "white" }}>
        <View style={{ flexDirection: 'row', gap: 12, justifyContent: "space-between", paddingBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#808080" }}>Thành tiền</Text>
          <Text style={{ color: "#EE0D0D", fontSize: 18, fontWeight: 'bold' }}>{(soLuong * 141800).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: "#EE0D0D", alignItems: 'center', paddingVertical: 16 }}>
          <Text style={{ color: "white", fontSize: 20, textTransform: 'uppercase', fontWeight: 'bold' }}>Tiến hành thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChiTietSanPham