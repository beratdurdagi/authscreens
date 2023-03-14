import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './Navigation/index';


export default function App() {
  return (
    <View style={styles.container}>
    <RootNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
   
  },
});
