import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Corre({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/tempo-2.gif')} 
        style={styles.image}
      />
      <Text style={styles.correText}>CORRE!!!</Text>

     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingBottom: 20 
  },
  image: {
    width:280,  
    height: 280, 
    marginBottom: 20,  
  },
  correText: { 
    fontSize: 36, 
    color: '#775287', 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  button: {
    backgroundColor: '#cb9fc6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, 
    marginHorizontal: 30, 
  },
  buttonText: {
    color: '#4d1948',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
