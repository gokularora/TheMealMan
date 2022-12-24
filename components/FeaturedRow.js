import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, restaurantsData }) => {
	const [restaurants, setRestaurants] = useState(restaurantsData);
  console.log(restaurants[0].image)
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<AntDesign name="arrowright" size={20} color="#00CCBB" />
			</View>
			<Text className="text-xs text-gray-500 px-4 ">{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				showsHorizontalScrollIndicator={false}
				className="pt-4"
			>
				{restaurants?.map((restaurant) => (
						<RestaurantCard
							key={restaurant._id}
							id={restaurant._id}
							imgUrl={restaurant.image}
							address={restaurant.address}
							title={restaurant.name}
							dishes={restaurant.dishes}
							rating={restaurant.rating}
							short_description={restaurant.short_description}
							genre={restaurant.type?.name}
							long={restaurant.long}
							lat={restaurant.lat}
						/>
					)
				)}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
