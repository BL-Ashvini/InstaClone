import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/insta_logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewPost");
          }}
        >
          <Image
            source={require("../../assets/add_post.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/white_heart.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image source={require("../../assets/msg.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    resizeMode: "contain",
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "center",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    alignItems: "center",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 20,
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
export default Header;
