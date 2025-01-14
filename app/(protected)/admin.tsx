import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function AdminPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'ADMIN' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          ADMIN
        </Link>
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
