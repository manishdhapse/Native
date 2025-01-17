import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function AdminPage() {
  return (
    <>
     
      <View style={styles.container}>
       
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
