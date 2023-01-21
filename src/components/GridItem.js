import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import Colores from "../constants/Colores";
import img from '../../assets/Img/delpiero.jpg' 


const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridITem}>


      <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>

      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View style={styles.backCover}>
          <Text style={styles.titulo}>{item.titulo}</Text>
        </View>
      </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridITem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 220,
    flexDirection: "column",
  },
  container: {
    flex: 1,
    borderRadius: 7,
    shadowColor: "black",
    shadowOpacity: 8.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  titulo: {
    backgroundColor: "white",
    height: 25,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
    borderRadius: 10,
  
  },
  backCover: {
    position: 'absolute',
    marginTop: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  }

 
});
