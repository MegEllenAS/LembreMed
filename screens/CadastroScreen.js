
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './CadastroScreen.styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async () => {
    if (!(nome.trim() && email.includes('@') && senha.length >= 6)) {
      alert('Preencha todos os campos corretamente.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert(`Cadastrado com sucesso, ${nome}!`);
      navigation.navigate('BoasVindas', { nomeUsuario: nome });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('E-mail já cadastrado.');
      } else if (error.code === 'auth/invalid-email') {
        alert('E-mail inválido.');
      } else {
        alert('Erro ao cadastrar: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha (mín. 6 caracteres)"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem conta? Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}
