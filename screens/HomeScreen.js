import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Expo Linear Gradient

export default function HomeScreen({ navigation }) {
  // Animation setup using React Native's Animated API
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(1);

  // Trigger the fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Animate button scale on load
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={["#2C3E50", "#16A085"]} // Darker bluish-green gradient
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.headingContainer, { opacity: fadeAnim }]}>
          <Text style={styles.heading}>Financial Awareness</Text>
          <Text style={styles.subheading}>
            Empowering Rural Communities with Financial Knowledge
          </Text>
        </Animated.View>

        {/* Navigation Buttons with cool animations */}
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("BankingBasics")}
          >
            <Text style={styles.buttonText}>Banking Basics</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("SavingsAndBudgeting")}
          >
            <Text style={styles.buttonText}>Saving and Budgeting Tips</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("DigitalPayments")}
          >
            <Text style={styles.buttonText}>Digital Payments and Safety</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("GovernmentSchemes")}
          >
            <Text style={styles.buttonText}>Government Schemes</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Insurance")}
          >
            <Text style={styles.buttonText}>Insurance Awareness</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("InvestmentBasics")}
          >
            <Text style={styles.buttonText}>Investment Basics</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("ScamAwareness")}
          >
            <Text style={styles.buttonText}>Scam Awareness and Protection</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    height: "100%",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  headingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  subheading: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: "Roboto-Regular",
  },
  button: {
    width: 300, // Set button width to 85% of the screen width
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#063B8D", // Blue color for buttons (matches with gradient)
    alignItems: "center",
    marginVertical: 12,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
