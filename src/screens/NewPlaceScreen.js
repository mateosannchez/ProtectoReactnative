import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import Colores from "../constants/Colores";
import ImageSelector from "../components/ImageSelector";
import addPlace from "../store/actions/Places.action"


const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const handleTitleChange = (text) => setTitle(text);

    const handleSave = () => {
        dispatch(addPlace(title));
        navigation.navigate("Cámara");
    };

    return (
        <ScrollView>
            <View>
                <Text>Titulo</Text>
                <TextInput
                onChangeText={handleTitleChange}
                value={title}
                />
                <ImageSelector onImage={(image) => console.log(image)}/>
                <Button
                title="Guardar"
                color={Colores.primary}
                onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label:{
        fontSize: 18,
        marginBottom: 16,
    },
    input:{
        borderBottomColor: Colores.secondary,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    }
})

export default NewPlaceScreen;