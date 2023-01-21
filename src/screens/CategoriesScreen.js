import React from "react";
import { FlatList, ImageBackground } from "react-native";
import GridItem from "../components/GridItem";
import img from '../../assets/Img/pelota.jpg';
import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Mejores de la década", {
      name: item.title,
      name: item.imagen,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (

    <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </ImageBackground>
  );
};

export default connect()(CategoriesScreen);
