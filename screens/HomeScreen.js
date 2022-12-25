import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import { client } from "../config/sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {    
    client
			.fetch(
				`*[_type =="featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }`
			)
      .then((data) => {
        console.log('data: ', data);
				setFeaturedCategories(data);
			});
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 ">
      {/*HEADER*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <AntDesign name="down" size={20} color="#00CCBB" />
          </Text>
        </View>

        <AntDesign name="user" size={35} color="#00CCBB" />
      </View>
      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <AntDesign name="search1" size={20} color="gray" />
          <TextInput
            placeholder="Restaurant & Cuisine"
            keyboardType="default"
          />
        </View>
        <Entypo name="dots-three-horizontal" size={24} color="#00CCBB " />
      </View>

      {/*Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/*Categories */}
        <Categories />

        {/*Featured Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            title={category.name}
            description={category.short_description}
            restaurantsData = {category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
