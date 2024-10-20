import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

const Slider2 = () => {
  const styles = StyleSheet.create({
    sliderImage: {
      width: Dimensions.get("screen").width * 0.9,
      height: 170,
      borderRadius: 15, // Giữa ảnh
      marginRight: 15,
    },
  });

  const [sliderList, setSliderList] = useState([
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.T51OaM5tf-7hw0ZARfyGiwAAAA?rs=1&pid=ImgDetMain",
      name: "Slider 1",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.T51OaM5tf-7hw0ZARfyGiwAAAA?rs=1&pid=ImgDetMain",
      name: "Slider 2",
    },
  ]);
  useEffect(() => {
    console.log("sliderlist", sliderList);
  });
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.sliderImage}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Slider2;
