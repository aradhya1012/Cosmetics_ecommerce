import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

type RegisterScreenProp = StackNavigationProp<RootStackParamList, "Register">;

const Register: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProp>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Join The Glow!</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email Address"
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

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#999"
          />
          <Image source={require("../assets/eye.png")} style={styles.inputIcon} />
        </View>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Already a Member */}
      <View style={styles.loginRedirectContainer}>
        <Text style={styles.loginRedirectText}>Already a Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginNow}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5", // soft pink background
    paddingHorizontal: 24,
  },
  header: {
    backgroundColor: "#EFB7B7",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#8A2E2E",
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
  registerButton: {
    backgroundColor: "#C86B6B",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  loginRedirectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginRedirectText: {
    fontSize: 14,
    color: "#444",
  },
  loginNow: {
    fontSize: 14,
    color: "#C86B6B",
    fontWeight: "600",
  },
});
