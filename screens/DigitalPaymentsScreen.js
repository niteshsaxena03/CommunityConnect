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

const DigitalPaymentsScreen = () => {
  return (
    <LinearGradient
      colors={["#7B241C", "#2C3E50", "#16A085"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Understanding Digital Payments</Text>

          {/* Example of Digital Payments Image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "data:image/jpeg;base64,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", // Example image URL
              }}
            />
          </View>

          <Text style={styles.subheading}>
            Learn about how digital payments make transactions faster, safer,
            and more convenient.
          </Text>

          <View style={styles.pointsContainer}>
            <Text style={styles.pointHeading}>What is Digital Payment?</Text>
            <Text style={styles.pointText}>
              Digital payments allow you to pay for goods and services
              electronically without the need for physical cash. They can be
              made using a variety of methods such as mobile wallets,
              credit/debit cards, and online banking.
            </Text>

            <Text style={styles.pointHeading}>Types of Digital Payments:</Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Mobile Wallets</Text>: Apps like
              Google Pay, Paytm, and Apple Pay let you store your card details
              securely and pay directly from your phone.
            </Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Bank Transfers</Text>: You can
              transfer money directly from your bank account to another person's
              account or to pay for goods/services.
            </Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Credit and Debit Cards</Text>:
              Physical or virtual cards allow you to make secure payments at
              stores or online.
            </Text>

            <Text style={styles.pointHeading}>
              Benefits of Digital Payments:
            </Text>
            <Text style={styles.pointText}>
              • Digital payments are faster, making shopping and paying bills
              more convenient.
            </Text>
            <Text style={styles.pointText}>
              • You can make payments anytime, anywhere, even when you're not
              carrying cash.
            </Text>
            <Text style={styles.pointText}>
              • They offer enhanced security through encryption and two-factor
              authentication.
            </Text>

            <Text style={styles.pointHeading}>
              How to Make a Digital Payment?
            </Text>
            <Text style={styles.pointText}>
              Making a digital payment is simple:
              <Text style={styles.boldText}>
                {" "}
                Choose a payment method, enter the payment details, and confirm
                the transaction.
              </Text>
            </Text>

            <Text style={styles.pointHeading}>
              Popular Digital Payment Apps:
            </Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Paytm</Text> - A popular mobile
              wallet for making online payments and recharges.
            </Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Google Pay</Text> - A simple and
              secure payment app for transferring money and paying bills.
            </Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>PhonePe</Text> - Allows users to
              send money, pay bills, and shop online.
            </Text>

            <Text style={styles.pointHeading}>
              Security in Digital Payments:
            </Text>
            <Text style={styles.pointText}>
              While digital payments are generally secure, always ensure that
              your app and payment details are protected. Use two-factor
              authentication (2FA), strong passwords, and only make payments on
              trusted platforms.
            </Text>

            <Text style={styles.pointHeading}>
              Why Is It Important to Understand Digital Payments?
            </Text>
            <Text style={styles.pointText}>
              Understanding digital payments helps you manage your money more
              efficiently and securely. It is an essential skill in the modern
              world as more transactions move online.
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Digital payments are becoming a part of everyday life. Whether
            you're shopping online, paying for services, or sending money to
            friends, knowing how to use these systems can make your financial
            transactions easier and faster.
          </Text>

          <Text style={styles.paragraph}>
            Explore the world of digital payments and start making secure and
            hassle-free payments today!
          </Text>

          {/* Video Box Preview */}
          <View style={styles.videoContainer}>
            <Text style={styles.videoText}>
              Watch this video to learn more about Digital Payments
            </Text>
            <View
              style={styles.videoPreview}
              onTouchStart={() =>
                Linking.openURL(
                  "https://youtu.be/W3CGCAEWobk?si=6Wz5d96pZRb3o_yG"
                )
              } // Replace with your video URL
            >
              <Text style={styles.videoPreviewText}>Play Video</Text>
            </View>
            <Text style={styles.closingText}>
              Embrace the future of finance with digital payments! Start making
              secure and easy transactions right from your phone today!
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  contentContainer: {
    padding: 20,
  },
  closingText: {
    width:350,
    fontSize: 20,
    color: "#E5E8E8",
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 10,
    fontFamily: "Roboto-Regular",
    fontWeight: "600",
    letterSpacing: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  pointsContainer: {
    marginTop: 20,
  },
  pointHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  pointText: {
    fontSize: 14,
    color: "white",
    marginVertical: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#16A085",
  },
  paragraph: {
    fontSize: 14,
    color: "white",
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  link: {
    fontSize: 16,
    color: "#1E90FF",
    textDecorationLine: "underline",
    marginVertical: 5,
  },
  videoContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  videoText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
  },
  videoPreview: {
    width: 300,
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
});

export default DigitalPaymentsScreen;
