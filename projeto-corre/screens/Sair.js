import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';


export default function Sair({ navigation }) {
  const handleExit = () => {
    // Código para sair do app (opcional)
    console.log('Saindo do sistema...');
    // Fechar o app
    // A funcionalidade de fechar pode depender da plataforma
    BackHandler.exitApp(); // Sai do app imediatamente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tem certeza que deseja sair?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleExit} // Sai do App
        >
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Inicio')} // Volta para o início
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
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#4d1948',
    fontWeight: 'bold',
    marginBottom: 20,
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
