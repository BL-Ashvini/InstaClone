import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { PostData } from "../utilities/PostData";
import BottomTabs from "../components/home/BottomTabs";
import { BottomIcons } from "../utilities/BottomIcons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {PostData.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <View style={{ alignItems: "flex-end" }}>
        <BottomTabs icons={BottomIcons} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 40,
  },
});

export default HomeScreen;
