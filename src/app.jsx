import {View, Text, Platform} from 'react-native'

export default function App() {
  const plfmClrMap = {'android':'green',
    'ios':'brown',
    'web':'auqamarine'}
  const os = Platform.OS.toLowerCase()
  const clr = plfmClrMap[os] || 'black'

  const style = {color: clr}

  return <View>
    <Text style={style}>Hello World! Your platform is {clr}</Text>
  </View>
}
