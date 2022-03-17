import { StatusBar } from 'expo-status-bar';
import React,{ Component, useState } from 'react';


import { StyleSheet,Alert,Button, Text, View ,ImageBackground, TextInput,SafeAreaView,Image} from 'react-native';
import { Feather } from "@expo/vector-icons";
import NavOptions from '../components/NavOption' ;

const Homepage =() =>{
    const handlepress = () => {console.log("Welcome google ")};
    const [search, setSearch] = useState('');
    return(
        <SafeAreaView style={[styles.container]}>
         {/* <View> */}
        <ImageBackground source={require('../assets/back.png')} resizeMode="cover" style={styles.image}>
         <Image  style = {styles.profile} source={require('../assets/profile.png')}/>
        <Text style={styles.text} onPress={handlepress}>Google </Text>
       
        <View style={styles.SearchConatiner}>
       
        <Feather
            name="search"
            size={30}
            color="#8F6E5B"
            
            style={{  position:'absolute' ,  right: 0 , padding:2 }}
          />

            <Image  style={{  position:'absolute' ,  left: 0 , width :27, height:27, margin:5 }} source={require('../assets/microphone.png')}/>
 
        <TextInput
         placeholder="Search"
         onChangeText={(text: string) => setSearch(text)}
         value={search}
         autoCapitalize='none'

          />

          </View>
          
        <View style={styles.navbarback}>
            
       <View style={styles.space} >
       <Image style = {styles.icons} source={require('../assets/settings.png')}/>
       <Image style = {styles.icons} source={require('../assets/marker.png')}/>
       <Image style = {styles.icons} source={require('../assets/home.png')}/>
       <Image style = {styles.icons} source={require('../assets/envelope.png')}/>
       <Image style = {styles.icons} source={require('../assets/tab.png')}/>

        </View> 

        </View>
        
        <NavOptions term={search} />

         </ImageBackground>
         {/* </View> */}
         <StatusBar style="auto" />
     </SafeAreaView>
    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
      },

  box : {
    flex: 1 ,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"  
  },

  icons: {
   height:28,
   width:28,
   margin:1,
  marginRight:52,
  }, 
  
  text: {
    color: "#8F6E5B",
    fontSize: 55,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    
  },
 
  SearchConatiner:{
    backgroundColor:"white",
    marginVertical:10,
    width:390,
    height:39,
    borderRadius:120/3,
    flexDirection:'row',
    justifyContent: "center"

  },
  navbarback:{
    width:"115%",
    height:70,
    borderRadius:160/11,
    borderWidth:8,
    backgroundColor:'#8F6E5B',
    borderColor:"#8F6E5B",
    marginTop:20,
    position:'absolute',
    bottom:0,
    justifyContent:'center',
  },
  space:{
    flexDirection:'row-reverse',
    justifyContent:"space-around",
  },
  profile:{
           
            margin: 35,
            position: "absolute",
            top: 20,
            right: 0,
            width:45,
            height:45,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            borderWidth:2,
            borderRadius: 40,
            borderColor: "white",
        }
  
  });


  export default Homepage;
