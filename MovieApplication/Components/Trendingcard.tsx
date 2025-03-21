import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { images } from "@/constants/images";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {

  console.log("title", poster_url);

  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{ uri: poster_url }}
          style={styles.poster}
          resizeMode="cover"
        />

        {/* Rank Badge */}
        <View style={styles.rankContainer}>
          <MaskedView
            maskElement={<Text style={styles.rankText}>{index + 1}</Text>}
          >
            <Image
              source={images.rankingGradient}
              style={styles.rankImage}
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        {/* Movie Title */}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 128,
    position: "relative",
    paddingLeft: 20,
  },
  poster: {
    width: 128,
    height: 192,
    borderRadius: 8,
  },
  rankContainer: {
    position: "absolute",
    bottom: 30,
    left: -4,   
    paddingVertical:15,
    paddingHorizontal: 8,
    borderRadius: 50,
    overflow: "hidden",
  },
  rankText: {
    fontWeight: "bold",
    fontSize: 52,
    color: "white",
  },
  rankImage: {
    width: 56,
    height: 56,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    color: "#a8b5db",
  },
});

export default TrendingCard;
