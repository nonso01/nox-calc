import { StyleSheet, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MainBgColor } from "./const";

export default function Index() {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.screen}>
        <Text style={styles.txt}>Numbers</Text>
      </View>

      <View style={styles.buttons}></View>

      {<StatusBar barStyle="default" backgroundColor={MainBgColor} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: MainBgColor,
    flex: 1,
  },
  screen: {
    backgroundColor: MainBgColor,
    flex: 1,
  },
  buttons: {
    backgroundColor: "indianred",
    flex: 1.2,
  },
  txt: {
    color: "white",
    fontWeight: "bold"
  }
});
