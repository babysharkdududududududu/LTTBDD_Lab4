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

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const Screen2 = () => {
  const [numStar, setNumStar] = useState(0); //Luu so sao da chon
  const [rate, setRate] = useState();
  const [cmt, setCmt] = useState("");

  // Cap nhat so sao da chon
  const handleSelectedNumStar = (selectedNumStar) => {
    setNumStar(selectedNumStar);
    let rating = "";

    switch (selectedNumStar) {
      case 1:
        rating = "Tệ";
        break;
      case 2:
        rating = "Bình thường";
        break;
      case 3:
        rating = "Ổn";
        break;
      case 4:
        rating = "Tốt";
        break;
      case 5:
        rating = "Tuyệt";
        break;
    }
    setRate(rating);
  };
  // Render ngôi sao với màu tùy thuộc vào số sao được chọn
  const renderStart = (numberStar) => {
    return (
      <TouchableOpacity onPress={() => handleSelectedNumStar(numberStar)}>
        <AntDesign
          name={numberStar <= numStar ? "star" : "staro"}
          size={40}
          color={numberStar <= numStar ? "gold" : "black"}
        />
      </TouchableOpacity>
    );
  };

  const openFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        // Thay đổi loại tệp tại đây hoặc để là null nếu muốn chấp nhận tất cả các loại tệp
      });

      if (result.type === "success") {
        console.log(
          `URI tệp: ${result.uri}`,
          `Tên tệp: ${result.name}`,
          `Loại MIME: ${result.type}`,
          `Kích thước: ${result.size}`
        );
      } else {
        console.log("Người dùng đã hủy việc chọn tệp.");
      }
    } catch (error) {
      console.error("Lỗi khi chọn tệp: ", error);
    }
  };
  const submit = () => {
    alert(
      " Bạn đã đánh giá sản phẩm này với " +
        numStar +
        "ngôi sao và lời bình luận" +
        " " +
        cmt
    );
    setNumStar(0);
    setCmt("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../img/usb.png")} style={styles.imagee} />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa
          Bluetooth
        </Text>
      </View>
      <View style={styles.rate}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 30,
            marginBottom: 20,
            fontSize: 20,
            color: "red",
            fontWeight: "bold",
          }}
        >
          {rate}
        </Text>
        <View style={styles.star}>
          {renderStart(1)}
          {renderStart(2)}
          {renderStart(3)}
          {renderStart(4)}
          {renderStart(5)}

          {/* <AntDesign name="staro" size={40} color="black" />
          <AntDesign name="staro" size={40} color="black" />
          <AntDesign name="staro" size={40} color="black" />
          <AntDesign name="staro" size={40} color="black" />
          <AntDesign name="staro" size={40} color="black" /> */}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View style={styles.takePhoto}>
          <TouchableOpacity onPress={openFilePicker}>
            <Entypo name="camera" size={30} color="black" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
            Thêm hình ảnh
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          style={styles.comment}
          placeholder="Hãy chia sẻ những điều bạn biết về sản phẩm"
          multiline={true}
          onChangeText={setCmt}
          value={cmt}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
  imagee: {
    width: 50,
    height: 55,
    resizeMode: "cover",
  },
  star: {
    flexDirection: "row",
    justifyContent: "center",
  },

  startImg: {
    height: 50,
    width: 50,
  },

  takePhoto: {
    // alignItems: "center",
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "purple",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  comment: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 300,
    height: 200,
    color: "#ccc",
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#0d5db6",
    width: 290,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default Screen2;
