import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  return (
    <View>
      <Text style={styles.instructions}>Student Attendance App</Text>

      <Text style={styles.aanya}>Aanya Singh</Text>
      <TouchableOpacity
        onPress={() => alert('Aanya Singh is marked present')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>present</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Aanya Singh is marked absent')}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>absent</Text>
      </TouchableOpacity>

      <Text style={styles.aanya}>Shlok Raizada</Text>
      <TouchableOpacity
        onPress={() => alert('Shlok Raizada is marked present')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>present</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Shlok Raizada is marked absent')}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>absent</Text>
      </TouchableOpacity>

      <Text style={styles.aanya}>Varun Sinha</Text>
      <TouchableOpacity
        onPress={() => alert('Varun Sinha is marked present!')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>present</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Varun Sinha is marked absent')}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>absent</Text>
      </TouchableOpacity>

      
      <Text style={styles.aanya}>Ark Singh</Text>
      <TouchableOpacity
        onPress={() => alert('Ark Singh is marked present!')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>present</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Ark Singh is marked absent')}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>absent</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  instructions: {
    color: '#FDFDFD',
  marginHorizontal: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginEnd:15,
    padding: 22,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
     backgroundColor: 'black',
  },
  aanya: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 10,
  },
});
