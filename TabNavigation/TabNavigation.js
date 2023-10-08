import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "../Screen/Screen1";
import Screen2 from "../Screen/Screen2";
import Screen3 from "../Screen/Screen3";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigation;
