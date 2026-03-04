import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Image
        source={{
          uri: "https://unsplash.com/photos/pink-and-yellow-hello-neon-light-3SIXZisims4",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "green",
  },
  image: {
    width: 200,
    height: 200,
  },
});
