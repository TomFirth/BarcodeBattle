import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "BarcodeBattle"
      }} />
      <Stack.Screen name="game" options={{
        headerTitle: "Play!"
      }} />
      <Stack.Screen name="game/result" options={{
        headerTitle: "Results"
      }} />
      <Stack.Screen name="game/find" options={{
        headerTitle: "Find a Game"
      }} />
      <Stack.Screen name="scan" options={{
        headerTitle: "Scan"
      }} />
      <Stack.Screen name="scan/result" options={{
        headerTitle: "Scan Result"
      }} />
    </Stack>
  );
}

export default RootLayout;