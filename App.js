import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import Styles from './styles/Styles.js';

import { MaterialIcons } from '@expo/vector-icons';

const icons = [
  'ac-unit', 'adb',  'agriculture', 'alarm', 'animation', 'audiotrack',
  'auto-stories', 'beach-access', 'cake', 'camera', 'devices', 'face'
];

export default function App() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  
  //You may get random array index like this:
  //let ind = Math.floor(Math.random() * icons.length);

  return (
      <View style={Styles.container}>
       
      </View>
  );
}

