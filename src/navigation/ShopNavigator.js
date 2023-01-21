import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import Colores from "../constants/Colores";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlaceListScreen from "../screens/PlaceListScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: Colores.gray },
        headerTintColor: Colores.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Mejores jugadores por décadas",
        }}
      />
      <Stack.Screen
        name="Mejores de la década"
        component={CategoryBreadScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={BreadDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
          name="Cámara"
          component={PlaceListScreen}
          options={({ navigation }) => ({
            title: "Cámara",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
                <Ionicons
                  name="camera"
                  color={
                    Platform.OS === "android" ? "white" : Colores.primary
                  }
                  size={23}
                />
              </TouchableOpacity>
            ),
          })}
        />
    </Stack.Navigator>
  );
};
