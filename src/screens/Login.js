import { StyleSheet, Text, View,Alert } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from './../../components/CustomButton/CustomButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation=useNavigation()
    const login=()=>{
        
          
        signInWithEmailAndPassword(auth,email,password).then((UserCredential)=>{
            const user=UserCredential._tokenResponse.email;
            const myuserId=auth.currentUser.uid
        })
    }
  return (
    <View style={{marginTop:50,marginHorizontal:15}}>
      <CustomInput placeHolder={'E-mail'} borderWidth={1} value={email} setValue={setEmail}/>
      <CustomInput placeHolder={"password"}  borderWidth={1} value={password} setValue={setPassword}/>
      

      <CustomButton item={'LOGIN'} bgcolors='blue' radius={8}onPress={login}/>
      <CustomButton item={'Register'} bgcolors='red' radius={6} onPress={()=>navigation.navigate('Register')}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})