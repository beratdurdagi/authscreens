import { StyleSheet, Text, View ,Alert} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "./../../components/CustomButton/CustomButton";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from 'firebase/firestore';



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");

  const register = () => {
    if(email===""  || password==="" || phone==="" || userName===""){
        Alert.alert('Invalid Details', 'Please fill all the details', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
  
      }
      createUserWithEmailAndPassword(auth,email,password).then((UserCredential)=>{
        const user=UserCredential._tokenResponse.email
        const myUserUid=auth.currentUser.uid;
        console.log(user),
        console.log(UserCredential)
        setDoc(doc(db,"users",`${myUserUid}`),{
            email:user,
            phone:phone,
            password:password,
            userName:userName
           
    
          })
    
      })
    

      }
    
  
  return (
    <View>
      <View style={{ marginTop: 50, marginHorizontal: 15 }}>
        <CustomInput placeHolder={"username"} borderWidth={1} value={userName} setValue={setUserName} />
        <CustomInput placeHolder={"E-mail"} borderWidth={1} value={email} setValue={setEmail} />

        <CustomInput placeHolder={"password"} borderWidth={1} value={password} setValue={setPassword} />
        <CustomInput placeHolder={"phone"} borderWidth={1} value={phone} setValue={setPhone} />

        <CustomButton item={"register"} bgcolors="blue" radius={8} onPress={register} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
