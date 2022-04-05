import React, { useRef }  from "react";
import { Dimensions, Image,View } from "react-native";
const deviceWidth= Math.round(Dimensions.get('window').width)
const deviceHieght= Math.round(Dimensions.get('window').height)
import Carousel from 'react-native-snap-carousel'; 
import { useState } from "react";
import { Pagination } from "react-native-snap-carousel";

const CarouselOption = ({imageCards}:carouselProps)=>{
     const ref = useRef(null);
     const [ImageIndex, setImageIndex] = useState(0);
     const OnChoose =(ImageIndex :number) =>{
         setImageIndex(ImageIndex)
     };

    return (

       <View>
       < Carousel
       
       layout="default"
       ref={ref}
       sliderWidth={300}
       itemWidth={300}
       horizontal
       useScrollView={true}
       data={imageCards}
       renderItem = {({item , index })=>(
           <Image 

           key={index}
           style ={{width:300 , height :300 , borderRadius: 30}}
           resizeMode='contain'
           source = {{uri:
            item ? item : "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"
            }}
           /> 
       )}
       onSnapToItem ={(index) => OnChoose(index)}
       />

      <Pagination
        dotsLength={imageCards.length}
        activeDotIndex={ImageIndex}
        
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#8F6E5B'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />

       </View>

    );
}

type carouselProps = {
    imageCards: string[];
  }

 

export default CarouselOption
