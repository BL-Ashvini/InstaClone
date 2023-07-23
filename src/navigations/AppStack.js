import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";

const AppStack = () => {
  const Stack = createStackNavigator();
  const screeOption = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screeOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewPost" component={NewPostScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
