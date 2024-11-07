import React from "react";
import { View, Text, StyleSheet, ScrollView, Linking,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BankingBasicsScreen = () => {
  return (
    <LinearGradient
      colors={["#7B241C", "#2C3E50", "#16A085"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Understanding Banking Basics</Text>

          {/* Add your Image URL here */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "data:image/png;base64,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",
              }} // Replace with your image URL
            />
          </View>

          <Text style={styles.subheading}>
            Learn about how banks help people save money, borrow money, and keep
            money safe.
          </Text>

          <View style={styles.pointsContainer}>
            <Text style={styles.pointHeading}>What is a Bank?</Text>
            <Text style={styles.pointText}>
              A bank is a place where people keep their money safe. Banks help
              people by offering services like saving money, borrowing money,
              and making payments.
            </Text>

            <Text style={styles.pointHeading}>Types of Bank Accounts:</Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Savings Account</Text>: This is a
              safe place to keep your money. You can save money for the future,
              and sometimes the bank gives you interest (extra money) for
              keeping your money there.
            </Text>
            <Text style={styles.pointText}>
              • <Text style={styles.boldText}>Current Account</Text>: This
              account is for people who need to use their money often, like for
              paying bills. There is usually no interest given in this account.
            </Text>

            <Text style={styles.pointHeading}>How Do Banks Help You?</Text>
            <Text style={styles.pointText}>
              • Banks allow you to <Text style={styles.boldText}>save</Text>{" "}
              money securely, so it doesn’t get lost or stolen.
            </Text>
            <Text style={styles.pointText}>
              • If you need to buy something expensive, like a car, banks can{" "}
              <Text style={styles.boldText}>loan</Text> you money, which you pay
              back over time.
            </Text>
            <Text style={styles.pointText}>
              • You can also use the bank to send money to other people, pay for
              things online, or even withdraw money from ATMs.
            </Text>

            <Text style={styles.pointHeading}>What is a Loan?</Text>
            <Text style={styles.pointText}>
              A loan is money that the bank gives you now, which you promise to
              pay back later. The bank will charge you extra money, called{" "}
              <Text style={styles.boldText}>interest</Text>, for the loan.
            </Text>

            <Text style={styles.pointHeading}>Online Banking:</Text>
            <Text style={styles.pointText}>
              Today, you don’t even have to go to the bank to do things like
              check your balance or transfer money. You can use your phone or
              computer to access your account through something called{" "}
              <Text style={styles.boldText}>Online Banking</Text>.
            </Text>

            <Text style={styles.pointHeading}>
              Why Is It Important to Understand Banking?
            </Text>
            <Text style={styles.pointText}>
              Understanding how banks work helps you keep your money safe,
              borrow money when you need it, and grow your savings. It’s an
              important part of managing your finances and preparing for your
              future.
            </Text>
          </View>

          <Text style={styles.paragraph}>
            Knowing about banking is important because it helps you make smart
            decisions with your money. Whether you are saving for something big,
            like a bike or phone, or just want to keep your money safe, banks
            play a big role.
          </Text>

          <Text style={styles.paragraph}>
            It's also good to know that banks help keep your money safe from
            theft and offer ways for you to earn a little extra money through
            interest. They also help people who need to borrow money for things
            like education, buying a house, or starting a business.
          </Text>

          <Text style={styles.paragraph}>
            In today’s world, banks are not just about saving money. You can
            also use your bank account to pay bills, buy things online, and even
            invest for your future. By understanding how banks work, you are
            taking the first step towards managing your money in a smart way.
          </Text>

          {/* Video Box Preview */}
          <View style={styles.videoContainer}>
            <Text style={styles.videoText}>
              Watch this video to learn more about Banking Basics:
            </Text>
            <View
              style={styles.videoPreview}
              onTouchStart={() =>
                Linking.openURL(
                  "https://youtu.be/WT8Gei4OHJc?si=JzJhThEkfYcO-LYV"
                )
              } // Replace with your video URL
            >
              <Text style={styles.videoPreviewText}>Play Video</Text>
            </View>
          </View>

          <Text style={styles.closingText}>
            Start learning about banking today, and take the first step towards
            managing your money wisely!
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Roboto-Bold",
    letterSpacing: 1.2,
  },
  subheading: {
    fontSize: 20,
    color: "#D5DBDB",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    lineHeight: 28,
  },
  pointsContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  pointHeading: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
  pointText: {
    fontSize: 18,
    color: "#E5E8E8",
    lineHeight: 26,
    textAlign: "left",
    marginBottom: 15,
    paddingHorizontal: 15,
    fontFamily: "Roboto-Regular",
  },
  boldText: {
    fontWeight: "bold",
    color: "#F39C12",
  },
  paragraph: {
    fontSize: 18,
    color: "#E5E8E8",
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: "Roboto-Regular",
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
    marginTop: 30,
    paddingHorizontal: 10,
    fontFamily: "Roboto-Regular",
    fontWeight: "600",
    letterSpacing: 1,
  },
  imageContainer: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 250,
    borderRadius: 15,
    marginBottom: 30,
  },
});

export default BankingBasicsScreen;
