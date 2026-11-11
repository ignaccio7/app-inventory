import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Raleway_700Bold",
          fontSize: 32,
        }}
      >Mi Inventario</Text>
      <Text
        style={{
          fontFamily: "Roboto_400Regular",
          fontSize: 16,
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestiae? Quas, illo quod voluptatem ullam, magni, voluptatum quis cum perspiciatis tempore asperiores fugit iste corporis ex cupiditate voluptas veniam. Exercitationem?
      </Text>
      <Text
        style={{
          fontFamily: "Roboto_500Medium",
          fontSize: 22,
          color: "#bc151b",
        }}
      >
        Código: J-22-0531 (1)
      </Text>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
