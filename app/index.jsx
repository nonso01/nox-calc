import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MainBgColor } from "./const";

export default function Index() {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.screenView}>
        <Text style={styles.txt}>Numbers</Text>
      </View>

      <View style={styles.buttonView}>
        <View style={styles.buttonViewOne}></View>
        <View style={styles.buttonViewTwo}></View>
      </View>

      {<StatusBar barStyle="default" backgroundColor={MainBgColor} />}
    </SafeAreaView>
  );
}

const PreviewButton = ({ values }) => (
  <View style={styles.button}>
    <TouchableOpacity></TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  txt: {
    color: "white",
    fontWeight: "bold",
  },
  home: {
    backgroundColor: MainBgColor,
    flex: 1,
  },
  screenView: {
    backgroundColor: MainBgColor,
    flex: 1,
  },
  buttonView: {
    backgroundColor: "indianred",
    flex: 1.2,
    flexDirection: "row",
  },
  buttonViewOne: {
    flex: 0.75,
    backgroundColor: "blue",
  },
  buttonViewTwo: {
    flex: 0.25,
    backgroundColor: "green",
  },
  button: {},
});
