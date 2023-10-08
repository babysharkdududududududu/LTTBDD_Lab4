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
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Screen3 = () => {
  const [text, setText] = useState("");

  const setPass = () => {
    setText("Thanh123");
  };
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 40,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          PASSWORD GENERATOR
        </Text>

        <View style={styles.password}>{text}</View>
        <View style={styles.body}>
          <View style={styles.inputRow}>
            <Text style={styles.content}>Password length</Text>
            <TextInput
              style={{ backgroundColor: "white", marginLeft: 20 }}
            ></TextInput>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.content}>Include lower case letters</Text>
            <BouncyCheckbox />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.content}>Include upcase letters</Text>
            <BouncyCheckbox />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.content}>Include number</Text>
            <BouncyCheckbox />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.content}>Include special symbol</Text>
            <BouncyCheckbox />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={setPass}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            GENERATE PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9090bf",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: "90%",
    backgroundColor: "#23235b",
    height: "95%",
    borderRadius: "2%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  password: {
    backgroundColor: "#151537",
    width: 300,
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#9090bf",
    color: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flexDirection: "column",
    marginTop: 50,
  },
  content: {
    // marginBottom: 20,
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3b3b98",
    width: 300,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
export default Screen3;
