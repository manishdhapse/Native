import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const EventCalendar = () => {
  // Sample events data
  const [events, setEvents] = useState({
    "2025-01-20": [{ name: "Math Exam", time: "10:00 AM" }],
    "2025-01-22": [{ name: "Science Project Due", time: "11:59 PM" }],
    "2025-01-25": [{ name: "Sports Day", time: "8:00 AM" }],
  });

  const [selectedDate, setSelectedDate] = useState("");

  const renderEvents = () => {
    if (!selectedDate || !events[selectedDate]) {
      return <Text style={styles.noEvents}>No events for this day.</Text>;
    }

    return (
      <FlatList
        data={events[selectedDate]}
        keyExtractor={(item, index) => `${selectedDate}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventTime}>{item.time}</Text>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Calendar Component */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: "blue" };
            return acc;
          }, {}),
          [selectedDate]: { selected: true, marked: true, selectedColor: "blue" },
        }}
      />

      {/* Selected Date */}
      <Text style={styles.selectedDate}>
        {selectedDate ? `Events for ${selectedDate}` : "Select a date to see events"}
      </Text>

      {/* Events List */}
      <View style={styles.eventList}>{renderEvents()}</View>
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
  selectedDate: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
  },
  eventList: {
    marginTop: 10,
    flex: 1,
  },
  noEvents: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
    marginTop: 20,
  },
  eventItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  eventTime: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});

export default EventCalendar;
