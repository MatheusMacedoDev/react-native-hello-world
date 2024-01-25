import { StatusBar, setStatusBarStyle } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Image, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [input, setInput] = useState('Something');

  useEffect(() => {
    setStatusBarStyle('light', true);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.text}>{input}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setInput}
        value={input}
      />
      <TouchableHighlight style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800'
  },
  input: {
    marginTop: 30,
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 20,
    color: '#fff',
    borderRadius: 30
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30    
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%'
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800'
  }
});