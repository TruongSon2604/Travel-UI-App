import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/DATA/Categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onCategoryChanged: (category: string) => void;
};

const CategoryButton = ({ onCategoryChanged }: Props) => {
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const scrollRef = useRef<ScrollView>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    // console.log("DAY la Select-------",selected);
    setActiveIndex(index);

    selected?.measure((x, y) => {
      console.log(`x: ${x}`);
      console.log(`y: ${y}`);
      // scollRef.current?.scrollTo({ x: x, y: 0, animated: true });
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });

    onCategoryChanged(destinationCategories[index].title);
  };
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
        ref={scrollRef}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            // {console.log()}
            ref={(el) => {
              itemRef.current[index] = el;
              console.log(`el :`, el);
            }}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex == index
                ? styles.categotyBtnActive
                : styles.categotyBtn
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeIndex == index ? Colors.white : Colors.black}
            />
            <Text
              style={
                activeIndex == index
                  ? styles.categotyBtnTxtActive
                  : styles.categotyBtnTxt
              }
            >
              {item.title}
            </Text>
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
  categotyBtnTxt: {
    // paddingHorizontal
    marginLeft: 5,
    color: Colors.black,
  },
  categotyBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categotyBtnTxtActive: {
    marginLeft: 5,
    color: Colors.white,
  },
});
