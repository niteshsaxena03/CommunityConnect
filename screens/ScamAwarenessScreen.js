import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ScamAwarenessScreen = () => {
  return (
    <LinearGradient
      colors={["#7B241C", "#2C3E50", "#16A085"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Scam Awareness and Protection</Text>
          {/* Example Scam Awareness Image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "data:image/jpeg;base64,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", // Image URL to be added
              }}
            />
          </View>

          <Text style={styles.text}>
            Scams are fraudulent schemes designed to deceive individuals or
            organizations for financial gain. They can take many forms,
            including phishing, lottery scams, investment fraud, and more. Being
            aware of common scams and taking preventive measures is essential
            for protecting yourself from falling victim.
          </Text>

          <Text style={styles.subheading}>Common Types of Scams:</Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Phishing:</Text> Fraudulent attempts to
              obtain sensitive information by pretending to be a trustworthy
              entity in an electronic communication.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Lottery Scams:</Text> Scammers inform
              victims that they have won a lottery or prize and request personal
              information or payment to claim it.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Investment Fraud:</Text> Scammers offer
              fake investment opportunities that promise high returns with
              little risk.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Job Scams:</Text> Fraudulent job
              advertisements that require an upfront payment or personal
              information before the job offer is even made.
            </Text>
          </View>

          <Text style={styles.subheading}>How to Protect Yourself:</Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Verify Information:</Text> Always check
              the legitimacy of offers, especially those received via email or
              messages.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>
                Avoid Sharing Personal Information:
              </Text>
              Never share sensitive information like passwords, bank details, or
              Social Security numbers over unsolicited communication.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Use Strong Passwords:</Text> Create
              unique, complex passwords for your accounts and change them
              regularly.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Report Scams:</Text> If you encounter a
              scam or are targeted by one, report it to the appropriate
              authorities immediately.
            </Text>
          </View>

          {/* Video Box Preview */}
          <View style={styles.videoContainer}>
            <Text style={styles.videoText}>
              Watch this video to learn more about Scam Awareness
            </Text>
            <View
              style={styles.videoPreview}
              onTouchStart={
                () =>
                  Linking.openURL(
                    "https://youtu.be/uFkAbv1RnA4?si=Y75SOVaRt4XIBmyT"
                  ) // Replace with your video URL
              }
            >
              <Text style={styles.videoPreviewText}>Play Video</Text>
            </View>
          </View>

          <Text style={styles.closingText}>
            Staying vigilant and informed about common scams will help protect
            you from falling prey to fraudulent schemes. Always be cautious and
            skeptical of unsolicited offers or requests for sensitive
            information.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  contentContainer: {
    alignItems: "center",
    width: "100%",
  },
  heading: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 22,
    color: "#fff",
    marginVertical: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
    lineHeight: 24,
  },
  videoContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  videoText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
  },
  videoPreview: {
    width: 350,
    height: 200,
    backgroundColor: "#1E2A47",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  videoPreviewText: {
    fontSize: 22,
    color: "#F39C12",
    fontWeight: "600",
  },
  closingText: {
    fontSize: 20,
    color: "#E5E8E8",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    fontFamily: "Roboto-Regular",
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 20,
  },
  imageContainer: {
    width: 350,
    marginVertical: 20,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  listContainer: {
    marginVertical: 10,
    alignItems: "flex-start",
  },
  listItem: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
    lineHeight: 24,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default ScamAwarenessScreen;
