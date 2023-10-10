import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  Image,
} from "react-native";
const Component4_2 = () => {
  return (
    <View style={styles.container}>
      <Text>Bạn có phiếu quà tặng tiki/Got it/ Urbox</Text>
      <Text style={{ color: "blue", marginLeft: 20 }}>Nhập tại đây?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Component4_2;
