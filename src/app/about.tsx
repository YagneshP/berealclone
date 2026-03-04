import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export default function About() {
  <View style={styles.container}>
    <Text>This is the page where you can see the picture</Text>
    <Image
      source={{
        uri: "https://unsplash.com/photos/pink-and-yellow-hello-neon-light-3SIXZisims4",
      }}
      style={styles.image}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
  },
});
