import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button_container} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button_text: {
    color: "white",
    fontSize: 20,
  },
  button_container: {
    backgroundColor: "dodgerblue",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
});
