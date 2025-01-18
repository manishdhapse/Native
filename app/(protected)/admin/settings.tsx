import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch,Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router'

const SettingsPage = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(true);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleNotification = () => setIsNotificationEnabled(previousState => !previousState);
  const toggleTheme = () => setIsDarkTheme(previousState => !previousState);
  const { onLogout } = useAuth();
  const router = useRouter();


  // Logout handler
  const onLogoutPressed = async () => {
      try {
          await onLogout(); // Call the logout function from the context
          Alert.alert("Logged Out", "You have been logged out successfully.");
          router.replace('/'); // Navigate to login screen
      } catch (error) {
          console.error("Logout Error: ", error);
          Alert.alert("Logout Failed", "Something went wrong. Please try again.");
      }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      {/* Profile Section */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      
      {/* Notifications Section */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={isNotificationEnabled}
            onValueChange={toggleNotification}
          />
        </View>
      </View>
      
      {/* Theme Section */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Theme</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={isDarkTheme}
            onValueChange={toggleTheme}
          />
        </View>
      </View>
      
      {/* Logout Section */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingItem} onPress={onLogoutPressed}>
                <Ionicons name="log-out-outline" size={24} color="black" />
                <Text style={styles.settingText}>Logout</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  settingSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 10,
  },
  settingText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsPage;
