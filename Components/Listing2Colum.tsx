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
import { ListingType2 } from "@/types/ListingType2";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import ProductItem from "@/app/ItemProduct.tsx/ProductItem";

type Props = {
  listings: any[];
  category: string;
};

const Listing = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(`Update list :${category}`);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [category]);

  // const renderItems: ListRenderItem<ListingType2> = ({ item }) => {
  //   return (
  //     <Link href={`/listing/${item.id}`} asChild>
  //       <TouchableOpacity>
  //         <View style={styles.item}>
  //           <Image source={{ uri: item.image }} style={styles.image} />
  //           <View style={styles.bookmark}>
  //             <Ionicons
  //               name="bookmark-outline"
  //               color={Colors.white}
  //               size={20}
  //             />
  //           </View>
  //           <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
  //             {item.name}
  //           </Text>
  //           <View
  //             style={{
  //               flexDirection: "row",
  //               justifyContent: "space-between",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View style={{ flexDirection: "row", alignItems: "center" }}>
  //               <Entypo
  //                 name="location-pin"
  //                 size={24}
  //                 color={Colors.primaryColor}
  //               />
  //               <Text style={styles.ItemLocationTxt}>{item.location}</Text>
  //             </View>
  //             <Text style={styles.itemPriceTxt}>${item.price}</Text>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //     </Link>
  //   );
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.txtProduct}>Product</Text>
      <FlatList
        // horizontal
        showsHorizontalScrollIndicator={false}
        data={loading ? [] : listings}
        renderItem={({ index, item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
        numColumns={2}
      />
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({
  container: { width: "100%" },
  txtProduct: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
    marginBottom: 10,
  },
});
