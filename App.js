import { useFonts } from "expo-font";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import RegistrationScreen from "./assets/Screens/auth/RegistrationScreen";
import LoginScreen from "./assets/Screens/auth/LoginScreen";
import CreatePostsScreen from "./assets/Screens/MainScreen/CreatePostsScreen";
import PostsScreen from "./assets/Screens/MainScreen/PostsScreen";
import ProfileScreen from "./assets/Screens/MainScreen/ProfileScreen";
import { StyleSheet, TouchableOpacity } from "react-native";
import AddButton from "./assets/components/AddButton";
import LogoutButton from "./assets/components/LogoutButton";

const App = () => {
  const [auth, setAuth] = useState(true);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  const AuthStack = createStackNavigator();
  const MainStack = createBottomTabNavigator();

  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer>
      {!auth ? (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      ) : (
        <MainStack.Navigator
          screenOptions={{
            // headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <MainStack.Screen
            name="Posts"
            component={PostsScreen}
            options={{
              title: "Публікації",
              headerRight: () => <LogoutButton />,
              tabBarIcon: () => (
                <Feather name="grid" size={24} color="#212121" />
              ),
            }}
          />
          <MainStack.Screen
            name="CreatePost"
            component={CreatePostsScreen}
            options={{
              title: "Створити публікацію",
              tabBarIcon: ({ size, color }) => <AddButton />,
            }}
          />
          <MainStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Профіль",
              tabBarIcon: () => <Feather name="user" size={24} color="black" />,
            }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  addPost: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});

export default App;
