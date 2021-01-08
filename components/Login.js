import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { facebookPrimary, facebookSecondary } from "../colors";

const Login = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../images/facebook.png")}
        style={{
          width: 500,
          height: 50,
          resizeMode: "contain",
          marginBottom: 60,
        }}
      />
      <View style={styles.loginContainer}>
        <TextInput style={styles.textBox} placeholder="E-Mail Address" />
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 17, marginBottom: 20 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{ ...styles.loginBtn, backgroundColor: facebookSecondary }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, color: "black" }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    marginTop: 30,
  },
  textBox: {
    borderColor: "black",
    borderWidth: 1,
    width: 350,
    padding: 10,
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 3,
  },
  loginBtn: {
    width: 350,
    backgroundColor: facebookPrimary,
    textAlign: "center",
    padding: 10,
    borderRadius: 3,
    marginBottom: 20,
  },
});

export default Login;
