import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type OnboardingNavProp = StackNavigationProp<RootStackParamList, "Onboarding">;

const Onboarding = () => {
  const navigation = useNavigation<OnboardingNavProp>();

  return (
    <View style={styles.container}>
      {/* Top Section with Image */}
      <ImageBackground
        source={require("../assets/onboarding.png")}
        style={styles.imageSection}
        resizeMode="cover"
      />

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Viorra</Text>
        <Text style={styles.subtitle}>Your Beauty, Delivered.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        {/* Line indicator */}
        <View style={styles.lineContainer}>
          <View style={styles.lineFilled} />
          <View style={styles.lineUnfilled} />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9A7A2",
  },
  imageSection: {
    flex: 1.6,
    width: "100%",
    zIndex: 10,
  },
  bottomSection: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C9A7A2",
    paddingHorizontal: 2,
    zIndex: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
    fontFamily: "Italiana",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 40,
    fontFamily: "Inter",
  },
  button: {
    backgroundColor: "#B84953",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  lineContainer: {
    flexDirection: "row",
    width: 172,
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  lineFilled: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lineUnfilled: {
    flex: 1,
    backgroundColor: "#D5C0BA",
  },
});
