import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Kauah from './src/componentes/kaua henrique/main';
import Estafani from './src/componentes/estefani';
import AnaJ from './src/componentes/ana ferreira';



export default function App() {
  return (
    <View style={styles.container}>

  <Kauah/>
  <Estafani/>
  <AnaJ/>      

<Button title="Enviar"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
