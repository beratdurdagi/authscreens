import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomInput = ({
  value,
  setValue,
  placeHolder,
  secureTextEntry,
  fg,
  borderWidth,
  padding,
  radius
}) => {
  return (
    <View style={{ ...styles.container, borderWidth: borderWidth || 1 ,padding:padding || 10,paddingHorizontal:5,borderRadius:radius|| 5}}>
      <TextInput
        style={styles.Input}
        placeholder={placeHolder}
        placeholderTextColor={fg || "gray"}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",

    borderWidth: 1,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  Input: { padding: 10, fontFamily: "Nunito-Italic" },
});
