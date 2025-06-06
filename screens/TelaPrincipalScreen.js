import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import RemedioService from './RemedioService';

export default function TelaPrincipalScreen({ navigation }) {
  const [remedios, setRemedios] = useState([]);
  const isFocused = useIsFocused(); // Atualiza quando volta pra essa tela

  useEffect(() => {
    atualizarLista();
  }, [isFocused]);

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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#d6f5e9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
  },
  nome: { fontSize: 18, fontWeight: 'bold' },
  horario: { fontSize: 16 },
  botaoRemover: {
    backgroundColor: '#e53935',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removerTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  vazio: { textAlign: 'center', marginTop: 50, color: '#888' },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
