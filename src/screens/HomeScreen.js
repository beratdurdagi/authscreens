import { Pressable, StyleSheet, Text, View ,} from 'react-native'
import React,{useState,useEffect} from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import { signOut } from "firebase/auth";
import CustomButton from '../../components/CustomButton/CustomButton';


const HomeScreen = () => {
  const email = auth.currentUser.email
  const useruid=auth.currentUser.uid
  const userDocRef = doc(db,"users",useruid)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const snap = await getDoc(userDocRef)
      console.log(snap)
      
      setUser({email, ...snap.data()})
     
    }
    getUser()

  },[])

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("login");
      })
      .catch((err) => {
        console.log(err);
      });
  };


 
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
     <View><Text>
      {user.userName}</Text></View>

     <CustomButton item={'Exit'} bgcolors='blue'  onPress={signOutUser}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})