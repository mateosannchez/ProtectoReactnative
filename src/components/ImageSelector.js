import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Colores from '../../Constantes/Colores';


const ImageSelector = () => {
    const [pickedUri, setPickedUri] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if(status != 'granted') {
            Alert.alert(
                "Permisos insuficientes",
                "Necesitas dar permiso a la camara para usar la aplicacion"
                [{text: "Ok"}]
            );
            return false;
        }
        return true
    }

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if(!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: (16, 9),
            quality: 0.8,
        });
        setPickedUri(image.uri)
        props.onImage(image.uri)
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {! pickedUri ? (<Text>No hay imagenes seleccionadas</Text>)
        : (<Image style={styles.Image} source={{uri: pickedUri}}/>) 
        }
      </View>
      <Button title='Tomar foto' 
      color={Colores.gray} 
      onPress={handleTakeImage}/>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colores.primary,
        borderWidth: 1,
    },
    Image:{
        width: "100%",
        height: "100%"
    }
})