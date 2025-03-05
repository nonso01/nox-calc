import { StyleSheet, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MainBgColor } from "./const";

export default function Index() {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.test}></View>

      <StatusBar barStyle="default" backgroundColor={MainBgColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: MainBgColor,
    flex: 1,
  },
  test: {
    backgroundColor: "blue",
    height: 60,
    width: 40,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#444",
  },
});
