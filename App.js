import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screen components (you'll define these next)
import HomeScreen from "./screens/HomeScreen";
import BankingBasicsScreen from "./screens/BankingBasicsScreen";
import DigitalPaymentsScreen from "./screens/DigitalPaymentsScreen";
import GovernmentSchemesScreen from "./screens/GovernmentSchemesScreen";
import InsuranceScreen from "./screens/InsuranceScreen";
import InvestmentBasicsScreen from "./screens/InvestmentBasicsScreen";
import ScamAwarenessScreen from "./screens/ScamAwarenessScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BankingBasics" component={BankingBasicsScreen} />

        <Stack.Screen
          name="DigitalPayments"
          component={DigitalPaymentsScreen}
        />
        <Stack.Screen
          name="GovernmentSchemes"
          component={GovernmentSchemesScreen}
        />
        <Stack.Screen name="Insurance" component={InsuranceScreen} />
        <Stack.Screen
          name="InvestmentBasics"
          component={InvestmentBasicsScreen}
        />
        <Stack.Screen name="ScamAwareness" component={ScamAwarenessScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
