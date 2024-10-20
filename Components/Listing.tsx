import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/ListingType";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

type Props = {
  listings: any[];
  category:string;
};

const Listing = ({ listings,category }: Props) => {


  const [loading,setLoading]= useState(false);
  useEffect(()=>{
    console.log(`Update list :${category}`);
    
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000);

  },[category])


  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                color={Colors.white}
                size={20}
              />
            </View>
            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="location-pin"
                  size={24}
                  color={Colors.primaryColor}
                />
                <Text style={styles.ItemLocationTxt}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={loading?[]:listings}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}

        // numColumns={2} hien thi so item tren mot flatlist
      />
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderColor: Colors.white,
    borderWidth: 2,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    marginBottom: 10,
  },
  ItemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
