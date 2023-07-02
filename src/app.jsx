import React from "react"
import {Platform, Text} from "react-native"

export default function App() {
  return <Text style={{color: 
    Platform.OS === "web" ? "green" : "red"
  }}>
    Hello World! Your platform is {Platform.OS}
  </Text>
}
