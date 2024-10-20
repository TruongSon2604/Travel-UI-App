// import {
//   View,
//   Text,
//   Dimensions,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import React from "react";
// import { Stack, useLocalSearchParams, useRouter } from "expo-router";
// import listingData from "@/DATA/destination.json";
// import { ListingType } from "@/types/ListingType";
// import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
// import Colors from "@/constants/Colors";
// import { useHeaderHeight } from "@react-navigation/elements";
// const { width } = Dimensions.get("window");
// const IMG_HEIGH = 300;

// const ListingDetails = () => {
//   const { id } = useLocalSearchParams();
//   const router = useRouter();
//   const listing = listingData.find((item) => item.id === id);
//   console.log(listing);

//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerTransparent: true,
//           title: "",
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => {
//                 router.back();
//               }}
//               style={{
//                 backgroundColor: "rgba(255,255,255,0.5)",
//                 padding: 4,
//                 borderRadius: 10,
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: Colors.white,
//                   padding: 6,
//                   borderRadius: 10,
//                 }}
//               >
//                 <Feather name="arrow-left" size={20} />
//               </View>
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => {
//                 router.back();
//               }}
//               style={{
//                 backgroundColor: "rgba(255,255,255,0.5)",
//                 padding: 4,
//                 borderRadius: 10,
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: Colors.white,
//                   padding: 6,
//                   borderRadius: 10,
//                 }}
//               >
//                 <Ionicons name="bookmark-outline" size={20} />
//               </View>
//             </TouchableOpacity>
//           ),
//         }}
//       />

//       <View style={styles.container1}>
//         <Image source={{ uri: listing?.image }} style={styles.image} />
//         <View style={styles.main_content}>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               width: "100%",
//             }}
//           >
//             <Text style={{ fontSize: 18, fontWeight: "600" }}>
//               {listing?.name}
//             </Text>
//             <Text style={{ fontSize: 18, fontWeight: "600" }}>
//               $ {listing?.price}{" "}
//             </Text>
//           </View>
//           <View style={{ marginTop: 18 }}>
//             <Text style={{ fontSize: 18, fontWeight: "600" }}>Size</Text>
//           </View>
//           <View>
//             <View style={styles.size}>
//               <TouchableOpacity>
//                 <Text
//                   style={{ color: "gray", fontWeight: "700", fontSize: 15 }}
//                 >
//                   S
//                 </Text>
//               </TouchableOpacity>
//               <Text style={{ color: "gray", fontWeight: "700", fontSize: 15 }}>
//                 M
//               </Text>
//               <Text style={{ color: "gray", fontWeight: "700", fontSize: 15 }}>
//                 L
//               </Text>
//               <Text style={{ color: "gray", fontWeight: "700", fontSize: 15 }}>
//                 XL
//               </Text>
//             </View>

//             <View style={styles.color}>
//               <View
//                 style={{
//                   backgroundColor: "red",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 50,
//                 }}
//               ></View>
//               <View
//                 style={{
//                   backgroundColor: "black",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 50,
//                 }}
//               ></View>
//               <View
//                 style={{
//                   backgroundColor: "orange",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 50,
//                 }}
//               ></View>
//               <View
//                 style={{
//                   backgroundColor: "blue",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 50,
//                 }}
//               ></View>
//               <View
//                 style={{
//                   backgroundColor: "green",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 50,
//                 }}
//               ></View>
//               <View
//                 style={{
//                   backgroundColor: "green",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 50,
//                 }}
//               ></View>
//             </View>
//           </View>
//           <View style={styles.description}>
//             <Text style={{ fontSize: 18, fontWeight: "600" }}>Desctiption</Text>
//             <Text
//               style={{
//                 fontSize: 15,
//                 textAlign: "justify",
//                 marginVertical: 10,
//                 paddingHorizontal: 10,
//               }}
//             >
//               Lorem ipsum dolor sit, amet consectetur aa elit. Numquam aaa
//               beatae maiores tempore neque eum molestiae, magnam non adipisci
//               atque quod eos temporibus reiciendis, ratione maxime, quam ad
//               praesentium voluptatem. Veniam?atque quod eos temporibus
//               reiciendis, ratione maxime, quam ad praesentium voluptatem.
//               Veniam?
//             </Text>
//           </View>

//           <TouchableOpacity style={styles.btnadd}>
//             <Text
//               style={{ textAlign: "center", fontSize: 15, fontWeight: "700" }}
//             >
//               Add To Cart
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// };

// export default ListingDetails;
// const styles = StyleSheet.create({
//   container1: {
//     backgroundColor: Colors.bgColor,
//     flex: 1,
//     alignItems: "center",
//     // marginTop: 10,
//   },
//   image: {
//     width: width,
//     height: 300,
//   },
//   main_content: {
//     paddingVertical: 15,
//     width: "100%",
//     paddingHorizontal: 15,
//   },
//   size: {
//     flexDirection: "row",
//     width: "60%",
//     justifyContent: "space-between",
//     paddingLeft: 20,
//     marginVertical: 20,
//   },
//   color: {
//     paddingHorizontal: 15,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "90%",
//   },
//   description: {
//     width: "100%",
//     // backgroundColor:'red',
//     // paddingVertical:10,
//     marginVertical: 15,
//   },
//   btnadd: {
//     backgroundColor: "orange",
//     textAlign: "center",
//     paddingVertical: 20,
//   },
// });
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import listingData from "@/DATA/destination.json";
import { Feather, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const { width } = Dimensions.get("window");

const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const listing = listingData.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState(""); // lưu trạng thái size đã chọn
  const [selectedColor, setSelectedColor] = useState("");
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size); // cập nhật trạng thái khi chọn size
  };
  const handleColorSelect = (color: string) => {
    setSelectedColor(color); // Cập nhật màu khi chọn
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: 4,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: 4,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.container1}>
        <Image source={{ uri: listing?.image }} style={styles.image} />
        <View style={styles.main_content}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {listing?.name}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              $ {listing?.price}{" "}
            </Text>
          </View>
          <View style={{ marginTop: 18 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Size</Text>
          </View>
          <View>
            <View style={styles.size}>
              {["S", "M", "L", "XL"].map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => handleSizeSelect(size)}
                >
                  <Text
                    style={{
                      color: selectedSize === size ? "red" : "gray",
                      fontWeight: "700",
                      fontSize: 15,
                    }}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* <View style={styles.color}>
              <View
                style={{
                  backgroundColor: "red",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "black",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "orange",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "blue",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "green",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: "green",
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              ></View>
            </View> */}
            <View style={styles.color}>
              {["red", "black", "orange", "blue", "green"].map((color) => (
                <TouchableOpacity
                  key={color}
                  onPress={() => handleColorSelect(color)}
                >
                  <View
                    style={[
                      styles.colorOption,
                      {
                        backgroundColor: color,
                        borderWidth: selectedColor === color ? 3 : 0,
                        borderColor: "black",
                      },
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.description}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Description</Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: "justify",
                marginVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              Lorem ipsum dolor sit, amet consectetur aa elit. Numquam aaa
              beatae maiores tempore neque eum molestiae, magnam non adipisci
              atque quod eos temporibus reiciendis, ratione maxime, quam ad
              praesentium voluptatem. Veniam? atque quod eos temporibus
              reiciendis, ratione maxime, quam ad praesentium voluptatem.
              Veniam?
            </Text>
          </View>

          <TouchableOpacity style={styles.btnadd}>
            <Text
              style={{ textAlign: "center", fontSize: 15, fontWeight: "700" }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Colors.bgColor,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: width,
    height: 300,
  },
  main_content: {
    paddingVertical: 15,
    width: "100%",
    paddingHorizontal: 15,
  },
  size: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    paddingLeft: 20,
    marginVertical: 20,
  },
  color: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  description: {
    width: "100%",
    marginVertical: 15,
  },
  btnadd: {
    backgroundColor: "orange",
    textAlign: "center",
    paddingVertical: 20,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
