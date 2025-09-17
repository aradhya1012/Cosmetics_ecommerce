import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type LoginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back you’ve been missed.</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your email Id"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#999"
          />
          <Image source={require("../assets/gmail.png")} style={styles.inputIcon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#999"
          />
          <Image source={require("../assets/eye.png")} style={styles.inputIcon} />
        </View>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}
      onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Continue With</Text>
        <View style={styles.line} />
      </View>

      {/* Social Icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/google.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/apple.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/facebook.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* Register */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerNow}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
    paddingHorizontal: 24,
  },
  header: {
    flex: 0.5,
    backgroundColor: "#F1B0B0",
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#8A2E2E",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 22,
    color: "#666",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 40,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: "#333",
  },
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
    marginLeft: 8,
  },
  forgotContainer: {
    alignItems: "flex-end",
  },
  forgotText: {
    fontSize: 12,
    color: "#C86B6B",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#C86B6B",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 8,
    fontSize: 12,
    color: "#555",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#444",
  },
  registerNow: {
    fontSize: 14,
    color: "#C86B6B",
    fontWeight: "600",
  },
});
