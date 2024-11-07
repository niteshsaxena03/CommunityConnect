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

const GovernmentSchemesScreen = () => {
  return (
    <LinearGradient
      colors={["#7B241C", "#2C3E50", "#16A085"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            Government Financial Schemes for Rural Development
          </Text>
          {/* Example of Digital Payments Image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjp7CqiOdF2vBDBGz775NdbnHrcO12ex5Ig&s", // Example image URL
              }}
            />
          </View>

          <Text style={styles.subheading}>
            1. PM Kisan Samman Nidhi (PM-KISAN)
          </Text>
          <Text style={styles.text}>
            The PM-KISAN scheme provides income support of ₹6,000 per year to
            farmers. This is a direct benefit transfer to farmers' bank accounts
            in three equal installments. The scheme aims to support small and
            marginal farmers in rural areas.
          </Text>

          <Text style={styles.subheading}>
            2. MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act)
          </Text>
          <Text style={styles.text}>
            MGNREGA ensures the right to work for rural families. It guarantees
            100 days of paid employment every year for rural households willing
            to do unskilled manual labor. This empowers rural citizens by
            offering them a livelihood.
          </Text>

          <Text style={styles.subheading}>
            3. Pradhan Mantri Awas Yojana (PMAY-Gramin)
          </Text>
          <Text style={styles.text}>
            The PMAY-Gramin scheme aims to provide affordable housing to rural
            families. It provides financial assistance for the construction of
            pucca houses, ensuring better living conditions for rural people.
          </Text>

          <Text style={styles.subheading}>
            4. National Rural Livelihood Mission (NRLM)
          </Text>
          <Text style={styles.text}>
            The NRLM focuses on empowering rural women by providing them with
            skills, resources, and support to start their own businesses and
            contribute to the rural economy.
          </Text>

          <Text style={styles.subheading}>5. Atal Pension Yojana (APY)</Text>
          <Text style={styles.text}>
            The Atal Pension Yojana provides a pension to people working in the
            unorganized sector, especially in rural areas. This scheme helps
            provide financial security in old age for rural workers.
          </Text>

          <Text style={styles.subheading}>6. Kisan Credit Card Scheme</Text>
          <Text style={styles.text}>
            The Kisan Credit Card scheme provides farmers with timely access to
            credit for agriculture and allied activities. This helps farmers
            meet their financial needs for seeds, fertilizers, and other inputs
            for farming.
          </Text>

          {/* Video Box Preview */}
          <View style={styles.videoContainer}>
            <Text style={styles.videoText}>
              Watch this video to learn more about Govt. Schemes
            </Text>
            <View
              style={styles.videoPreview}
              onTouchStart={() =>
                Linking.openURL(
                  "https://www.youtube.com/live/8hXH4vxfbkA?si=u39KAMwCrI97zMGi"
                )
              } // Replace with your video URL
            >
              <Text style={styles.videoPreviewText}>Play Video</Text>
            </View>
          </View>

          <Text style={styles.closingText}>
            These schemes are designed to uplift rural areas by improving the
            livelihood and financial security of rural families, empowering them
            to become self-sufficient.
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
    marginBottom:10,
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

export default GovernmentSchemesScreen;
