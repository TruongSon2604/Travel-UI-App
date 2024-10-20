// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import React from "react";
// import { Link } from "expo-router";

// type Props = {
//   onchangeInstance1: (ins: string) => void;
// };
// const Instance1 = ({ onchangeInstance1 }: Props) => {
//   return (
//     <>
//       {/* <View style={styles.container}>
//         <TouchableOpacity
//           onPress={() => {
//             onchangeInstance1("vidu2");
//           }}
//         >
//           <Link href={`/listing/login`}>
//             <Text>Go to Login</Text>
//           </Link>
//         </TouchableOpacity>
//       </View> */}
//       <View style={styles.container}>
//         <Link
//           href={`/login/indexLogin`}
//           onPress={() => {
//             onchangeInstance1("vidu2");
//           }}
//           asChild
//         >
//           <TouchableOpacity>
//             <Text>Bấm vào đây Login</Text>
//           </TouchableOpacity>
//         </Link>
//       </View>
//     </>
//   );
// };

// export default Instance1;
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "red",
//     flexDirection: "row",
//     flex: 1,
//     marginVertical: 50,
//     paddingHorizontal: 20,
//   },
// });
