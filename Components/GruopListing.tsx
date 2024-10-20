import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";

import { GroupType } from "@/types/GroupType";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  listings: any[];
};
const GruopListing = ({ listings }: Props) => {
  const renderItems: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.itemTxt}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemReview}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Group</Text>
      <FlatList
        horizontal
        data={listings}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GruopListing;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 8,
  },
  itemRating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
  },
  itemReview: {
    fontSize: 14,
    color: "#999",
  },
});
