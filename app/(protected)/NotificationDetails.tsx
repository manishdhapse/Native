import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter,useLocalSearchParams } from 'expo-router';

const NotificationDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  console.log('Router params:', params);
  const { id } = useLocalSearchParams();

  if (!id ) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Notification details not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>{"< Back"}</Text>
      </TouchableOpacity>

      <View style={styles.notificationBox}>
        <Text style={styles.title}>{}</Text>
        <Text style={styles.body}>{}</Text>
      </View>
    </View>
  );
};

export default NotificationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 18,
    color: '#6200ea',
    fontWeight: 'bold',
  },
  notificationBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
