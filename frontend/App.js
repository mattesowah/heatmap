import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
import Constants from 'expo-constants';

if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Subscribe to </Text>
      <StatusBar style="auto" />
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
