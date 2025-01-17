import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Switch } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => console.log("Logged out!") },
      ]
    );
  };

  const handleOptionPress = (option) => {
    Alert.alert(option, `${option} clicked`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Option: Update Profile */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress("Update Profile")}
      >
        <FontAwesome5 name="user-edit" size={24} color="#333" />
        <Text style={styles.optionText}>Update Profile</Text>
      </TouchableOpacity>

      {/* Option: Notifications */}
      <View style={styles.option}>
        <MaterialIcons name="notifications" size={24} color="#333" />
        <Text style={styles.optionText}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      {/* Option: Privacy Policy */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress("Privacy Policy")}
      >
        <MaterialIcons name="privacy-tip" size={24} color="#333" />
        <Text style={styles.optionText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Option: Terms & Conditions */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress("Terms & Conditions")}
      >
        <MaterialIcons name="gavel" size={24} color="#333" />
        <Text style={styles.optionText}>Terms & Conditions</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Settings component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#FF4D4D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Settings;
