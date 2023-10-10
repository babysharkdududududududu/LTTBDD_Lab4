import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Component4_1 from "./component4_1";

const Component4_3 = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Tạm tính</Text>
      <Text style={{ color: "red", marginLeft: 20, fontWeight: "bold" }}>
        {props.price} đ
      </Text>
      <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Số lượng</Text>
      <Text style={{ color: "blue", marginLeft: 20, fontWeight: "bold" }}>
        {props.quantity}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default Component4_3;
