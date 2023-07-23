import { View, Text, TextInput } from "react-native";
import React from "react";

const MyInput = ({
  text,
  value,
  onChange,
  onChangeText,
  onBlur,
  error,
  multiline,
  secureTextEntry,
}) => {
  return (
    <View>
      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 0.6,
          color: "black",

          borderRadius: 3,
          padding: 8,
          marginBottom: 10,
        }}
        placeholder={text}
        placeholderTextColor={"gray"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onChangeText={onChangeText}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />

      {error && <Text style={{ fontSize: 12, color: "red" }}>{error}</Text>}
    </View>
  );
};

export default MyInput;
