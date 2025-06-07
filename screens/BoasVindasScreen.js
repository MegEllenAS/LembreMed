import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './BoasVindasScreen.styles';

export default function BoasVindasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-Vindo!</Text>
      <Text style={styles.subtitulo}>Seu lembrete de remédios diário</Text>

     <Image source={require('../assets/imagemjovem.jpg')} style={styles.imagem} />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('TelaPrincipal')}
      > 
        <Text style={styles.botaoTexto}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}
