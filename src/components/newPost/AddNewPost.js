import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import * as Yup from "yup";
import { Formik } from "formik";

const AddNewPost = () => {
  const PLACEHOLD_IMG =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  const [thumbnail, setThumbnail] = useState(PLACEHOLD_IMG);
  const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL required"),
    caption: Yup.string().max(2200, "caption reached max limit"),
  });
  return (
    <Formik
      style={{ flex: 1, marginVertical: 20 }}
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(value) => console.log(value)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              flexDirection: "row",
              margin: 15,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: thumbnail ? thumbnail : PLACEHOLD_IMG }}
              style={{ height: 100, width: 100 }}
            />
            <TextInput
              placeholder="Write Caption ..."
              placeholderTextColor={"gray"}
              multiline={true}
              onBlur={handleBlur("caption")}
              onChangeText={handleChange("caption")}
              value={values.caption}
              style={{
                color: "white",
                fontSize: 18,
                flex: 1,
                marginLeft: 10,
                alignSelf: "flex-start",
              }}
            />
            {errors.caption && (
              <Text style={{ color: "red", fontSize: 10 }}>
                {errors.caption}
              </Text>
            )}
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            placeholder="Write URL here.."
            placeholderTextColor={"gray"}
            onBlur={handleBlur("imageUrl")}
            onChangeText={handleChange("imageUrl")}
            onChange={(e) => setThumbnail(e.nativeEvent.text)}
            value={values.imageUrl}
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 10,
              alignSelf: "flex-start",
              marginTop: 10,
              marginBottom: 20,
            }}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red", fontSize: 10 }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({});
