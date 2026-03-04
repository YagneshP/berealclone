import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Link href={"/about"}>Go to ABOUT</Link>
      <TextInput placeholder='Email' />
      <ActivityIndicator size={"large"} />
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
