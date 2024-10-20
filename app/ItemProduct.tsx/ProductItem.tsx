import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ListingType } from "@/types/ListingType";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
type Props = {
  item: ListingType;
};
const width = Dimensions.get("window").width - 40;
const ProductItem = ({ item }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image1} />
        <TouchableOpacity style={styles.bookmarkbtn}>
          <Ionicons name="heart-outline" size={22} color={Colors.black} />
        </TouchableOpacity>

        <View style={styles.productInfo}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.ratingWrapper}>
            <Ionicons name="star" size={20} color={"#D4AF37"} />
            <Text style={styles.rating}>4.7</Text>
          </View>
        </View>

        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.name}
        </Text>
      </View>
    </>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  image1: {
    width: "100%",
    height: 200,

    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkbtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1.1,
  },
  productInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:8
  },
  price:{
    fontSize:16,
    fontWeight:'700',
    color:Colors.primaryColor
  },
  ratingWrapper:{
    flexDirection:'row',
    alignItems:'center',
    gap:8
  },
  rating:{
    fontSize:14,
    color:'gray'
  }
});
