import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Login from './pages/login';
import Cadastro from './pages/cadastro';
import CadastrarLivro from './pages/cadastraLivros'
import Livros from './pages/livros';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#daa520',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen
            name="livros"
            component={Livros}
            options={{
              title: 'Livros',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#daa520',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'black',
              },
            }}
          />
        <Stack.Screen
          name="cadastraLivros"
          component={CadastrarLivro}
          options={{
            title: 'Cadastro de novos Livros',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#daa520',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{
            title: 'Cadastrar',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#daa520',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
