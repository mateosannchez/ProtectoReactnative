import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import img from '../../assets/Img/pelota.jpg';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
          <View>
            <Image source={item.imagen} resizeMode="cover" style={{ width: 50, height: 50, margin: 5,}}/>
          </View>
      <View>
        <Text style={styles.header1}>{item.name}</Text>
        <Text style={styles.header}>{item.nacionalidad}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color="red" style={{top: 10}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    margin:5,
    height: "100%",
  },
  header: {
    fontSize: 18,
    left: 10
  },
  header1: {
    fontSize: 22,
    fontWeight: "bold",
    left: 10
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
