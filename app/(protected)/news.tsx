import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, Stack } from 'expo-router';
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";

const GetNews = () => {
  const getnewsData = async () => {

  }
};

const NewsPage = () => {
  const [post, setPostdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res.data);
        setPostdata(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message); // Store error message
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  return (
    <>
      <Stack.Screen options={{ title: 'News' }} />


      <ScrollView  style={styles.container}>
        <View style={styles.row}>
          {post.map((item) => (
            <View style={styles.col} key={item.id}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Details", { id: item.id })}
              >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        </ScrollView>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping to the next line
    justifyContent: "space-between",
  },
  col: {
    width: "50%", // 3 columns in a row
    backgroundColor: "#f9f9f9",
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    elevation: 2, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default NewsPage;