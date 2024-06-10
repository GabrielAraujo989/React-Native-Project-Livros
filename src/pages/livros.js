import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const Livros = ({ navigation }) => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      const storedLivros = await AsyncStorage.getItem('livros');
      if (storedLivros) {
        setLivros(JSON.parse(storedLivros));
      }
    };

    const unsubscribe = navigation.addListener('focus', fetchLivros);

    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (index) => {
    const updatedLivros = [...livros];
    updatedLivros.splice(index, 1);
    setLivros(updatedLivros);
    await AsyncStorage.setItem('livros', JSON.stringify(updatedLivros));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titleText}>Lista de Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.bookItem}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Ano de Lançamento: {item.ano}</Text>
              <Text>Generos: {item.genero}</Text>
              <Text>Descrição: {item.descricao}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <Icon name="close" size={30} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('cadastraLivros')}
        >
          <Text style={styles.textStyle}>Cadastrar Livro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
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
    width: 250,
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Livros;
