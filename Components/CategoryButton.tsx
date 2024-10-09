import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/DATA/Categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryButton = () => {
  // const itemRef= useRef<TouchableOpacity [] || null[] >([]);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => {}} style={styles.categotyBtn}>
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={Colors.black}
            />
            <Text style={styles.categotyBtnTxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButton;
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  categotyBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categotyBtnTxt:{
    // paddingHorizontal
    marginLeft:5,
    color:Colors.black,


  }
});
