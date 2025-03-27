import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

export default function Index() {

  // Goes to the search page or screen when something happens
  const router = useRouter();

  const {data: movies, loading: moviesLoading, error: moviesError} = useFetch(() => fetchMovies({query: ''}));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%",paddingBottom: 10}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
        ): moviesError ? (
          <Text className="text-lg self-center  text-white font-bold mt-5 mb-3">Error : {moviesError?.message}</Text>
        ):(
          <View className="flex-1 mt-5">
            <SearchBar  onPress={() => router.push("/search")} placeholder="Search for a Movie"/>
            <>
              <Text className="text-lg  text-white font-bold mt-5 mb-3 ">Latest Movies</Text>

              <FlatList
                data={movies}
                renderItem={({item}) => (
                  <Text className="text-white text-sm">{item.title}</Text>
                )}
              />
            </>
        </View>
        )}
      </ScrollView>
    </View>
  );
}
