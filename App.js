import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, StyleSheet, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';
import Constants from 'expo-constants';
import { RadioButton, ToggleButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import DATA from './components/Data.js';

import { MaterialIcons } from '@expo/vector-icons';

const icons = [
  'ac-unit', 'adb',  'agriculture', 'alarm', 'animation', 'audiotrack',
  'auto-stories', 'beach-access', 'cake', 'camera', 'devices', 'face'
];

export default function App() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  
  return (
      <View style={Styles.container}>
       
      </View>
  );
}

