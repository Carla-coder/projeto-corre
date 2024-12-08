import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Inicio({ navigation }) {
  return (
      <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} 
      />
      <Text style={styles.title}>Aprenda Jogando!</Text>
      <Text style={styles.text}>Terminou?</Text>
      <View style={styles.buttons}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pergunta', { pergunta: 'Fez Mobile?' })}
        >
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Corre')}
        >
          <Text style={styles.buttonText}>Não</Text>
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
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 20,
    resizeMode: 'contain', 
  },
  title: { 
    fontSize: 24,
    color: '#a469aa', 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  text: { 
    fontSize: 20,
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
