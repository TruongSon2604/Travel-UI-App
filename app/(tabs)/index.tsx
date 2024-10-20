import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButton from "@/Components/CategoryButton";

import Listing from "@/Components/Listing";

import Listing2Colum from "@/Components/Listing2Colum";
import GruopListing from "@/Components/GruopListing";

import ListingData from "@/DATA/destination.json";
import GroupData from "@/DATA/groups.json";
// import Instance1 from "@/Components/Instance1";
import Slider2 from "@/Components/Slider2";

//thu vie//
import { useSafeAreaInsets } from "react-native-safe-area-context";
//

const Page = () => {
  const headerHeight = useHeaderHeight();

  const [Category, setCategory] = useState("All");
  const onCatChanged = (category: string) => {
    setCategory(category);
    console.log("category:", category);
  };
  //
  // const [Instance, setInstance] = useState("vidu");
  // const onchangeInstance = (ins: string) => {
  //   setInstance(ins);
  //   console.log("istance", Instance);
  // };

  //
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://th.bing.com/th/id/R.00985243a59ab4774cb7c05f79034f8a?rik=fPITklz3DfLS4A&pid=ImgRaw&r=0",
                }}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOpacity: 0.2,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 3,
              }}
            >
              <Ionicons color={Colors.black} name="notifications" size={20} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Explore Beautiful this world!</Text>
          <Slider2 />
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5 }}
                color={Colors.black}
              />
              <TextInput placeholder="Search..." placeholderTextColor="gray" />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <CategoryButton onCategoryChanged={onCatChanged} />

          <Listing listings={ListingData} category={Category} />

          <GruopListing listings={GroupData} />

          {/* <Instance1 onchangeInstance1={onchangeInstance} /> */}
          <Listing2Colum listings={ListingData} category={Category} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,

    // justifyContent: "center",
    // alignItems: "center",
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});
