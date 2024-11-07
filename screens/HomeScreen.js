import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(1);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1.1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={["#1A5276", "#641E16", "#145A32"]} // Dark shades of blue, red, and green
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.headingContainer, { opacity: fadeAnim }]}>
          <Text style={styles.heading}>Financial Awareness</Text>
          <Text style={styles.subheading}>
            Empowering Rural Communities with Financial Knowledge
          </Text>
        </Animated.View>

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

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Made by Nitesh Saxena</Text>
        </View>
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
    width: 350, // Set button width to 85% of the screen width
    padding: 15,
    borderRadius: 10,
    backgroundColor: "transparent", // Transparent background for the gradient
    alignItems: "center",
    marginVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 2, // Visible border width
    borderColor: "#3498DB", // Dark Blue border color for contrast
    background: "linear-gradient(to right, #2980B9, #27AE60, #C0392B)", // Gradient effect
    borderRadius: 10, // Rounded corners
    overflow: "hidden", // Ensure rounded corners don't break
    shadowColor: "#2980B9", // Subtle shadow for a glowing effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
