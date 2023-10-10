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
import Component4_1 from "./component4_1";
import Component4_2 from "./Component4_2";
import Component4_3 from "./Component4_3";
import Component4_4 from "./Component4_4";

const Screen4 = () => {
  return (
    <View style={{ backgroundColor: "#c4c4c4", flex: 1 }}>
      <View style={{ marginBottom: 20 }}>
        <Component4_1 />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Component4_2 />
      </View>
      {/* <View style={{ marginBottom: 20 }}>
        <Component4_3 />
      </View> */}

      <View style={{ marginBottom: 20 }}>
        <Component4_3 />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
        }}
      >
        <Component4_4 />
      </View>
    </View>
  );
};
export default Screen4;
