import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Acadamic') iconName = 'school-outline';
          if (route.name === 'Profile') iconName = 'person-outline';
          if (route.name === 'Settings') iconName = 'settings-outline';
          // if (route.name === 'Donate') iconName = 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Acadamic" options={{ headerShown: false }}  component={require('./home').default} />
      <Tab.Screen name="Profile" options={{ headerShown: false }}  component={require('./profile').default} />
      <Tab.Screen name="Settings"  options={{ headerShown: false }}  component={require('./settings').default} />
      {/* <Tab.Screen name="Donate"  options={{ headerShown: false }}  component={require('./Donate').default} /> */}
    </Tab.Navigator>
  );

}