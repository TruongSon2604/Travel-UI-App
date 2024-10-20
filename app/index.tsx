// import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
// import React from "react";
// import { Stack } from "expo-router";
// import Colors from "@/constants/Colors";
// import { Ionicons } from "@expo/vector-icons";
// import AntDesign from "@expo/vector-icons/AntDesign";
// const indexLogin = () => {
//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerTransparent: true,
//           headerTitle: "",
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
//               <AntDesign name="leftcircleo" size={24} color="black" />
//             </TouchableOpacity>
//           ),

//         }}
//       />
//       <View>
//         <ImageBackground />
//       </View>
//     </>
//   );
// };

// export default indexLogin;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{ marginLeft: 20 }}
            >
              <AntDesign name="leftcircleo" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://play-lh.googleusercontent.com/NqAyU0vJMDdXNyVjSDs4c0L8E_47YoCca8U5MNzHAXkkGJN0tcuIByBD3IkSLGWB_w",
          }}
          style={styles.background}
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Welcome Back!</Text>

            <View>
              <Text style={{ color: "white" }}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
            <View>
              <Text style={{ color: "white" }}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                router.push("/(tabs)"); // Điều hướng đến folder (tabs)
              }}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    flex: 1,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
