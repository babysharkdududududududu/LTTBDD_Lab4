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
const Component4_4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Tạm tính</Text>
        <Text style={{ color: "red", marginLeft: 20, fontWeight: "bold" }}>
          141.800 đ
        </Text>
      </View>

      <TouchableOpacity style={{ backgroundColor: "#e53935", marginTop: 40 }}>
        <View
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Tiến hành đặt hàng
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    height: 150,
    padding: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Component4_4;
