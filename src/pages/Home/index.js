import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <Text> Página Inicial - Deu certo</Text>

  <Button title='Abrir Drawer'
    onPress={()=> {
      navigation.openDrawer()
      console.log("Abriu o menu")
      }}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
