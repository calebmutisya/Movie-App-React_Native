import { Text, View, Image, ScrollView } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {

  // Goes to the search page or screen when something happens
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%",paddingBottom: 10}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>

        <View className="flex-1 mt-5">
          <SearchBar  onPress={() => router.push("/search")} placeholder="Search for a Movie"/>
        </View>

      </ScrollView>
    </View>
  );
}
