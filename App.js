import { useFonts } from "expo-font";
import MainNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./src/db/Index"


init()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((err) => {
    console.log("Database fail connect");
    console.log(err.message);
  });

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Tillana: require("./src/assets/fonts/Tillana-SemiBold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
