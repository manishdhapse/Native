import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Octicons from '@expo/vector-icons/Octicons';


// Define your icon-to-route mapping
const icons = [
  { name: 'donate', library: FontAwesome5, route: '(protected)/donate' },
  { name: 'notification', library: AntDesign, route: '(protected)/notification' },
  { name: 'calendar', library: AntDesign, route: '(protected)/calendar' },
  { name: 'bus', library: FontAwesome6, route: '(protected)/bus' },
  { name: 'teacher', library: FontAwesome5, route: '(protected)/teacher' },
  { name: 'quiz', library: MaterialIcons, route: '(protected)/quiz' },
  { name: 'holiday', library: Fontisto, route: '(protected)/holiday' },
  { name: 'report', library: Octicons, route: '(protected)/report' },
];

const Home = () => {
  const router = useRouter();

  return (
    <ScrollView>
    <View style={styles.container}>
      {icons.map((icon, index) => {
        const IconComponent = icon.library;
        return (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => router.push(icon.route)} // Navigate using Expo Router
          >
            <IconComponent name={icon.name} size={40} color="black" />
            <Text style={styles.text}>{icon.name}</Text>
          </TouchableOpacity>
        );
      })}
    
    </View>
    </ScrollView>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 1,
  },
  box: {
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});
