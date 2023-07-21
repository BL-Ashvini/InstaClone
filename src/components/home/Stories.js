import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { Users } from "../../utilities/Users";

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <View style={styles.stories} key={index}>
            <Image source={{ uri: story?.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story?.name.length > 5
                ? story.name.slice(0, 4) + "..."
                : story?.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  story: {
    height: 70,
    width: 70,
    resizeMode: "cover",
    marginLeft: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8050",
  },
  stories: {
    alignItems: "center",
  },
});

export default Stories;
