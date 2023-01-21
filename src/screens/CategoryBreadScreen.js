import React, { useEffect } from "react";
import { FlatList, ImageBackground, ScrollView, Animated } from "react-native";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/bread";
import img from '../../assets/Img/diego2.jpg';
import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBread, selectBread } from "../store/actions/bread.action";

const CategoryBreadScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBread);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);

  const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Details", {
      name: item.name,
      nac: item.nacionalidad,
      img: item.imagen,
    });
  };

  /* const breads = BREADS.filter(
    (bread) => bread.category === route.params.categoryID
  ); */

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    // <ScrollView style={{width: "100%", height: "100%"}}>
      <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>


        <FlatList
          data={categoryBreads}
          keyExtractor={(item) => item.id}
          renderItem={renderBreadItem}
        />



      </ImageBackground>

    
  );
};

export default connect()(CategoryBreadScreen);
