import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import Colores from "../constants/Colores";
import Ionicons from "@expo/vector-icons/Ionicons";

const BreadDetailsScreen = () => {
  const bread = useSelector((state) => state.breads.selected);

  useEffect(() => {
    console.log(bread);
  }, []);

  const dispatch = useDispatch();

  const handlerAddItemCart = () => dispatch(addItem(bread));

  return (
    <ScrollView>

    <View style={styles.container}>
      <View style={styles.screen}>
        <View >
          <Image style={styles.img} source={bread.imagen} resizeMode="cover" />
        </View>
        <View style={styles.button}>
        {/* <Button title="Agregar al carrito" onPress={handlerAddItemCart} /> */}
          <Ionicons name="heart" size={35} color="red" onPress={handlerAddItemCart} />
        </View>

        {/* <Text style={styles.title}>{bread.name}</Text> */}
        <Text style={styles.description}>Nacionalidad: {bread.nacionalidad}</Text>
        <Text style={styles.description}>Lugar de nacimiento: {bread.lugardenacimiento}</Text>
        <Text style={styles.description}>Fecha de nacimiento: {bread.fechadenacimiento}</Text>
        <Text style={styles.description}>Edad: {bread.edad}</Text>
        <Text style={styles.description}>Posición: {bread.posicion}</Text>
        <Text style={styles.description}>Club actual: {bread.clubactual}</Text>
        <Text style={styles.price}>Trayectoria: {bread.trayectoria}</Text>

      </View>
    </View>
    </ScrollView>
  );
};

export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin:10,
    fontWeight: "bold"
  },
  img: {
    width: "100%",
    height: 250,
   
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    bottom: 50,
    margin:10,
  },
  price: {
    fontSize: 17,
    margin:10,
    bottom: 60,
  },
  button: {
    backgroundColor: Colores.gray,
    borderRadius:80,
    width:50,
    height:50,
    alignItems:"center",
    justifyContent: "center",
    left:280,
    margin: 10
  },
});
