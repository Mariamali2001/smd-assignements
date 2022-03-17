
import React, { useState } from "react";
import { useEffect } from "react";
import * as axios from 'axios';
import { Button, View,Dimensions, SafeAreaView, StyleSheet,Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import { Container } from "postcss";


const ListScreen =() =>{
const route = useRoute<RouteProps>();
  const { term } = route.params;

  const [universities, setUniversity] = useState<University[]>();

  useEffect(() => {
    Promise.all([
      axios.default.get(`http:/192.168.0.106:3000/universities/${term}`),
    ])
      .then(([ { data: universitiesResults }]) => {
        if (universitiesResults) setUniversity(universitiesResults);
      });
  }, []);


    return(
        <SafeAreaView style ={styles.cardContainer}  >
    

     
     <ScrollView>
       {universities?.map((university,index:number)=>(
          
        <Card   key={index}>
            
         <Card.Title style={{ fontWeight: "bold", fontSize: 17 }}>
                  {university.slug}
                  {"\n"}
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#8F6E5B",
                    }}
                  >
                    {university.name}
                  </Text>{" "}
                </Card.Title>
         <Card.Image style={{width: 350, height: 350}} source={{uri:university.image?university.image: "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"}}  resizeMode="cover"></Card.Image>
        
       <Text style={styles.textCard}>Address : {university.addressFmt}</Text>
       </Card>
       ))}

    </ScrollView>
    
    </SafeAreaView>
    )
}



type RouteParams = {
    term: string;
  };
  
  type RouteProps = {
    params: RouteParams
    name: string;
    key: string;
  };
  
  type University = {
    name: string;
    lat: number;
    lng: number;
    slug:string;
    image:string;
    addressFmt:string;
  }

  const deviceWidth= Math.round(Dimensions.get('window').width)
  const styles = StyleSheet.create({
   textCard: {
    color: "black",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "bold",
    marginTop: 8,
   textAlign:"justify"
    },

cardContainer:{
    width:deviceWidth ,
    backgroundColor:"#8F6E5B",


},

Container:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    
    }

}
  )
  export default ListScreen