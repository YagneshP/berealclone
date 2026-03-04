import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "yellowgreen" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name='index' options={{ title: "Home" }} />
      <Stack.Screen name='about' options={{ title: "ABout US" }} />
    </Stack>
  );
}
