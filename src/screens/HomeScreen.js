import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import Recipes from "../components/recipes";
import { categoryData } from "../constants";
import { bistroData } from "../constants";
import { latteData } from "../constants";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Filter Coffee");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setCategories(categoryData);

    if (activeCategory == "Filter Coffee") {
      setMeals(bistroData);
    } else if (activeCategory == "Latte") {
      setMeals(latteData);
    }
    console.log(activeCategory);
    // getCategories();
    // getRecipes();
  }, [activeCategory]);

  const handleChangeCategory = (category) => {
    // getRecipes(category);

    setActiveCategory(category);
    // setMeals([]);
  };

  const filteredMeals = meals.filter((meal) =>
    meal.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        //Genel Scroll Özellikleri verildi.
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <View className=" flex-row">
            <Text style={{ fontSize: 30 }}>Fast Barista</Text>
            <Image source={require('../../assets/images/bean.png')}
                style={{width: hp(20), height: hp(10)}} />
          </View>
          
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Dünyaca ünlü tariflere
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            tek tıkla <Text style={{ color: "#8B4513" }}>ulaş</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
            onChangeText={(text) => setSearchText(text)}
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/* categories */}
        <View>
          {
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          }
        </View>

        {/* recipes */}
        <View>
          <Recipes meals={filteredMeals} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
}
