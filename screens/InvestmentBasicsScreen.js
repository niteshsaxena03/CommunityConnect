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

const InvestmentBasicsScreen = () => {
  return (
    <LinearGradient
      colors={["#7B241C", "#2C3E50", "#16A085"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            Investment Basics: Understanding Investment Options
          </Text>
          {/* Example of Investment Image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "data:image/jpeg;base64,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", // Add your image URL here
              }}
            />
          </View>

          <Text style={styles.subheading}>1. What is Investment?</Text>
          <Text style={styles.text}>
            Investment refers to the process of allocating money or resources to
            an asset, business, or venture with the expectation of earning a
            return or profit over time. It's about putting your money to work
            for you and growing your wealth.
          </Text>

          <Text style={styles.subheading}>2. Why Should You Invest?</Text>
          <Text style={styles.text}>
            Investing helps you build wealth and achieve financial goals. It
            allows you to grow your money over time, providing you with a source
            of income or financial security for the future. With inflation
            eating into savings, investing can provide a higher return than
            keeping money in a savings account.
          </Text>

          <Text style={styles.subheading}>3. Types of Investments</Text>
          <Text style={styles.text}>
            There are several types of investments, each with its own risk and
            return profile:
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Stocks:</Text> Buying shares in a
              company gives you ownership and potential profits from its growth.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Bonds:</Text> Lending money to
              governments or companies in exchange for regular interest
              payments.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Mutual Funds:</Text> Pooling money with
              others to invest in a diversified portfolio managed by
              professionals.
            </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Real Estate:</Text> Investing in
              property to earn rental income or capital appreciation over time.
            </Text>
          </View>

          <Text style={styles.subheading}>4. Risk vs. Return</Text>
          <Text style={styles.text}>
            All investments come with some level of risk. Generally, higher
            returns come with higher risks. It's important to assess your risk
            tolerance and choose investment options that match your financial
            goals and time horizon.
          </Text>

          <Text style={styles.subheading}>5. Diversification</Text>
          <Text style={styles.text}>
            Diversification is the strategy of spreading your investments across
            different asset classes to reduce risk. By investing in a variety of
            sectors, industries, or countries, you can protect your portfolio
            from market volatility.
          </Text>

          <Text style={styles.subheading}>6. The Power of Compounding</Text>
          <Text style={styles.text}>
            Compounding is the process where the returns on your investment
            generate their own returns. Over time, this can lead to exponential
            growth of your wealth. The earlier you start investing, the more you
            benefit from compounding.
          </Text>

          {/* Video Box Preview */}
          <View style={styles.videoContainer}>
            <Text style={styles.videoText}>
              Watch this video to learn more about Investment Basics
            </Text>
            <View
              style={styles.videoPreview}
              onTouchStart={
                () =>
                  Linking.openURL(
                    "https://youtu.be/3UF0ymVdYLA?si=IRFw1kABs6AhAh5L"
                  ) // Replace with your video URL
              }
            >
              <Text style={styles.videoPreviewText}>Play Video</Text>
            </View>
          </View>

          <Text style={styles.closingText}>
            Investing wisely can help you achieve long-term financial stability
            and success. By understanding the basics of investment, you can make
            informed decisions that align with your goals and risk tolerance.
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
  text: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
    lineHeight: 24,
  },
  listContainer: {
    marginVertical: 10,
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
  bold: {
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
    marginBottom: 10,
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
});

export default InvestmentBasicsScreen;
