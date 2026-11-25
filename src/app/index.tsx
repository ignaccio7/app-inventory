import { Directory, Paths } from "expo-file-system";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [physicalPath, setPhysicalPath] = useState('')
  const [folders, setFolders] = useState<String[]>([])
  const [folderName, setFolderName] = useState("")

  useEffect(() => {
    const masterFolder = new Directory(Paths.document, "inventario")

    setPhysicalPath(masterFolder.uri)

    if (!masterFolder.exists) {
      masterFolder.create()
    }

    const content = masterFolder.list()

    const folderNames = content.filter(item => {
      return item instanceof Directory
    }).map(folder => folder.name)

    setFolders(folderNames)

  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Raleway_700Bold",
          fontSize: 32,
        }}
      >Mi Inventario</Text>
      <View className="w-full h-auto px-2">
        <Text className="font-raleway text-2xl">
          Nombre de nueva carpeta:
        </Text>
        <TextInput
          value={folderName}
          onChangeText={setFolderName}
          placeholderTextColor={"#787770"}
          autoCapitalize="characters"
          placeholder="EJ. DEPOSITO-CENTRAL"
          className="bg-surface-lowest px-4 py-3 rounded-xl font-roboto-medium text-base text-on-surface"
        />
      </View>

      <Text className="font-roboto text-base py-2">
        Input: {folderName}
      </Text>

      <Text className="font-roboto text-base py-2">
        Carpetas encontradas: {folders.length}
      </Text>

      {
        folders.length != 0
          ? folders.map((folder, index) => (
            <Text key={index}>{`${index + 1} - ${folder}`}</Text>
          ))
          : <Text>No se encontraron carpetas</Text>
      }


      {/* <Text>{JSON.stringify(physicalPath, null, 2)}</Text>
      <Text>{JSON.stringify(folders, null, 2)}</Text>
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
      <IconFolder />
      <IconCamera />
      <Text className="text-2xl">
        Código: J-22-0531 (1)
      </Text>
      <Text>Edit src/app/index.tsx to edit this screen.</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 32
  },
});
