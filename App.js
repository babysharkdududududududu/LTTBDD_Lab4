import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./TabNavigation/TabNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen1/> */}
      <TabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
