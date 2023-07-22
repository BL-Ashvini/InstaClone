import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AddNewPost from "../components/newPost/AddNewPost";
const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddNewPost />
    </SafeAreaView>
  );
};
const Header = () => {
  return (
    <View style={styles.headercontainer}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
        New Post
      </Text>
      <Text> </Text>
    </View>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 40,
  },
  headercontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 15,
  },
});
