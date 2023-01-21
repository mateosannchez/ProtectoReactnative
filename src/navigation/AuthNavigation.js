import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colores, { COLORS } from "../constants/Colores";
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: Colores.gray },
        headerTintColor: Colores.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center"
      }}
    >
      <Stack.Screen name="Iniciar sesión" component={AuthScreen} />
    </Stack.Navigator>
  );
};
