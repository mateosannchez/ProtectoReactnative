import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colores from '../constants/Colores'


const PlaceItem = ({ title, image, address, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
        <Image style={styles.image} source={{ uri: image}}/>
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
    placeItem:{
        borderBottomColor: Colores.primary,
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colores.gray,
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: Colores.secondary,
        fontSize: 18,
        marginBottom: 8,
    },
    address:{
        color: Colores.primary,
        fontSize: 16,
    }
})