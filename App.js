import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";


//This stuff is a tool called React Navigation
//use to show different screens to the user
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
