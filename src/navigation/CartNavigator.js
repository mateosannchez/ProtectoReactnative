import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colores from "../constants/Colores";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: Colores.gray },
        headerTintColor: Colores.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center"
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Me gusta" }}
      
      />
    </Stack.Navigator>
  );
};
