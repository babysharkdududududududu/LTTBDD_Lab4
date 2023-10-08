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
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";





const Screen1 = () => {
    const [obj,setObj] =useState( 
[
    {
        Name:"Thanh", 
        pass:"1202"
    },
    {
        Name:"Huy", 
        pass:"1202"
    },
    {
        Name:"Luan", 
        pass:"1303"
    },
    {
        Name:"Tung", 
        pass:"1505"
    },

]
    )
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [show, setShow] = useState(null);

    const check=()=>{
      var authen = obj.some((e)=>
      e.Name ===name & e.pass ===pass
    
    )
    console.log(authen);
    if(authen){
         alert("Dang nhap thanh cong")
         setShow(true)
    }
    else{
        alert("Dang nhap that bai")
        setShow(false)
    }
   
       
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}> LOGIN </Text>
      </View>
      <View style={styles.conver}>
        <View style={styles.iph}>
          <TextInput style={styles.ver} placeholder="Name" onChangeText={setName} value={name}>
            
          </TextInput>
        </View>
        <View style={styles.ip}>
          <TextInput style={styles.ver} placeholder="Password" onChangeText={setPass} value = {pass}>
            
          </TextInput>
          <AntDesign
            name="eye"
            size={24}
            color="black"
            style={{ marginRight: 20, marginTop: -30 }}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>{check()}}> Login </Text>
        </TouchableOpacity>
        <Text style={{textAlign:"center", color: "red", fontWeight: "bold"}}>

            {show!==null && show===true ? "Dang nhap thanh cong": show==false?"Dang nhap that bai":null}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          CREATE ACCOUNT
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2c400",
    padding: 10,
  },
  logo: {
    flex: 1,
    marginLeft: "5%",
    justifyContent: "center",
    fontSize: 50,
  },
  header: {
    flexDirection: "column",
    fontSize: 20,
    alignItems: "center",
  },
  conver: {
    marginBottom: "10%",
  },
  ip: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  ver: {
    backgroundColor: "#c9e0d0",
    width: "100%",
    height: 40,
    borderColor: "#000",
    marginTop: "5%",
    padding: 10,
    backgroundColor: "#ddbe3b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
  button: {
    marginTop: "10%",
    flexDirection: "row",
    width: "100%",
  },
  buttonText: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    color: "#fff",
  },
  inputIcon: {
    paddingLeft: 10,
    paddingRight: 5,
    marginTop: 5,
  },
});

export default Screen1;
