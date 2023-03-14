import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./../CustomButton/";
import { useNavigation } from "@react-navigation/native";




const SocailSignInButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomButton
        item="Sign In with Facebook"
        bgcolors={"#E7EAF4"}
        fgColors={"#4765A9"}
        onPress={()=>navigation.navigate('Home')}
      />

      <CustomButton
        item="Sign In with Google  "
        bgcolors={"#FAE9EA"}
        fgColors={"#DD4D44"}
        onPress={()=>navigation.navigate('Home')}
      />

      <CustomButton
        item="Sign In with Apple"
        bgcolors={"e3e3e3"}
        fgColors={"#363636"}
        onPress={()=>navigation.navigate('Home')}
      />

     
    </>
  );
};

export default SocailSignInButton;
