import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { urlFor } from "../config/sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
	return (
		<TouchableOpacity className="bg-white mr-3 shadow">
			<Image
				source={{
					uri: urlFor(imgUrl).url(),
				}}
				className="h-36 w-64 rounded-sm"
			/>
			<View className="px-3 pb-4">
				<Text className="font-bold text-lg pt-2">{title}</Text>
				<View className="flex-row items-center space-x-1">
					<Ionicons name="star" size={20} color="green" opacity={0.5} />
					<Text className="text-xs text-gray-500">
						<Text className="text-green-500">{rating}</Text> . {genre}
					</Text>
				</View>
				<View className="flex-row items-center space-x-1 ">
					<Octicons name="location" size={22} color="gray" opacity={0.4} />
					<Text className="text-xs text-gray-500"> Nearby . {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurantCard;
