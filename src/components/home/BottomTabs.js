import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icons = ({ icon, activeTab, setActiveTab }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveTab(icon.name);
        }}
      >
        {icon.name !== "Profile" ? (
          <View>
            {icon.active == "shopping" ||
            icon.inactive == "shopping-outline" ? (
              <MaterialCommunityIcons
                name={activeTab === icon.name ? icon.active : icon.inactive}
                size={33}
                color={"white"}
              />
            ) : (
              <Ionicons
                name={activeTab === icon.name ? icon.active : icon.inactive}
                size={33}
                color={"white"}
              />
            )}
          </View>
        ) : (
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            }}
            style={{
              borderRadius: 20,
              height: 33,
              width: 33,
              resizeMode: "contain",
              borderWidth: 1,
              borderColor: "white",
            }}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icons
            icon={icon}
            key={index}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  wrapper: {
    position: "absolute",
    backgroundColor: "black",
    bottom: "3%",
    zIndex: 999,
    width: "100%",
  },
});
