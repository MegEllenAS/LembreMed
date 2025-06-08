import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import RemedioService from './RemedioService';
import styles from './TelaPrincipalScreen.styles';

export default function TelaPrincipalScreen({ navigation }) {
  const [remedios, setRemedios] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    atualizarLista();
  }, [isFocused]);

 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Sair', 'Deseja voltar para o início?', [
              { text: 'Cancelar', style: 'cancel' },
              {
                text: 'Sim',
                onPress: () => navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                }),
              },
            ]);
          }}
          style={{ marginRight: 15 }}
        >
          <Text style={{ color: 'red', fontWeight: 'bold' }}>Sair</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const atualizarLista = () => {
    const lista = RemedioService.listarRemedios();
    setRemedios([...lista]);
  };

  const removerRemedio = (nome) => {
    RemedioService.removerRemedio(nome);
    atualizarLista();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Remédios</Text>

      <FlatList
        data={remedios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.horario}>Horário: {item.horario}</Text>
            </View>
            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerRemedio(item.nome)}
            >
              <Text style={styles.removerTexto}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum remédio cadastrado.</Text>}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('AdicionarRemedio')}
      >
        <Text style={styles.botaoTexto}>+ Adicionar Remédio</Text>
      </TouchableOpacity>
    </View>
  );
}
