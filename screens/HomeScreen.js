// HomeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Financial Awareness</Text>
      <Text style={styles.subheading}>
        Empowering Rural Communities with Financial Knowledge
      </Text>

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BankingBasics")}
      >
        <Text style={styles.buttonText}>Banking Basics</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SavingsAndBudgeting")}
      >
        <Text style={styles.buttonText}>Saving and Budgeting Tips</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DigitalPayments")}
      >
        <Text style={styles.buttonText}>Digital Payments and Safety</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GovernmentSchemes")}
      >
        <Text style={styles.buttonText}>Government Schemes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Insurance")}
      >
        <Text style={styles.buttonText}>Insurance Awareness</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("InvestmentBasics")}
      >
        <Text style={styles.buttonText}>Investment Basics</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ScamAwareness")}
      >
        <Text style={styles.buttonText}>Scam Awareness and Protection</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f5f7fa", // Light background
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#4a90e2", // Blue color for buttons
    alignItems: "center",
    marginVertical: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
