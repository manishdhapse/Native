import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const FeesWithInstallments = () => {
  const [installments, setInstallments] = useState([
    { id: "1", amount: 5000, dueDate: "2025-02-15", status: "Pending" },
    { id: "2", amount: 5000, dueDate: "2025-03-15", status: "Pending" },
    { id: "3", amount: 5000, dueDate: "2025-04-15", status: "Pending" },
    { id: "4", amount: 5000, dueDate: "2025-05-15", status: "Paid" },
  ]);

  const handlePayNow = (id) => {
    // Payment logic (integrate with a payment gateway like Razorpay, Stripe, etc.)
    Alert.alert("Payment", `Proceeding to pay for Installment #${id}`);
  };

  const renderInstallment = ({ item }) => (
    <View style={styles.installmentItem}>
      <View>
        <Text style={styles.installmentText}>
          Installment #{item.id} - ₹{item.amount}
        </Text>
        <Text style={styles.dueDate}>Due Date: {item.dueDate}</Text>
        <Text
          style={[
            styles.status,
            item.status === "Paid" ? styles.paid : styles.pending,
          ]}
        >
          Status: {item.status}
        </Text>
      </View>
      {item.status === "Pending" && (
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => handlePayNow(item.id)}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fees Installment Plan</Text>
      <FlatList
        data={installments}
        keyExtractor={(item) => item.id}
        renderItem={renderInstallment}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  listContainer: {
    paddingBottom: 20,
  },
  installmentItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  installmentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dueDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  paid: {
    color: "green",
  },
  pending: {
    color: "red",
  },
  payButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default FeesWithInstallments;
