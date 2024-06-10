import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastrarLivro = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSave = async () => {
    const storedLivros = await AsyncStorage.getItem('livros');
    const livros = storedLivros ? JSON.parse(storedLivros) : [];
    const novoLivro = {
      titulo,
      autor,
      ano,
      genero,
      descricao
    };
    livros.push(novoLivro);
    await AsyncStorage.setItem('livros', JSON.stringify(livros));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={styles.titleText}>Cadastrar Novo Livro</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Ano de Publicação"
          value={ano}
          onChangeText={setAno}
        />
        <TextInput
          style={styles.input}
          placeholder="Gênero"
          value={genero}
          onChangeText={setGenero}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={handleSave}
        >
          <Text style={styles.textStyle}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textStyle}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#daa520',
    padding: 10,
    marginVertical: 7,
    width: '100%',
  },
});


export default CadastrarLivro;
