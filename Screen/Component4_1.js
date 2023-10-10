import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  Image,
} from "react-native";
import Component4_3 from "./Component4_3";
const Component4_1 = () => {
  const [num, setNum] = useState(0);
  const [price, setPrice] = useState(141800);

  const Sum = () => {
    setNum(num + 1);
    console.log(num);
  };
  const Sub = () => {
    setNum(num - 1);
    console.log(num);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Image
            source={require("../assets/pokemon.jpg")}
            style={styles.img}
          ></Image>
          <View style={styles.content}>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              Bách khoa toàn thư pokemon
            </Text>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              Cung cấp bởi me
            </Text>
            <Text style={{ marginTop: 10, fontWeight: "bold", color: "red" }}>
              141.800
            </Text>
            <View style={styles.changeNum}>
              <TouchableOpacity style={styles.button} onPress={Sub}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{num}</Text>
              <TouchableOpacity style={styles.button} onPress={Sum}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>

            <Component4_3 price={price * num} quantity={num} />
          </View>
        </View>
        <View style={styles.body}>
          <Text>Mã giảm giá</Text>
          <Text style={{ color: "blue", fontWeight: "bold" }}>Xem tại đây</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.discount}>
            <View style={styles.code}></View>
            <Text>Mã giảm giá</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              backgroundColor: "blue",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
              Áp dụng
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "60%",
    // backgroundColor: "red",
  },
  img: {
    width: 100,
    height: 100,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  changeNum: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    width: 20,
    height: 30,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  discount: {
    width: 150,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  code: {
    width: 30,
    height: 10,
    backgroundColor: "yellow",
    marginRight: 20,
  },
});
export default Component4_1;
