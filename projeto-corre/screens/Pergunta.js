import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Pergunta({ route, navigation }) {
  const { pergunta } = route.params;

  const proximaPergunta = {
    'Fez Mobile?': 'Fez Documentação?',
    'Fez Documentação?': 'Fez Apresentação?',
  };

  const proximaRota = pergunta === 'Fez Apresentação?' ? 'Fim' : 'Pergunta';

  return (
    <View style={styles.container}>
       <Image 
        source={require('../assets/conclui.gif')} 
        style={styles.image}
      />
      <Text style={styles.text}>{pergunta}</Text>
      <View style={styles.buttons}>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(proximaRota, { pergunta: proximaPergunta[pergunta] })
          }
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
  image: {
    width: 280,  
    height: 280, 
    marginBottom: 20,  
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
