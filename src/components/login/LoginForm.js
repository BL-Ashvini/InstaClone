import { View, Text, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import MyInput from "../MyInput";
import MyButton from "../MyButton";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    uname: Yup.string()
      .required("Enter valid Username")
      .min(3, "Enter valid username"),
    pass: Yup.string().min(6, "Password is weak"),
  });
  return (
    <Formik
      initialValues={{ uname: "", pass: "" }}
      validationSchema={validationSchema}
      onSubmit={(value) => console.log(value)}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
        <View style={{ marginTop: 80 }}>
          <MyInput
            text={"Enter Username"}
            onBlur={handleBlur("uname")}
            onChange={handleChange("uname")}
            onChangeText={() => {}}
            value={values?.uname}
            error={errors?.uname}
          />
          <MyInput
            text={"Enter Password"}
            onBlur={handleBlur("pass")}
            onChange={handleChange("pass")}
            onChangeText={() => {}}
            value={values?.pass}
            error={errors?.pass}
            secureTextEntry={true}
          />
          <View style={{ alignItems: "flex-end", marginBottom: 20 }}>
            <Text style={{ color: "dodgerblue" }}>Forgot password?</Text>
          </View>
          <MyButton title={"Log In"} />
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Text>
              Don't have an account?
              <Text style={{ color: "dodgerblue" }}> Sign Up</Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
