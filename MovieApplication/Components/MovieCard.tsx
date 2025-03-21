import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants/icons";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity style={{ width: "28%" }}>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          onError={(e) => console.log("Image load error:", e.nativeEvent)}
          style={{ width: 100, height: 150, borderRadius:4 }}
          resizeMode="cover"
        />

        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#fff",
            marginTop: 8,
          }}
        >
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-3" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Text style={{ fontSize: 10, color: "#d1d5db", fontWeight: "500" }}>
            {release_date ? release_date.split("-")[0] : "N/A"}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "#d1d5db",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
