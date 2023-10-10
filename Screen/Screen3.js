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
  const [passwordLength, setPasswordLength] = useState(8); // Độ dài mật khẩu mặc định là 8
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const setPass = () => {
    // Tạo các chuỗi chứa ký tự dựa trên các điều kiện được chọn
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let validChars = "";
    if (includeLowercase) {
      validChars += lowercaseChars;
    }
    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeNumbers) {
      validChars += numberChars;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }

    // Tạo mật khẩu ngẫu nhiên dựa trên độ dài đã nhập và chuỗi ký tự hợp lệ
    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars[randomIndex];
    }

    setText(newPassword);
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
              onChangeText={(value) => {
                const numericValue = parseInt(value, 10); // Chuyển đổi giá trị sang số nguyên
                if (!isNaN(numericValue)) {
                  setPasswordLength(numericValue); // Cập nhật passwordLength khi người dùng nhập
                }
              }}
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
