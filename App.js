import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants'
import { DATA } from './Data';
import Row from './components/Row';

export default function App() {

/*function renderItem({item}){
  return (<Text>{item.lastname}</Text>)
}*/

/*const renderItem = ({item}) => {
  <Text>{item.lastname}</Text>
}*/

return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Row person={item} />
      )}
    ></FlatList>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
    //justifyContent: 'center',

  },
});
