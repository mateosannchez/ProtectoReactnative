import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from "react-native";
import Colores from "../constants/Colores";

const BreadItem = ({ item, onSelected }) => {
  return (

    <ScrollView>

    <TouchableOpacity onPress={() => onSelected(item)}>

      <View style={styles.breadItem}>
      <ImageBackground style={styles.img} source={item.imagen} resizeMode="cover">
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>{item.posicion}</Text>
          <Text style={styles.details}>{item.clubactual}</Text>
        </View>
        <View>
          {/* <Image style={styles.img} source={item.imagen} resizeMode="cover" /> */}
        </View>
    </ImageBackground>
      </View>
    </TouchableOpacity>
    </ScrollView>

  );
};

export default BreadItem;

const styles = StyleSheet.create({
  breadItem: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    left: 10,
    color: "white"
    // fontFamily: "Tillana",
  },
  details: {
    fontSize: 15,
    left: 10,
    top: 70,
    color: "white",
    // color: "#8e8686"
  },
  img: {
    width: "100%",
    height: 150,
    
  }
});
