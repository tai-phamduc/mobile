import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from "expo-checkbox"
import React from 'react'
import { useState } from 'react'

const PasswordGenerator = () => {
  const [genratedPassword, setGeneratedPassword] = useState()
  const [formInput, setFormInput] = useState({
    passwordLength: null,
    includeLowerCaseLetters: false,
    includeUppercaseLetters: false,
    includeNumber: false,
    includeSpecialSymbol: false
  })
  const { passwordLength, includeLowerCaseLetters, includeUppercaseLetters, includeNumber, includeSpecialSymbol } = formInput
  function handleOnChange(name, value) {
    setFormInput(state => {
      return {
        ...state,
        [name]: value
      }
    })
  }
  function handleGeneratePassword() {
    setGeneratedPassword(generateRandomString(parseInt(passwordLength), includeLowerCaseLetters, includeUppercaseLetters, includeNumber, includeSpecialSymbol))
  }

  const generateRandomString = (length, includeLowercase, includeUppercase, includeNumber, includeSpecialSymbol) => {
    let charSet = ''
    const numbers = '0123456789'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?'

    if (includeNumber) charSet += numbers
    if (includeLowercase) charSet += lowercase
    if (includeUppercase) charSet += uppercase
    if (includeSpecialSymbol) charSet += specialSymbols

    if (charSet === '') {
      throw new Error('At least one character set (numbers, lowercase, uppercase, or special symbols) must be included.')
    }

    return [...Array(length)]
      .map(() => charSet[Math.floor(Math.random() * charSet.length)])
      .join('')
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#23235B", padding: 16 }}>
      {/* first row */}
      <View style={{ paddingTop: 32 }}>
        <Text style={{ color: "white", textTransform: "uppercase", fontSize: 32, textAlign: 'center', fontWeight: 'bold' }}>
          {`Password\nGenerator`}
        </Text>
      </View>
      {/* second row */}
      <View style={{ paddingVertical: 32 }}>
        <TextInput
          editable={false}
          style={{ backgroundColor: "#151537", color: "white", paddingVertical: 16, paddingHorizontal: 12, fontSize: 24 }}
          value={genratedPassword}
        />
      </View>
      {/* third row */}
      <View style={{ gap: 32, paddingBottom: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: 'bold' }}>Password length</Text>
          <TextInput
            style={{ backgroundColor: "white", width: 128, fontSize: 24, paddingVertical: 4, paddingHorizontal: 8, textAlign: 'center' }}
            value={passwordLength}
            onChangeText={value => { handleOnChange("passwordLength", value) }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: 'bold' }}>Include lower case letters</Text>
          <CheckBox
            value={includeLowerCaseLetters}
            onValueChange={value => { handleOnChange("includeLowerCaseLetters", value) }}
            style={{ padding: 12 }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: 'bold' }}>Include uppercase letters</Text>
          <CheckBox
            value={includeUppercaseLetters}
            onValueChange={value => { handleOnChange("includeUppercaseLetters", value) }}
            style={{ padding: 12 }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: 'bold' }}>Include number</Text>
          <CheckBox
            value={includeNumber}
            onValueChange={value => { handleOnChange("includeNumber", value) }}
            style={{ padding: 12 }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: 'bold' }}>Include special symbol</Text>
          <CheckBox
            value={includeSpecialSymbol}
            onValueChange={value => { handleOnChange("includeSpecialSymbol", value) }}
            style={{ padding: 12 }}
          />
        </View>
      </View>
      {/* fourth row */}
      <View style={{ paddingHorizontal: 8 }}>
        <TouchableOpacity onPress={handleGeneratePassword} style={{ backgroundColor: "#3B3B98", alignItems: 'center', paddingVertical: 16 }}>
          <Text style={{ textTransform: 'uppercase', fontSize: 24, color: "white", fontWeight: 'bold' }}>Generate Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PasswordGenerator