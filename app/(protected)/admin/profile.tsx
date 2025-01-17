import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EditProfile from './EditProfile';


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true); // Set to edit mode
  };

  const DisEdit = () => {
    return (
      <>
        {/* Profile Picture */}
        <Image
          source={{
            uri: 'https://via.placeholder.com/150', // Replace with actual profile image URL
          }}
          style={styles.profileImage}
        />

        {/* Name */}
        <Text style={styles.name}>John Doe</Text>

        {/* Email */}
        <Text style={styles.email}>johndoe@example.com</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {isEditing ? <EditProfile /> : <DisEdit />}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default Profile;
