import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/config';


//Const APIURL = 
interface AuthProps {
  authState: {
    authenticated: boolean | null;
    username: string | null;
    token: string | null;
  };
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
    username: string | null;
    token: string | null;
  }>({
    authenticated: null,
    username: null,
    token: null,
  });

  // Load authentication state from AsyncStorage on app startup
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const username = await AsyncStorage.getItem('username');
        if (token && username) {
          setAuthState({
            authenticated: true,
            username: username,
            token: token,
          });
        }
      } catch (error) {
        console.error("Error loading auth state:", error);
      }
    };
    loadAuthState();
  }, []);
  
  
  const login = async (username: string, password: string) => {
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("email", username);
      formData.append("password", password);
  
      // Request options for the fetch
      const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
      };
  
      // Send login request using fetch with async/await
      const response = await fetch(`${config.apiUrl}/api/login`, requestOptions);
      const result = await response.json();
  
      if (result) {
        console.log(result); // Log the result for debugging
  
        // Successful login
        Alert.alert("Login Successful", `Welcome, ${result.result.name}!`);
  
        // Persist the token and username in AsyncStorage
        await AsyncStorage.setItem('authToken', result.result.Token);
        await AsyncStorage.setItem('username', result.result.name);
  
        // Update the authentication state
        setAuthState({
          authenticated: true,
          username: result.result.name,
          token: result.result.Token,
        });
      } else {
        // Login failed
        Alert.alert("Login Failed", "Invalid email or password");
      }
    } catch (error) {
      // Handle errors in case of network failure or other issues
      console.error(error);
      Alert.alert("Error", "Something went wrong, please try again later.");
    }
  };
  

  const logout = async () => {
    try {
      // Clear the token and username from AsyncStorage
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('username');

      setAuthState({
        authenticated: false,
        username: null,
        token: null,
      });

      Alert.alert("Logged Out", "You have been logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
