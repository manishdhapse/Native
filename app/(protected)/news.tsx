import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, Stack } from 'expo-router';
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

const NewsPage = () => {
  const [post, setPostdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPostdata(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'News' }} />

      <ScrollView style={styles.container}>
        {loading ? (
          <ActivityIndicator animating={loading} size="large" color="#6200ea" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <View style={styles.grid}>
            {post.map((item) => (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardBody}>{item.body}</Text>
                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() => navigation.navigate("Details", { id: item.id })}
                >
                  <Text style={styles.cardButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping to the next line
    justifyContent: "space-evenly", // Space out items evenly
  },
  card: {
    width: "48%", // 2 cards per row with space between them
    backgroundColor: "#ffffff",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 3, // Material Design elevation (shadow on Android)
    shadowColor: "#000", // Shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333333",
  },
  cardBody: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
    lineHeight: 20,
  },
  cardButton: {
    backgroundColor: "#6200ea",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  cardButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
});

export default NewsPage;
