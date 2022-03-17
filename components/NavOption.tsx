import React from 'react';
import { StyleSheet,Button, View ,TouchableOpacity,SafeAreaView,} from 'react-native';
import { useNavigation } from '@react-navigation/native'


const NavOption =(props: NavProps )=>{
  const navigation = useNavigation();
    return(
        <SafeAreaView>
         
      <View style={[styles.fixToText]}>
     
     <View style={[styles.shapeButton]}>
     {/* <TouchableOpacity>
       
     </TouchableOpacity>
       */}
      <Button 
      color = "#8F6E5B"
      title="Google Search " onPress ={() => props.term && navigation.navigate("MapScreen" as never, {
        term: props.term,
      } as never)}/>
       </View>
      <View style={[styles.shapeButton]}>
      <Button 
      color = "#8F6E5B"
      title="I'm feeling  Lucky" onPress ={() => props.term && navigation.navigate("MapScreen" as never, {
        term: props.term,
      } as never)}/>
   
      </View>
     
      </View>
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    shapeButton : {
        width:170,
        height:49,
        borderRadius:200/9,
        borderWidth:3,
        borderColor:'#8F6E5B',
        justifyContent: 'center',
        marginVertical:40,
        marginBottom:-30,
        marginLeft:0,
        backgroundColor:'#8F6E5B',
       
       
      },
      fixToText:{
        flexDirection:'row',
        justifyContent:"space-around",
       
       padding:5,
       
        
   },



});
type NavProps = {
  term: string;
}


export default NavOption;
