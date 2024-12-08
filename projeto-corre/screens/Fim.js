import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Fim({ navigation }) {
  return (
    <View style={styles.container}>
       <Image 
        source={require('../assets/opcao.gif')} 
        style={styles.image}
      />
      <Text style={styles.text}>Parabéns! Você terminou 🎉</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Inicio')}
        >
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  image: {
    width: 280,  
    height: 280,
    marginBottom: 20,  
  },
  text: { 
    fontSize: 24,
    color: '#4d1948', 
    fontWeight: 'bold',
    marginBottom: 20 
  },
  buttons: {
    flexDirection: 'row', 
    justifyContent: 'center', 
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
