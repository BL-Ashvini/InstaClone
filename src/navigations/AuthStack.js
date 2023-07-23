import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/auth/LoginScreen";

const AuthStack = () => {
  const Stack = createStackNavigator();
  const screenOptions = { headerShown: false };
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
