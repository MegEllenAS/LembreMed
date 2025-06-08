import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import RemedioService from './RemedioService';

export default function AdicionarRemedioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [horario, setHorario] = useState('');

  const salvar = () => {
    if (nome.trim() === '' || horario.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    RemedioService.adicionarRemedio({ nome, horario });
    navigation.goBack(); // Volta pra Home
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do remédio"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Horário (ex: 08:00)"
        value={horario}
        onChangeText={setHorario}
        style={styles.input}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
  },
});
