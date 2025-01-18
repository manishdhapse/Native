import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useNavigation } from "@react-navigation/native";

const notifications = [
  { id: '1', title: 'New Comment on Your Post', body: 'Someone commented on your recent post.' },
  { id: '2', title: 'System Update', body: 'A new update is available for the app.' },
  { id: '3', title: 'New Like on Your Photo', body: 'Your photo received a like from John.' },
  { id: '4', title: 'Message from Support', body: 'Support team replied to your query.' },
  { id: '5', title: 'Event Reminder', body: 'Don\'t forget the event tomorrow at 3 PM.' },
];

const Notification = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const handleNotificationPress = (item) => {
    navigation.navigate("NotificationDetails", { id: item.id });
  
  };
  
  

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.notificationBox}
          onPress={() => handleNotificationPress(item)}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="notifications" size={24} color="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        </TouchableOpacity>
      )}
      style={styles.listContainer}
    />
  );
};

export default Notification;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 15,
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});
