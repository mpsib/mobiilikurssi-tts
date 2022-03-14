import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [input, setInput] = useState('');

  const ttsSpeak = () => {
    Speech.speak(input);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={ (input) => setInput(input) }
        value={input}
      />
      <Button onPress={ttsSpeak} title='Press to hear text'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    width: '70%',
    height: 60,
    borderWidth: 1,
  },
});
