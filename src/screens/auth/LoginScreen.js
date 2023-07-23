import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import LoginForm from "../../components/login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <InstaLogo />
      <LoginForm />
    </View>
  );
};
const InstaLogo = () => (
  <View style={styles.instalogo}>
    <Image source={require("../../assets/insta.png")} style={styles.logo} />
  </View>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    paddingTop: 50,
    paddingHorizontal: 12,
  },
  instalogo: {
    marginTop: 60,

    alignItems: "center",
  },
  logo: { height: 100, width: 100 },
});
